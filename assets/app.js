'use strict';
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const safeUrl = value => { try { const u = new URL(value); return u.protocol === 'https:' ? esc(u.href) : '#'; } catch { return '#'; } };
  const defaults = {view:'library',q:'',theme:'',journal:'',year:'',status:'',scope:'main',sort:'theme',page:1};
  const views = ['library','saved','map','journals','about'];
  const storageKey = 'chainlit-bookmarks-v1';
  const pageSize = 12;
  const shortThemes = {1:'货币竞争、估值与收益',2:'ICO、代币融资与平台',3:'共识、挖矿与网络安全',4:'交易费用、支付与扩容',5:'市场、衍生品与投资者',6:'DEX、自动做市与流动性',7:'稳定币、DeFi 借贷与预测',8:'智能合约、DAO 与治理',9:'信息披露、会计与审计',10:'操纵、非法活动与税收',11:'供应链、企业应用与包容',12:'NFT、艺术品与创作者',13:'综述与研究议程'};
  let data, records = [], saved = new Set(), state = {...defaults}, filtered = [], toastTimer, searchTimer, detailId;

  function readableCutoff() {
    const [year,month,day] = data.cutoff.split('-').map(Number);
    return `${year} 年 ${month} 月 ${day} 日`;
  }

  function syncCatalogueSummary() {
    const counts = {main:data.main_count,related:data.related_count,total:records.length,journals:Object.keys(data.journals).length,themes:Object.keys(data.themes).length};
    $$('[data-catalogue-count]').forEach(node => { node.textContent = counts[node.dataset.catalogueCount]; });
    $$('[data-catalogue-date]').forEach(node => {
      node.textContent = node.dataset.catalogueDate === 'dots' ? data.cutoff.replace(/-/g,'.') : readableCutoff();
      if (node.tagName === 'TIME') node.dateTime = data.cutoff;
    });
    $('meta[name="description"]').content = `在${counts.journals}本指定顶级期刊中探索区块链与加密资产研究。${counts.main}篇主目录文献、${counts.themes}个主题，支持搜索、筛选、收藏和引用导出。目录快照：${readableCutoff()}。`;
  }

  function readState() {
    const params = new URLSearchParams(location.hash.slice(1));
    const s = {...defaults};
    for (const key of Object.keys(defaults)) if (params.has(key)) s[key] = params.get(key);
    if (!views.includes(s.view)) s.view = 'library';
    if (!['main','related'].includes(s.scope)) s.scope = 'main';
    if (!['theme','old','new','title'].includes(s.sort)) s.sort = 'theme';
    if (s.theme && !Object.hasOwn(data.themes,s.theme)) s.theme = '';
    if (s.journal && !Object.hasOwn(data.journals,s.journal)) s.journal = '';
    if (s.status && !['卷期发表','在线发表','已接收'].includes(s.status)) s.status = '';
    if (s.year && !records.some(r => String(r.year ?? 'unknown') === s.year)) s.year = '';
    s.page = Math.max(1,Math.min(1000,Number.parseInt(s.page,10) || 1));
    s.q = String(s.q).slice(0,300);
    return s;
  }

  function writeState(push = false) {
    const p = new URLSearchParams({view:state.view});
    for (const [key,value] of Object.entries(state)) if (key !== 'view' && value !== defaults[key] && value !== '') p.set(key,String(value));
    const url = `${location.pathname}${location.search}#${p}`;
    if (push) history.pushState(null,'',url); else history.replaceState(null,'',url);
  }

  function change(part, {scroll = false, push = false} = {}) {
    const pendingQuery = searchTimer && ['library','saved'].includes(state.view) ? $('#search').value : state.q;
    clearTimeout(searchTimer);
    searchTimer = null;
    state = {...state,q:pendingQuery,page:1,...part};
    render();
    writeState(push);
    if (scroll) $('#catalogue').scrollIntoView({block:'start'});
  }

  function navigate(view, overrides = {}) {
    change({...defaults,view,...overrides},{push:true});
    window.scrollTo({top:0});
  }

  function getFiltered() {
    const query = state.q.trim().toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'');
    const terms = query.split(/\s+/).filter(Boolean);
    const result = records.filter(r => r.main === (state.scope === 'main') &&
      (state.view !== 'saved' || saved.has(r.id)) &&
      (!state.theme || String(r.theme_id) === state.theme) &&
      (!state.journal || r.journal === state.journal) &&
      (!state.year || String(r.year ?? 'unknown') === state.year) &&
      (!state.status || r.status === state.status) &&
      (!terms.length || terms.every(t => r._search.includes(t))));
    const chronological = (a,b) => {
      if (!a.sort_date && !b.sort_date) return a.title.localeCompare(b.title,'en');
      if (!a.sort_date) return 1;
      if (!b.sort_date) return -1;
      const date = a.sort_date.localeCompare(b.sort_date);
      if (date) return state.sort === 'new' ? -date : date;
      const online = (a.online_date || a.sort_date).localeCompare(b.online_date || b.sort_date);
      return online || a.title.localeCompare(b.title,'en');
    };
    if (state.sort === 'title') result.sort((a,b) => a.title.localeCompare(b.title,'en'));
    else result.sort((a,b) => (state.sort === 'theme' ? a.theme_id - b.theme_id : 0) || chronological(a,b));
    return result;
  }

  function status(r) {
    return `<span class="status ${r.status === '在线发表' ? 'online' : r.status === '已接收' ? 'accepted' : ''}">${esc(r.status)}</span>`;
  }

  function renderSidebar() {
    const scoped = records.filter(r => r.main === (state.scope === 'main') && (state.view !== 'saved' || saved.has(r.id)));
    $('#topic-list').innerHTML = [['','全部主题'],...Object.entries(data.themes)].map(([id,name]) => {
      const n = scoped.filter(r => !id || String(r.theme_id) === id).length;
      return `<button class="topic-button ${state.theme === id ? 'active' : ''}" data-theme="${id}" aria-pressed="${state.theme === id}" title="${esc(name)}"><span class="topic-number">${id ? String(id).padStart(2,'0') : '▦'}</span><span class="topic-name">${esc(shortThemes[id] || name)}</span><span class="topic-count">${n}</span></button>`;
    }).join('');
  }

  function paperCard(r) {
    const authors = r.authors.length > 4 ? `${r.authors.slice(0,3).join('; ')}; 等 ${r.authors.length} 位作者` : r.authors.join('; ');
    const label = saved.has(r.id) ? '取消收藏' : '收藏';
    return `<article class="paper-card" aria-labelledby="title-${r.id}"><div class="paper-year">${esc(r.year ?? '—')}<span>${r.year ? (r.date_basis === '卷期年月' ? '卷期年份' : '在线年份') : '日期未公开'}</span></div><div class="paper-body"><div class="paper-meta"><span class="journal-tag" title="${esc(r.journal_full)}">${esc(r.journal)}</span><span class="meta-divider"></span>${status(r)}<span class="paper-theme">${esc(shortThemes[r.theme_id])}</span>${!r.main ? '<span class="paper-theme">边界相关</span>' : ''}</div><button class="title-button" data-detail="${r.id}" id="title-${r.id}">${esc(r.title)}</button><p class="authors" title="${esc(r.authors.join('; '))}">${esc(authors)}</p><p class="paper-focus">${esc(r.focus)}</p><div class="paper-bottom"><a class="source-link" href="${safeUrl(r.source_url)}" target="_blank" rel="noopener noreferrer">${r.doi ? '原文 / DOI' : '接收证据'} ${icon('arrow')}</a><button class="detail-link" data-detail="${r.id}">题录详情</button><span class="paper-id">${esc(r.id)}</span></div></div><button class="icon-button bookmark ${saved.has(r.id) ? 'is-saved' : ''}" data-save="${r.id}" aria-label="${label}：${esc(r.title)}" aria-pressed="${saved.has(r.id)}" title="${label}">${icon('star')}</button></article>`;
  }

  function renderChips() {
    const labels = {q:state.q ? `搜索：${state.q}` : '',theme:data.themes[state.theme],journal:state.journal,year:state.year === 'unknown' ? '日期未公开' : state.year,status:state.status};
    $('#active-filters').innerHTML = Object.entries(labels).filter(([,v]) => v).map(([k,v]) => `<button class="filter-chip" data-remove-filter="${k}" aria-label="移除筛选：${esc(v)}">${esc(v)}${icon('close')}</button>`).join('');
  }

  function renderPagination(pages) {
    if (pages <= 1) { $('#pagination').innerHTML = ''; return; }
    const wanted = [...new Set([1,pages,state.page - 1,state.page,state.page + 1].filter(n => n >= 1 && n <= pages))].sort((a,b) => a-b);
    let html = `<button class="page-button page-prev" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''} aria-label="上一页">${icon('chevron')}</button>`;
    wanted.forEach((n,i) => {
      if (i && n - wanted[i-1] > 1) html += '<span class="page-ellipsis">…</span>';
      html += `<button class="page-button ${n === state.page ? 'active' : ''}" data-page="${n}" ${n === state.page ? 'aria-current="page"' : ''} aria-label="第 ${n} 页">${n}</button>`;
    });
    html += `<button class="page-button" data-page="${state.page + 1}" ${state.page === pages ? 'disabled' : ''} aria-label="下一页">${icon('chevron')}</button>`;
    $('#pagination').innerHTML = html;
  }

  function renderLibrary() {
    renderSidebar();
    filtered = getFiltered();
    const pages = Math.max(1,Math.ceil(filtered.length / pageSize));
    state.page = Math.min(state.page,pages);
    const start = (state.page - 1) * pageSize;
    $('#search').value = state.q;
    $('#journal-filter').value = state.journal;
    $('#year-filter').value = state.year;
    $('#status-filter').value = state.status;
    $('#sort').value = state.sort;
    const title = state.view === 'saved' ? '我的收藏' : state.theme ? shortThemes[state.theme] : state.scope === 'related' ? '边界相关文献' : '全部文献';
    $('#list-title').innerHTML = `${esc(title)}<span>${filtered.length}</span>`;
    $('#section-label').textContent = state.view === 'saved' ? 'YOUR PERSONAL READING LIST' : 'THE LITERATURE COLLECTION';
    $('#scope-main').classList.toggle('active',state.scope === 'main');
    $('#scope-related').classList.toggle('active',state.scope === 'related');
    $('#scope-main').setAttribute('aria-pressed',String(state.scope === 'main'));
    $('#scope-related').setAttribute('aria-pressed',String(state.scope === 'related'));
    renderChips();
    const from = filtered.length ? start + 1 : 0;
    const to = Math.min(start + pageSize,filtered.length);
    $('#result-summary').textContent = state.view === 'saved' ? `收藏保存在当前浏览器 · 当前筛选 ${filtered.length} 篇${filtered.length ? ` · 显示 ${from}–${to}` : ''}` : `找到 ${filtered.length} 篇文献${filtered.length ? ` · 显示 ${from}–${to}` : ''}${state.scope === 'related' ? ' · 单列，不计入主目录' : ''}`;
    $('#paper-list').innerHTML = filtered.length ? filtered.slice(start,start+pageSize).map(paperCard).join('') : `<div class="empty-state">${icon(state.view === 'saved' ? 'star' : 'search')}<h3>${state.view === 'saved' && !saved.size ? '给你的下一次阅读，留一条线索' : '暂时没有匹配的文献'}</h3><p>${state.view === 'saved' && !saved.size ? '点击论文右侧的星标，即可收藏。收藏仅保存在当前浏览器，你也可以导出题录备份。' : '试试其他关键词，或清除筛选条件。主目录与边界相关文献可分别浏览。'}</p><button class="button button-outline" data-empty-action>${state.view === 'saved' && !saved.size ? '探索文献库' : '清除筛选'}</button></div>`;
    renderPagination(pages);
  }

  function renderMap() {
    const main = records.filter(r => r.main), counts = data.theme_counts;
    const maxTheme = Math.max(...Object.values(counts));
    const years = [...new Set(main.map(r => r.year).filter(Boolean))].sort();
    const yearCounts = years.map(y => main.filter(r => r.year === y).length);
    const maxYear = Math.max(...yearCounts);
    const disciplines = [...new Set(Object.values(data.journals).map(j => j[2]))];
    $('#map-view').innerHTML = `<div class="content-title"><div><div class="section-label">A MAP OF THE RESEARCH</div><h2>从一个问题，走向一片研究</h2></div>${icon('grid')}</div><p class="view-intro">${Object.keys(data.themes).length} 个主题，${data.main_count} 篇主目录文献。沿着主题、年份与学科，发现研究之间的联系。点击图表中的主题或年份，即可进入对应目录。</p><div class="map-layout"><section class="panel"><h3>研究主题分布</h3>${Object.entries(data.themes).map(([id,name]) => `<button class="theme-bar" data-explore-theme="${id}" aria-label="浏览${esc(name)}，${counts[id]}篇"><span class="bar-label"><span>${esc(name)}</span><b>${counts[id]}</b></span><span class="bar-track"><span class="bar-fill" style="width:${counts[id]/maxTheme*100}%"></span></span></button>`).join('')}</section><div class="map-side"><section class="panel"><h3>题录年份分布</h3><div class="year-chart">${years.map((y,i) => `<button class="year-col" data-explore-year="${y}" aria-label="浏览 ${y} 年的 ${yearCounts[i]} 篇文献"><span>${yearCounts[i]}</span><span class="year-column" style="height:${yearCounts[i]/maxYear*125}px"></span><span>${String(y).slice(2)}</span></button>`).join('')}</div><p class="chart-note">${years[0]}—${years[years.length-1]} 年。以卷期年份优先，未编入卷期的采用在线年份；${main.filter(r => !r.year).length} 篇文献因日期未公开，未纳入年份统计。</p></section><section class="panel"><h3>跨越 ${disciplines.length} 个学科</h3><div class="discipline-list">${disciplines.map(d => `<div class="discipline-row"><span>${esc(d)}</span><b>${main.filter(r => r.discipline === d).length} <small style="font:10px var(--sans);color:#9aa78e">篇</small></b></div>`).join('')}</div><div class="status-breakdown">${Object.entries(data.status_counts).map(([s,n]) => `<span><b>${n}</b>${esc(s)}</span>`).join('')}</div></section></div></div>`;
  }

  function renderJournals() {
    const disciplines = [...new Set(Object.values(data.journals).map(j => j[2]))];
    $('#journals-view').innerHTML = `<div class="content-title"><div><div class="section-label">THE JOURNAL INDEX</div><h2>${Object.keys(data.journals).length} 本期刊，${disciplines.length} 个学术视角</h2></div><a href="#view=about" class="button button-outline" data-nav="about">查看收录口径 ${icon('arrow')}</a></div><p class="view-intro">严格限定原目录指定的 ${Object.keys(data.journals).length} 本主刊。数量表示本轮核验收录情况；“本轮未检出”不代表该刊绝无相关研究。点击期刊，浏览对应题录。</p>${disciplines.map(d => `<section class="journal-group"><h3>${esc(d)}</h3><div class="journal-grid">${Object.entries(data.journals).filter(([,j]) => j[2] === d).map(([key,j]) => {
      const n = records.filter(r => r.journal === key && r.main).length;
      const related = records.filter(r => r.journal === key && !r.main).length;
      const clickable = n + related > 0;
      const attrs = clickable ? `href="#view=library&journal=${encodeURIComponent(key)}&scope=${n ? 'main' : 'related'}" data-explore-journal="${esc(key)}" data-journal-scope="${n ? 'main' : 'related'}"` : '';
      return `<${clickable ? 'a' : 'div'} class="journal-card ${clickable ? '' : 'no-records'}" ${attrs}><span class="journal-short">${esc(key)}</span><h4>${esc(j[0])}</h4><p>${clickable ? `<b>${n}</b> 主目录${related ? ` · ${related} 边界相关` : ''}${icon('arrow')}` : '本轮未检出可确认文献'}</p></${clickable ? 'a' : 'div'}>`;
    }).join('')}</div></section>`).join('')}`;
  }

  function renderAbout() {
    $('#about-view').innerHTML = `<div class="content-title"><div><div class="section-label">SCOPE, SOURCES & METHODOLOGY</div><h2>每一条题录，都有来处</h2></div></div><p class="view-intro">本站将「梳理顶刊区块链论文」的原始交付整理为可检索的研究目录。内容是截至 ${readableCutoff()} 的固定快照，后续发表状态可能变化。</p><div class="about-grid"><div class="about-main">${data.method.map((text,i) => `<div class="method-item"><span class="method-number">${String(i+1).padStart(2,'0')}</span><p>${esc(text)}</p></div>`).join('')}<div class="provenance"><strong>网站整理说明</strong><p>论文标题、作者、期刊、日期、研究焦点、核验说明与来源链接均沿用原始目录。网站未对全部论文重新检索或进行全文审读；原始 Excel、阅读版及 BibTeX 可下载核对。</p><p>收藏保存在当前设备的浏览器中，不会跨设备同步。清除浏览器数据可能移除收藏，建议导出收藏题录备份。</p><p><a href="./downloads/catalogue.md" download>下载原始阅读版与逐篇核验说明 ↗</a></p><p><a href="./downloads/revisions.md" download>查看目录补漏与修订记录 ↗</a></p></div></div><aside class="panel about-aside"><h3>本次目录的边界</h3><p>${data.main_count} 篇主目录<br>${data.related_count} 篇边界相关文献，单独展示<br>${Object.keys(data.journals).length} 本指定期刊主刊</p><p>${Object.entries(data.status_counts).map(([label,n]) => `${esc(label)} ${n} 篇`).join('<br>')}</p><p>AER 与 AER: Insights 分别处理。仅有 R&R、工作论文或期刊模板，不视为期刊接收。</p><p>已接收条目的接收日期及证据层级，以各篇题录详情为准；日期未公开者不归入年份统计。</p><a href="./downloads/catalogue.xlsx" download class="button button-outline">完整 Excel ${icon('download')}</a><a href="./downloads/catalogue.bib" download class="button button-outline">完整 BibTeX ${icon('download')}</a></aside></div>`;
  }

  function render() {
    if (!data) return;
    $('#hero').hidden = state.view !== 'library';
    $('.stats').hidden = !['library','saved'].includes(state.view);
    $('#library-view').hidden = !['library','saved'].includes(state.view);
    for (const view of ['map','journals','about']) $(`#${view}-view`).hidden = state.view !== view;
    $$('[data-nav]').forEach(a => { const active = a.dataset.nav === state.view; a.classList.toggle('active',active); if (active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
    $('#saved-count').textContent = saved.size;
    document.title = `${({library:'文献库',saved:'我的收藏',map:'研究图谱',journals:'期刊索引',about:'收录说明'})[state.view]} · 链上文献`;
    if (['library','saved'].includes(state.view)) renderLibrary();
    else if (state.view === 'map') renderMap();
    else if (state.view === 'journals') renderJournals();
    else renderAbout();
  }

  function toast(message) {
    clearTimeout(toastTimer); $('#toast').textContent = message; $('#toast').hidden = false;
    toastTimer = setTimeout(() => $('#toast').hidden = true,3500);
  }

  function toggleSave(id) {
    const record = records.find(r => r.id === id); if (!record) return;
    if (saved.has(id)) saved.delete(id); else saved.add(id);
    let persisted = true;
    try { localStorage.setItem(storageKey,JSON.stringify([...saved])); } catch { persisted = false; }
    render();
    $$(`[data-save="${id}"]`).forEach(button => {
      button.classList.toggle('is-saved',saved.has(id));
      button.setAttribute('aria-pressed',String(saved.has(id)));
      button.setAttribute('aria-label',`${saved.has(id) ? '取消收藏' : '收藏'}：${record.title}`);
      const label = button.querySelector('[data-save-label]'); if (label) label.textContent = saved.has(id) ? '已收藏' : '收藏论文';
    });
    toast(saved.has(id) ? persisted ? '已加入收藏夹 · 保存在当前浏览器' : '已收藏，本次浏览有效；浏览器未允许保存到设备' : '已取消收藏');
  }

  function citation(r) {
    const year = r.year ?? '已接收，日期未公开';
    const volume = r.volume ? `, ${r.volume}${r.issue ? `(${r.issue})` : ''}${r.pages ? `: ${r.pages}` : ''}` : '';
    return `${r.authors.join('; ')} (${year}). ${r.title}. ${r.journal_full}${volume}. ${r.doi ? `https://doi.org/${r.doi}` : r.source_url}`;
  }

  function renderDetail(id) {
    const r = records.find(p => p.id === id); if (!r) return;
    detailId = id;
    const facts = [['收录主题',r.theme],['收录分类',`${r.main ? '主目录' : '边界相关'} · ${r.relevance}`],['期刊',r.journal_full],['卷期与页码',r.volume ? `${r.volume}${r.issue ? `(${r.issue})` : ''}${r.pages ? `: ${r.pages}` : ''}` : '未编入卷期'],['排序日期',r.sort_date || '日期未公开'],['日期依据',r.date_basis],['首次在线',r.online_date || '原目录未提供'],['DOI',r.doi || '尚无正式 DOI']];
    $('#paper-detail').innerHTML = `<div class="dialog-top"><span class="section-label">PAPER DETAILS / ${esc(r.id)}</span><button class="icon-button" data-close="paper-dialog" aria-label="关闭题录详情">${icon('close')}</button></div><div class="detail-meta"><span class="journal-tag">${esc(r.journal)}</span>${status(r)}${!r.main ? '<span class="paper-theme">边界相关，不计入主目录</span>' : ''}</div><h2 id="detail-title" class="detail-title">${esc(r.title)}</h2><p class="detail-authors">${esc(r.authors.join('; '))}</p><div class="detail-focus"><small>RESEARCH FOCUS / 研究焦点</small>${esc(r.focus)}</div><dl class="detail-facts">${facts.map(([k,v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl><div class="detail-evidence"><strong>来源与核验</strong><p>${esc(r.evidence)}</p>${r.verification_note ? `<p>${esc(r.verification_note)}</p>` : ''}<p>原目录核验日期：${esc(r.checked_date)}。中文研究焦点用于定位研究问题，不替代对论文的全文审读。</p>${r.supplement_url ? `<a class="source-link" href="${safeUrl(r.supplement_url)}" target="_blank" rel="noopener noreferrer">补充来源 ${icon('arrow')}</a>` : ''}</div><div class="detail-actions"><a class="button button-solid" href="${safeUrl(r.source_url)}" target="_blank" rel="noopener noreferrer">${r.doi ? '查看原文 / DOI' : '查看接收证据'} ${icon('arrow')}</a><button class="button button-outline ${saved.has(id) ? 'is-saved' : ''}" data-save="${id}" aria-pressed="${saved.has(id)}">${icon('star')}<span data-save-label>${saved.has(id) ? '已收藏' : '收藏论文'}</span></button><button class="button button-outline" data-copy="${id}">${icon('copy')}复制引用</button><button class="button button-outline" data-bib="${id}">BibTeX ${icon('download')}</button></div><p class="citation-preview" id="citation-text">${esc(citation(r))}</p>`;
    $('#paper-dialog').showModal();
  }

  async function copyCitation(id) {
    const r = records.find(p => p.id === id); if (!r) return;
    try { await navigator.clipboard.writeText(citation(r)); toast('引用已复制'); }
    catch {
      const node = $('#citation-text');
      if (node) { const range = document.createRange(); range.selectNodeContents(node); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); toast('引用已选中，可使用系统复制快捷键'); }
      else toast('当前环境不支持复制，请在题录详情中手动选中引用');
    }
  }

  function bibtex(list) {
    const latex = s => String(s ?? '').replace(/\\/g,'\\textbackslash{}').replace(/[&%_$#]/g,c => `\\${c}`);
    return list.map(r => {
      const fields = {title:r.title,author:r.authors.join(' and '),journal:r.journal_full,...(r.year ? {year:r.year} : {}),...(r.volume ? {volume:r.volume} : {}),...(r.issue ? {number:r.issue} : {}),...(r.pages ? {pages:r.pages.replace(/-/g,'--')} : {}),...(r.doi ? {doi:r.doi} : {}),url:r.source_url,note:r.status === '已接收' ? `Accepted; acceptance date not publicly available. Verified ${data.cutoff}.` : `${r.status}; catalogue verified ${data.cutoff}`};
      return `@${r.doi ? 'article' : 'unpublished'}{chainlit${r.id},\n${Object.entries(fields).map(([k,v]) => `  ${k} = {${latex(v)}}`).join(',\n')}\n}`;
    }).join('\n\n');
  }

  function download(content,type,name) {
    const blob = new Blob([content],{type}); const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = name; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url),1000);
  }

  function exportResults(format) {
    const list = getFiltered();
    if (!list.length) { toast('当前筛选没有文献可导出'); return; }
    if (format === 'bib') download(bibtex(list),'application/x-bibtex;charset=utf-8',`chainlit-${state.view === 'saved' ? 'saved' : 'filtered'}-${list.length}.bib`);
    else {
      const cell = value => { let s = String(value ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`; return `"${s.replace(/"/g,'""')}"`; };
      const header = ['编号','主目录/边界相关','主题','题名','作者','期刊','年份','日期','日期依据','发表状态','卷','期','页码','研究焦点','DOI','来源','核验说明'];
      const lines = [header,...list.map(r => [r.id,r.main ? '主目录' : '边界相关',r.theme,r.title,r.authors.join('; '),r.journal_full,r.year,r.sort_date,r.date_basis,r.status,r.volume,r.issue,r.pages,r.focus,r.doi,r.source_url,r.verification_note])];
      download('\uFEFF'+lines.map(row => row.map(cell).join(',')).join('\r\n'),'text/csv;charset=utf-8',`chainlit-${state.view === 'saved' ? 'saved' : 'filtered'}-${list.length}.csv`);
    }
    toast(`已导出 ${list.length} 篇题录`);
  }

  document.addEventListener('click',event => {
    if (!data) return;
    const target = event.target.closest('button,a'); if (!target) return;
    if (target.matches('[data-nav]')) { event.preventDefault(); navigate(target.dataset.nav); }
    else if (target.matches('[data-theme]')) change({theme:target.dataset.theme});
    else if (target.matches('[data-scope]')) change({scope:target.dataset.scope});
    else if (target.matches('[data-page]')) change({page:Number(target.dataset.page)},{scroll:true});
    else if (target.matches('[data-detail]')) renderDetail(target.dataset.detail);
    else if (target.matches('[data-save]')) toggleSave(target.dataset.save);
    else if (target.matches('[data-close]')) document.getElementById(target.dataset.close).close();
    else if (target.matches('[data-remove-filter]')) change({[target.dataset.removeFilter]:''});
    else if (target.matches('[data-explore-theme]')) navigate('library',{theme:target.dataset.exploreTheme});
    else if (target.matches('[data-explore-year]')) navigate('library',{year:target.dataset.exploreYear,sort:'old'});
    else if (target.matches('[data-explore-journal]')) { event.preventDefault(); navigate('library',{journal:target.dataset.exploreJournal,scope:target.dataset.journalScope}); }
    else if (target.matches('[data-copy]')) copyCitation(target.dataset.copy);
    else if (target.matches('[data-bib]')) { const r = records.find(p => p.id === target.dataset.bib); if (r) { download(bibtex([r]),'application/x-bibtex;charset=utf-8',`chainlit-${r.id}.bib`); toast('BibTeX 题录已导出'); } }
    else if (target.matches('[data-export]')) exportResults(target.dataset.export);
    else if (target.matches('[data-empty-action]')) { if (state.view === 'saved' && !saved.size) navigate('library'); else change({q:'',theme:'',journal:'',year:'',status:''}); }
  });

  $('#search').addEventListener('input',event => { clearTimeout(searchTimer); const q = event.target.value; searchTimer = setTimeout(() => change({q}),130); });
  for (const [selector,key] of [['#journal-filter','journal'],['#year-filter','year'],['#status-filter','status'],['#sort','sort']]) $(selector).addEventListener('change',event => change({[key]:event.target.value}));
  $('#reset').addEventListener('click',() => change({q:'',theme:'',journal:'',year:'',status:'',sort:'theme'}));
  $('#export-open').addEventListener('click',() => { if (!data) return; $('#export-description').textContent = `当前${state.view === 'saved' ? '收藏' : '筛选'}结果共 ${getFiltered().length} 篇。选择一种格式，继续你的研究。`; $('#export-dialog').showModal(); });
  for (const dialog of $$('dialog')) dialog.addEventListener('click',event => { const rect = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close(); });
  document.addEventListener('keydown',event => { if (event.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName) && !document.querySelector('dialog[open]') && ['library','saved'].includes(state.view)) { event.preventDefault(); $('#search').focus(); } });
  const restore = () => { if (!data || location.hash === '#catalogue' || location.hash === '#main') return; state = readState(); render(); };
  window.addEventListener('hashchange',restore); window.addEventListener('popstate',restore);
  window.addEventListener('storage',event => { if (event.key !== storageKey || !data) return; try { const values = JSON.parse(event.newValue || '[]'); saved = new Set(Array.isArray(values) ? values.filter(id => records.some(r => r.id === id)) : []); render(); } catch { /* Leave the current reading list intact for malformed storage. */ } });

  async function init() {
    try {
      const response = await fetch('./assets/catalogue.json',{cache:'no-cache'}); if (!response.ok) throw new Error('Catalogue unavailable');
      data = await response.json();
      records = data.records.map(r => ({...r,_search:[r.title,r.authors.join(' '),r.doi,r.focus,r.theme,r.journal,r.journal_full,r.discipline].join(' ').toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'')}));
      syncCatalogueSummary();
      try { const values = JSON.parse(localStorage.getItem(storageKey) || '[]'); saved = new Set(Array.isArray(values) ? values.filter(id => records.some(r => r.id === id)) : []); } catch { saved = new Set(); }
      $('#journal-filter').innerHTML += Object.entries(data.journals).map(([key,j]) => `<option value="${esc(key)}">${esc(key)} · ${esc(j[2])}</option>`).join('');
      $('#year-filter').innerHTML += [...new Set(records.map(r => r.year).filter(Boolean))].sort((a,b) => b-a).map(y => `<option value="${y}">${y} 年</option>`).join('')+'<option value="unknown">日期未公开</option>';
      state = readState(); render();
    } catch {
      $('#paper-list').innerHTML = '<div class="empty-state"><h3>文献目录暂时未能载入</h3><p>请刷新页面重试，或下载原始目录继续阅读。</p><a class="button button-outline" href="./downloads/catalogue.md">下载阅读版目录</a></div>';
      $('#result-summary').textContent = '目录载入失败';
    }
  }
  init();
})();

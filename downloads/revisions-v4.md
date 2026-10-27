# 用户表格逐条核查记录 v4

核验截止日：**2026-10-27**。输入为用户提供的 `crypto_top_journals_papers.xlsx`。原文件保持不变，核查工作簿保留原始十列并在右侧追加判定、目录编号、核验年份、完整作者、来源及说明。

**结论：此前确实遗漏了 2 条应纳入主目录的文献，另漏列 1 篇边界相关理论。** 其中一条主目录文献是 Guest Editorial，已标为“社论”，没有当作原创研究论文。

## 对照结果

| 类别 | 条数 | 说明 |
|---|---:|---|
| 此前已在主目录 | 147 | DOI 一致 |
| 此前已在边界相关部分 | 3 | DOI 一致 |
| 本轮确认遗漏，补入主目录 | 2 | Management Science 二次投票论文；MISQ 的 DAO 主题社论 |
| 本轮确认遗漏，补入边界相关 | 1 | Management Science 二次融资论文 |
| 范围差异，未纳入 | 12 | CBDC／一般数字支付；延续此前已声明的排除范围 |
| 原 19 刊之外 | 2 | AER: Insights，不是 AER 主刊 |
| 合计 | 167 | 165 条属于原 19 刊；未发现重复 DOI |

表格涉及原 19 刊中的 14 刊，并未覆盖全部 19 刊。167 与既有总目录的数量不能直接相减解释为遗漏。

## 确认遗漏及补入方式

### 智能合约、DAO、社区与制度治理

以下按正式卷期从旧到新排列，新增编号用于保留版本可追踪性。

| 原表行号 | 新编号与处理 | 完整文献 | 核验依据 |
|---|---|---|---|
| 99 | R11；补入边界相关 | Vitalik Buterin; Zoë Hitzig; E. Glen Weyl（2019），**[A Flexible Design for Funding Public Goods](https://pubsonline.informs.org/doi/10.1287/mnsc.2019.3337)**，Management Science 65(11): 5171-5187 | v4 根据用户表格第 99 行补入边界相关。出版方确认 2019 年 65(11):5171-5187，首次在线 2019-07-02，接收 2019-02-26。公开作者稿第 5.2 节讨论区块链社区中的合谋问题，但主体为一般公共品二次融资机制，故单列相关理论；未仅因首作者与 Ethereum 的关系而计为加密资产原创研究。 |
| 137 | P167；补入主目录 | Ola Henfridsson; Bendik Bygstad（2024），**[Time for a Decentralization Journey of Digital Infrastructures? Reflections on the 2023 Impact Award](https://aisel.aisnet.org/misq/vol48/iss4/5/)**，MISQ 48(4): ix-xiv | v4 根据用户表格第 137 行确认遗漏。MISQ/AIS 正式目录确认 2024 年 48(4):ix-xiv，作者为 Ola Henfridsson 与 Bendik Bygstad；用户表与 Crossref 均漏列第二作者，按期刊正式署名补齐。作者公开上传稿明确讨论 Web3、区块链、智能合约、DAO 及 MakerDAO/DAI。此文为 Guest Editorial，单独标为社论，不当作原创实证或理论研究。 |
| 103 | P168；补入主目录 | Alon Benhaim; Brett Hemenway Falk; Gerry Tsoukalas（2026），**[Balancing Power in Decentralized Governance: Quadratic Voting and Information Aggregation](https://pubsonline.informs.org/doi/10.1287/mnsc.2024.08469)**，Management Science 72(6): 4597-4609 | v4 根据用户表格第 103 行确认此前遗漏。出版方确认 72(6):4597-4609，正式卷期 2026-06，首次在线 2025-11-03，接收 2025-06-08。作者公开稿将 blockchain、dApps 列为关键词；属于去中心化治理的投票机制研究。原题名及摘要的通用表述未触发首轮关键词筛选。 |

MISQ 的正式署名与卷期页码采用[期刊 AIS 目录](https://aisel.aisnet.org/misq/vol48/iss4/5/)。已核对[作者公开上传稿](https://www.researchgate.net/publication/390250159_Time_for_a_Decentralization_Journey_of_Digital_Infrastructures_Reflections_on_the_2023_Impact_Award_1)关于 Web3、DAO 与 MakerDAO/DAI 的相关内容；未用该稿尚未定稿的页码替代正式页码。二次投票论文的发表记录采用 INFORMS，研究联系另由[作者公开稿关键词](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4416748)确认；二次融资的区块链社区联系见[公开作者稿第 5.2 节](https://arxiv.org/html/1809.06421)。

此前检索的弱点在于依赖题名和可得摘要：二次投票摘要使用一般治理模型术语，MISQ 社论的 Crossref 记录没有摘要。用户表格提供了有效的补漏线索；本轮没有把表中的一句话摘要直接当作发表证据。

## 原表需要更正的题录

| 原表位置 | 原值 | 核验后 | 依据 |
|---|---|---|---|
| A121 | 2026 | **2025** | Statistical Error Bounds…，Mathematical Finance **35(4)**，760–778；[Wiley 2025 年卷期](https://onlinelibrary.wiley.com/toc/14679965/2025/35/4) |
| A129 | 2022 | **2021** | Stability of Transaction Fees in Bitcoin…，MISQ **45(2)**；[期刊记录](https://aisel.aisnet.org/misq/vol45/iss2/5/) |
| A165 | 2026 | **2023** | A Primer on Perpetuals，SIAM JFM **14(1)**，SC17–SC30；[期刊记录](https://epubs.siam.org/doi/abs/10.1137/22M1520931) |
| E137 | Henfridsson | **Ola Henfridsson；Bendik Bygstad** | 原表与 Crossref 都漏列第二作者，采用[期刊正式署名](https://aisel.aisnet.org/misq/vol48/iss4/5/) |

这些错误在核查工作簿右侧标出；原始单元格保留，便于对照。其余已匹配记录的缩写作者均能对应现有完整作者，卷期页码未发现实质差异；OR 第 141 行仅多注明在线日期。

## 未纳入的 12 条：范围差异

这些论文确实发表在原 19 刊中，未纳入的原因是研究主题范围；这与“没有找到论文”不同。若将范围扩展到全部 CBDC 和一般数字支付，应另行纳入，但不混入本轮既定的区块链／加密资产主目录。

| 原表行号 | 年份 | 期刊与论文 | 处理依据 |
|---|---|---|---|
| 23 | 2024 | Journal of Finance：[ Money and Banking with Reserves and CBDC ](https://doi.org/10.1111/jofi.13357) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 36 | 2025 | Journal of Financial Economics：[ Bank competition and household privacy in a digital payment monopoly ](https://doi.org/10.1016/j.jfineco.2025.104019) | 一般支付数据垄断、隐私与银行竞争模型，未核验到以区块链或加密资产为实质研究对象的依据；延续原范围排除。 |
| 45 | 2022 | Journal of Monetary Economics：[ Central bank digital currency in an open economy ](https://doi.org/10.1016/j.jmoneco.2022.02.001) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 46 | 2022 | Journal of Monetary Economics：[ Designing central bank digital currencies ](https://doi.org/10.1016/j.jmoneco.2021.05.002) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 47 | 2023 | Journal of Monetary Economics：[ Predicting the demand for central bank digital currency: A structural analysis with survey data ](https://doi.org/10.1016/j.jmoneco.2022.11.007) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 48 | 2024 | Journal of Monetary Economics：[ Central bank digital currency: When price and bank stability collide ](https://doi.org/10.1016/j.jmoneco.2024.01.007) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 49 | 2025 | Journal of Monetary Economics：[ CBDC and the operational framework of monetary policy ](https://doi.org/10.1016/j.jmoneco.2025.103762) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 51 | 2023 | Journal of Political Economy：[ Bank Market Power and Central Bank Digital Currency: Theory and Quantitative Assessment ](https://doi.org/10.1086/722517) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 95 | 2023 | Management Science：[ Central Bank Digital Currency and Banking: Macroeconomic Benefits of a Cash-Like Design ](https://doi.org/10.1287/mnsc.2021.02763) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 97 | 2026 | Management Science：[ A Theory Model of Digital Currency with Asymmetric Privacy ](https://doi.org/10.1287/mnsc.2024.06830) | CBDC／一般数字货币的非对称隐私设计，使用密码学工具不等于研究区块链或加密资产；延续原范围排除。 |
| 98 | 2026 | Management Science：[ The Adoption of Central Bank Digital Currency ](https://doi.org/10.1287/mnsc.2023.01504) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 145 | 2023 | Review of Economic Studies：[ Should Central Banks Issue Digital Currency? ](https://doi.org/10.1093/restud/rdac017) | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |

## 19 刊之外的 2 条

| 原表行号 | 论文 | 原因 |
|---|---|---|
| 2 | [Bitcoin: An Axiomatic Approach and an Impossibility Theorem](https://doi.org/10.1257/aeri.20190494) | AER: Insights 与 American Economic Review 主刊是不同期刊，不在原 19 刊范围。 |
| 3 | [On the Programmability and Uniformity of Digital Currencies](https://doi.org/10.1257/aeri.20250119) | AER: Insights 与 American Economic Review 主刊是不同期刊，不在原 19 刊范围。 |

## 核验与总目录更新

对 17 条最初未匹配的记录及 3 处年份差异，共 **20 个 DOI** 重新查询出版元数据，20 个均成功返回；其他 150 条按 DOI 与 v3 目录逐一比对。发表元数据与主题收录判断分别核验，作者信息以期刊正式署名优先。

总目录由主目录 **166**、边界相关 **10** 更新为主目录 **168**、边界相关 **11**，合计 **179** 条。旧版 176 条记录及编号保留；新增 P168、P167 与 R11。完整目录、Excel、BibTeX 同步更新。

## 全部 167 行对照索引

| 原表行号 | 原表期刊 | 题名 | 与 v3 的比对及处理 | v4 编号 | 说明 |
|---|---|---|---|---|
| 2 | AER: Insights | [Bitcoin: An Axiomatic Approach and an Impossibility Theorem](https://doi.org/10.1257/aeri.20190494) | 期刊范围外 |  | AER: Insights 与 American Economic Review 主刊是不同期刊，不在原 19 刊范围。 |
| 3 | AER: Insights | [On the Programmability and Uniformity of Digital Currencies](https://doi.org/10.1257/aeri.20250119) | 期刊范围外 |  | AER: Insights 与 American Economic Review 主刊是不同期刊，不在原 19 刊范围。 |
| 4 | American Economic Review | [Smart Contracts and the Coase Conjecture](https://doi.org/10.1257/aer.20220357) | 此前已收录—边界相关 | R03 | DOI 已存在于 v3 目录。 |
| 5 | Information Systems Research | [The Interplay of Opinions and Behavior in Social Trading: The Dynamics of Early Cryptocurrency Adoption](https://doi.org/10.1287/isre.2024.1300) | 此前已收录—主目录 | P080 | DOI 已存在于 v3 目录。 |
| 6 | Information Systems Research | [Overcoming the Coordination Problem in New Marketplaces via Cryptographic Tokens](https://doi.org/10.1287/isre.2022.1157) | 此前已收录—主目录 | P025 | DOI 已存在于 v3 目录。 |
| 7 | Information Systems Research | [Operation Dumbo Drop: To Airdrop or Not to Airdrop for Initial Coin Offering Success?](https://doi.org/10.1287/isre.2021.0450) | 此前已收录—主目录 | P034 | DOI 已存在于 v3 目录。 |
| 8 | Information Systems Research | [Development Trajectory of Blockchain Platforms: The Role of Multirole](https://doi.org/10.1287/isre.2022.0243) | 此前已收录—主目录 | P110 | DOI 已存在于 v3 目录。 |
| 9 | Information Systems Research | [The Differential Diffusion of Exchange and Utility Value Blockchain Tokens](https://doi.org/10.1287/isre.2022.0711) | 此前已收录—主目录 | P037 | DOI 已存在于 v3 目录。 |
| 10 | Information Systems Research | [Token Incentive and Blockchain Developer Contribution](https://doi.org/10.1287/isre.2023.0480) | 此前已收录—主目录 | P117 | DOI 已存在于 v3 目录。 |
| 11 | Information Systems Research | [Explaining Sustained Blockchain Decentralization with Quasi-Experiments: The Resource Flexibility of Consensus Mechanisms](https://doi.org/10.1287/isre.2024.1198) | 此前已收录—主目录 | P056 | DOI 已存在于 v3 目录。 |
| 12 | Information Systems Research | [And No One Gets the Short End of the Stick: A Blockchain-Based Approach to Solving the Two-Sided Opportunism Problem in Interorganizational Information Sharing](https://doi.org/10.1287/isre.2022.0065) | 此前已收录—主目录 | P151 | DOI 已存在于 v3 目录。 |
| 13 | Information Systems Research | [Unveiling the Impact of Delegated Voting on Decentralized Autonomous Organizations](https://doi.org/10.1287/isre.2024.1718) | 此前已收录—主目录 | P120 | DOI 已存在于 v3 目录。 |
| 14 | Information Systems Research | [Resale Royalty in Non-Fungible Token Marketplaces: Blessing or Burden for Creators and Platforms?](https://doi.org/10.1287/isre.2023.0035) | 此前已收录—主目录 | P155 | DOI 已存在于 v3 目录。 |
| 15 | Information Systems Research | [The Market Consequences of Perceived Strategic Generosity: An Empirical Examination of NFT Charity Fundraisers](https://doi.org/10.1287/isre.2024.1004) | 此前已收录—主目录 | P157 | DOI 已存在于 v3 目录。 |
| 16 | Information Systems Research | [NFT Disruption in Platform Competition: Evidence from Trading Card Collectibles](https://doi.org/10.1287/isre.2024.0829) | 此前已收录—主目录 | P159 | DOI 已存在于 v3 目录。 |
| 17 | Journal of Finance | [Common Risk Factors in Cryptocurrency](https://doi.org/10.1111/jofi.13119) | 此前已收录—主目录 | P007 | DOI 已存在于 v3 目录。 |
| 18 | Journal of Finance | [Equilibrium Bitcoin Pricing](https://doi.org/10.1111/jofi.13206) | 此前已收录—主目录 | P008 | DOI 已存在于 v3 目录。 |
| 19 | Journal of Finance | [Decentralization through Tokenization](https://doi.org/10.1111/jofi.13192) | 此前已收录—主目录 | P026 | DOI 已存在于 v3 目录。 |
| 20 | Journal of Finance | [Utility Tokens as a Commitment to Competition](https://doi.org/10.1111/jofi.13389) | 此前已收录—主目录 | P033 | DOI 已存在于 v3 目录。 |
| 21 | Journal of Finance | [Decentralized Exchange: The Uniswap Automated Market Maker](https://doi.org/10.1111/jofi.13405) | 此前已收录—主目录 | P086 | DOI 已存在于 v3 目录。 |
| 22 | Journal of Finance | [Is Bitcoin Really Untethered?](https://doi.org/10.1111/jofi.12903) | 此前已收录—主目录 | P134 | DOI 已存在于 v3 目录。 |
| 23 | Journal of Finance | [Money and Banking with Reserves and CBDC](https://doi.org/10.1111/jofi.13357) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 24 | Journal of Financial Economics | [Are Cryptos Different? Evidence from Retail Trading](https://doi.org/10.1016/j.jfineco.2024.103897) | 此前已收录—主目录 | P073 | DOI 已存在于 v3 目录。 |
| 25 | Journal of Financial Economics | [From Mining to Markets: The Evolution of Bitcoin Transaction Fees](https://doi.org/10.1016/j.jfineco.2019.03.004) | 此前已收录—主目录 | P057 | DOI 已存在于 v3 目录。 |
| 26 | Journal of Financial Economics | [Trading and Arbitrage in Cryptocurrency Markets](https://doi.org/10.1016/j.jfineco.2019.07.001) | 此前已收录—主目录 | P068 | DOI 已存在于 v3 目录。 |
| 27 | Journal of Financial Economics | [Optimal Financing with Tokens](https://doi.org/10.1016/j.jfineco.2021.05.004) | 此前已收录—主目录 | P019 | DOI 已存在于 v3 目录。 |
| 28 | Journal of Financial Economics | [Token-Based Platform Finance](https://doi.org/10.1016/j.jfineco.2021.10.002) | 此前已收录—主目录 | P021 | DOI 已存在于 v3 目录。 |
| 29 | Journal of Financial Economics | [Product Market Competition with Crypto Tokens and Smart Contracts](https://doi.org/10.1016/j.jfineco.2023.04.011) | 此前已收录—主目录 | P028 | DOI 已存在于 v3 目录。 |
| 30 | Journal of Financial Economics | [Token-Based Platform Governance](https://doi.org/10.1016/j.jfineco.2024.103951) | 此前已收录—主目录 | P111 | DOI 已存在于 v3 目录。 |
| 31 | Journal of Financial Economics | [Bitcoin's Limited Adoption Problem](https://doi.org/10.1016/j.jfineco.2022.01.003) | 此前已收录—主目录 | P061 | DOI 已存在于 v3 目录。 |
| 32 | Journal of Financial Economics | [Distributed Ledgers and the Governance of Money](https://doi.org/10.1016/j.jfineco.2025.104026) | 此前已收录—主目录 | P114 | DOI 已存在于 v3 目录。 |
| 33 | Journal of Financial Economics | [Maximal Extractable Value and Allocative Inefficiencies in Public Blockchains](https://doi.org/10.1016/j.jfineco.2025.104132) | 此前已收录—主目录 | P088 | DOI 已存在于 v3 目录。 |
| 34 | Journal of Financial Economics | [Anatomy of a Run: The Terra Luna Crash](https://doi.org/10.1016/j.jfineco.2026.104359) | 此前已收录—主目录 | P166 | DOI 已存在于 v3 目录。 |
| 35 | Journal of Financial Economics | [Strategic Digitization in Currency and Payment Competition](https://doi.org/10.1016/j.jfineco.2025.104055) | 此前已收录—主目录 | P011 | DOI 已存在于 v3 目录。 |
| 36 | Journal of Financial Economics | [Bank Competition and Household Privacy in a Digital Payment Monopoly](https://doi.org/10.1016/j.jfineco.2025.104019) | 范围差异—CBDC/一般数字支付 |  | 一般支付数据垄断、隐私与银行竞争模型，未核验到以区块链或加密资产为实质研究对象的依据；延续原范围排除。 |
| 37 | Journal of Financial Economics | [Payments and Privacy in the Digital Economy](https://doi.org/10.1016/j.jfineco.2025.104050) | 此前已收录—边界相关 | R10 | DOI 已存在于 v3 目录。 |
| 38 | Journal of Financial Economics | [Ransomware Activity and Blockchain Congestion](https://doi.org/10.1016/j.jfineco.2021.04.015) | 此前已收录—主目录 | P059 | DOI 已存在于 v3 目录。 |
| 39 | Journal of Monetary Economics | [Some Simple Bitcoin Economics](https://doi.org/10.1016/j.jmoneco.2019.07.002) | 此前已收录—主目录 | P002 | DOI 已存在于 v3 目录。 |
| 40 | Journal of Monetary Economics | [All that Glitters: A Theory of Multiple Bubbles with Implications for Cryptocurrencies](https://doi.org/10.1016/j.jmoneco.2025.103764) | 此前已收录—主目录 | P010 | DOI 已存在于 v3 目录。 |
| 41 | Journal of Monetary Economics | [Price Manipulation in the Bitcoin Ecosystem](https://doi.org/10.1016/j.jmoneco.2017.12.004) | 此前已收录—主目录 | P132 | DOI 已存在于 v3 目录。 |
| 42 | Journal of Monetary Economics | [Tokenomics: Optimal Monetary and Fee Policies](https://doi.org/10.1016/j.jmoneco.2025.103808) | 此前已收录—主目录 | P012 | DOI 已存在于 v3 目录。 |
| 43 | Journal of Monetary Economics | [On the Equivalence of Private and Public Money](https://doi.org/10.1016/j.jmoneco.2019.07.004) | 此前已收录—边界相关 | R08 | DOI 已存在于 v3 目录。 |
| 44 | Journal of Monetary Economics | [Can Currency Competition Work?](https://doi.org/10.1016/j.jmoneco.2019.07.003) | 此前已收录—主目录 | P001 | DOI 已存在于 v3 目录。 |
| 45 | Journal of Monetary Economics | [Central Bank Digital Currency in an Open Economy](https://doi.org/10.1016/j.jmoneco.2022.02.001) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 46 | Journal of Monetary Economics | [Designing Central Bank Digital Currencies](https://doi.org/10.1016/j.jmoneco.2021.05.002) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 47 | Journal of Monetary Economics | [Predicting the Demand for Central Bank Digital Currency: A Structural Analysis with Survey Data](https://doi.org/10.1016/j.jmoneco.2022.11.007) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 48 | Journal of Monetary Economics | [Central Bank Digital Currency: When Price and Bank Stability Collide](https://doi.org/10.1016/j.jmoneco.2024.01.007) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 49 | Journal of Monetary Economics | [CBDC and the Operational Framework of Monetary Policy](https://doi.org/10.1016/j.jmoneco.2025.103762) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 50 | Journal of Political Economy | [An Equilibrium Model of the Market for Bitcoin Mining](https://doi.org/10.1086/714445) | 此前已收录—主目录 | P042 | DOI 已存在于 v3 目录。 |
| 51 | Journal of Political Economy | [Bank Market Power and Central Bank Digital Currency: Theory and Quantitative Assessment](https://doi.org/10.1086/722517) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 52 | Management Science | [The Impact of Derivatives on Spot Markets: Evidence from the Introduction of Bitcoin Futures Contracts](https://doi.org/10.1287/mnsc.2023.4900) | 此前已收录—主目录 | P071 | DOI 已存在于 v3 目录。 |
| 53 | Management Science | [Uncovering Retail Trading in Bitcoin: The Impact of COVID-19 Stimulus Checks](https://doi.org/10.1287/mnsc.2023.4790) | 此前已收录—主目录 | P072 | DOI 已存在于 v3 目录。 |
| 54 | Management Science | [Does Mining Fuel Bubbles? An Experimental Study on Cryptocurrency Markets](https://doi.org/10.1287/mnsc.2022.01238) | 此前已收录—主目录 | P074 | DOI 已存在于 v3 目录。 |
| 55 | Management Science | [Crypto Value, Factor Pricing, and Market Segmentation](https://doi.org/10.1287/mnsc.2024.05875) | 此前已收录—主目录 | P014 | DOI 已存在于 v3 目录。 |
| 56 | Management Science | [Crypto Carry](https://doi.org/10.1287/mnsc.2024.05069) | 此前已收录—主目录 | P078 | DOI 已存在于 v3 目录。 |
| 57 | Management Science | [Aggregate Confusion in Crypto Market Data](https://doi.org/10.1287/mnsc.2025.00611) | 此前已收录—主目录 | P081 | DOI 已存在于 v3 目录。 |
| 58 | Management Science | [Crypto Wash Trading](https://doi.org/10.1287/mnsc.2021.02709) | 此前已收录—主目录 | P137 | DOI 已存在于 v3 目录。 |
| 59 | Management Science | [Direct Evidence of Bitcoin Wash Trading](https://doi.org/10.1287/mnsc.2021.01448) | 此前已收录—主目录 | P139 | DOI 已存在于 v3 目录。 |
| 60 | Management Science | [Trading Volume Manipulation and Competition Among Centralized Crypto Exchanges](https://doi.org/10.1287/mnsc.2021.02903) | 此前已收录—主目录 | P141 | DOI 已存在于 v3 目录。 |
| 61 | Management Science | [On the Quality of Cryptocurrency Markets: Centralized vs. Decentralized Exchanges](https://doi.org/10.1287/mnsc.2024.07703) | 此前已收录—主目录 | P076 | DOI 已存在于 v3 目录。 |
| 62 | Management Science | [A Theory of ICOs: Diversification, Agency, and Information Asymmetry](https://doi.org/10.1287/mnsc.2020.3754) | 此前已收录—主目录 | P018 | DOI 已存在于 v3 目录。 |
| 63 | Management Science | [Initial Coin Offerings, Speculation, and Asset Tokenization](https://doi.org/10.1287/mnsc.2020.3796) | 此前已收录—主目录 | P017 | DOI 已存在于 v3 目录。 |
| 64 | Management Science | [Platform Tokenization: Financing, Governance, and Moral Hazard](https://doi.org/10.1287/mnsc.2021.4225) | 此前已收录—主目录 | P022 | DOI 已存在于 v3 目录。 |
| 65 | Management Science | [Initial Coin Offering (ICO) Success and Post-ICO Performance](https://doi.org/10.1287/mnsc.2022.4312) | 此前已收录—主目录 | P024 | DOI 已存在于 v3 目录。 |
| 66 | Management Science | [An Examination of Velocity and Initial Coin Offerings](https://doi.org/10.1287/mnsc.2022.4314) | 此前已收录—主目录 | P023 | DOI 已存在于 v3 目录。 |
| 67 | Management Science | [A Model of Cryptocurrencies](https://doi.org/10.1287/mnsc.2023.4756) | 此前已收录—主目录 | P009 | DOI 已存在于 v3 目录。 |
| 68 | Management Science | [Tokenomics: When Tokens Beat Equity](https://doi.org/10.1287/mnsc.2023.4882) | 此前已收录—主目录 | P031 | DOI 已存在于 v3 目录。 |
| 69 | Management Science | [Utility Tokens, Network Effects, and Pricing Power](https://doi.org/10.1287/mnsc.2023.4917) | 此前已收录—主目录 | P032 | DOI 已存在于 v3 目录。 |
| 70 | Management Science | [Decentralized Platforms: Governance, Tokenomics, and ICO Design](https://doi.org/10.1287/mnsc.2021.02076) | 此前已收录—主目录 | P030 | DOI 已存在于 v3 目录。 |
| 71 | Management Science | [De-Crypto-ing Signals in Initial Coin Offerings: Evidence of Rational Token Retention](https://doi.org/10.1287/mnsc.2022.4631) | 此前已收录—主目录 | P029 | DOI 已存在于 v3 目录。 |
| 72 | Management Science | [Conflicted Analysts and Initial Coin Offerings](https://doi.org/10.1287/mnsc.2021.02928) | 此前已收录—主目录 | P123 | DOI 已存在于 v3 目录。 |
| 73 | Management Science | [Fundamental Pricing of Utility Tokens](https://doi.org/10.1287/mnsc.2023.00566) | 此前已收录—主目录 | P013 | DOI 已存在于 v3 目录。 |
| 74 | Management Science | [Evolution of Shares in a Proof-of-Stake Cryptocurrency](https://doi.org/10.1287/mnsc.2020.3791) | 此前已收录—主目录 | P039 | DOI 已存在于 v3 目录。 |
| 75 | Management Science | [Bitcoin: A Natural Oligopoly](https://doi.org/10.1287/mnsc.2021.4095) | 此前已收录—主目录 | P044 | DOI 已存在于 v3 目录。 |
| 76 | Management Science | [Why Bitcoin Will Fail to Scale?](https://doi.org/10.1287/mnsc.2021.4271) | 此前已收录—主目录 | P062 | DOI 已存在于 v3 目录。 |
| 77 | Management Science | [Proof-of-Work Cryptocurrencies: Does Mining Technology Undermine Decentralization?](https://doi.org/10.1287/mnsc.2023.4840) | 此前已收录—主目录 | P046 | DOI 已存在于 v3 目录。 |
| 78 | Management Science | [Why Fixed Costs Matter for Proof-of-Work–Based Cryptocurrencies](https://doi.org/10.1287/mnsc.2023.4901) | 此前已收录—主目录 | P048 | DOI 已存在于 v3 目录。 |
| 79 | Management Science | [StableFees: A Predictable Fee Market for Cryptocurrencies](https://doi.org/10.1287/mnsc.2023.4735) | 此前已收录—主目录 | P063 | DOI 已存在于 v3 目录。 |
| 80 | Management Science | [Scaling Blockchains: Can Committee-Based Consensus Help?](https://doi.org/10.1287/mnsc.2022.03177) | 此前已收录—主目录 | P047 | DOI 已存在于 v3 目录。 |
| 81 | Management Science | [Commitment Against Front-Running Attacks](https://doi.org/10.1287/mnsc.2023.01239) | 此前已收录—主目录 | P084 | DOI 已存在于 v3 目录。 |
| 82 | Management Science | ["Zero Cost" Majority Attacks on Permissionless Proof of Work Blockchains](https://doi.org/10.1287/mnsc.2023.02426) | 此前已收录—主目录 | P051 | DOI 已存在于 v3 目录。 |
| 83 | Management Science | [A Mean Field Games Model for Cryptocurrency Mining](https://doi.org/10.1287/mnsc.2023.4798) | 此前已收录—主目录 | P050 | DOI 已存在于 v3 目录。 |
| 84 | Management Science | [Demand-Side Effects of Open Innovation: The Case of Cryptocurrency Forking](https://doi.org/10.1287/mnsc.2021.03132) | 此前已收录—主目录 | P115 | DOI 已存在于 v3 目录。 |
| 85 | Management Science | [Scaling Smart Contracts via Layer-2 Technologies: Some Empirical Evidence](https://doi.org/10.1287/mnsc.2023.00281) | 此前已收录—主目录 | P064 | DOI 已存在于 v3 目录。 |
| 86 | Management Science | [Economics of Permissioned Blockchain Adoption](https://doi.org/10.1287/mnsc.2022.4532) | 此前已收录—主目录 | P146 | DOI 已存在于 v3 目录。 |
| 87 | Management Science | [Lightning Network Economics: Channels](https://doi.org/10.1287/mnsc.2022.01664) | 此前已收录—主目录 | P065 | DOI 已存在于 v3 目录。 |
| 88 | Management Science | [Lightning Network Economics: Topology](https://doi.org/10.1287/mnsc.2023.03872) | 此前已收录—主目录 | P067 | DOI 已存在于 v3 目录。 |
| 89 | Management Science | [Distributed Ledgers and Secure Multiparty Computation for Financial Reporting and Auditing](https://doi.org/10.1287/mnsc.2023.02577) | 此前已收录—主目录 | P126 | DOI 已存在于 v3 目录。 |
| 90 | Management Science | [The Conceptual Flaws of Decentralized Automated Market Making](https://doi.org/10.1287/mnsc.2021.02802) | 此前已收录—主目录 | P083 | DOI 已存在于 v3 目录。 |
| 91 | Management Science | [The Need for Fees at a DEX: How Increases in Fees Can Increase DEX Trading Volume](https://doi.org/10.1287/mnsc.2023.00726) | 此前已收录—主目录 | P095 | DOI 已存在于 v3 目录。 |
| 92 | Management Science | [The Role of Auditor Reputation in an Emerging Audit Marketplace: Evidence from Decentralized Finance (DeFi)](https://doi.org/10.1287/mnsc.2023.02245) | 此前已收录—主目录 | P129 | DOI 已存在于 v3 目录。 |
| 93 | Management Science | [An Economic Model of a Decentralized Exchange with Concentrated Liquidity](https://doi.org/10.1287/mnsc.2024.04510) | 此前已收录—主目录 | P091 | DOI 已存在于 v3 目录。 |
| 94 | Management Science | [Can Stablecoins Be Stable?](https://doi.org/10.1287/mnsc.2024.06992) | 此前已收录—主目录 | P099 | DOI 已存在于 v3 目录。 |
| 95 | Management Science | [Central Bank Digital Currency and Banking: Macroeconomic Benefits of a Cash-Like Design](https://doi.org/10.1287/mnsc.2021.02763) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 96 | Management Science | [Money Creation for Crypto Space: Stablecoins or Central Bank Digital Currencies?](https://doi.org/10.1287/mnsc.2024.08420) | 此前已收录—主目录 | P102 | DOI 已存在于 v3 目录。 |
| 97 | Management Science | [A Theory Model of Digital Currency with Asymmetric Privacy](https://doi.org/10.1287/mnsc.2024.06830) | 范围差异—CBDC/一般数字支付 |  | CBDC／一般数字货币的非对称隐私设计，使用密码学工具不等于研究区块链或加密资产；延续原范围排除。 |
| 98 | Management Science | [The Adoption of Central Bank Digital Currency](https://doi.org/10.1287/mnsc.2023.01504) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 99 | Management Science | [A Flexible Design for Funding Public Goods](https://pubsonline.informs.org/doi/10.1287/mnsc.2019.3337) | 确认遗漏—补入边界相关 | R11 | 正式卷期年 2019；首次在线 2019-07-02。不能仅因作者身份而纳入；依据是论文公开稿对区块链社区应用的讨论。 |
| 100 | Management Science | [Token-Weighted Crowdsourcing](https://doi.org/10.1287/mnsc.2019.3515) | 此前已收录—主目录 | P016 | DOI 已存在于 v3 目录。 |
| 101 | Management Science | [Voting with Time Commitment for Decentralized Governance: Bond Voting as a Sybil-Resistant Mechanism](https://doi.org/10.1287/mnsc.2023.01536) | 此前已收录—主目录 | P112 | DOI 已存在于 v3 目录。 |
| 102 | Management Science | [Decentralized Autonomous Organization Governance](https://doi.org/10.1287/mnsc.2024.07033) | 此前已收录—主目录 | P119 | DOI 已存在于 v3 目录。 |
| 103 | Management Science | [Balancing Power in Decentralized Governance: Quadratic Voting and Information Aggregation](https://pubsonline.informs.org/doi/10.1287/mnsc.2024.08469) | 确认遗漏—补入主目录 | P168 | 卷期年为 2026；首次在线 2025-11-03。作者公开稿关键词含 blockchain、dApps；未声称完整审读其数学证明。 |
| 104 | Management Science | [Fractional Equity, Blockchain, and the Future of Creative Work](https://doi.org/10.1287/mnsc.2020.3633) | 此前已收录—主目录 | P154 | DOI 已存在于 v3 目录。 |
| 105 | Management Science | [From Canvas to Blockchain: Impact of Royalties on Art Market Efficiency](https://doi.org/10.1287/mnsc.2023.03810) | 此前已收录—主目录 | P158 | DOI 已存在于 v3 目录。 |
| 106 | Management Science | [Chasing Market Growth and Matching Performance in Two-Sided Platforms: Evidence from the Lazy-Minting Policy in an NFT Marketplace](https://doi.org/10.1287/mnsc.2022.03573) | 此前已收录—主目录 | P160 | DOI 已存在于 v3 目录。 |
| 107 | Management Science | [The Impact of Cryptocurrency on Cybersecurity](https://doi.org/10.1287/mnsc.2023.00969) | 此前已收录—主目录 | P142 | DOI 已存在于 v3 目录。 |
| 108 | Management Science | [An Anatomy of Crypto-Enabled Cybercrimes](https://doi.org/10.1287/mnsc.2023.03691) | 此前已收录—主目录 | P140 | DOI 已存在于 v3 目录。 |
| 109 | Management Science | [Riding the Blockchain Mania: Public Firms' Speculative 8-K Disclosures](https://doi.org/10.1287/mnsc.2019.3357) | 此前已收录—主目录 | P121 | DOI 已存在于 v3 目录。 |
| 110 | Management Science | [The (Limited) Power of Blockchain Networks for Information Provision](https://doi.org/10.1287/mnsc.2023.4718) | 此前已收录—主目录 | P124 | DOI 已存在于 v3 目录。 |
| 111 | Management Science | [On the Financing Benefits of Supply Chain Transparency and Blockchain Adoption](https://doi.org/10.1287/mnsc.2019.3434) | 此前已收录—主目录 | P144 | DOI 已存在于 v3 目录。 |
| 112 | Management Science | [Can Blockchain Technology Help Overcome Contractual Incompleteness? Evidence from State Laws](https://doi.org/10.1287/mnsc.2022.04139) | 此前已收录—主目录 | P106 | DOI 已存在于 v3 目录。 |
| 113 | Management Science | [Blockchain Adoption in a Supply Chain with Manufacturer Market Power](https://doi.org/10.1287/mnsc.2022.02505) | 此前已收录—主目录 | P149 | DOI 已存在于 v3 目录。 |
| 114 | Management Science | [Supply Chain Transparency and Blockchain Design](https://doi.org/10.1287/mnsc.2023.4851) | 此前已收录—主目录 | P148 | DOI 已存在于 v3 目录。 |
| 115 | Management Science | [The Economic Value of Blockchain Applications: Early Evidence from Asset-Backed Securities](https://doi.org/10.1287/mnsc.2023.4671) | 此前已收录—主目录 | P147 | DOI 已存在于 v3 目录。 |
| 116 | Management Science | [The Blockchain Newsvendor: Value of Freshness Transparency and Smart Contracts](https://doi.org/10.1287/mnsc.2021.02949) | 此前已收录—主目录 | P150 | DOI 已存在于 v3 目录。 |
| 117 | Management Science | [Financial Inclusion via Blockchain: Evidence from a Natural Experiment](https://doi.org/10.1287/mnsc.2023.02303) | 此前已收录—主目录 | P152 | DOI 已存在于 v3 目录。 |
| 118 | Management Science | [Behavioral Simulation of Blockchain-Enabled Market for Supplier Capacity Trading Among Retailers](https://doi.org/10.1287/mnsc.2023.03771) | 此前已收录—主目录 | P153 | DOI 已存在于 v3 目录。 |
| 119 | Mathematical Finance | [Crypto quanto and inverse options](https://doi.org/10.1111/mafi.12410) | 此前已收录—主目录 | P070 | DOI 已存在于 v3 目录。 |
| 120 | Mathematical Finance | [Perpetual Futures Pricing](https://doi.org/10.1111/mafi.70018) | 此前已收录—主目录 | P163 | DOI 已存在于 v3 目录。 |
| 121 | Mathematical Finance | [Statistical Error Bounds for Weighted Mean and Median With Application to Robust Aggregation of Cryptocurrency Data](https://onlinelibrary.wiley.com/toc/14679965/2025/35/4) | 此前已收录—主目录 | P075 | 原表 A121 年份 2026 应为 2025；按正式卷期核验。 |
| 122 | Mathematical Finance | [Trading under the proof-of-stake protocol – A continuous-time control approach](https://doi.org/10.1111/mafi.12403) | 此前已收录—主目录 | P045 | DOI 已存在于 v3 目录。 |
| 123 | Mathematical Finance | [Equilibrium Reward for Liquidity Providers in Automated Market Makers](https://doi.org/10.1111/mafi.70030) | 此前已收录—主目录 | P093 | DOI 已存在于 v3 目录。 |
| 124 | Mathematical Finance | [Axioms for Constant Function Market Makers](https://doi.org/10.1111/mafi.70041) | 此前已收录—主目录 | P094 | DOI 已存在于 v3 目录。 |
| 125 | Mathematical Finance | [Agents' Behavior and Interest Rate Model Optimization in DeFi Lending](https://doi.org/10.1111/mafi.70002) | 此前已收录—主目录 | P098 | DOI 已存在于 v3 目录。 |
| 126 | Mathematical Finance | [Decentralized Prediction Markets and Sports Books](https://doi.org/10.1111/mafi.70017) | 此前已收录—主目录 | P100 | DOI 已存在于 v3 目录。 |
| 127 | Mathematical Finance | [While stability lasts: A stochastic model of noncustodial stablecoins](https://doi.org/10.1111/mafi.12357) | 此前已收录—主目录 | P096 | DOI 已存在于 v3 目录。 |
| 128 | Mathematical Finance | [Designing stablecoins](https://doi.org/10.1111/mafi.12445) | 此前已收录—主目录 | P097 | DOI 已存在于 v3 目录。 |
| 129 | MIS Quarterly | [Stability of Transaction Fees in Bitcoin: A Supply and Demand Perspective](https://aisel.aisnet.org/misq/vol45/iss2/5/) | 此前已收录—主目录 | P058 | 原表 A129 年份 2022 应为 2021；按正式卷期核验。 |
| 130 | MIS Quarterly | [Strategic Participation on Tokenized Platforms: Balancing Investment and Labor Intensities](https://doi.org/10.25300/MISQ/2025/19441) | 此前已收录—主目录 | P036 | DOI 已存在于 v3 目录。 |
| 131 | MIS Quarterly | [Discursive Fields and the Diversity-Coherence Paradox: An Ecological Perspective on the Blockchain Community Discourse](https://doi.org/10.25300/MISQ/2022/15736) | 此前已收录—主目录 | P104 | DOI 已存在于 v3 目录。 |
| 132 | MIS Quarterly | [Digitization of Transaction Terms within TCE: Strong Smart Contract as a New Mode of Transaction Governance](https://doi.org/10.25300/MISQ/2023/17818) | 此前已收录—主目录 | P109 | DOI 已存在于 v3 目录。 |
| 133 | MIS Quarterly | [Deductive Certainty? Exploring the Boundaries of Trust Formation in Smart Contracts on Blockchains](https://doi.org/10.25300/MISQ/2025/18501) | 此前已收录—主目录 | P116 | DOI 已存在于 v3 目录。 |
| 134 | MIS Quarterly | [The Digital Privacy Paradox and Choice Architecture: Evidence from an Experiment in Fintech](https://doi.org/10.25300/MISQ/2025/19206) | 此前已收录—主目录 | P079 | DOI 已存在于 v3 目录。 |
| 135 | MIS Quarterly | [Skin in the Game: The Transformational Potential of Decentralized Autonomous Organizations](https://doi.org/10.25300/MISQ/2023/17690) | 此前已收录—主目录 | P107 | DOI 已存在于 v3 目录。 |
| 136 | MIS Quarterly | [Regulating Emerging Technologies: Prospective Sensemaking Through Abstraction And Elaboration](https://doi.org/10.25300/MISQ/2024/18039) | 此前已收录—主目录 | P113 | DOI 已存在于 v3 目录。 |
| 137 | MIS Quarterly | [Guest Editorial: Time for a Decentralization Journey of Digital Infrastructures? Reflections on the 2023 Impact Award](https://aisel.aisnet.org/misq/vol48/iss4/5/) | 确认遗漏—补入主目录 | P167 | 原表及 Crossref 只列 Henfridsson；MISQ/AIS 正式目录署名为 Ola Henfridsson、Bendik Bygstad。Guest Editorial 为文献类型，不是题名组成部分。 |
| 138 | Operations Research | [On the Profitability of Selfish Blockchain Mining Under Consideration of Ruin](https://doi.org/10.1287/opre.2021.2169) | 此前已收录—主目录 | P043 | DOI 已存在于 v3 目录。 |
| 139 | Operations Research | [Improving Blockchain Consistency Bound by Assigning Weights to Random Blocks](https://doi.org/10.1287/opre.2022.0463) | 此前已收录—主目录 | P055 | DOI 已存在于 v3 目录。 |
| 140 | Operations Research | [Bayesian Mechanism Design for Blockchain Transaction Fee Allocation](https://doi.org/10.1287/opre.2024.0865) | 此前已收录—主目录 | P066 | DOI 已存在于 v3 目录。 |
| 141 | Operations Research | [Axioms for Automated Market Makers: A Mathematical Framework in FinTech and Decentralized Finance](https://doi.org/10.1287/opre.2022.0520) | 此前已收录—主目录 | P092 | DOI 已存在于 v3 目录。 |
| 142 | Quarterly Journal of Economics | [Trust at Scale: The Economic Limits of Cryptocurrencies and Blockchains](https://doi.org/10.1093/qje/qjae033) | 此前已收录—主目录 | P053 | DOI 已存在于 v3 目录。 |
| 143 | Review of Economic Studies | [Redeemable Platform Currencies](https://doi.org/10.1093/restud/rdac028) | 此前已收录—主目录 | P027 | DOI 已存在于 v3 目录。 |
| 144 | Review of Economic Studies | [Monopoly without a Monopolist: An Economic Analysis of the Bitcoin Payment System](https://doi.org/10.1093/restud/rdab014) | 此前已收录—主目录 | P060 | DOI 已存在于 v3 目录。 |
| 145 | Review of Economic Studies | [Should Central Banks Issue Digital Currency?](https://doi.org/10.1093/restud/rdac017) | 范围差异—CBDC/一般数字支付 |  | CBDC 设计、采纳或宏观政策研究；原目录明确排除纯 CBDC，本次不改变主题范围。 |
| 146 | Review of Financial Studies | [Risks and Returns of Cryptocurrency](https://doi.org/10.1093/rfs/hhaa113) | 此前已收录—主目录 | P005 | DOI 已存在于 v3 目录。 |
| 147 | Review of Financial Studies | [Decentralizing Money: Bitcoin Prices and Blockchain Security](https://doi.org/10.1093/rfs/hhaa149) | 此前已收录—主目录 | P006 | DOI 已存在于 v3 目录。 |
| 148 | Review of Financial Studies | [Blockchain-Based Settlement for Asset Trading](https://doi.org/10.1093/rfs/hhy122) | 此前已收录—主目录 | P143 | DOI 已存在于 v3 目录。 |
| 149 | Review of Financial Studies | [Blockchain Disruption and Smart Contracts](https://doi.org/10.1093/rfs/hhz007) | 此前已收录—主目录 | P103 | DOI 已存在于 v3 目录。 |
| 150 | Review of Financial Studies | [Initial Coin Offerings: Financing Growth with Cryptocurrency Token Sales](https://doi.org/10.1093/rfs/hhz131) | 此前已收录—主目录 | P015 | DOI 已存在于 v3 目录。 |
| 151 | Review of Financial Studies | [Tokenomics: Dynamic Adoption and Valuation](https://doi.org/10.1093/rfs/hhaa089) | 此前已收录—主目录 | P004 | DOI 已存在于 v3 目录。 |
| 152 | Review of Financial Studies | [Consumers as Financiers: Consumer Surplus, Crowdfunding, and Initial Coin Offerings](https://doi.org/10.1093/rfs/hhab058) | 此前已收录—主目录 | P020 | DOI 已存在于 v3 目录。 |
| 153 | Review of Financial Studies | [Digital Tokens and Platform Building](https://doi.org/10.1093/rfs/hhaf015) | 此前已收录—主目录 | P035 | DOI 已存在于 v3 目录。 |
| 154 | Review of Financial Studies | [The Blockchain Folk Theorem](https://doi.org/10.1093/rfs/hhy095) | 此前已收录—主目录 | P038 | DOI 已存在于 v3 目录。 |
| 155 | Review of Financial Studies | [Blockchain without Waste: Proof-of-Stake](https://doi.org/10.1093/rfs/hhaa075) | 此前已收录—主目录 | P041 | DOI 已存在于 v3 目录。 |
| 156 | Review of Financial Studies | [Decentralized Mining in Centralized Pools](https://doi.org/10.1093/rfs/hhaa040) | 此前已收录—主目录 | P040 | DOI 已存在于 v3 目录。 |
| 157 | Review of Financial Studies | [Corporate Capture of Blockchain Governance](https://doi.org/10.1093/rfs/hhac051) | 此前已收录—主目录 | P105 | DOI 已存在于 v3 目录。 |
| 158 | Review of Financial Studies | [Committee-Based Blockchains as Games between Opportunistic Players and Adversaries](https://doi.org/10.1093/rfs/hhad051) | 此前已收录—主目录 | P049 | DOI 已存在于 v3 目录。 |
| 159 | Review of Financial Studies | [Proof-of-Work versus Proof-of-Stake: A Comparative Economic Analysis](https://doi.org/10.1093/rfs/hhaf013) | 此前已收录—主目录 | P054 | DOI 已存在于 v3 目录。 |
| 160 | Review of Financial Studies | [Liquidity Provision on Blockchain-Based Decentralized Exchanges](https://doi.org/10.1093/rfs/hhaf046) | 此前已收录—主目录 | P087 | DOI 已存在于 v3 目录。 |
| 161 | Review of Financial Studies | [Price Discovery on Decentralized Exchanges](https://doi.org/10.1093/rfs/hhag002) | 此前已收录—主目录 | P089 | DOI 已存在于 v3 目录。 |
| 162 | Review of Financial Studies | [Stablecoin Runs and the Centralization of Arbitrage](https://doi.org/10.1093/rfs/hhag072) | 此前已收录—主目录 | P101 | DOI 已存在于 v3 目录。 |
| 163 | Review of Financial Studies | [Sex, Drugs, and Bitcoin: How Much Illegal Activity Is Financed through Cryptocurrencies?](https://doi.org/10.1093/rfs/hhz015) | 此前已收录—主目录 | P133 | DOI 已存在于 v3 目录。 |
| 164 | SIAM Journal on Financial Mathematics | [Theory of Cryptocurrency Interest Rates](https://doi.org/10.1137/19M1263042) | 此前已收录—主目录 | P003 | DOI 已存在于 v3 目录。 |
| 165 | SIAM Journal on Financial Mathematics | [Short Communication: A Primer on Perpetuals](https://epubs.siam.org/doi/abs/10.1137/22M1520931) | 此前已收录—主目录 | P162 | 原表 A165 年份 2026 应为 2023；按正式卷期核验。 |
| 166 | SIAM Journal on Financial Mathematics | [A Mean Field Game Approach to Bitcoin Mining](https://doi.org/10.1137/23M1617813) | 此前已收录—主目录 | P052 | DOI 已存在于 v3 目录。 |
| 167 | SIAM Journal on Financial Mathematics | [Decentralized Finance and Automated Market Making: Predictable Loss and Optimal Liquidity Provision](https://doi.org/10.1137/23M1602103) | 此前已收录—主目录 | P085 | DOI 已存在于 v3 目录。 |
| 168 | SIAM Journal on Financial Mathematics | [Uniswap V3: Impermanent Loss Modeling and Swap Fees Asymptotic Analysis](https://doi.org/10.1137/23M1606149) | 此前已收录—主目录 | P090 | DOI 已存在于 v3 目录。 |

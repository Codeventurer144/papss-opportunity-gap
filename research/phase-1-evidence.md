# The PAPSS Opportunity Gap
## Phase 1 — Evidence note (reconciled) | 30 October 2026

**Question:** How closely do accessible PAPSS payment routes from Nigeria align with Nigeria's principal African merchandise trading destinations?

**Status:** Exploratory finding, not an assertion of PAPSS lost revenue. A second provider-source cross-check materially qualifies the initial coverage observation.

### Executive finding

The publicly accessible PAPSS Nigerian send-money directory lists **25 sending banks/wallets**, **14 African destination countries** and **217 receiving-institution listings** (sum of country-by-country directory counts). The five destination countries with the most listings (Kenya, Tanzania, Ethiopia, Uganda and Ghana) account for **169 of 217 listings, or 77.88%**. Five listed destinations have five or fewer receiving endpoints.

Nigeria's NBS Q2 2026 foreign trade release, published 7 September 2026, reports **approximately ₦6.653 trillion** of Nigerian goods exports to Africa. Its five largest African export destinations were Togo (₦1.498tn), South Africa (₦1.343tn), Côte d'Ivoire (₦1.215tn), Ghana (₦461.36bn), and Egypt (₦455.81bn). The PAPSS Nigeria-to-Africa directory lists Ghana as presently reachable, Egypt as coming soon, and does not list Togo, South Africa or Côte d'Ivoire among the 14 reachable destinations.

The four destinations not listed as *currently reachable from Nigeria in the PAPSS central directory* represented **approximately ₦4.512tn, or 67.82%, of Nigeria's African merchandise exports in Q2 2026**. This is an initial mismatch between reported export destinations and a *particular public-facing Nigerian operator directory*. **It is not a confirmed gap in actual PAPSS routability.**

### Material source disagreement — must reconcile before external publication

**FirstBank Nigeria publicly advertises 21 PAPSS destination countries from Nigeria, including Togo.** This is seven more than the 14 destinations currently shown by the PAPSS Nigerian central directory (Benin, Burkina Faso, Cameroon, Gabon, Guinea-Bissau, Niger and Togo). **Access Bank Nigeria publicly advertises 11 destinations.** All 11 appear within the operator directory, while FirstBank includes all 14 operator-listed countries plus seven additional markets.

Thus the simple conclusion that Togo is unavailable was **incorrect**. We should not publish it. What is supported by evidence is that *the three public-facing sets of available destinations disagree*. They may differ by provider, point in time, integration status, or definition; we have not independently verified live test transfers.

Among Nigeria's Q2 2026 top-five African export destinations, Ghana appears in all reviewed sources; Togo appears on FirstBank's page; Egypt is marked "coming soon" by PAPSS; South Africa and Côte d'Ivoire are not shown on any of these three reviewed pages. The three top export markets not advertised on those three pages (South Africa, Côte d'Ivoire, Egypt) sum to approximately ₦3.014tn, or **45.30%** of Nigeria's Africa exports. Again, **not advertised is not the same as unavailable** and no payments addressability is implied.

**New research hypothesis:** Sender-provider-specific reach and discoverability may matter as much as central-bank network connection. The platform should compare the *claimed routes by provider*, dated/source-cited, before scoring trade opportunities.

FirstBank: https://firstbankgroup.com/ng/personal/money-transfer/papss/  
Access Bank: https://www.accessbankplc.com/personal/money-transfer/papss  
PAPSS operator directory: https://papss.com/papss-send-money-from-nigeria-to-africa/

### Why this may matter

PAPSS leadership has indicated that its second strategic phase emphasizes deeper adoption after network expansion. A corridor-by-corridor comparison may help distinguish: (1) destination onboarding; (2) bank/channel accessibility; (3) merchant adoption; (4) corporate/wholesale settlement; (5) FX liquidity and operational feasibility.

**Crucial limitation:** These are two datasets with different units of observation. The NBS measures merchandise exports by destination; PAPSS's public directory describes outward transfer reach from Nigerian retail-facing providers. It does NOT establish PAPSS's internal coverage for large institutional transfers, trade finance, or currency-marketplace clients. Export flows DO NOT measure PAPSS-addressable merchant payments, and petroleum shipments may be financed or settled through channels not relevant to the retail PAPSS product. Our 67.82% is an *export-exposure share to directory-unlisted destinations*, emphatically NOT a PAPSS market share, revenue estimate or growth forecast.

### First two hypotheses

- **H1 — Coverage–commerce mismatch:** Some significant African trade destinations are not presently listed as reachable through Nigerian sender channels. There may be practical gains from extending availability to relevant eligible merchants, conditional on market/regulatory readiness and actual product fit.
- **H2 — Depth before breadth:** Even among listed destination countries, smaller counts of receiving endpoints may correlate with narrower accessibility; whether this limits adoption depends on bank market share, transaction types, customer segmentation and integrations, none of which can be inferred from counts alone.

### Method used

1. Record the dated PAPSS Nigerian directory status and counts exactly as published.
2. Record the NBS Q2 2026 destination figures as reported by contemporaneous coverage of NBS's official release; use official NBS catalog as source lineage.
3. Compare destination names using ISO 3166-1 alpha-3 keys, distinguishing `listed_current`, `coming_soon` and `not_listed`.
4. Divide the sum of export values for top-five countries not listed as currently reachable (₦4,511.81bn) by all exports to Africa (₦6,653bn): **67.82%**.
5. Sum all 14 institution-listing counts to get 217; sum five largest counts to get 169 (**77.88%**).
6. Verify every derived value using `python -m unittest discover -s tests` and `python scripts/analyze.py`.

### Immediate next research: what would change the conclusion?

1. **Coverage reconciliation:** Verify the reasons for the 14-country vs 21-country vs 11-country discrepancy, especially Togo. Interview/check each bank for presently working beneficiary routes and determine whether listings differ by channel, phase or direct/extended network.
2. **Trade composition:** What share of each corridor is petroleum and other large commodities, vs goods bought by small importers and exporters? Obtain Q2 2026 official NBS product-by-destination tables and independent annual Comtrade/BACI commodity data.
2. **Corporate channels:** Check availability through wholesale banks, ACM, partner networks and institution-only arrangements.
3. **Currency economics:** What are the genuine currency conversion and liquidity constraints for each relevant corridor? Do not substitute goods trade balances for payment-system net positions.
4. **Actual reach:** Normalize receiving endpoints by bank account market shares or numbers of banked customers if reliable market statistics can be found. An endpoint count is not a penetration rate.
5. **Transaction demand:** Validate actual merchant/institution demand through bank terms, settlement rules, provider availability, merchant interviews and, if accessible, PAPSS internally released volume statistics.
6. **Freshness:** Recheck the PAPSS Nigeria directory and NBS data when publishing the final brief; both may change.

### Evidence and sources

- PAPSS Nigeria-to-Africa accessible routes: https://papss.com/papss-send-money-from-nigeria-to-africa/
- NBS official release catalog (Q2 2026 dated 7 Sep): https://microdata.nigerianstat.gov.ng/index.php/catalog/84/related-materials
- Voice of Nigeria reporting NBS figures, 8 Sep 2026: https://von.gov.ng/nigerias-trade-surplus-rises-to-n12-60tn-in-q2-2026/
- BusinessDay NBS figures cross-check: https://businessday.ng/news/article/nigerias-trade-surplus-widens-as-q2-exports-hit-n27tn/
- PAPSS operational explanation: https://papss.com/how-it-works/
- UN Comtrade official API documentation: https://uncomtrade.org/docs/un-comtrade-api/
- CEO's September 2026 remarks on prioritizing deeper adoption: https://businessday.ng/news/article/papss-targets-100-african-coverage-within-five-years/

### Suggested deliverable for PAPSS management

**A short analytical note**, followed by a D3.js dashboard where an executive can filter product segments and trade corridors, see evidence-backed reachable routes, explore transparent sensitivity scenarios, and download a corridor-specific decision memo. Do not show unsupported conversion savings, PAPSS revenue, or customer penetration as observed facts.
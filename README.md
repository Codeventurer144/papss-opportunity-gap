# PAPSS Opportunity Gap

An independent, interactive **Power BI-style research report** examining whether Nigeria's important African trade relationships align with the payment destinations publicly advertised through PAPSS and selected participating banks.

**[Repository](https://github.com/Codeventurer144/papss-opportunity-gap)** · [Report (GitHub Pages)](https://codeventurer144.github.io/papss-opportunity-gap/)

## Report pages

1. **Research context** — D3 Africa map with Nigeria-to-destination trade-relationship routes and country tooltips.
2. **Published network** — PAPSS receiving-institution directory counts, with selectable bars.
3. **Trade corridors** — Nigeria's top African export destinations, switchable between naira value and percentage.
4. **Provider comparison** — PAPSS central directory versus FirstBank and Access Bank.
5. **Trade composition** — Petroleum-related concentration and implications for payment-addressability assumptions.
6. **Possible responses** — Evidence-led options and an explicitly hypothetical sensitivity calculator.
7. **Methods & sources** — Source links, definitions and research limitations.

The design uses a fixed report canvas, slim vertical page rail, horizontal page tabs, white background, restrained orange highlighting, and compact BI panels. It is designed as a report—not a conventional scrolling website.

## Evidence summary

- The reviewed PAPSS Nigerian sender directory lists **25 sending providers**, **14 destinations** and **217 receiving-institution entries**.
- The reviewed FirstBank service page advertises **21 destinations**; Access Bank advertises **11**. Listings are not a complete verification of live technical availability.
- Nigeria's Q2 2026 merchandise exports to Togo, South Africa, Côte d'Ivoire, Ghana and Egypt jointly represent about **74.75%** of its goods exports to Africa. This is *not* a proportion of PAPSS-addressable payment demand.
- Commodity mix is a serious qualification: five major groups account for about **91.6%** of Nigeria's African exports in the referenced breakdown.

## Important limitations

The report does **not** use PAPSS transaction data, measured PAPSS market share, actual revenue, verified end-to-end test transfers or observed adoption rates. Animated links are trade relationships being researched—not PAPSS transactions. A destination absent from a webpage is not necessarily an unavailable payment route. Simulator values are **scenarios**, not forecasts.

**Independent work.** Not commissioned, produced or endorsed by PAPSS or Afreximbank.

## Sources

- [PAPSS Nigerian sender directory](https://papss.com/papss-send-money-from-nigeria-to-africa/)
- [FirstBank's PAPSS service page](https://firstbankgroup.com/ng/personal/money-transfer/papss/)
- [Access Bank's PAPSS service page](https://www.accessbankplc.com/personal/money-transfer/papss)
- [NBS Q2 2026 trade report](https://microdata.nigerianstat.gov.ng/index.php/catalog/84/related-materials)
- [Q2 2026 export commodity breakdown](https://thefact.ng/nigerias-foreign-trade-hits-%E2%82%A641-44trn-in-q2-2026-nbs/)
- [Natural Earth country boundaries](https://www.naturalearthdata.com/about/terms-of-use/)

## Development and deployment

This is a static JavaScript + D3.js report with no build step. Open `index.html` in a browser with internet access to load the geographic libraries and country boundaries, or serve the directory using `python -m http.server`. Source snapshot values are in `data.js`; report rendering and interactions are in `app.js`.

GitHub Actions checks the research snapshot and JavaScript syntax, then deploys to GitHub Pages from `main`. If the published map library cannot load, the other report pages remain available.

**Next research task:** obtain comparable corridor-level commodity data and verify bank-specific payment route availability before ranking adoption or expansion opportunities.

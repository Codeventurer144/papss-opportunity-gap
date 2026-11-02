window.PAPSS_DATA = {
 quarter:"2026-Q2", snapshotDate:"2026-11-02", totalAfricaExportsBn:6653,
 centralDestinations:14,sendingProviders:25,receivingListings:217,
 firstBankDestinations:21,accessBankDestinations:11,
 trade:[
 {country:"Togo",iso3:"TGO",numeric:768,exportsBn:1498,centralStatus:"not_listed",firstbank:"Listed",access:"Not listed",lon:1.1,lat:8.6},
 {country:"South Africa",iso3:"ZAF",numeric:710,exportsBn:1343,centralStatus:"not_listed",firstbank:"Not listed",access:"Not listed",lon:24.2,lat:-28.5},
 {country:"Côte d’Ivoire",iso3:"CIV",numeric:384,exportsBn:1215,centralStatus:"not_listed",firstbank:"Not listed",access:"Not listed",lon:-5.6,lat:7.6},
 {country:"Ghana",iso3:"GHA",numeric:288,exportsBn:461.36,centralStatus:"listed_current",firstbank:"Listed",access:"Listed",lon:-1.2,lat:7.9},
 {country:"Egypt",iso3:"EGY",numeric:818,exportsBn:455.81,centralStatus:"coming_soon",firstbank:"Not listed",access:"Not listed",lon:29.4,lat:26.5}
 ],
 endpoints:[["Kenya",53],["Tanzania",36],["Ethiopia",29],["Uganda",26],["Ghana",25],["Zimbabwe",10],["Liberia",9],["Sierra Leone",9],["The Gambia",7],["Guinea",5],["Rwanda",3],["Djibouti",2],["Zambia",2],["Malawi",1]].map(([country,count])=>({country,count})),
 commodities:[["Crude petroleum oil",48.58],["Gas oil",19.88],["Jet fuel",14.66],["Motor spirit",6.26],["Urea",2.22],["Other commodities",8.4]],
 sources:{
 papss:"https://papss.com/papss-send-money-from-nigeria-to-africa/",
 firstbank:"https://firstbankgroup.com/ng/personal/money-transfer/papss/",
 access:"https://www.accessbankplc.com/personal/money-transfer/papss",
 nbs:"https://microdata.nigerianstat.gov.ng/index.php/catalog/84/related-materials",
 tradeAnalysis:"https://thefact.ng/nigerias-foreign-trade-hits-%E2%82%A641-44trn-in-q2-2026-nbs/",
 map:"https://www.naturalearthdata.com/about/terms-of-use/"
 }
};
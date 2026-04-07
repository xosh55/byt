// ═══════════════════════════════════════════════════════════
// BYYT.SE — Master data file (V0.6)
// Allt innehåll exporteras på window.BYYT så index.html kan
// destrukturera det i sin <script type="text/babel">.
// Rör inte denna fil utan audit mot BYYT_V05_AUDIT.md §16.
// ═══════════════════════════════════════════════════════════
(function(){

const C={mint:"#06D6A0",cyan:"#00B4D8",violet:"#8B5CF6",ink:"#080E1A",dark:"#0F172A",surface:"#1E293B",surface2:"#334155",text:"#F8FAFC",muted:"#94A3B8",subtle:"#64748B",success:"#22C55E"};

// ═══ UPDATED OPERATOR COLORS ═══
const OPERATORS=[
  {id:"telia",name:"Telia",color:"#6C1D9E"},{id:"tele2",name:"Tele2",color:"#E0E0E0"},
  {id:"tre",name:"Tre",color:"#FF6B00"},{id:"telenor",name:"Telenor",color:"#0096E6"},
  {id:"hallon",name:"Hallon",color:"#E8345A"},{id:"comviq",name:"Comviq",color:"#E91E8C"},
  {id:"fello",name:"Fello",color:"#D4450B"},{id:"vimla",name:"Vimla",color:"#4ADE80"},
  {id:"halebop",name:"Halebop",color:"#78BE20"},{id:"chilimobil",name:"Chilimobil",color:"#FF0000"},
];
const opColor=id=>(OPERATORS.find(o=>o.id===id)||{}).color||C.muted;
const opName=id=>(OPERATORS.find(o=>o.id===id)||{}).name||id;

const PLANS=[
{id:1,operator:"telia",name:"Telia 10 GB",categories:["privat","pensionar"],price:299,data:10,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","eSIM","Surfpott 50 GB"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/"},
{id:2,operator:"telia",name:"Telia 20 GB",categories:["privat","student","pensionar"],price:399,data:20,speedMbps:300,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","Dubbel surf 40 GB"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/"},
{id:3,operator:"telia",name:"Telia Obegränsad",categories:["privat"],price:499,data:9999,speedMbps:600,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","eSIM"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/"},
{id:4,operator:"telia",name:"Telia Obegr. Plus",categories:["privat","familj"],price:569,data:9999,speedMbps:600,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","Telia Cloud"],bindingOffer:"Bind 24 mån — 100 kr rabatt",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/",perExtra:239},
{id:5,operator:"telia",name:"Telia Obegr. Netflix",categories:["privat"],price:629,data:9999,speedMbps:600,fiveG:true,network:"Telia",bindingMonths:0,perks:["Netflix Standard"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/",perExtra:239},
{id:6,operator:"telia",name:"Telia Obegr. Disney+",categories:["privat"],price:599,data:9999,speedMbps:600,fiveG:true,network:"Telia",bindingMonths:0,perks:["Disney+"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/",perExtra:239},
{id:7,operator:"telia",name:"Telia Obegr. HBO",categories:["privat"],price:609,data:9999,speedMbps:600,fiveG:true,network:"Telia",bindingMonths:0,perks:["HBO Max"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/",perExtra:239},
{id:8,operator:"telia",name:"Telia Obegr. 3-i-1",categories:["privat"],price:699,data:9999,speedMbps:600,fiveG:true,network:"Telia",bindingMonths:0,perks:["Netflix","HBO Max","Disney+"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/",perExtra:239},
{id:9,operator:"telia",name:"Telia 20 GB Ungdom",categories:["student"],price:349,data:20,speedMbps:300,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","Under 28 år"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/"},
{id:10,operator:"telia",name:"Telia Obegr. Ungdom",categories:["student"],price:449,data:9999,speedMbps:600,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","Under 28 år"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telia.se/privat/mobil/mobilabonnemang/"},
{id:12,operator:"tele2",name:"Tele2 15 GB",categories:["privat","pensionar"],price:329,data:15,speedMbps:300,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","eSIM"],bindingOffer:"Bind 24 mån — spara 50 kr",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tele2.se/handla/mobilabonnemang/"},
{id:13,operator:"tele2",name:"Tele2 Obegränsad",categories:["privat","student"],price:479,data:9999,speedMbps:600,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","eSIM"],bindingOffer:"Bind 24 mån — spara 100 kr",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tele2.se/handla/mobilabonnemang/"},
{id:14,operator:"tele2",name:"Tele2 Obegr. Max",categories:["privat"],price:519,data:9999,speedMbps:1000,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","Extra SIM 50 GB"],bindingOffer:"Bind 24 mån — spara 100 kr",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tele2.se/handla/mobilabonnemang/"},
{id:15,operator:"tele2",name:"Tele2 Senior 15 GB",categories:["pensionar"],price:279,data:15,speedMbps:300,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","Senior 65+"],bindingOffer:"Bind 24 mån — spara 50 kr",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tele2.se/handla/mobilabonnemang/"},
{id:16,operator:"tele2",name:"Tele2 Familj Obegr.",categories:["familj"],price:479,data:9999,speedMbps:600,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","Egen surf/person"],bindingOffer:"Bind 24 mån — spara 100 kr",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tele2.se/handla/mobilabonnemang/",perExtra:169},
{id:17,operator:"tre",name:"Tre 6 GB",categories:["privat","pensionar"],price:229,data:6,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf","Fria samtal EU"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tre.se/privat/webshop/mobilabonnemang/"},
{id:18,operator:"tre",name:"Tre 25 GB",categories:["privat","student"],price:329,data:25,speedMbps:300,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tre.se/privat/webshop/mobilabonnemang/"},
{id:19,operator:"tre",name:"Tre Obegränsad",categories:["privat","student"],price:429,data:9999,speedMbps:1000,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf","3Världen 85+ länder"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tre.se/privat/webshop/mobilabonnemang/"},
{id:20,operator:"tre",name:"Tre Familj Obegr.",categories:["familj"],price:429,data:9999,speedMbps:1000,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:"Extra 149 kr/mån",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tre.se/privat/webshop/mobilabonnemang/",perExtra:149},
{id:55,operator:"tre",name:"Tre Familj 25 GB",categories:["familj"],price:329,data:25,speedMbps:300,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:"Extra 149 kr/mån",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tre.se/privat/webshop/mobilabonnemang/",perExtra:149},
{id:56,operator:"tre",name:"Tre Familj 6 GB",categories:["familj"],price:229,data:6,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:"Extra 149 kr/mån",campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.tre.se/privat/webshop/mobilabonnemang/",perExtra:149},
{id:57,operator:"telenor",name:"Telenor 10 GB",categories:["privat","pensionar"],price:329,data:10,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["EU-roaming","39 länder"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telenor.se/mobilabonnemang/"},
{id:58,operator:"telenor",name:"Telenor 30 GB",categories:["privat"],price:399,data:30,speedMbps:300,fiveG:true,network:"Telenor",bindingMonths:0,perks:["EU-roaming"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telenor.se/mobilabonnemang/"},
{id:59,operator:"telenor",name:"Telenor Obegränsad",categories:["privat","student"],price:449,data:9999,speedMbps:600,fiveG:true,network:"Telenor",bindingMonths:0,perks:["EU-roaming","100 GB EU"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telenor.se/mobilabonnemang/"},
{id:60,operator:"telenor",name:"Telenor Obegr. Max",categories:["privat"],price:549,data:9999,speedMbps:1000,fiveG:true,network:"Telenor",bindingMonths:0,perks:["EU-roaming","Nätsäker Plus"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telenor.se/mobilabonnemang/"},
{id:61,operator:"telenor",name:"Telenor Familj Obegr.",categories:["familj"],price:449,data:9999,speedMbps:600,fiveG:true,network:"Telenor",bindingMonths:0,perks:["EU-roaming","Familjesamtal globalt"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telenor.se/mobilabonnemang/",perExtra:199},
{id:62,operator:"telenor",name:"Telenor Familj 30 GB",categories:["familj"],price:399,data:30,speedMbps:300,fiveG:true,network:"Telenor",bindingMonths:0,perks:["EU-roaming"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.telenor.se/mobilabonnemang/",perExtra:199},
{id:21,operator:"hallon",name:"Hallon 5 GB",categories:["privat"],price:109,data:5,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf","Spara surf 100 GB"],bindingOffer:null,campaignPrice:9,campaignMonths:4,affiliateUrl:"https://www.hallon.se/mobilabonnemang"},
{id:22,operator:"hallon",name:"Hallon 10 GB",categories:["privat"],price:149,data:10,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:null,campaignPrice:19,campaignMonths:4,affiliateUrl:"https://www.hallon.se/mobilabonnemang"},
{id:23,operator:"hallon",name:"Hallon 25 GB",categories:["privat","student"],price:259,data:25,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:null,campaignPrice:29,campaignMonths:4,affiliateUrl:"https://www.hallon.se/mobilabonnemang"},
{id:24,operator:"hallon",name:"Hallon 50 GB",categories:["privat","student"],price:309,data:50,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:null,campaignPrice:39,campaignMonths:4,affiliateUrl:"https://www.hallon.se/mobilabonnemang"},
{id:25,operator:"hallon",name:"Hallon 100 GB",categories:["privat"],price:359,data:100,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:null,campaignPrice:49,campaignMonths:4,affiliateUrl:"https://www.hallon.se/mobilabonnemang"},
{id:26,operator:"hallon",name:"Hallon Senior 4 GB",categories:["pensionar"],price:89,data:4,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf","Senior 55+"],bindingOffer:null,campaignPrice:9,campaignMonths:4,affiliateUrl:"https://www.hallon.se/mobilabonnemang"},
{id:27,operator:"hallon",name:"Hallon Senior 10 GB",categories:["pensionar"],price:119,data:10,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["Senior 55+"],bindingOffer:null,campaignPrice:19,campaignMonths:4,affiliateUrl:"https://www.hallon.se/mobilabonnemang"},
{id:28,operator:"hallon",name:"Hallon Senior 25 GB",categories:["pensionar"],price:169,data:25,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["Senior 55+"],bindingOffer:null,campaignPrice:29,campaignMonths:4,affiliateUrl:"https://www.hallon.se/mobilabonnemang"},
{id:63,operator:"hallon",name:"Hallon Familj 50 GB",categories:["familj"],price:259,data:50,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.hallon.se/mobilabonnemang",perExtra:99},
{id:64,operator:"hallon",name:"Hallon Familj 100 GB",categories:["familj"],price:359,data:100,speedMbps:150,fiveG:true,network:"Tre",bindingMonths:0,perks:["EU & UK surf"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.hallon.se/mobilabonnemang",perExtra:99},
{id:29,operator:"comviq",name:"Comviq 5 GB",categories:["privat","pensionar"],price:129,data:5,speedMbps:150,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.comviq.se/mobilabonnemang"},
{id:30,operator:"comviq",name:"Comviq 10 GB",categories:["privat","student"],price:179,data:10,speedMbps:150,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.comviq.se/mobilabonnemang"},
{id:31,operator:"comviq",name:"Comviq 20 GB",categories:["privat","student"],price:229,data:20,speedMbps:300,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","100 utlandsmin"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.comviq.se/mobilabonnemang"},
{id:32,operator:"comviq",name:"Comviq 40 GB",categories:["privat"],price:295,data:40,speedMbps:300,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.comviq.se/mobilabonnemang"},
{id:33,operator:"comviq",name:"Comviq 100 GB",categories:["privat"],price:369,data:100,speedMbps:300,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","1000 utlandsmin"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.comviq.se/mobilabonnemang"},
{id:34,operator:"comviq",name:"Comviq Student 10 GB",categories:["student"],price:105,data:10,speedMbps:150,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","Studentrabatt"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.comviq.se/mobilabonnemang"},
{id:35,operator:"comviq",name:"Comviq Student 20 GB",categories:["student"],price:165,data:20,speedMbps:300,fiveG:true,network:"Tele2",bindingMonths:0,perks:["Studentrabatt"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.comviq.se/mobilabonnemang"},
{id:36,operator:"comviq",name:"Comviq Familj 30 GB",categories:["familj"],price:275,data:30,speedMbps:300,fiveG:true,network:"Tele2",bindingMonths:0,perks:["EU-roaming","30 GB/person"],bindingOffer:null,campaignPrice:null,campaignMonths:null,affiliateUrl:"https://www.comviq.se/mobilabonnemang",perExtra:145},
{id:37,operator:"fello",name:"Fello 4 GB",categories:["privat","pensionar"],price:120,data:4,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","Spara surf"],bindingOffer:null,campaignPrice:60,campaignMonths:4,affiliateUrl:"https://fello.se/abonnemang/"},
{id:38,operator:"fello",name:"Fello 8 GB",categories:["privat","pensionar"],price:155,data:8,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming"],bindingOffer:null,campaignPrice:78,campaignMonths:4,affiliateUrl:"https://fello.se/abonnemang/"},
{id:39,operator:"fello",name:"Fello 16 GB",categories:["privat","student"],price:195,data:16,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming"],bindingOffer:null,campaignPrice:98,campaignMonths:4,affiliateUrl:"https://fello.se/abonnemang/"},
{id:40,operator:"fello",name:"Fello 24 GB",categories:["privat","student"],price:265,data:24,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming"],bindingOffer:null,campaignPrice:133,campaignMonths:4,affiliateUrl:"https://fello.se/abonnemang/"},
{id:41,operator:"fello",name:"Fello Student 14 GB",categories:["student"],price:105,data:14,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","Studentrabatt"],bindingOffer:null,campaignPrice:53,campaignMonths:4,affiliateUrl:"https://fello.se/abonnemang/"},
{id:42,operator:"fello",name:"Fello Student 35 GB",categories:["student"],price:265,data:35,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["Studentrabatt"],bindingOffer:null,campaignPrice:133,campaignMonths:4,affiliateUrl:"https://fello.se/abonnemang/"},
{id:43,operator:"fello",name:"Fello Senior 3 GB",categories:["pensionar"],price:95,data:3,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["EU-roaming","Senior 55+"],bindingOffer:null,campaignPrice:48,campaignMonths:4,affiliateUrl:"https://fello.se/abonnemang/"},
{id:44,operator:"fello",name:"Fello Senior 14 GB",categories:["pensionar"],price:155,data:14,speedMbps:150,fiveG:true,network:"Telia",bindingMonths:0,perks:["Senior 55+"],bindingOffer:null,campaignPrice:78,campaignMonths:4,affiliateUrl:"https://fello.se/abonnemang/"},
{id:45,operator:"vimla",name:"Vimla 5 GB",categories:["privat"],price:120,data:5,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["EU-roaming","Spara surf obegr."],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:46,operator:"vimla",name:"Vimla 10 GB",categories:["privat","student"],price:170,data:10,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["EU-roaming","Spara surf obegr."],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:47,operator:"vimla",name:"Vimla 15 GB",categories:["privat","student"],price:210,data:15,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["Spara surf obegr."],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:48,operator:"vimla",name:"Vimla 25 GB",categories:["privat"],price:260,data:25,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["Spara surf obegr."],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:49,operator:"vimla",name:"Vimla 100 GB",categories:["privat"],price:370,data:100,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["Spara surf obegr."],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:50,operator:"vimla",name:"Vimla Student 10 GB",categories:["student"],price:120,data:10,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["Studentrabatt"],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:51,operator:"vimla",name:"Vimla Student 15 GB",categories:["student"],price:160,data:15,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["Studentrabatt"],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:52,operator:"vimla",name:"Vimla Senior 5 GB",categories:["pensionar"],price:100,data:5,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["Senior 55+"],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:53,operator:"vimla",name:"Vimla Senior 10 GB",categories:["pensionar"],price:130,data:10,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["Senior 55+"],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
{id:54,operator:"vimla",name:"Vimla Senior 25 GB",categories:["pensionar"],price:180,data:25,speedMbps:150,fiveG:true,network:"Telenor",bindingMonths:0,perks:["Senior 55+"],bindingOffer:null,campaignPrice:20,campaignMonths:3,affiliateUrl:"https://vimla.se/mobilabonnemang/"},
];
const CATEGORIES=[{id:"privat",label:"Privat"},{id:"familj",label:"Familj"},{id:"student",label:"Student"},{id:"pensionar",label:"Senior"}];
const SORT_OPTIONS=[{id:"price_asc",label:"Lägst pris"},{id:"price_desc",label:"Högst pris"},{id:"data_desc",label:"Mest surf"},{id:"value",label:"Bäst värde"}];
const BUNDLE_DISCOUNTS={telia:100,tele2:50,telenor:100,tre:100};
const BYYT_TIPS=(()=>{const p=PLANS.filter(p=>p.categories.includes("privat")&&p.data<9999&&p.data>0);return p.map(p=>({id:p.id,r:p.price/p.data})).sort((a,b)=>a.r-b.r).slice(0,3).map(s=>s.id);})();

const BROADBAND=[
{id:"bb1",operator:"telia",name:"Telia Fiber 100/100",price:299,speedDown:100,type:"fiber",campaignPrice:249,campaignMonths:3,discount:100,perks:["Samlingsrabatt -100 kr"],affiliateUrl:"https://www.telia.se/privat/internet/fiber/"},
{id:"bb2",operator:"telia",name:"Telia Fiber 250/250",price:349,speedDown:250,type:"fiber",campaignPrice:299,campaignMonths:3,discount:100,perks:["Samlingsrabatt -100 kr"],affiliateUrl:"https://www.telia.se/privat/internet/fiber/"},
{id:"bb3",operator:"telia",name:"Telia Fiber 500/500",price:399,speedDown:500,type:"fiber",campaignPrice:349,campaignMonths:3,discount:100,perks:["Samlingsrabatt -100 kr"],affiliateUrl:"https://www.telia.se/privat/internet/fiber/"},
{id:"bb4",operator:"telia",name:"Telia Fiber 1000",price:499,speedDown:1000,type:"fiber",campaignPrice:399,campaignMonths:3,discount:100,perks:["Samlingsrabatt -100 kr"],affiliateUrl:"https://www.telia.se/privat/internet/fiber/"},
{id:"bb5",operator:"tele2",name:"Tele2 Fiber 100/100",price:279,speedDown:100,type:"fiber",campaignPrice:null,campaignMonths:null,discount:50,perks:["Samlingsrabatt -50 kr"],affiliateUrl:"https://www.tele2.se/handla/bredband/"},
{id:"bb6",operator:"tele2",name:"Tele2 Fiber 500/500",price:369,speedDown:500,type:"fiber",campaignPrice:null,campaignMonths:null,discount:50,perks:["Samlingsrabatt -50 kr"],affiliateUrl:"https://www.tele2.se/handla/bredband/"},
{id:"bb7",operator:"tele2",name:"Tele2 Fiber 1000",price:449,speedDown:1000,type:"fiber",campaignPrice:null,campaignMonths:null,discount:50,perks:["Samlingsrabatt -50 kr"],affiliateUrl:"https://www.tele2.se/handla/bredband/"},
{id:"bb8",operator:"telenor",name:"Telenor Fiber 100/100",price:299,speedDown:100,type:"fiber",campaignPrice:199,campaignMonths:6,discount:100,perks:["Samlingsrabatt -100 kr"],affiliateUrl:"https://www.telenor.se/bredband/"},
{id:"bb9",operator:"telenor",name:"Telenor Fiber 250/250",price:349,speedDown:250,type:"fiber",campaignPrice:249,campaignMonths:6,discount:100,perks:["Samlingsrabatt -100 kr"],affiliateUrl:"https://www.telenor.se/bredband/"},
{id:"bb10",operator:"telenor",name:"Telenor Fiber 1000",price:449,speedDown:1000,type:"fiber",campaignPrice:349,campaignMonths:6,discount:100,perks:["Samlingsrabatt -100 kr"],affiliateUrl:"https://www.telenor.se/bredband/"},
{id:"bb11",operator:"tre",name:"Tre 5G Hem 100",price:299,speedDown:100,type:"5g",campaignPrice:199,campaignMonths:3,discount:100,perks:["Ingen installation","Samlingsrabatt -100 kr"],affiliateUrl:"https://www.tre.se/privat/bredband/"},
{id:"bb12",operator:"tre",name:"Tre 5G Hem 500",price:399,speedDown:500,type:"5g",campaignPrice:299,campaignMonths:3,discount:100,perks:["Samlingsrabatt -100 kr"],affiliateUrl:"https://www.tre.se/privat/bredband/"},
{id:"bb13",operator:"bahnhof",name:"Bahnhof Fiber 100",price:289,speedDown:100,type:"fiber",campaignPrice:null,campaignMonths:null,discount:0,perks:["Stark integritetsprofil"],affiliateUrl:"https://bahnhof.se/bredband"},
{id:"bb14",operator:"bahnhof",name:"Bahnhof Fiber 500",price:349,speedDown:500,type:"fiber",campaignPrice:null,campaignMonths:null,discount:0,perks:["Stark integritetsprofil"],affiliateUrl:"https://bahnhof.se/bredband"},
{id:"bb15",operator:"bahnhof",name:"Bahnhof Fiber 1000",price:429,speedDown:1000,type:"fiber",campaignPrice:null,campaignMonths:null,discount:0,perks:["Stark integritetsprofil"],affiliateUrl:"https://bahnhof.se/bredband"},
{id:"bb16",operator:"ownit",name:"Ownit Fiber 100",price:249,speedDown:100,type:"fiber",campaignPrice:null,campaignMonths:null,discount:0,perks:["Billigaste fibern"],affiliateUrl:"https://www.ownit.se/bredband"},
{id:"bb17",operator:"ownit",name:"Ownit Fiber 500",price:319,speedDown:500,type:"fiber",campaignPrice:null,campaignMonths:null,discount:0,perks:["Ingen bindningstid"],affiliateUrl:"https://www.ownit.se/bredband"},
{id:"bb18",operator:"ownit",name:"Ownit Fiber 1000",price:399,speedDown:1000,type:"fiber",campaignPrice:null,campaignMonths:null,discount:0,perks:["Ingen bindningstid"],affiliateUrl:"https://www.ownit.se/bredband"},
{id:"bb19",operator:"bredbandsbolaget",name:"Bredbandsbolaget 100",price:269,speedDown:100,type:"fiber",campaignPrice:179,campaignMonths:6,discount:0,perks:["Kampanjpris 6 mån"],affiliateUrl:"https://www.bredbandsbolaget.se"},
{id:"bb20",operator:"bredbandsbolaget",name:"Bredbandsbolaget 500",price:339,speedDown:500,type:"fiber",campaignPrice:239,campaignMonths:6,discount:0,perks:["Kampanjpris 6 mån"],affiliateUrl:"https://www.bredbandsbolaget.se"},
{id:"bb21",operator:"bredbandsbolaget",name:"Bredbandsbolaget 1000",price:419,speedDown:1000,type:"fiber",campaignPrice:299,campaignMonths:6,discount:0,perks:["Kampanjpris 6 mån"],affiliateUrl:"https://www.bredbandsbolaget.se"},
{id:"bb22",operator:"telia",name:"Telia Mobilt 100 GB",price:349,speedDown:100,type:"mobilt",campaignPrice:null,campaignMonths:null,discount:0,perks:["5G"],affiliateUrl:"https://www.telia.se/privat/internet/mobilt-bredband/"},
{id:"bb23",operator:"tele2",name:"Tele2 Mobilt 100 GB",price:329,speedDown:100,type:"mobilt",campaignPrice:null,campaignMonths:null,discount:0,perks:["5G"],affiliateUrl:"https://www.tele2.se/handla/mobilt-bredband/"},
{id:"bb24",operator:"telenor",name:"Telenor Mobilt 100 GB",price:349,speedDown:100,type:"mobilt",campaignPrice:null,campaignMonths:null,discount:0,perks:["5G"],affiliateUrl:"https://www.telenor.se/mobilt-bredband/"},
];
const BB_OPERATORS=[{id:"telia",name:"Telia",color:"#6C1D9E"},{id:"tele2",name:"Tele2",color:"#E0E0E0"},{id:"telenor",name:"Telenor",color:"#0096E6"},{id:"tre",name:"Tre",color:"#FF6B00"},{id:"bahnhof",name:"Bahnhof",color:"#1a1a2e"},{id:"ownit",name:"Ownit",color:"#e05a1a"},{id:"bredbandsbolaget",name:"Bredbandsbolaget",color:"#005B99"}];

const TV_OPERATORS=[{id:"telia",name:"Telia",color:"#6C1D9E"},{id:"telenor",name:"Telenor",color:"#0096E6"},{id:"tele2",name:"Tele2",color:"#E0E0E0"},{id:"boxer",name:"Boxer",color:"#E8345A"},{id:"allente",name:"Allente",color:"#FF6B00"},{id:"sappa",name:"Sappa",color:"#22C55E"}];
const TV_PLANS=[
{id:"tv1",operator:"telia",name:"Telia TV Mini",price:249,campaignPrice:149,campaignMonths:6,channels:20,streaming:["TV4 Play"],playService:"Telia Play",type:"fiber",size:"bas",streamIncludes:[],perks:["HD"],channelUrl:"https://www.telia.se/tv",affiliateUrl:"https://www.telia.se/tv"},
{id:"tv2",operator:"telia",name:"Telia TV Mellan",price:399,campaignPrice:249,campaignMonths:6,channels:36,streaming:["TV4 Play","BritBox"],playService:"Telia Play",type:"fiber",size:"mellan",streamIncludes:[],perks:["Sport & film"],channelUrl:"https://www.telia.se/tv",affiliateUrl:"https://www.telia.se/tv"},
{id:"tv3",operator:"telia",name:"Telia TV Mycket",price:499,campaignPrice:349,campaignMonths:6,channels:45,streaming:["TV4 Play+","HBO Max","Viaplay Medium","BritBox"],playService:"Telia Play",type:"fiber",size:"stor",streamIncludes:["hbomax"],perks:["Allt för familjen"],channelUrl:"https://www.telia.se/tv",affiliateUrl:"https://www.telia.se/tv"},
{id:"tv4",operator:"telia",name:"Telia Lilla Sport",price:549,campaignPrice:349,campaignMonths:6,channels:10,streaming:["Disney+","HBO Max","Amazon Prime","TV4 Sport Fotboll"],playService:"Telia Play",type:"fiber",size:"sport",streamIncludes:["disneyplus","hbomax","prime","tv4sport"],perks:["Allsvenskan"],channelUrl:"https://www.telia.se/tv",affiliateUrl:"https://www.telia.se/tv"},
{id:"tv4b",operator:"telia",name:"Telia Stora Sport",price:899,campaignPrice:799,campaignMonths:6,channels:45,streaming:["Disney+","Netflix","HBO Max","Amazon Prime","Viaplay Sport","TV4 Sport"],playService:"Telia Play",type:"fiber",size:"sport",streamIncludes:["disneyplus","netflix","hbomax","prime","viaplaytotal","tv4sport"],perks:["PL","CL","F1","Allsvenskan"],channelUrl:"https://www.telia.se/tv",affiliateUrl:"https://www.telia.se/tv"},
{id:"tv5",operator:"telia",name:"Telia Största Sport",price:1099,campaignPrice:999,campaignMonths:6,channels:45,streaming:["Allt inkluderat"],playService:"Telia Play",type:"fiber",size:"sport",streamIncludes:["disneyplus","netflix","hbomax","prime","viaplaytotal","tv4sport","tv4hockey"],perks:["All sport inkl SHL"],channelUrl:"https://www.telia.se/tv",affiliateUrl:"https://www.telia.se/tv"},
{id:"tv6",operator:"telenor",name:"Telenor TV Bas",price:299,campaignPrice:99,campaignMonths:6,channels:21,streaming:["Telenor Stream"],playService:"Telenor Stream",type:"fiber",size:"bas",streamIncludes:[],perks:["TV-hubb ingår"],channelUrl:"https://www.telenor.se/handla/tv/",affiliateUrl:"https://www.telenor.se/handla/tv/"},
{id:"tv7",operator:"telenor",name:"Telenor TV Stor",price:499,campaignPrice:249,campaignMonths:12,channels:50,streaming:["Viaplay Film & Serier"],playService:"Telenor Stream",type:"fiber",size:"mellan",streamIncludes:[],perks:["Välj 1 streaming"],channelUrl:"https://www.telenor.se/handla/tv/",affiliateUrl:"https://www.telenor.se/handla/tv/"},
{id:"tv8",operator:"telenor",name:"Telenor TV Premium",price:899,campaignPrice:499,campaignMonths:12,channels:59,streaming:["Viaplay Total","HBO Max/SkyShowtime"],playService:"Telenor Stream",type:"fiber",size:"sport",streamIncludes:["viaplaytotal","hbomax"],perks:["PL","CL","F1","NHL"],channelUrl:"https://www.telenor.se/handla/tv/",affiliateUrl:"https://www.telenor.se/handla/tv/"},
{id:"tv9",operator:"tele2",name:"Tele2 Streaming Flex",price:199,campaignPrice:99,campaignMonths:12,channels:7,streaming:["Disney+","Välj 2"],playService:"Tele2 Play",type:"streaming",size:"bas",streamIncludes:["disneyplus"],perks:["Byt varje mån"],channelUrl:"https://www.tele2.se/tv",affiliateUrl:"https://www.tele2.se/tv"},
{id:"tv10",operator:"tele2",name:"Tele2 TV Standard",price:299,campaignPrice:199,campaignMonths:12,channels:30,streaming:["Disney+","Tele2 Play"],playService:"Tele2 Play",type:"fiber",size:"bas",streamIncludes:["disneyplus"],perks:["TV Hub ingår"],channelUrl:"https://www.tele2.se/tv",affiliateUrl:"https://www.tele2.se/tv"},
{id:"tv11",operator:"tele2",name:"Tele2 TV Flexibel",price:399,campaignPrice:249,campaignMonths:12,channels:50,streaming:["Viaplay","Disney+"],playService:"Tele2 Play",type:"fiber",size:"mellan",streamIncludes:["disneyplus"],perks:["Byt varje mån"],channelUrl:"https://www.tele2.se/tv",affiliateUrl:"https://www.tele2.se/tv"},
{id:"tv12",operator:"tele2",name:"Tele2 TV Premium",price:499,campaignPrice:299,campaignMonths:12,channels:70,streaming:["Viaplay Total","Disney+"],playService:"Tele2 Play",type:"fiber",size:"stor",streamIncludes:["disneyplus","viaplaytotal"],perks:["All sport"],channelUrl:"https://www.tele2.se/tv",affiliateUrl:"https://www.tele2.se/tv"},
{id:"tv12b",operator:"tele2",name:"Tele2 TV & Streaming Sport",price:1099,campaignPrice:699,campaignMonths:12,channels:32,streaming:["Disney+","Viaplay Total","TV4 Sport"],playService:"Tele2 Play",type:"fiber",size:"sport",streamIncludes:["disneyplus","viaplaytotal","tv4sport"],perks:["PL","CL","F1","Allsvenskan"],channelUrl:"https://www.tele2.se/tv",affiliateUrl:"https://www.tele2.se/tv"},
{id:"tv13",operator:"boxer",name:"Boxer TV Bas",price:299,campaignPrice:99,campaignMonths:12,channels:19,streaming:[],playService:"Tele2 Play",type:"fiber",size:"bas",streamIncludes:[],perks:["TV Hub mini"],channelUrl:"https://www.boxer.se/tv",affiliateUrl:"https://www.boxer.se/tv"},
{id:"tv14",operator:"boxer",name:"Boxer TV Premium",price:499,campaignPrice:null,campaignMonths:null,channels:55,streaming:["Disney+"],playService:"Tele2 Play",type:"fiber",size:"stor",streamIncludes:["disneyplus"],perks:["3 streaming"],channelUrl:"https://www.boxer.se/tv",affiliateUrl:"https://www.boxer.se/tv"},
{id:"tv15",operator:"allente",name:"Allente Stream Basic",price:249,campaignPrice:129,campaignMonths:3,channels:19,streaming:[],playService:"Allente-appen",type:"streaming",size:"bas",streamIncludes:[],perks:["Ingen bindning"],channelUrl:"https://www.allente.se",affiliateUrl:"https://www.allente.se"},
{id:"tv16",operator:"allente",name:"Allente Flex 4",price:449,campaignPrice:255,campaignMonths:3,channels:19,streaming:["Välj 4 tjänster"],playService:"Allente-appen",type:"streaming",size:"mellan",streamIncludes:[],perks:["Max flexibilitet"],channelUrl:"https://www.allente.se",affiliateUrl:"https://www.allente.se"},
{id:"tv17",operator:"sappa",name:"Sappa Play Fem",price:209,campaignPrice:99,campaignMonths:3,channels:15,streaming:[],playService:"Sappa",type:"streaming",size:"bas",streamIncludes:[],perks:["IPTV + kabel"],channelUrl:"https://www.sappa.se",affiliateUrl:"https://www.sappa.se"},
];

// ═══ STREAMING DATA (from prices.json) ═══
// ═══ AFFILIATE URLS ═══
const URLS={
  telia:"https://www.telia.se/",tele2:"https://www.tele2.se/",tre:"https://www.tre.se/",telenor:"https://www.telenor.se/",
  hallon:"https://www.hallon.se/",comviq:"https://www.comviq.se/",fello:"https://fello.se/",vimla:"https://vimla.se/",
  halebop:"https://www.halebop.se/",chilimobil:"https://www.chilimobil.se/",
  allente:"https://www.allente.se/",boxer:"https://www.boxer.se/",sappa:"https://www.sappa.se/",
  netflix:"https://www.netflix.com/se/",hbomax:"https://www.hbomax.com/se/",disneyplus:"https://www.disneyplus.com/sv-se",
  viaplayfilm:"https://viaplay.se/",viaplaytotal:"https://viaplay.se/",prime:"https://www.amazon.se/prime",
  skyshowtime:"https://www.skyshowtime.com/sv",tv4play:"https://www.tv4play.se/",tv4sport:"https://www.tv4play.se/sport",
  tv4hockey:"https://www.tv4play.se/sport",appletv:"https://tv.apple.com/se",discoveryplus:"https://www.discoveryplus.com/se",
  svtplay:"https://www.svtplay.se/",
};
const getUrl=(id)=>URLS[id]||"#";

const STREAMING=[
{id:"netflix",name:"Netflix",tiers:[{n:"Med reklam",p:109},{n:"Standard",p:149},{n:"Premium",p:199}],focus:"Bredast utbud",sport:false},
{id:"hbomax",name:"HBO Max",tiers:[{n:"Med reklam",p:79},{n:"Standard",p:119},{n:"Premium",p:189}],focus:"Kvalitetsserier",sport:false},
{id:"disneyplus",name:"Disney+",tiers:[{n:"Med reklam",p:69},{n:"Standard",p:109},{n:"Premium",p:149}],focus:"Familj, Marvel",sport:false},
{id:"viaplayfilm",name:"Viaplay Film",tiers:[{n:"Standard",p:99}],focus:"Nordiskt drama",sport:false},
{id:"viaplaytotal",name:"Viaplay Total",tiers:[{n:"Standard",p:449},{n:"6 mån bind",p:399},{n:"12 mån bind",p:349}],focus:"ALL sport + film",sport:true,sports:["Premier League","Champions League","F1","NHL","UFC","Golf Majors"]},
{id:"prime",name:"Amazon Prime",tiers:[{n:"Standard",p:69}],focus:"Brett, billigast",sport:false},
{id:"skyshowtime",name:"SkyShowtime",tiers:[{n:"Med reklam",p:59},{n:"Standard",p:89}],focus:"Paramount, Universal",sport:false},
{id:"tv4play",name:"TV4 Play+",tiers:[{n:"Bas",p:49},{n:"Total",p:149}],focus:"Svensk TV",sport:false},
{id:"tv4sport",name:"TV4 Sport Fotboll",tiers:[{n:"Fotboll",p:249}],focus:"Allsvenskan, Serie A",sport:true,sports:["Allsvenskan","Superettan","LaLiga","Serie A"]},
{id:"tv4hockey",name:"TV4 Sport Hockey",tiers:[{n:"Hockey",p:249}],focus:"SHL",sport:true,sports:["SHL","HockeyAllsvenskan"]},
{id:"appletv",name:"Apple TV+",tiers:[{n:"Standard",p:99}],focus:"Originalproduktioner",sport:false},
{id:"discoveryplus",name:"Discovery+",tiers:[{n:"Med reklam",p:49},{n:"Standard",p:79}],focus:"Reality, dokumentärer",sport:false},
{id:"svtplay",name:"SVT Play",tiers:[{n:"Gratis",p:0}],focus:"Public service",sport:true,sports:["VM 2026 (delvis)","OS"]},
];

const SPORT_RIGHTS=[
{sport:"Allsvenskan",service:"TV4 Sport Fotboll",price:249},
{sport:"Superettan",service:"TV4 Sport Fotboll",price:249},
{sport:"Premier League",service:"Viaplay Total",price:449},
{sport:"Champions League",service:"Viaplay Total",price:449},
{sport:"F1",service:"Viaplay Total",price:449},
{sport:"SHL",service:"TV4 Sport Hockey",price:249},
{sport:"NHL",service:"Viaplay Medium",price:199},
{sport:"LaLiga",service:"TV4 Sport Fotboll",price:249},
{sport:"Serie A",service:"TV4 Sport Fotboll",price:249},
{sport:"Bundesliga",service:"Viaplay Medium",price:199},
{sport:"UFC",service:"Viaplay Medium",price:199},
{sport:"Fotbolls-VM 2026",service:"SVT + TV4",price:0},
];

const PHONES=[
{id:"iphone17promax",brand:"Apple",name:"iPhone 17 Pro Max",storage:"256 GB",retail:16995,ops:[{o:"hallon",p:779},{o:"comviq",p:809},{o:"halebop",p:899},{o:"tre",p:899},{o:"tele2",p:949},{o:"telenor",p:979},{o:"telia",p:999}]},
{id:"iphone17pro",brand:"Apple",name:"iPhone 17 Pro",storage:"256 GB",retail:14995,ops:[{o:"comviq",p:684},{o:"hallon",p:739},{o:"halebop",p:784},{o:"tele2",p:839},{o:"tre",p:859},{o:"telia",p:899},{o:"telenor",p:914}]},
{id:"iphone17",brand:"Apple",name:"iPhone 17",storage:"256 GB",retail:11995,ops:[{o:"comviq",p:534},{o:"hallon",p:579},{o:"halebop",p:619},{o:"tre",p:699},{o:"tele2",p:734},{o:"telenor",p:749},{o:"telia",p:749}]},
{id:"iphoneair",brand:"Apple",name:"iPhone Air",storage:"256 GB",retail:12995,ops:[{o:"comviq",p:569},{o:"hallon",p:609},{o:"halebop",p:659},{o:"tre",p:729},{o:"tele2",p:769},{o:"telenor",p:779},{o:"telia",p:779}]},
{id:"iphone17e",brand:"Apple",name:"iPhone 17e",storage:"128 GB",retail:8495,ops:[{o:"comviq",p:399},{o:"hallon",p:429},{o:"halebop",p:469},{o:"tre",p:529},{o:"tele2",p:549},{o:"telenor",p:559},{o:"telia",p:569}]},
{id:"iphone16",brand:"Apple",name:"iPhone 16",storage:"128 GB",retail:11495,ops:[{o:"hallon",p:419},{o:"comviq",p:449},{o:"tre",p:442},{o:"tele2",p:549},{o:"telenor",p:549},{o:"halebop",p:569},{o:"telia",p:629}]},
{id:"iphone16promax",brand:"Apple",name:"iPhone 16 Pro Max",storage:"256 GB",retail:17495,ops:[{o:"comviq",p:599},{o:"tre",p:609},{o:"halebop",p:699},{o:"tele2",p:699},{o:"telenor",p:709},{o:"telia",p:799}]},
{id:"iphone15",brand:"Apple",name:"iPhone 15",storage:"128 GB",retail:9495,ops:[{o:"hallon",p:359},{o:"comviq",p:379},{o:"tre",p:399},{o:"tele2",p:449},{o:"telenor",p:459},{o:"halebop",p:489}]},
{id:"s26ultra",brand:"Samsung",name:"Galaxy S26 Ultra",storage:"256 GB",retail:17990,ops:[{o:"comviq",p:599},{o:"tre",p:649},{o:"tele2",p:699},{o:"telia",p:719},{o:"telenor",p:729}]},
{id:"s25ultra",brand:"Samsung",name:"Galaxy S25 Ultra",storage:"256 GB",retail:17990,ops:[{o:"comviq",p:559},{o:"tre",p:599},{o:"tele2",p:649},{o:"telenor",p:679},{o:"telia",p:699}]},
{id:"s25",brand:"Samsung",name:"Galaxy S25",storage:"128 GB",retail:11990,ops:[{o:"hallon",p:409},{o:"comviq",p:429},{o:"tre",p:449},{o:"tele2",p:499},{o:"telenor",p:519},{o:"telia",p:549}]},
{id:"s25fe",brand:"Samsung",name:"Galaxy S25 FE",storage:"128 GB",retail:8990,ops:[{o:"hallon",p:349},{o:"comviq",p:369},{o:"tre",p:389},{o:"tele2",p:429}]},
{id:"a56",brand:"Samsung",name:"Galaxy A56",storage:"128 GB",retail:4990,ops:[{o:"hallon",p:259},{o:"comviq",p:279},{o:"tre",p:299},{o:"tele2",p:329},{o:"telenor",p:339}]},
{id:"a36",brand:"Samsung",name:"Galaxy A36",storage:"128 GB",retail:3990,ops:[{o:"hallon",p:229},{o:"comviq",p:239},{o:"tre",p:259},{o:"tele2",p:289}]},
{id:"pixel9pro",brand:"Google",name:"Pixel 9 Pro",storage:"128 GB",retail:12990,ops:[{o:"tre",p:529},{o:"tele2",p:569},{o:"telenor",p:579},{o:"telia",p:599}]},
{id:"oneplus13",brand:"OnePlus",name:"OnePlus 13",storage:"256 GB",retail:11990,ops:[{o:"tre",p:479},{o:"tele2",p:519},{o:"telenor",p:539}]},
];

const VIA_OP=[
  {streaming:"disneyplus",bundles:[
    {op:"tele2",name:"Tele2 Streaming Flex",price:199,campaign:99,note:"Disney+ ingår + välj 2 till"},
    {op:"telia",name:"Telia Obegr. Plus Disney+",price:599,note:"Mobil obegränsad + Disney+"},
    {op:"allente",name:"Allente Flex 4",price:449,campaign:255,note:"Välj 4 tjänster, byt varje mån"},
  ]},
  {streaming:"netflix",bundles:[
    {op:"telia",name:"Telia Obegr. Plus Netflix",price:629,note:"Mobil obegränsad + Netflix Standard"},
  ]},
  {streaming:"hbomax",bundles:[
    {op:"telia",name:"Telia Obegr. Plus HBO",price:609,note:"Mobil obegränsad + HBO Max"},
    {op:"telenor",name:"Telenor TV Premium",price:899,campaign:499,note:"59 kanaler + Viaplay Total + HBO Max"},
    {op:"allente",name:"Allente Flex 4",price:449,campaign:255,note:"Välj HBO Max + 3 andra"},
  ]},
  {streaming:"prime",bundles:[
    {op:"allente",name:"Allente Flex 4",price:449,campaign:255,note:"Välj Prime + 3 andra"},
  ]},
  {streaming:"skyshowtime",bundles:[
    {op:"telenor",name:"Telenor TV Premium",price:899,campaign:499,note:"59 kanaler + SkyShowtime"},
    {op:"allente",name:"Allente Flex 4",price:449,campaign:255,note:"Välj SkyShowtime + 3 andra"},
  ]},
  {streaming:"appletv",bundles:[
    {op:"allente",name:"Allente Flex 4",price:449,campaign:255,note:"Välj Apple TV+ + 3 andra"},
  ]},
  {streaming:"viaplaytotal",bundles:[
    {op:"tele2",name:"Tele2 TV & Streaming Sport",price:1099,campaign:699,note:"Viaplay Total + Disney+ + TV4 Sport + 32 kanaler"},
    {op:"telenor",name:"Telenor TV Premium",price:899,campaign:499,note:"59 kanaler + Viaplay Total"},
    {op:"telia",name:"Telia Stora Sportpaketet",price:549,campaign:349,note:"Viaplay Total + Amazon Prime + 45 kanaler"},
  ]},
  {streaming:"tv4sport",bundles:[
    {op:"tele2",name:"Tele2 TV & Streaming Sport",price:1099,campaign:699,note:"TV4 Sport Fotboll ingår + Viaplay Total"},
    {op:"telia",name:"Telia Största Sportpaketet",price:999,campaign:899,note:"All sport inkl. Allsvenskan"},
    {op:"allente",name:"Allente Sport Standard",price:599,campaign:399,note:"TV4 Sport + V Sport + 35 kanaler"},
  ]},
  {streaming:"tv4hockey",bundles:[
    {op:"tele2",name:"Tele2 TV & Streaming Sport",price:1099,campaign:699,note:"TV4 Sport Hockey tillval"},
    {op:"telia",name:"Telia Största Sportpaketet",price:999,campaign:899,note:"All sport inkl. SHL"},
  ]},
];
// Sport cards data: each sport with all ways to watch
const SPORT_CARDS=[
  {sport:"Allsvenskan",icon:"⚽",ways:[{name:"TV4 Play Sport Fotboll",price:249,type:"fristående"},{name:"Tele2 TV & Streaming Sport",price:699,type:"operatör",op:"tele2",note:"Kampanj 12 mån, inkl Viaplay Total"},{name:"Telia Största Sport",price:899,type:"operatör",op:"telia",note:"Kampanj, all sport"},{name:"Allente Sport Standard",price:399,type:"operatör",op:"allente",note:"Kampanj 3 mån"}]},
  {sport:"Premier League",icon:"⚽",ways:[{name:"Viaplay Total",price:449,type:"fristående"},{name:"Tele2 TV & Streaming Sport",price:699,type:"operatör",op:"tele2",note:"Kampanj 12 mån"},{name:"Telenor TV Premium",price:499,type:"operatör",op:"telenor",note:"Kampanj 12 mån, 59 kanaler"},{name:"Telia Stora Sport",price:349,type:"operatör",op:"telia",note:"Kampanj 6 mån"}]},
  {sport:"Champions League",icon:"⚽",ways:[{name:"Viaplay Total",price:449,type:"fristående"},{name:"Tele2 TV & Streaming Sport",price:699,type:"operatör",op:"tele2"},{name:"Telenor TV Premium",price:499,type:"operatör",op:"telenor"}]},
  {sport:"F1",icon:"🏎",ways:[{name:"Viaplay Total",price:449,type:"fristående"},{name:"Tele2 TV & Streaming Sport",price:699,type:"operatör",op:"tele2"},{name:"Telenor TV Premium",price:499,type:"operatör",op:"telenor"},{name:"Telia Stora Sport",price:349,type:"operatör",op:"telia"}]},
  {sport:"SHL",icon:"🏒",ways:[{name:"TV4 Play Sport Hockey",price:249,type:"fristående"},{name:"Tele2 TV & Streaming Sport",price:699,type:"operatör",op:"tele2",note:"Tillval"},{name:"Telia Största Sport",price:899,type:"operatör",op:"telia"}]},
  {sport:"NHL",icon:"🏒",ways:[{name:"Viaplay Medium",price:199,type:"fristående"},{name:"Viaplay Total",price:449,type:"fristående"},{name:"Tele2 TV & Streaming Sport",price:699,type:"operatör",op:"tele2"}]},
  {sport:"LaLiga",icon:"⚽",ways:[{name:"TV4 Play Sport Fotboll",price:249,type:"fristående"},{name:"Tele2 TV & Streaming Sport",price:699,type:"operatör",op:"tele2"},{name:"Allente Sport",price:399,type:"operatör",op:"allente"}]},
  {sport:"Serie A",icon:"⚽",ways:[{name:"TV4 Play Sport Fotboll",price:249,type:"fristående"},{name:"Tele2 TV & Streaming Sport",price:699,type:"operatör",op:"tele2"}]},
  {sport:"Bundesliga",icon:"⚽",ways:[{name:"Viaplay Medium",price:199,type:"fristående"},{name:"Viaplay Total",price:449,type:"fristående"}]},
  {sport:"UFC",icon:"🥊",ways:[{name:"Viaplay Medium",price:199,type:"fristående"},{name:"Viaplay Total",price:449,type:"fristående"}]},
  {sport:"Fotbolls-VM 2026",icon:"🏆",ways:[{name:"SVT + TV4",price:0,type:"fristående",note:"Gratis — public service"}]},
];


window.BYYT = {
  C, OPERATORS, opColor, opName,
  PLANS, CATEGORIES, SORT_OPTIONS, BUNDLE_DISCOUNTS, BYYT_TIPS,
  BROADBAND, BB_OPERATORS,
  TV_OPERATORS, TV_PLANS,
  URLS, getUrl,
  STREAMING, SPORT_RIGHTS, PHONES,
  VIA_OP, SPORT_CARDS
};
})();

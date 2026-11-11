/* =========================================================
   XIAMEN FOODIES - RESTAURANT LIST
   Edit this file to add, change or remove restaurants.

   Each restaurant is one line between { and },
   Fields you can use (all optional except name, cuisine, cat):
     name:    "Restaurant name"
     cuisine: "Type of food"
     cat:     brunch | italian | mexican | indian | asian | chinese |
              korean | european | western | fusion
     area:    "SM2", "Shapowei", "Zhongshan Rd" ...
     address: "Full address (中文 is best for maps)"
     phone:   "13812345678"
     wechat:  "WeChat ID for booking"
     status:  "closed" | "unverified"   (leave out for normal places)
     multi:   true   (has several branches - shows a warning)
     tags:    "extra search words"
     hours:   "11:00 - 22:00"
     note:    "Short tip from members"
     mapq:    "Search words for the map (if different from the address)"

   Example:
   {name:"Shawarma King", cuisine:"Middle Eastern", cat:"indian", status:"closed"},

   Don't forget the comma at the end of each line!
   ========================================================= */

var R = [
  // Brunch / Café
  {name:"Panzi", cuisine:"Bagels / Western", cat:"brunch", area:"Hubin East Rd", address:"思明区湖滨东路100-10号 (大洲城市花园)", mapq:"Panzi 大洲城市花园店", hours:"11:00 - 20:00", tags:"breakfast bakery bread bagel"},
  {name:"Bagi & Yogi", cuisine:"Breakfast / Brunch / Bagels", cat:"brunch", area:"2 locations", address:"特贸苑店: 思明区官任路38号-5 (Jianye Rd metro exit 4, 320 m)", mapq:"Bagi&Yogi", hours:"Mon, Wed-Thu 09:00 - 16:00, Fri-Sun from 09:30 (closed Tue)", multi:true, tags:"breakfast bagel brunch"},
  {name:"Call it a Day", cuisine:"Brunch / light food", cat:"brunch", area:"2 branches", address:"万科店: 集美区万科云城2号楼群楼三楼 · 软二店: 思明区嘉义路6-101 (Hecuo metro exit 3)", mapq:"Call it a day", multi:true, tags:"breakfast brunch"},
  {name:"Lungooo Cafe", cuisine:"Brunch / Café", cat:"brunch", area:"Hubin East Rd", address:"思明区湖滨东路槟榔西里255号之3号", mapq:"Lungooo 湖滨东路", hours:"09:00 - 20:30", tags:"breakfast brunch risotto eggs benedict french toast gnocchi salad coffee"},
  {name:"Cooper Coffee 古柏咖啡", cuisine:"Café / Western food", cat:"brunch", area:"Yundang Rd", address:"思明区筼筜路3-2号", hours:"09:00 - 01:00", tags:"coffee sandwich pizza paella cake dessert late night"},
  {name:"CBD Cafe", cuisine:"CBD café", cat:"brunch", area:"Hubin North Rd", address:"思明区湖滨北路28号建业大厦附楼", mapq:"CBD Cafe 湖滨北路", wechat:"CBD5151128", hours:"10:00 - 22:00", tags:"cafe coffee cbd drinks"},
  {name:"Cho's Cafe & Bar", cuisine:"Brunch / Café & bar", cat:"brunch", area:"Hexiang West Rd", address:"思明区禾祥西路2号禾祥首府之122号", mapq:"chos cafe&bar", hours:"09:00 - 01:00", tags:"breakfast brunch chos coffee pancakes eggs benedict bar late night", note:"Recommended by members for brunch"},
  {name:"Spoiler 黄石", cuisine:"Western / Italian / Steak", cat:"brunch", area:"Several branches", address:"中华城店: 思明区思明南路195号中华城南区2F · 大悦城店: 集美区杏林湾路333号大悦城5楼 · THE SPOILER JFC店: 思明区环岛东路1701号JFC品尚中心B馆 · 云城万科里店: 集美区龙荷二里5-113号", mapq:"SPOILER黄石", multi:true, tags:"breakfast brunch western italian steak pasta", note:"Recommended by members for brunch"},
  {name:"Dijon 帝戎", cuisine:"Bakery / Coffee", cat:"brunch", area:"Hexiang West Rd (Lianbang Plaza)", address:"思明区禾祥西路联邦广场8号-1", mapq:"帝戎 联邦广场店", hours:"08:00 - 23:00", tags:"bakery bread pastries sandwiches coffee breakfast", note:"Members say: amazing sandwiches and pastries"},
  {name:"Banyan Gelato & Coffee", cuisine:"Gelato / Sandwiches / Pizza", cat:"brunch", area:"Huli - Yuehua Rd", address:"湖里区悦华路151号L101", mapq:"Banyan Gelato 悦华路", hours:"Opens 10:00 daily", tags:"ice cream dessert coffee"},
  {name:"Wild Strawberry Free Market 野草莓自由市场", cuisine:"Light fare / Western", cat:"brunch", area:"Lujiang Rd", address:"思明区鹭江道176号", mapq:"野草莓自由市场", hours:"Mon-Fri 11:00 - 20:00, weekends from 10:00", tags:"market healthy cake western brunch"},
  {name:"Wagas", cuisine:"Healthy & tasty", cat:"brunch", tags:"salad healthy breakfast coffee", status:"unverified"},
  // Italian / Pizza
  {name:"La Pizza 意欢多", cuisine:"Italian", cat:"italian", area:"COCO Park", address:"思明区星河COCO Park 3号门", mapq:"意欢多la pizza", hours:"11:30 - 22:00", tags:"pizza pasta thin crust"},
  {name:"Moana Napoli 莫安娜披萨", cuisine:"Neapolitan pizza", cat:"italian", area:"Yanwu Rd (Xiamen University)", address:"思明区演武路4号 (演武1658)", mapq:"moana napoli莫安娜披萨", hours:"11:00 - 21:00", tags:"italian pizza"},
  {name:"Casa Mia 卡萨米亚", cuisine:"Italian", cat:"italian", area:"Xidi", address:"思明区筼筜路1-114号", mapq:"CASAMIA卡萨米亚 西堤别墅店", hours:"11:00 - 22:00", tags:"pizza pasta italian fine dining seafood"},
  {name:"Stove 围炉汇意大利窑烤披萨", cuisine:"Wood-fired pizza", cat:"italian", area:"Huli Ave", address:"湖里区湖里大道22-29号", mapq:"stove围炉汇意大利窑烤披萨", tags:"pizza italian"},
  {name:"Bollo 意大利餐厅", cuisine:"Italian", cat:"italian", area:"2 branches", address:"五缘湾店: 湖里区钟宅北苑7-104 · 龙山万物工场店 (pasta): 思明区龙山中路53-121号万物工场", mapq:"BOLLO意大利", multi:true, tags:"pizza pasta italian wuyuan bay"},
  {name:"L'Unico 意家意大利餐厅", cuisine:"Italian", cat:"italian", area:"Marco Polo Hotel", address:"思明区建业路8号马哥孛罗东方大酒店1层104店面", mapq:"L'UNICO意家意大利餐厅 马可店", hours:"11:00 - 23:00", tags:"pizza pasta italian marco polo fine dining private room"},
  {name:"Paradiso 窑烤披萨", cuisine:"Wood-fired pizza", cat:"italian", area:"Xiamen University / Shapowei", address:"思明区大学路162-115 (near 厦大医院)", mapq:"Paradiso窑烤披萨 厦大店", hours:"11:30 - 21:30", tags:"italian pizza coffee bread"},
  {name:"Cut & Eat Pizza 手工披萨", cuisine:"Pizza", cat:"italian", area:"Hubin West Rd", address:"思明区湖滨西路72号8-103F (嘉美花园西1门旁)", mapq:"CUT&EAT PIZZA 禾祥西路店", hours:"11:00 - 14:00, 17:00 - 22:00", tags:"italian pizza fried chicken"},
  {name:"Forno 那不勒斯披萨店", cuisine:"Neapolitan pizza", cat:"italian", area:"Yuxiu Middle Rd", address:"思明区筼筜街道育秀中路211号103室", mapq:"Forno那不勒斯披萨店", hours:"11:00 - 14:00, 17:00 - 21:00", tags:"italian pizza wood fired"},
  // Mexican / Latin
  {name:"Coyote 墨西哥餐厅", cuisine:"Mexican", cat:"mexican", area:"Guanren Rd", address:"思明区官任路2-20号 (Jianye Rd metro exit 4, 480 m)", mapq:"Coyote墨西哥餐厅", hours:"11:00 - 01:00", tags:"tacos burrito quesadilla mexican"},
  {name:"Taco Truck 塔可卡车", cuisine:"Tacos (not the same as Taco Taco)", cat:"mexican", area:"Huli - Yuehua Rd", address:"湖里区悦华路151号L108室", mapq:"塔可卡车TACO TRUCK", hours:"11:00 - 14:30, 16:00 - 21:00", tags:"tacos mexican burrito truck"},
  {name:"Taco Taco 嗒呵嗒呵", cuisine:"Tacos", cat:"mexican", area:"Hubin North Rd (Binbei branch)", address:"思明区湖滨北路28号2-102单元", mapq:"TACO TACO嗒呵嗒呵 滨北店", hours:"10:30 - 21:00", multi:true, tags:"mexican burrito tacos"},
  {name:"Mojar 么哈", cuisine:"Mexican", cat:"mexican", area:"Jimei / Xiang'an - several branches", address:"集美店: 集美区集美大道与兑山西路交叉口 · 泰禾天街店 (bar): 翔安区西岩一里3 · 么哈STEPS 云城万科里: 集美区兑山西路龙荷二里3号", mapq:"么哈MOJAR", multi:true, tags:"tacos burrito mexican jimei"},
  {name:"Loco Burrito", cuisine:"Burritos / Mexican", cat:"mexican", area:"Hubin area (near MixC)", address:"思明区湖滨三里2号102室", mapq:"LocoBurrito", hours:"11:00 - 21:00 (closed Tuesday)", tags:"burrito mexican tacos beef"},
  {name:"Tiki Tapas TT西班牙餐吧", cuisine:"Spanish tapas bar", cat:"mexican", area:"Huli - Gudishi", address:"湖里区金边路566-107航空古地石广场B区G006", mapq:"Tikitapas TT西班牙餐吧", hours:"17:00 - 02:00", tags:"spanish tapas latin bar sports late night"},
  // Indian / Middle Eastern
  {name:"Indiano 印度风", cuisine:"Indian", cat:"indian", area:"Huli - Jiangtou", address:"湖里区江头北路69号", mapq:"印度风 江头中心店", hours:"11:30 - 22:30", tags:"curry naan masala indian johns samrat"},
  {name:"Tiryaki Turkish Halal Restaurant 特丽雅齐", cuisine:"Turkish (halal)", cat:"indian", area:"Zhonghua City (中华城)", address:"思明区思明南路195号中华城北区", mapq:"Tiryaki Turkish Helal Restoran", hours:"12:00 - 23:00", tags:"turkish halal kebab bbq middle eastern tiryski", note:"Members say: very warm owner - a must if you like Turkish food"},
  {name:"Curry House 47咖喱东南亚餐馆", cuisine:"Malaysian / South Indian curry", cat:"indian", area:"Xiaoxue Rd", address:"思明区小学路90号", mapq:"47咖喱东南亚餐馆", hours:"11:30 - 23:00", tags:"curry malaysian satay indonesian"},
  {name:"Gagan 天宫印巴餐厅", cuisine:"Indian / Pakistani", cat:"indian", area:"Baolong One City", address:"思明区宝龙一城L1", mapq:"天宫印巴餐厅", tags:"curry halal naan gangan indian pakistani"},
  {name:"Sham Arabic Restaurant 萨穆阿拉伯餐厅", cuisine:"Lebanese / Middle Eastern", cat:"indian", area:"Changqing Rd (Tongbao Building)", address:"思明区长青路1-3号通宝大厦", mapq:"萨穆阿拉伯餐厅 通宝大厦店", hours:"09:30 - 23:00", tags:"halal shawarma hummus arabic middle eastern late night"},
  // Asian
  {name:"Saigon Saigon 西贡西贡", cuisine:"Vietnamese", cat:"asian", area:"Jianye Rd", address:"思明区建业路18号阳明楼F1层", mapq:"西贡西贡 滨北店", hours:"11:00 - 21:30", tags:"pho noodles banh mi vietnamese coffee"},
  {name:"Muine", cuisine:"Vietnamese", cat:"asian", area:"SM Mall, level 5", tags:"pho noodles vietnamese", note:"Members say the phở is the best in town, with lots of dishes"},
  {name:"Mignons", cuisine:"Vietnamese", cat:"asian", status:"closed", tags:"minions pho"},
  {name:"Thai Rice House 泰香米", cuisine:"Thai / Southeast Asian", cat:"asian", area:"MixC Mall", address:"思明区禾祥东路99号厦门万象城517", mapq:"泰香米 厦门万象城店", hours:"11:00 - 22:00", tags:"thai curry mixc"},
  {name:"Thaizhijia 泰之家泰国菜", cuisine:"Thai", cat:"asian", area:"Haian St", address:"思明区海岸街2号102商铺", mapq:"泰之家泰国菜 故宫路店", hours:"11:00 - 14:00, 17:00 - 21:00", tags:"thai curry mango sticky rice"},
  {name:"Tonkatsu 03 日式炸猪排", cuisine:"Japanese pork cutlet", cat:"asian", area:"Douxi Rd", address:"思明区斗西路156祥和广场F6层", mapq:"TONKATSU 03日式炸猪排 退化公园店", hours:"11:30 - 14:00, 17:00 - 20:30", tags:"japanese pork cutlet"},
  {name:"BANDUNG", cuisine:"Indonesian", cat:"asian", tags:"halal", status:"unverified"},
  {name:"MABUHAY", cuisine:"Filipino (Pinoy)", cat:"asian", tags:"philippines"},
  {name:"Nyonya Kitchen", cuisine:"Malaysian Nyonya", cat:"asian", area:"SM2", tags:"malaysian", status:"unverified"},
  {name:"Dai Mei 傣妹早晚点", cuisine:"Dai / Yunnan rice noodles", cat:"asian", area:"Xiahe Rd", address:"思明区厦禾路规划9大同学府F1层", mapq:"傣妹早晚点 思北店", hours:"11:00 - 16:30, 17:30 - 21:00", tags:"chinese noodles yunnan dai"},
  {name:"Dai Tai 傣泰", cuisine:"Yunnan / Dai & Thai", cat:"asian", area:"Jianye Rd", address:"思明区建业路18号阳明楼F1层", mapq:"Dai Tai 傣泰", hours:"11:30 - 14:00, 17:30 - 22:00", tags:"chinese yunnan dai thai"},
  // Korean
  {name:"Min He Nan 闽和南", cuisine:"Minnan / Fujian (upscale)", cat:"chinese", area:"3 branches", address:"万象城店 (MixC): 思明区禾祥东路万象城3楼328商铺 · 国贸中心店: 湖里区仙岳路4686-4688号国贸金融中心 · K11 Select店: 湖里区顶石路6号 K11 Select L3", mapq:"闽和南", multi:true, tags:"chinese fujian minnan local fancy mixc k11 michelin", note:"Fancy local Minnan food - Michelin Bib Gourmand recommended"},
  {name:"Yunlan Impression 云蓝印象云南菜", cuisine:"Yunnan", cat:"chinese", area:"3 branches", address:"湾悦城店 (One Park): 湖里区日圆二里1号湾悦城03楼L3-001 · 莲花店: 思明区嘉莲里7号 · 阿罗海店: 海沧区滨湖北二路阿罗海城市广场一楼", mapq:"云蓝印象云南菜", multi:true, tags:"chinese yunnan potato beef mint one park", note:"Members love the potato dishes and the beef wrapped around mint (One Park branch)"},
  {name:"Améigo Restaurant", cuisine:"Yunnan", cat:"chinese", area:"Jimei - Joy City, 4th floor", mapq:"厦门大悦城 云南菜", tags:"chinese yunnan shrimp beef mint pickled vegetables jimei joy city ameigo amigo", note:"Must-try shrimp (spicy tomato or mushroom sauce), beef with mint; outdoor tables with a nice view"},
  {name:"Lao Chongqing 老重庆新港店", cuisine:"Sichuan / Chongqing", cat:"chinese", area:"Hubin North Rd (Xingang Plaza)", address:"思明区湖滨北路18号新港广场东楼D1", mapq:"老重庆新港店", hours:"11:00 - 14:00, 17:00 - 22:30", tags:"chinese sichuan chongqing spicy laziji la zi ji old chongqing"},
  {name:"首锦屋炸鸡·年糕火锅", cuisine:"Korean fried chicken / Tteokbokki hotpot", cat:"korean", area:"Jimei", address:"集美区岑东路148号", mapq:"首锦屋炸鸡年糕火锅", hours:"11:00 - 14:00, 16:30 - 21:00", tags:"chicken hotpot korean jimei"},
  {name:"Yanqing 焰请烤肉铺子", cuisine:"Korean BBQ", cat:"korean", area:"Jimei - Joy City", address:"集美区杏林湾路33号厦门大悦城5楼", mapq:"焰请烤肉铺子 厦门大悦城店", hours:"10:00 - 24:00", tags:"bbq barbecue korean joy city jimei service", note:"Excellent service - Haidilao level"},
  // European
  {name:"Golden Olives G.O今橄榄", cuisine:"Greek", cat:"european", area:"Paragon Center", address:"思明区嘉禾路199号磐基名品中心G层", mapq:"G.O今橄榄 磐基中心店", hours:"11:00 - 23:00", tags:"mediterranean greek paragon"},
  {name:"Ay Manuela", cuisine:"Spanish", cat:"european", area:"Yundang", address:"思明区官任路与筼筜路交叉口北120米", mapq:"Manuela 官任路", hours:"10:00 - 22:30", tags:"tapas paella spanish seafood"},
  {name:"Greg's 法国餐厅", cuisine:"French", cat:"european", area:"Xidi Coffee Street", address:"思明区建业路吉祥家园1-106", mapq:"Greg's厦门法国餐厅 西堤咖啡街店", hours:"Mon-Fri 11:30 - 14:30, 17:30 - 21:30 (weekend hours differ)", tags:"french fine dining date xidi"},
  {name:"Odenwalder", cuisine:"German", cat:"european", tags:"beer sausage", status:"unverified"},
  // Western / BBQ / Burgers
  {name:"The Void", cuisine:"Western", cat:"western", tags:"", status:"unverified"},
  {name:"Lone Star 孤星汉堡", cuisine:"American burgers", cat:"western", area:"Hubin North Rd", address:"思明区湖滨北路42-4号102室", mapq:"LONE STAR孤星汉堡", hours:"11:30 - 21:00 (closed Tuesday)", tags:"burger american"},
  {name:"Vagabond", cuisine:"American", cat:"western", status:"closed", tags:"burger"},
  {name:"Jacky Angela Steakhouse", cuisine:"Steakhouse", cat:"western", area:"Marco Polo Hotel", address:"思明区建业路8号马哥孛罗大酒店101号商铺", mapq:"思明区建业路8号马哥孛罗大酒店", tags:"steak marco polo fine dining"},
  {name:"Hot Iron", cuisine:"Barbecue", cat:"western", tags:"bbq", status:"unverified"},
  {name:"Bravo Burger 百万万汉堡", cuisine:"Burgers", cat:"western", area:"Shapowei", address:"思明区大学路129-103号 (alley right of 三味酥屋 + 海蛎煎店)", mapq:"百万万汉堡 沙坡尾创意巷店", hours:"11:00 - 22:00", tags:"american burger shapowei"},
  {name:"Best to Grill 烤最好", cuisine:"Filipino BBQ", cat:"western", area:"Jimei (Oak Bay)", address:"集美区橡树湾三期杏北四里92号", mapq:"烤最好 橡树湾3期店", hours:"10:00 - 20:00", tags:"bbq filipino garlic rice jimei"},
  {name:"The House 老别墅西餐厅", cuisine:"Western: pasta, pizza, steak, fish", cat:"western", area:"Xidi / Yundang Rd", address:"老别墅西餐厅·酒馆(西堤店), 思明区筼筜路", mapq:"老别墅西餐厅 西堤店", tags:"italian pizza pasta steak fish bar wine"},
  {name:"Stacked 叠", cuisine:"Western, fish & chips", cat:"western", area:"Jimei", address:"集美区集美街道嘉庚路11-102", mapq:"Stacked·叠", tags:"fish and chips burrito bowl mexican british burger jimei", note:"Members love the fish & chips"},
  {name:"Yellowstone House 黄石屋", cuisine:"Western", cat:"western", area:"Xiang'an", address:"翔安区新店镇沙美村鹊峰西里54号", mapq:"黄石屋YellowStoneHouse", hours:"11:00 - 14:00, 17:00 - 22:00", tags:"steak western xiangan"},
  // Fusion
  {name:"COMMUNE 幻师", cuisine:"Bar & Western food", cat:"fusion", area:"Huli - several branches", address:"K11 Select (湖里区浦东路12号 C馆1层) · 湾悦城 (湖里区五缘湾道日圆二里1号) · 古地石 (湖里区金边路航空古地石广场A区1层)", mapq:"COMMUNE幻师", multi:true, tags:"western drinks beer bar k11 wuyuan bay"},
  {name:"ADLIB 即兴", cuisine:"Chinese-Western fusion / Western", cat:"fusion", area:"2 branches", address:"① 即兴ADLIB A PLEA - 思明区磐基名品中心一楼北门1号 (late night) ② 即兴ADLIB 退化公园店 - 思明区斗西路156-158号亚珠大酒楼6楼", mapq:"即兴ADLIB", multi:true, tags:"chinese western fusion paragon late night bar brunch", note:"Members recommend it for brunch"},
  {name:"Pennehut 畔尼意面", cuisine:"Pasta & rice bowls", cat:"fusion", area:"SM Mall, phase 3", mapq:"Pennehut畔尼意面", tags:"pasta italian rice bowl beef stew sm", note:"Members say: really good"},
  {name:"4 People", cuisine:"Contemporary", cat:"fusion", tags:"", status:"unverified"},
  {name:"UNDEFINED 慢·直火料理", cuisine:"Wood-fire grill / Creative", cat:"fusion", area:"Convention Center", address:"思明区吕岭路1819-1号107室 (Metro Line 2, Software Park Phase II, exit 3)", mapq:"慢UNDEFINED直火料理", hours:"11:00 - 22:00", tags:"steak grill bbq new western lunch set", note:"New - opened Nov 2026"}
];

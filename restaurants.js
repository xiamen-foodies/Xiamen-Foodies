/* =========================================================
   XIAMEN FOODIES - RESTAURANT LIST
   Edit this file to add, change or remove restaurants.

   Each restaurant is one line between { and },
   Fields you can use (all optional except name, cuisine, cat):
     name:    "Restaurant name"
     cuisine: "Type of food"
     cat:     brunch | italian | mexican | indian | asian |
              korean | european | western | fusion
     area:    "SM2", "Shapowei", "Zhongshan Rd" ...
     address: "Full address (中文 is best for maps)"
     phone:   "13812345678"
     wechat:  "WeChat ID for booking"
     price:   "¥" / "¥¥" / "¥¥¥"
     status:  "open" | "closed"   (leave out = not checked yet)
     tags:    "extra search words"

   Example:
   {name:"Shawarma King", cuisine:"Middle Eastern", cat:"indian", status:"closed"},

   Don't forget the comma at the end of each line!
   ========================================================= */

var R = [
  // Brunch / Café
  {name:"Panzi", cuisine:"Bagels", cat:"brunch", tags:"breakfast bakery bread"},
  {name:"Bagi and Yogi", cuisine:"Breakfast / Brunch", cat:"brunch", tags:"breakfast"},
  {name:"Call it a Day", cuisine:"Brunch", cat:"brunch", tags:"breakfast"},
  {name:"Banyan Gelato", cuisine:"Gelato / Sandwiches / Pizza", cat:"brunch", tags:"ice cream dessert"},
  {name:"Wild Strawberry Free Market", cuisine:"Light fare", cat:"brunch", tags:"market healthy"},
  {name:"Wagas", cuisine:"Healthy & tasty", cat:"brunch", tags:"salad healthy breakfast coffee"},
  // Italian / Pizza
  {name:"La Pizza", cuisine:"Italian", cat:"italian", tags:"pizza pasta"},
  {name:"Moana", cuisine:"Italian", cat:"italian", tags:"pizza pasta"},
  {name:"Casa Mia", cuisine:"Italian", cat:"italian", tags:"pizza pasta"},
  {name:"Stove", cuisine:"Italian", cat:"italian", tags:"pizza pasta"},
  {name:"Bollo", cuisine:"Italian", cat:"italian", tags:"pizza pasta"},
  {name:"L'Unico", cuisine:"Italian", cat:"italian", tags:"pizza pasta"},
  {name:"Paradiso", cuisine:"Pizza", cat:"italian", area:"Shapowei", tags:"italian"},
  {name:"Cut n Eat", cuisine:"Pizza", cat:"italian", tags:"italian"},
  {name:"Forno", cuisine:"Pizza", cat:"italian", tags:"italian"},
  // Mexican / Latin
  {name:"Coyote", cuisine:"Mexican", cat:"mexican", tags:"tacos burrito"},
  {name:"Taco Taco", cuisine:"Tacos", cat:"mexican", tags:"mexican burrito"},
  {name:"Mojar", cuisine:"Mexican", cat:"mexican", tags:"tacos burrito"},
  {name:"Tiki Tapas", cuisine:"Tapas / Mexican / Latin", cat:"mexican", tags:"spanish drinks"},
  // Indian / Middle Eastern
  {name:"Indiano Johns Samrat", cuisine:"Indian", cat:"indian", tags:"curry naan"},
  {name:"Curry House", cuisine:"Malaysian / Curry", cat:"indian", tags:"curry malaysian"},
  {name:"Gangan", cuisine:"Indian / Pakistani", cat:"indian", area:"Lucuo", tags:"curry halal naan"},
  {name:"Sham Arabic Restaurant", cuisine:"Lebanese / Middle Eastern", cat:"indian", tags:"halal shawarma hummus arabic"},
  // Asian
  {name:"Saigon Saigon", cuisine:"Vietnamese", cat:"asian", tags:"pho noodles"},
  {name:"Muine", cuisine:"Vietnamese", cat:"asian", area:"SM2", tags:"pho noodles"},
  {name:"Thai Rice House", cuisine:"Thai", cat:"asian", tags:"curry"},
  {name:"Thaizhijia", cuisine:"Thai", cat:"asian", tags:"curry"},
  {name:"Tonkatsu 03", cuisine:"Japanese", cat:"asian", tags:"pork cutlet"},
  {name:"BANDUNG", cuisine:"Indonesian", cat:"asian", tags:"halal"},
  {name:"MABUHAY", cuisine:"Filipino (Pinoy)", cat:"asian", tags:"philippines"},
  {name:"Nyonya Kitchen", cuisine:"Malaysian Nyonya", cat:"asian", area:"SM2", tags:"malaysian"},
  {name:"Dai Mei 傣妹早晚点", cuisine:"Dai / Yunnan rice noodles", cat:"asian", tags:"chinese noodles yunnan"},
  {name:"Dai Tai", cuisine:"Yunnan", cat:"asian", tags:"chinese yunnan"},
  // Korean
  {name:"首锦屋炸鸡·年糕火锅", cuisine:"Korean fried chicken / Tteokbokki", cat:"korean", tags:"chicken hotpot"},
  {name:"Yanqing", cuisine:"Korean BBQ", cat:"korean", tags:"bbq barbecue"},
  // European
  {name:"Golden Olives", cuisine:"Greek", cat:"european", tags:"mediterranean"},
  {name:"Ay Manuela", cuisine:"Spanish", cat:"european", tags:"tapas paella"},
  {name:"Greg's", cuisine:"French", cat:"european", tags:""},
  {name:"Odenwalder", cuisine:"German", cat:"european", tags:"beer sausage"},
  // Western / BBQ / Burgers
  {name:"The Void", cuisine:"Western", cat:"western", tags:""},
  {name:"Lonestar", cuisine:"American", cat:"western", tags:"burger"},
  {name:"Vagabond", cuisine:"American", cat:"western", tags:"burger"},
  {name:"Jacky Angela", cuisine:"Steakhouse", cat:"western", tags:"steak"},
  {name:"Hot Iron", cuisine:"Barbecue", cat:"western", tags:"bbq"},
  {name:"Bravo Burger", cuisine:"Burgers", cat:"western", area:"Shapowei", tags:"american"},
  {name:"Best to Grill", cuisine:"Burgers & Filipino BBQ", cat:"western", tags:"bbq filipino"},
  {name:"CBD", cuisine:"Western", cat:"western", tags:""},
  {name:"Yellowstone", cuisine:"Western", cat:"western", tags:""},
  // Fusion
  {name:"Commune", cuisine:"General", cat:"fusion", tags:"western drinks"},
  {name:"ADLIB", cuisine:"Chinese-Western fusion", cat:"fusion", tags:"chinese"},
  {name:"4 People", cuisine:"Contemporary", cat:"fusion", tags:""}
];

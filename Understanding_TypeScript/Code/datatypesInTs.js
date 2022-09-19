// number data type
var a = 123;
var b = 123.4567;
var c = 1010111;
var d = 322;
// we have to put 0o first and then the octal number for octal number
var e = 0x345a4f3;
// we have to put 0x first and then number for hexa decimal
// string data type
var f = "Hii";
var g = "Hii learners";
var h = "c";
var i = "hiiis";
// boolean
var j = true;
var k = false;
// null and undefined
var l = null;
var m = undefined;
// any
var n = "Great Learning";
var o = 12;
var p = [12, "122", 0xabdde, true, null, undefined];
// Array
var q = ["Hello..."];
// tuple
var r = [true, 12];
// union type
// it will take number or string in any order
var s = ["Evening", 45, 123, "Night"];
// enum type
// will return the value based on number making first value as 0
// 1. Number enums
var Games_1;
(function (Games_1) {
    Games_1[Games_1["VideoGames"] = 0] = "VideoGames";
    Games_1[Games_1["OutoorGames"] = 1] = "OutoorGames";
    Games_1[Games_1["IndoorGames"] = 2] = "IndoorGames";
})(Games_1 || (Games_1 = {}));
var Games_2;
(function (Games_2) {
    Games_2[Games_2["VideoGames"] = 1] = "VideoGames";
    Games_2[Games_2["OutoorGames"] = 2] = "OutoorGames";
    Games_2[Games_2["IndoorGames"] = 3] = "IndoorGames";
})(Games_2 || (Games_2 = {}));
var Games_3;
(function (Games_3) {
    Games_3[Games_3["VideoGames"] = 10] = "VideoGames";
    Games_3[Games_3["OutoorGames"] = 4] = "OutoorGames";
    Games_3[Games_3["IndoorGames"] = 1] = "IndoorGames";
})(Games_3 || (Games_3 = {}));
// 2. String enums
var Sports;
(function (Sports) {
    Sports["Cricket"] = "CRICKET";
    Sports["Football"] = "FOOTBALL";
    Sports["Hockey"] = "HOCKEY";
    Sports["BasketBall"] = "BASKETBALL";
})(Sports || (Sports = {}));
// 3. Heterogenous(number and string together) enums
// here the location value will become 46 by default
var Brands_1;
(function (Brands_1) {
    Brands_1["Puma"] = "Puma";
    Brands_1[Brands_1["Branches"] = 45] = "Branches";
    Brands_1[Brands_1["location"] = 46] = "location";
})(Brands_1 || (Brands_1 = {}));
var Brands_2;
(function (Brands_2) {
    Brands_2["Puma"] = "Puma";
    Brands_2[Brands_2["location"] = 12] = "location";
    Brands_2["StoreLocation"] = "Delhi";
})(Brands_2 || (Brands_2 = {}));
console.log("\n-------------------------Number data type-------------------------\n");
console.log(typeof a, ' : ', a);
console.log(typeof b + ' : ' + b);
console.log(typeof c + ' : ' + c);
console.log(typeof d + ' : ' + d);
console.log(typeof e + ' : ' + e);
console.log("\n-------------------------String data type-------------------------\n");
console.log(typeof f + ' : ' + f);
console.log(typeof g + ' : ' + g);
console.log(typeof h + ' : ' + h);
console.log(typeof i + ' : ' + i);
console.log("\n-------------------------boolean data type-------------------------\n");
console.log(typeof j + ' : ' + j);
console.log(typeof k + ' : ' + k);
console.log("\n-----------------null and undefined data type-------------------\n");
console.log(typeof l + ' : ' + l);
console.log(typeof m + ' : ' + m);
console.log("\n-------------------------any data type-------------------------\n");
console.log(typeof n + ' : ' + n);
console.log(typeof o + ' : ' + o);
console.log(typeof p + ' : ' + p);
console.log("\n-------------------------array data type-------------------------\n");
console.log(typeof q + ' : ' + q);
console.log("\n-------------------------tuple data type-------------------------\n");
console.log(typeof r + ' : ' + r);
console.log("\n-------------------------Union data type-------------------------\n");
console.log(typeof s + ' : ' + s);
console.log("\n-------------------------enum data type-------------------------\n");
console.log("\n------enum data type with default number representation------\n");
console.log(typeof Games_1 + ' : ' + Games_1[0]);
console.log(typeof Games_1 + ' : ' + Games_1["VideoGames"]);
console.log(typeof Games_1 + ' : ' + Games_1.IndoorGames);
console.log("\n-----enum data type with change of starting number reresentation-----\n");
console.log(typeof Games_2 + ' : ' + Games_2[2]);
console.log(typeof Games_2 + ' : ' + Games_2["OutoorGames"]);
console.log(typeof Games_2 + ' : ' + Games_2.VideoGames);
console.log("\n----------enumdata type with customized number representation-----------\n");
console.log(typeof Games_3 + ' : ' + Games_3[10]);
console.log(typeof Games_3 + ' : ' + Games_3["IndoorGames"]);
console.log(typeof Games_3 + ' : ' + Games_3.OutoorGames);
console.log("\n---------------enum data type with string representation---------------\n");
console.log(typeof Sports + ' : ' + Sports.BasketBall);
console.log(typeof Sports + ' : ' + Sports["BasketBall"]);
console.log("\n-----------enumdata type with heterogenous representation-----------\n");
console.log(typeof Brands_1 + ' : ' + Brands_1.Branches);
console.log(typeof Brands_1 + ' : ' + Brands_1.location);
console.log(typeof Brands_1 + ' : ' + Brands_1.Puma);

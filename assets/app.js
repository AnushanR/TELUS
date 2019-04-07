var priceList = [
    "premium+ : 0$",
    "premium : 0$",
    "Standard: 150$",
    "retail: 1055$",


]

var dataList = [
    "unlimited nation wide calling: 0 ",
    "Canada: 90"
]

var dataAmount = [
    "6 Gb",
    "10gb",
    "14 gb"
]


var priceList = $("#phone-options");

for(var i = 0; i < priceList.length; i ++) {

    var newPriceList = $("<div>" + priceList[i] + "</div>");

    priceList.append(newPriceList);
}




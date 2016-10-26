var cheerio = require('cheerio');
var request = require('request');

/*request("http://texnano.com.ua/", function(err, res, body){
 var $ = cheerio.load(body);
 console.log($('html').html());
 });*/
/*
 [
 {
 name: "asfasasfasf",
 url: "http://asfasfasasf",
 itemsCount: 10
 }
 ]
 */
var texnanoCategories = []

request("http://texnano.com.ua/index.php?route=product/category&path=110", function (err, res, body) {
    var $ = cheerio.load(body);
    var categories = $('div.refine-image a');
    for (var i = 0; i < categories.length; i++) {
        var obj = {};
        var name  = $(categories[i]).find('span').text();
        var url = $(categories[i]).attr('href');

        var new_name = name.substring(
            0, name.indexOf('(')-1
        )
        var count = name.substring(name.indexOf('(')+1, name.indexOf(')'));

        obj["name"] = new_name;
        obj["url"] = url;
        obj["itemsCount"] = count;
        texnanoCategories.push(obj);
    }
});

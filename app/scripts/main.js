console.log('This is it! The project!');

$(function(){
  Parse.initialize("4C5G0XP4utK5POqJ4lcUE0ynbtQfxXE0wqVeCYaU", "KiiOSKGtBK3nQzQqtuyaPOSK6g189yGvLLN3fx4J");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});

})

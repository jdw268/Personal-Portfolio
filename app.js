
//get all the h2s that are only the section names
var sectionHeaders = document.getElementsByTagName('h2');
console.log(sectionHeaders);

var h2Text;
var length;

//loop through each h2, get its length, select it's embedded div, then assign that div that length
for(var i = 0; i<sectionHeaders.length; i++){
    h2Text = sectionHeaders[i].innerText;
    length = h2Text.length;
    var h2Child = sectionHeaders[i].children;
    for(var x =0; x<length; x++){

       // h2Child[0].innerText = "test ";
    }
    //sectionHeaders[i].children.
}
//alert("Hello, world!"); // this is a JavaScript alert button //
var year = 2014;
var userEmail = "";
var todaysDate = "";
/*var donation = 20;

if (donation < 20) {
	alert("For a $20 you get a cookie. Change your donation?");
}
else {
	alert("Thank you!");
} */

var mainfile = document.getElementById("mainTitle");
console.log("This is an element of type: ", mainTitle.nodeType);
console.log("The inner HTML is ", mainTitle.innerHTML);
console.log("Child nodes: ", mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

var myListElements = document.getElementsByTagName("li");
console.log("List elements: ", myListElements.length);

var myFirstList = document.getElementById("2 paragraphs");
/* you can also use: var limitedList = myFirstList.getElementsByTagName("li");
to dig deeper into the DOM */
var myElement = document.createElement("li");
var myNewElement = document.createElement("li");
//myNewElement.appendChild(myNewElement); 

var myText = document.createTextNode("New list item");
myNewElement.appendChild(myText); 

// creating elements
var newListItem = document.createElement("li");
var newPara = document.createElement("p");

// To add content, either use inner HTML
// or create child nodes manually like so:
// newPara.innerHTML = "blah blah blah...";
var paraText = document.createTextNode("And now for a beginner level intro to JavaScript! YAY!");
newPara.appendChild(paraText);

//And we still need to attach them to the document
document.getElementById("basic").appendChild(newPara);

var myNewElement = document.createElement("li");
var secondItem = myElement.getElementsByTagName("li")[1];
myElement.insertBefore(myNewElement, secondItem);

// An example of using an anonymous function: onclick.
//When you click anywhere on the page, an alert appears.
//document.onclick = function() {
//	alert("You clicked somewhere in the document");
//}

// And example of restricting the click alert to 
// an element on the page.
var myImage = document.getElementById("mainImage");
myImage.onclick = function() {
	alert("You clicked on the picture!");
}

function prepareEventHandlers() {
	var myImage = document.getElementById("mainImage");
    myImage.onclick = function() {
	  alert("You clicked on the picture!");
	}
}


window.onload = function() {
	// preps everything and ensures 
	// other js functions don't get
	// called before document has
	// completely loaded.
	prepareEventHandlers(); // This is a named function call nested inside an anonymous function.
}



var simpleCards = [];
var complicatedCards = [];

// constructor function for creating Basic Card objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  simpleCards.push(this);
}

//constructor function for ClozeCards
function ClozeCard(text, cloze){
	this.cloze = cloze;
	this.fullText = text;
	this.partial = this.fullText.replace(cloze, "...");
	//this.display = function(){
	if (!this.fullText.includes(cloze)){
		console.log("error your text does not include the section to take out");
		//}
	};
}

//  Programmer.prototype.goodGame = function(){  //makes everything refer to one function - this way takes up less memory so is preferred - used to add common functions to your objects 
// 	console.log(this);
// }

var firstPresident = new BasicCard("Who was the first President of the US?", "George Washington");

console.log("front: " + firstPresident.front);
console.log("back: "+firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first President of the United States.", "George Washington");

console.log("cloze: " + firstPresidentCloze.cloze);
console.log("partial: " + firstPresidentCloze.partial);
console.log ("fullText: " + firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("this doesn't work", "ls;dkfha;lsfha;lsfh;alsf");

console.log("simpleCardsArray: " + simpleCards[0]);
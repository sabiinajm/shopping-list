// variables
var buttonEnter = document.getElementById("enter")
var inputField = document.getElementById("userinput")
var ulList = document.querySelector("ul")

// creating list element
function createListElement(){
		var listItems = document.createElement("li");
		var listCards = document.createElement("div");
		listCards.classList.add("card");
		listItems.classList.add("bold")
		listItems.appendChild(document.createTextNode(inputField.value));
		listCards.appendChild(listItems)
		ulList.appendChild(listCards);
		inputField.value = " "
		listItems.classList.add(`{inputField.value}`)
}
//check the input before click
function addListAfterClick(){
	if(inputField.value.length > 0){
		createListElement();
	}
}
//check the input before keydown
function addListAfterKeydown(event){
	if(inputField.value.length > 0 && event.key === "Enter"){
		createListElement();
	}
}
//del

//

//Events
buttonEnter.addEventListener("click", addListAfterClick);
inputField.addEventListener("keydown", addListAfterKeydown);

var ulList = document.querySelector("ul");
function delete1(e){
	var targetElement = e.target;
	if(	 targetElement.getAttribute("class")==="card"){
		targetElement.setAttribute("class","del")
	} else if(targetElement.getAttribute("class")==="del"){
		targetElement.setAttribute("class","card")
	}

}
ulList.addEventListener("dblclick", delete1)

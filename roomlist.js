
function buttonStartHere(){
    console.log("hello wordld");
}

//toggle show and hide of the dropdown content
function dropdownOpen(){
    document.getElementById("dropdownContent").classList.toggle("show");
}

//if user clicks outside of it, close the dropdown
window.onclick = function(event){
    if (!event.target.matches('#buttonIcon')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}


//check the current page
function checkPage(){
    var currentPage = window.location.href;
    if (currentPage == "http://127.0.0.1:5500/index.html"){
        document.getElementById("homeNavButton").classList.add("activePage");
    }
    else if (currentPage == "http://127.0.0.1:5500/about.html"){
        document.getElementById("aboutNavButton").classList.add("activePage");
    }
    else if (currentPage == "http://127.0.0.1:5500/roomlist.html"){
        document.getElementById("roomlistNavButton").classList.add("activePage");
    }
}

window.onload = function(){
    checkPage();
}

var imgPosition = 1;
function nextButton() {
	imgPosition++;
	if(imgPosition > 3)
		imgPosition = 1;
	document.getElementById("slide-image").src = "./resources/slide" + imgPosition + ".png";
}

function prevButton() {
	imgPosition--;
	if(imgPosition < 1)
		imgPosition = 3;
	document.getElementById("slide-image").src = "./resources/slide" + imgPosition + ".png";
}


function getElementID(element) {
	var elementID = element.id;
	var elID = "Hidden-" + elementID.slice(0, 8) + elementID.substr(elementID.length - 1);
	document.getElementById(elID).style.display = "block";
	document.addEventListener("mouseup", function(e) {
    var container = document.getElementById(elID);
    if (!container.contains(e.target)) {
        container.style.display = "none";
    }

});
}








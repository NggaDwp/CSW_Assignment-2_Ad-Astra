
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
//when user clicks 'GET STARTED' button, redirect to the roomlist page
function buttonStartHere(){
    window.location.href = "roomlist.html";
}

//toggle show and hide of the dropdown content
// function dropdownOpen(){
//     var dropdown = document.getElementById("dropdownContent");
//     if (dropdown.classList.contains('show')){
//         dropdown.classList.remove('show');
//     }
//     else{
//         dropdown.classList.add('show');
//     }
// }

//if user clicks outside of it, close the dropdown
window.onclick = function(event){
    if (!event.target.matches('#dropdownContentIcon')){
        var dropdown = document.getElementById("dropdownContent");
        if (dropdown.classList.contains('show')){
            dropdown.classList.remove('show');
        }
    } else { //this works to replace the dropdownOpen function above
        var dropdown = document.getElementById("dropdownContent");
        dropdown.classList.add('show');
    }
}


//check the current page
function checkPage(){
    if (window.location.href.indexOf("index") > -1){
        document.getElementById("homeNavButton").classList.add("activePage");
        console.log("home");
        setSlideshowScroll();
    }
    else if (window.location.href.indexOf("about") > -1){
        document.getElementById("aboutNavButton").classList.add("activePage");
        console.log("about");
    }
    else if (window.location.href.indexOf("roomlist") > -1){
        document.getElementById("roomlistNavButton").classList.add("activePage");
        console.log("roomlist");
    }
}

//sets the slideshow to scroll to the middle 
function setSlideshowScroll(){
    var slideshows = document.getElementsByClassName("slideshow-container"); //getElementsByClassName returns an array-like object
    for (var i = 0; i < slideshows.length; i++){ //iterate over all elements with the class "slideshow-container"
        var slideshow = slideshows[i];
        var middle = slideshow.children[Math.floor((slideshow.children.length - 1) / 2 )]; //find the middle section of the slideshow
        slideshow.scrollLeft = (middle.offsetLeft + middle.offsetWidth / 2 - slideshow.offsetWidth / 2) - 30; //set the scroll to the middle section
    }
}

//accept array as parameter and run fetchProfileIcon for every item in array
function fetchProfileIconArray(array){
    for (var i = 0; i < array.length; i++){
        fetchProfileIcon(array[i]);
    }
}

//fetch from randomUserAPI and replace the content of the div with the profile icon and name
function fetchProfileIcon(divId){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://randomuser.me/api/", true);
    xhr.onload = function(){
        if (this.status == 200){
            var response = JSON.parse(this.responseText); //parse the JSON response file
            var userprofile = response.results[0].picture; //get the profile picture from the response
            var img = document.createElement("img"); //create an image element
            img.src = userprofile.thumbnail; //set the source of the image
            img.classList.add("profileIcon"); //add the class "profileIcon" to the image
            document.getElementById(divId).appendChild(img); //append the image to the div
            var name = response.results[0].name.first + " " + response.results[0].name.last; //get the name from response
            document.getElementById(divId).insertAdjacentHTML('afterend', '<em style="font-weight:100">'+ name + '</em>'); //append the name to the div
        }
    }
    xhr.send();
}

window.onload = function(){
    checkPage();
    fetchProfileIconArray(["review-icon-1", "review-icon-2", "review-icon-3", "review-icon-4", "review-icon-5"]);
}


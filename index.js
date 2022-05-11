//when user clicks 'GET STARTED' button, redirect to the roomlist page
function buttonStartHere() {
  window.location.href = "roomlist.html";
}

//if user clicks outside of it, close the dropdown
window.onclick = function (event) {
  if (!event.target.matches("#dropdownContentIcon")) {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  } else {
    //this works to replace the dropdownOpen function above
    var dropdown = document.getElementById("dropdownContent");
    dropdown.classList.add("show");
  }
};

//check the current page
function checkPage() {
  if (window.location.href.indexOf("index") > -1) {
    document.getElementById("homeNavButton").classList.add("activePage");
    console.log("home");
    setSlideshowScroll();
  } else if (window.location.href.indexOf("about") > -1) {
    document.getElementById("aboutNavButton").classList.add("activePage");
    console.log("about");
  } else if (window.location.href.indexOf("roomlist") > -1) {
    document.getElementById("roomlistNavButton").classList.add("activePage");
    console.log("roomlist");
  }
}

//sets the slideshow to scroll to the middle
function setSlideshowScroll() {
  var slideshows = document.getElementsByClassName("slideshow-container"); //getElementsByClassName returns an array-like object
  for (var i = 0; i < slideshows.length; i++) {
    //iterate over all elements with the class "slideshow-container"
    var slideshow = slideshows[i];
    var middle =
      slideshow.children[Math.floor((slideshow.children.length - 1) / 2)]; //find the middle section of the slideshow
    slideshow.scrollLeft =
      middle.offsetLeft +
      middle.offsetWidth / 2 -
      slideshow.offsetWidth / 2 -
      30; //set the scroll to the middle section
  }
}

//accept array as parameter and run fetchProfileIcon for every item in array
function fetchProfileIconArray(array) {
  for (var i = 0; i < array.length; i++) {
    fetchProfileIcon(array[i]);
  }
}

window.onload = function () {
  checkPage();
  fetchReviews([
    "review-icon-1",
    "review-icon-2",
    "review-icon-3",
    "review-icon-4",
    "review-icon-5",
  ]);
};

//fetch from randomUserAPI and replace the content of the div with the profile icon and name
async function fetchReviews(divId) {
  for (var i = 0; i < divId.length; i++) {
    var response = await fetch("https://randomuser.me/api/"); //fetch the response from the API
    var data = await response.json(); //parse the response as JSON
    var userName = data.results[0].name.first + " " + data.results[0].name.last; //get the name from the response
    var userPicture = data.results[0].picture.thumbnail; //get the profile picture from the response
    //
    var img = document.createElement("img"); //create an image element
    img.src = userPicture; //set the source of the image
    img.classList.add("profileIcon"); //add the class "profileIcon" to the image
    //
    document.getElementById(divId[i]).appendChild(img); //append the image to the div
    document
      .getElementById(divId[i])
      .insertAdjacentHTML(
        "afterend",
        '<em style="font-weight:100">' + userName + "</em>"
      ); //append the name to the div
  }
}
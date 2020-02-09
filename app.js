// Add DOM selectors to target input and UL movie list
var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");

// Example of a simple function that clears the input after a user types something in
function clearInput() {
    inp.value = "";
}

function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
}

// This function is executed when the user clicks [ADD MOVIE] button.
i = 0;
function addMovie() {
    // Step 1: Get value of input
    var userTypedText = inp.value;
    // Step 2: Create an empty <li></li>
    var li = document.createElement("li"); // <li></li>
    // created if statement that alerts the user if input's empty
    if (userTypedText == "") {
      alert("Must insert movies!")
      // if valid, add movie to the list
    } else if (userTypedText.length > 0 && !(userTypedText in array)) {
      var myMovieList = document.getElementById("ul");
      var li = document.createElement("li");
      // li.setAttribute('style',"font-weight: bold; text-align: center;");
      li.setAttribute('class',"list");
      // li.setAttribute('onclick',"removeList()");
      li.setAttribute('id', "list" + i);
      li.appendChild(document.createTextNode(userTypedText));
      myMovieList.appendChild(li);
      i += 1;
    } 
    history();
    clearInput();
}

// adding movies to the history
var array = {};
count = 1;
var tableTag = document.createElement("table");
function history() {
    userTypedText = document.querySelector("input").value;
    var tableRow = document.createElement("tr");
    if (!(userTypedText in array) && userTypedText.length != 0) {
      array[userTypedText] = count;
      // The below creates html tags
      var heading5 = document.getElementById("h5");
      var tableRow = document.createElement("tr");
      var tableData = document.createElement("td");
      var tableDataI= document.createElement("td");
      // set attribute for the td2(<td>counts#</td>) to call in the else if function
      tableDataI.setAttribute("id", userTypedText);
      tableRow.setAttribute("id", "history");
      // Insert texts to the tags
      tableData.appendChild(document.createTextNode(userTypedText));
      tableDataI.appendChild(document.createTextNode(array[userTypedText]));
      tableRow.appendChild(tableData);
      tableRow.appendChild(tableDataI);
      tableTag.appendChild(tableRow);
      heading5.appendChild(tableTag);

      // clear the input box
      clearInput();
      // The below updates the number of watch counts
    } else if (userTypedText.length != 0 && userTypedText in array) {
      // adds user input to the array
      array[userTypedText] += 1;
      var watchCount = document.getElementById(userTypedText);
      watchCount.innerHTML = array[userTypedText];
      //localStorage.getItem(array[userTypedText]); 

      clearInput();
    }
  }

// Below targets the element from the list and remove it
var listMovie = document.getElementsByClassName("list").value;
var x = 0;
var lis = document.querySelectorAll('li');  
var ul = document.querySelector('ul');
ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    this.removeChild(ev.target);
  }
});

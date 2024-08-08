let y="Map and it's Methods"
document.getElementById("MapHeading1").innerHTML = y;


////////////////////////////////////////////////////////////////


// Create a Map
const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

let numb = fruits1.get("apples");
document.getElementById("Map1").innerHTML = "There are " + numb + " apples.";

document.getElementById("Map2").innerHTML = fruits1.get("apples");

//The size property returns the number of elements in a map:
document.getElementById("Map3").innerHTML ="The size Property: "+ fruits1.size;


//delete() method removes a map element:
fruits1.delete("apples");
document.getElementById("Map4").innerHTML = fruits1.size;


//The clear() method removes all the elements from a map:
fruits1.clear();
document.getElementById("Map5").innerHTML = fruits1.size;

document.getElementById("Map6").innerHTML = fruits1.has("apples");


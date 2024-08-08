let x="Set and It's Methods"

document.getElementById("setHeading1").innerHTML = x;

// Create a new Set
const letters = new Set(["a","b","c"]);

// Add a new Element
letters.add("d");
letters.add("e");

// Display set.size
document.getElementById("set1").innerHTML = "The set has " + letters.size + " values.";
document.getElementById("set2").innerHTML = "The answer is : " + letters.has("c");
document.getElementById("set3").innerHTML = letters.delete("a");
document.getElementById("set4").innerHTML = letters.clear("b");



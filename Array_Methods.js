let X= "Arrey and its Methods"

document.getElementById("Heading1").innerHTML = X;



const cars = ["TOYOTA", "Audi", "BMW","Honda","Kia","Maruti Suzuki","Hyundai", "Skoda"];
document.getElementById("Array1").innerHTML = cars;

document.getElementById("Array2").innerHTML ="length property returns the length of an array  : "+ cars.length ;
document.getElementById("Array3").innerHTML = "toString() method returns an array as a comma separated string  : "+ cars.toString();
document.getElementById("Array4").innerHTML = " at() method returns an indexed element from an array  : "+(cars.at(2));
document.getElementById("Array5").innerHTML ="bracket notation [] returns an indexed element from an array : " +(cars[2]);
document.getElementById("Array6").innerHTML = " join() method joins array elements into a string :  " +cars.join(" * ");
document.getElementById("Array7").innerHTML = "pop() method removes the last element from an array : "+cars.pop();
cars.push("TATA Motars");
document.getElementById("Array8").innerHTML = "push() method appends a new element to an array : "+ cars;
cars.shift();
document.getElementById("Array9").innerHTML =" shift() method removes the first element of an array : " + cars;
cars.unshift("Maruti800");
document.getElementById("Array10").innerHTML ="unshift() method adds new elements to the beginning of an array : "+ cars;

const FriendGirls = ["Megha", "Indira","Joti"];
const FriendBoys = ["Abhijeet","Kishor","Abhishek"];
const myBestFriends = FriendGirls.concat(FriendBoys);

document.getElementById("Array11").innerHTML ="concat() method merges (concatenates) arrays : " + myBestFriends;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("Array12").innerHTML ="copyWithin() copies array elements to another position in an array, overwriting existing values : " + fruits.copyWithin(2,0);


fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("Array13").innerHTML ="splice() method adds new elements to an array : " + fruits;




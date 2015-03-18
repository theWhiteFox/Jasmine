/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 * node.js
 *
 */


// Eloquent JS
// Chapter 4 Data Structures: Objects and Arrays

(function() {

	// data sets
	var listOfNumbers = [2, 3, 5, 7, 11];
	console.log(listOfNumbers[1]);
	// 3
	console.log(listOfNumbers[1 - 1]);
	// 2

	// methods
	var doh = "Doh";
	console.log(typeof doh.toUpperCase);
	// function
	console.log(doh.toUpperCase());
	// DOH

	var mack = [];
	mack.push("Mack");
	mack.push("the", "Knife");
	console.log(mack);
	// [ 'Mack', 'the', 'Knife' ]
	console.log(mack.join(" "));
	// Mack the Knife
	console.log(mack.pop());
	// Knife
	console.log(mack);
	// [ 'Mack', 'the' ]

	// objects
	var day1 = {
		squirrel: false,
		events: ["work", "touched tree", "pizza", "running", "coding"]
	};
	console.log(day1.squirrel);
	// 	false	
	console.log(day1.wolf);
	// undefined	
	day1.wolf = false;
	console.log(day1.wolf);
	// false

	// delete operator - not common
	var anObject = {
		left: 1,
		right: 2
	};
	console.log(anObject.left);
	// 1
	delete anObject.left;
	console.log(anObject.left);
	// undefined
	console.log("left" in anObject);
	// false
	console.log("right" in anObject);
	// true
        
        // object example
	var journal = [{
		events: ["work", "touched tree", "pizza", "swimming", "learning"],
		squirrel: false
	}, {
		events: ["work", "ice cream", "cabbage", "seafood lasagna", "touched tree", "brushed"],
		squirrel: false
	}, {
		events: ["weekend", "cycling", "break", "peanuts", "beer"],
		squirrel: true
	}];
}());
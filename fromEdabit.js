console.log('js');


//third side of triangle equasion via function:

function nextEdge(side1, side2){
  let side3 = side1 + side2 - 1;
  return side3;
}

console.log('the following are triangles:');
console.log('5 x 3 x', nextEdge(5, 3)+ '.');
console.log('23 x 61 x', nextEdge(23, 61)+ '.');
console.log('154.22 x 201.17 x', nextEdge(154.22, 201.17)+ '.');

//perimeter of triangles
function findPerimeter(length, width) {
	let perim = (length + width) * 2;
	return perim;
}

console.log('the perimeter of a 3 x 5 x ? triangle is', findPerimeter(3, 5) ,'!');
console.log('the perimeter of a 14 x 22 x ? triangle is', findPerimeter(14, 22) ,'!');

//area of triangle w/ two sides

function triArea(base, height) {
	return (base * height) / 2;
}
console.log('The base is 12 and the height is 12 ... the area is', triArea(12, 12) ,'.');
console.log('The base is 285.4 and the height is 481.3117 ... the area is', triArea(285.4, 481.3117) ,'.');


//return first value in an array

function getFirstValue(arr) {
	return arr[1];
}

console.log( getFirstValue([1, 2, 3]));
console.log( getFirstValue([4, 7, 10]));

//highest and lowest numbers in an array
//
// function minMax(arr) {
//   for(let i=0; i<1; i++){
//     arr.sort();
//   }
// 	return arr[0];
// }
//
// console.log(minMax([44, 6, 2, 69, 321]));
//--------------------------------
// Write a function that returns the string "something" joined with
// a space " " and the given argument a.
//
// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
//
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
//
// giveMeSomething("something") ➞ "something something"

function giveMeSomething(a) {
  return ("something " + a);
}
console.log(giveMeSomething('Bob Jane'));
console.log(giveMeSomething('something'));
console.log(giveMeSomething('is better than nothing'));

//MILK AND COOKIES

function timeForMilkAndCookies(date) { //begin function milk cookies
	if(date[1] === 11 && date[2] === 24){
		return true;
	} //end if true statement
  else{
    return false;
  }
} //end milk cookies

console.log(timeForMilkAndCookies([2021, 11, 24]));
console.log(timeForMilkAndCookies([2015, 3, 24]));
console.log(timeForMilkAndCookies([2021, 11, 24]));
console.log(timeForMilkAndCookies([2004, 6, 18]));

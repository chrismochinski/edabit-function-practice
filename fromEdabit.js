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

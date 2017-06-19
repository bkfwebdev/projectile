 const g = 9.8;

 function getTime(v,theta){
	let theTime = ((2 * v * Math.sin(theta))/g);
	return theTime;
}

function getHeight(v,theta){
	let theHeight = (Math.pow(v,2) * Math.pow(Math.cos(theta),2))/(2*g);
	return theHeight;
}

function getRange(v,theta){
	let theRange = (Math.pow(v,2) * Math.sin(2 * theta))/g;
	return theRange;
}

function logResults(maxHeight,distTrav,flightTime){
console.log("maximum height reached is: ",maxHeight);
console.log("horizontal distance traveled is: ",distTrav); 
console.log("time in flight: ",flightTime);
}

function calcArgs(){
	let myInput = process.argv;
	let pTheta = parseInt(process.argv.slice(3));
	pTheta = pTheta*(Math.PI/180)
	let pV = parseInt(process.argv.slice(2));
	let pTime = getTime(pV,pTheta);
	let pHeight = getHeight(pV,pTheta);
	let pRange = getRange(pV,pTheta);
	logResults (pHeight, pRange, pTime);
}

// console.log(process.argv);
calcArgs();



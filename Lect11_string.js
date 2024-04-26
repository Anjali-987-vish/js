const name = "Anjali"
const repoCount = 20

//console.log(name + repoCount + "Value");  old method 

console.log(`hey my name is ${name} and my repo count is ${repoCount}`);


const gameName =new String(`Anjali-hc-com`)
console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));//to find the elemnt at index 2

console.log(gameName.indexOf("i"));

const newString = gameName.substring(0,4);
console.log(newString);



const url="https://anjali.com/anjali%20vishwakarma"

console.log(url.replace('%20','-'));

console.log(url.includes('cute'))//will return false 

console.log(url.includes('vishwakarma'))
console.log(gameName.split('-'));

function toCase(text) {
  // write your code here
	let result = text.toLowerCase()+"-"+text.toUpperCase();
	return result;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

function toCase(text) {
  // write your code here
	 // If the string is empty, return just the hyphen
  if (text === "") return "-";
  
  // Convert to lowercase and uppercase, and join with "-"
  return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

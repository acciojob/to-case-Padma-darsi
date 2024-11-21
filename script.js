function toCase(text) {
  // Check for an empty string
  if (text === "") {
    return "-";
  }
  // Convert the string to lowercase and uppercase, then join with a "-"
  return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));

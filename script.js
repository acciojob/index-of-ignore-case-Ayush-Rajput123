
 function indexOfIgnoreCase(s1, s2) {
  let index = s1.toLowerCase().match(s2.toLowerCase()).index
  return index;
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

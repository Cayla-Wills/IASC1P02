function hello() {
  let text;
  let name = prompt("Please enter your name:", "");
  if (name == null || name == "") {
    text = "Why wont you tell me your name?? :C";
  } else {
    text = "Howdy " + name + "! And welcome to my brain! Careful, it's dangerous in here!";
  }
  document.getElementById("answer").innerHTML = text;
}

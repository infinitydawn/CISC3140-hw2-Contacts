//fetch the button from the DOM
var button = document.querySelector("button");

//attach and event when the user clicks it
button.addEventListener("click", myfunction);

//create the function that will be called when the button is pressed
function myfunction()
{
	//this shows a popup window
	alert("button clicked!");
	//window.print();
	//console.log("log");
	//document.write("write");
}


const person = {
  name: "Yunhua Zhao" ,
  gender: "Female",
  city: "New York"
};

function show_instructor()
{
	alert(Object.values(person));
}
document.getElementById("para1").addEventListener("click", show_instructor);

function searchName() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("searchname").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
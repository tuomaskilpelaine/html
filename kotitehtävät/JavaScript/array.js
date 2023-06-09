var names = [];

function addName() {

  var nameInput = document.getElementById("nameInput");
  var name = nameInput.value;

  
  names.push(name);
 
  nameInput.value = "";

  updateNameList();
}


function updateNameList() {
 
  var nameList = document.getElementById("nameList");

  nameList.innerHTML = "";

  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    var listItem = document.createElement("li");
    listItem.innerText = name;

    nameList.appendChild(listItem);
  }
}
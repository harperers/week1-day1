var selected = "";
var selectedValue = "";
var phoneOption = document.getElementById("phone")
var emailOption = document.getElementById("email")

function getSelected() {
    selected = document.querySelector('#select');
    selectedValue = selected.value;

    if (selectedValue == "phone") {
        phoneOption.style.display = "inline";
        emailOption.style.display = "none";
    } else if(selectedValue == "email") {
        phoneOption.style.display = "none";
        emailOption.style.display = "inline";
    }
}

var codebox = document.getElementById("select"); //get textbox
codebox.addEventListener("input", getSelected);

getSelected();
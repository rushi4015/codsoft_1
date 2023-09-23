

let output = document.getElementById("output");
let keys = document.querySelectorAll(".keys");
let string = "";
let arr = Array.from(keys);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            output.innerHTML = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            output.innerHTML = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            output.innerHTML = string;
        } else {
            string += e.target.innerHTML;
            output.innerHTML = string;
        }
    });
});

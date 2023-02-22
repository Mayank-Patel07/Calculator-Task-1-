let string = "";
let btn = document.querySelectorAll(".btn");
Array.from(btn).forEach((button) => {
  button.addEventListener("click", (Eve) => {
    if (Eve.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".imp").value = string;
    } else if (Eve.target.innerHTML == "C") {
      string = "";
      document.querySelector(".imp").value = string;
    } else string = string + Eve.target.innerHTML;
    document.querySelector(".imp").value = string;
  });
});


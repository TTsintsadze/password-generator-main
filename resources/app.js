let slider = document.querySelector(".slider");
let value;
let range = document.querySelector(".slider-value");
let copy = document.querySelector(".copied");
let password = document.querySelector(".password");
let passwordCopy = password.textContent;
let check = document.querySelectorAll(".check");
let strengthBox1 = document.querySelector(".one");
let strengthBox2 = document.querySelector(".two");
let strengthBox3 = document.querySelector(".three");
let strengthBox4 = document.querySelector(".four");
let strengthTxt = document.querySelector(".strength-txt");

slider.addEventListener("input", function () {
  value = (slider.value / slider.max) * 20;
  range.innerHTML = value;
  slider.style.background =
    "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
    value * 5 +
    "%, #18171F " +
    value * 5 +
    "%, #18171F 100%)";
  console.log(value);
});

function copied() {
  copy.style.display = "flex";
  let textToCopy = password.textContent;
  let textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function generate() {
  let checkNum = 0;
  copy.style.display = "none";

  check.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkNum++;
    }
  });
  if (checkNum == 0 || slider.value < 1) {
    strengthTxt.textContent = "";
    strengthBox1.style.backgroundColor = "#18171F";
    strengthBox1.style.border = "2px solid #E6E5EA";
    strengthBox2.style.backgroundColor = "#18171F";
    strengthBox2.style.border = "2px solid #E6E5EA";
    strengthBox3.style.backgroundColor = "#18171F";
    strengthBox3.style.border = "2px solid #E6E5EA";
    strengthBox4.style.backgroundColor = "#18171F";
    strengthBox4.style.border = "2px solid #E6E5EA";
  } else if (checkNum == 1 && value >= 1) {
    strengthTxt.textContent = "TOO WEAK!";
    strengthBox1.style.backgroundColor = "#F64A4A";
    strengthBox1.style.border = "2px solid #F64A4A";
    strengthBox2.style.backgroundColor = "#18171F";
    strengthBox2.style.border = "2px solid #E6E5EA";
    strengthBox3.style.backgroundColor = "#18171F";
    strengthBox3.style.border = "2px solid #E6E5EA";
    strengthBox4.style.backgroundColor = "#18171F";
    strengthBox4.style.border = "2px solid #E6E5EA";
  } else if (checkNum == 2 && value >= 2) {
    strengthTxt.textContent = "WEAK";
    strengthBox1.style.backgroundColor = "#FB7C58";
    strengthBox1.style.border = "2px solid #FB7C58";
    strengthBox2.style.backgroundColor = "#FB7C58";
    strengthBox2.style.border = "2px solid #FB7C58";
    strengthBox3.style.backgroundColor = "#18171F";
    strengthBox3.style.border = "2px solid #E6E5EA";
    strengthBox4.style.backgroundColor = "#18171F";
    strengthBox4.style.border = "2px solid #E6E5EA";
  } else if (checkNum == 3 && value >= 3) {
    strengthTxt.textContent = "MEDIUM";
    strengthBox1.style.backgroundColor = "#F8CD65";
    strengthBox1.style.border = "2px solid #F8CD65";
    strengthBox2.style.backgroundColor = "#F8CD65";
    strengthBox2.style.border = "2px solid #F8CD65";
    strengthBox3.style.backgroundColor = "#F8CD65";
    strengthBox3.style.border = "2px solid #F8CD65";
    strengthBox4.style.backgroundColor = "#18171F";
    strengthBox4.style.border = "2px solid #E6E5EA";
  } else if (checkNum == 4 && value >= 4) {
    strengthTxt.textContent = "STRONG";
    strengthBox1.style.backgroundColor = "#A4FFAF";
    strengthBox1.style.border = "2px solid #A4FFAF";
    strengthBox2.style.backgroundColor = "#A4FFAF";
    strengthBox2.style.border = "2px solid #A4FFAF";
    strengthBox3.style.backgroundColor = "#A4FFAF";
    strengthBox3.style.border = "2px solid #A4FFAF";
    strengthBox4.style.backgroundColor = "#A4FFAF";
    strengthBox4.style.border = "2px solid #A4FFAF";
  }
  randomPass(value);
}

function randomPass(sliderValue) {
  let chars = "";
  let pass = "";
  check.forEach(function (box) {
    if (box.checked && box.className == "check uppercase") {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (box.checked && box.className == "check lowercase") {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (box.checked && box.className == "check numbers") {
      chars += "0123456789";
    }
    if (box.checked && box.className == "check symbols") {
      chars += "±!@#$%^&*()_+<>?|{}[];'/.,`~§";
    }
  });
  let charslength = chars.length;
  for (let i = 0; i < sliderValue; i++) {
    let random = Math.floor(Math.random() * charslength);
    pass += chars.charAt(random);
  }
  password.textContent = pass;
}

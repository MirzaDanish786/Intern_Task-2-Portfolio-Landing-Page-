// Code of the Hamburger:
let menuBox = document.querySelector(".menuBox");
let hamburger = document.querySelector(".hamburger");
let body = document.querySelector("body");
hamburger.addEventListener("click", () => {
  menuBox.classList.add("menuEnabled");
  menuBox.classList.remove("menuDisabled");
  body.classList.add("no_scroll");
});
let cancel = document.querySelector(".cancelIcon");
cancel.addEventListener("click", () => {
  menuBox.classList.add("menuDisabled");
  menuBox.classList.remove("menuEnabled");
  body.classList.remove("no_scroll");
});

// Code of the FAQs DropDown:
let currentClicked = undefined;
let previousClicked = undefined;
let isDropDown = false;
let minusButton = document.getElementsByClassName("minusButton");
let FAQ_DropDownText = document.getElementsByClassName("FAQ_DropDownText");

Array.from(minusButton).forEach((e, index) => {
  e.addEventListener("click", (item) => {
    previousClicked = currentClicked;
    
    console.log(previousClicked );
    
    currentClicked = index;

    if (previousClicked === currentClicked && isDropDown) {

      FAQ_DropDownText[currentClicked].innerHTML = ``;
      FAQ_DropDownText[currentClicked].style.padding = "0px";
      minusButton[currentClicked].style.transform = "rotate(0deg)";
      minusButton[currentClicked].style.transition = "all .3s";
      isDropDown = false;
    } else {
      Array.from(FAQ_DropDownText).forEach((e) => {
        e.innerHTML = ``;
        e.style.padding = "0px";
      });

      Array.from(minusButton).forEach((e) => {
        e.style.transform = "rotate(0deg)";
        e.style.transition = "all .3s";
      });

      FAQ_DropDownText[currentClicked].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis ratione labore sunt fugit ducimus. Veritatis pariatur alias explicabo dolorem minima, iusto totam vitae saepe perspiciatis numquam a doloremque quo!`;
      minusButton[currentClicked].style.transform = "rotate(45deg) scale(1.2)";
      minusButton[currentClicked].style.transition = "all .3s";
      FAQ_DropDownText[currentClicked].style.padding = "8px";
      isDropDown = true;

      if (currentClicked >= 0 && currentClicked <= 2) {
        let FAQs_Section_Container_Left = document.getElementsByClassName("FAQs_Section_Container_Left")[0];
        FAQs_Section_Container_Left.style.height = "auto";
      } else if (currentClicked >= 3 && currentClicked <= 5) {
        let FAQs_Section_Container_Right = document.getElementsByClassName("FAQs_Section_Container_Right")[0];
        FAQs_Section_Container_Right.style.height = "auto";
      }
    }
  });
});
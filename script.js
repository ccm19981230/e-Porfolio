var on = false;
var detailsholder = document.getElementById("details");
var summaryholder = document.getElementById("summary");
var menulistholder = document.getElementById("menu_list");
var burger_btn_holder = document.getElementById("burger_btn");
summaryholder.addEventListener("click", onClickFunction);

// Drop-down Menu On Click Effect
function onClickFunction() {
  if (on == true) {
    burger_btn_holder.style.filter = "invert(100%)";
    on = false;
  } else {
    burger_btn_holder.style.filter = "invert(0%)";
    on = true;
  }
}

// Slider
var slider1holder = document.getElementById("slider1");
var photobannerholder = document.getElementById("photobanner");
slider1holder.addEventListener("mouseover", pauseSlider);
slider1holder.addEventListener("mouseout", runSlider);

photobannerholder.style.animationPlayState = "running";

function pauseSlider() {
  photobannerholder.style.animationPlayState = "paused";
}

function runSlider() {
  photobannerholder.style.animationPlayState = "running";
}

// Scroll to See the Animation
const boxes = document.querySelectorAll(".par_box");
const iframe_boxes = document.querySelectorAll(".iframe_box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
  iframe_boxes.forEach((iframe_box) => {
    const iframe_boxTop = iframe_box.getBoundingClientRect().top;

    if (iframe_boxTop < triggerBottom) {
      iframe_box.classList.add("show");
    } else {
      iframe_box.classList.remove("show");
    }
  });
}

// Fix the bug of sticky while it is under a parent element with attitude overflow-x: hidden
// Drop-down Menu
var rect = detailsholder.getBoundingClientRect();
var offset = detailsholder.offsetTop;
var menutitleholder = document.getElementById("menutitle");

window.addEventListener("scroll", scrollCheck);

function scrollCheck() {
  rect = detailsholder.getBoundingClientRect();
  if (window.pageYOffset > offset) {
    detailsholder.style.position = "fixed";
    detailsholder.style.top = 0;
    menutitleholder.style.display = "block";
    summaryholder.style["justify-content"] = "space-between";
  } else if (window.pageYOffset <= offset) {
    detailsholder.style.position = "relative";
    menutitleholder.style.display = "none";
    summaryholder.style["justify-content"] = "right";
  }
}

// Main Menu
var mainmenuholder = document.getElementById("mainmenu");
var rectMain = mainmenuholder.getBoundingClientRect();
var moffset = mainmenuholder.offsetTop;
window.addEventListener("scroll", scrollCheckMainMenu);

function scrollCheckMainMenu() {
  rectMain = mainmenuholder.getBoundingClientRect();
  if (window.pageYOffset > moffset) {
    mainmenuholder.style.position = "fixed";
    mainmenuholder.style.top = 0;
  } else if (window.pageYOffset <= moffset) {
    mainmenuholder.style.position = "relative";
  }
}


// Skills item
var skill_itemholder = document.getElementsByClassName("skill_item");
var skill_imgholder = document.getElementsByClassName("skill_img");

for (const item in skill_itemholder) {
  skill_itemholder[item].addEventListener("mouseover", () => {
    skill_imgholder[item].style.transform = "rotateY(-180deg)";
  });
  skill_itemholder[item].addEventListener("mouseout", () => {
    skill_imgholder[item].style.transform = "rotateY(0deg)";
  });
}


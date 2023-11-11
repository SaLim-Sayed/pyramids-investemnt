/*
 ** Countdown Timer
 ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
 */

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(  () => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

 /*  document.querySelector(".days").innerHTML = days < 10 ? days : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? hours : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? minutes : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? minutes : seconds;
 */
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

/*
 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc
 */

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


//local Storage
let mainColor = localStorage.getItem("colors");
console.log(mainColor);

if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  document.querySelectorAll(".colors-list li").forEach((e) => {
    e.dataset.color === mainColor
      ? e.classList.add("active")
      : e.classList.remove("active");
  });
}

let backgroundInterval;
let backgroundOption = true;

let backgroundLocalItem = localStorage.getItem("background-option");
if (backgroundLocalItem !== null) {
 
  // Remove Active Class From All Spans
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    backgroundOption = true;

    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    backgroundOption = false;

    document.querySelector(".random-background .no").classList.add("active");
  }
}

//toggle spin

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};
document.querySelector(".toggle-menu").onclick = function () {
  console.log('first')
  // Toggle Class Fa-spin For Rotation on Self
  

  // Toggle Class Open On Main Settings Box
  document.querySelector(".menu").classList.toggle("open");
};

// switch colors

const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    //set Color On root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // set color on local storage
    localStorage.setItem("colors", e.target.dataset.color);

    //remove active class from all children

    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    //add active class on target
    e.target.classList.add("active");
  });
});

let radomBackEl = document.querySelectorAll(".random-background span");

radomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randmizeImgs();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

let imgsArray = ["11.jpg"  ];

function randmizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 5000);
  }
}

randmizeImgs();

// Get Array Of Imgs
  
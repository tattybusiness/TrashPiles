const line = document.querySelector(".line");
const timelineSection = document.getElementById("timeline");

let y = window.scrollY;
line.style.top = y;

window.addEventListener("scroll", function (e) {

    let rect = timelineSection.getBoundingClientRect();    

    if (elementInViewport(timelineSection, 0)) {
        timelineSection.querySelectorAll(".line-wrapper")[0].classList.add("visible");        
        document.documentElement.style.setProperty("--test", `${this.scrollY - (rect.top + this.scrollY) + 600}px`)
    } else {
        timelineSection.querySelectorAll(".line-wrapper")[0].classList.remove("visible")
    }
});

function elementInViewport(el, offset) {
    var top = el.offsetTop - offset;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

// dropdown1
const dropOne = document.querySelector("#dropdown-one");
const togglerOne = document.querySelector("#toggle-one");

const toggle1 = () => {
    togglerOne.classList.toggle("is-active");
    togglerOne.classList.toggle("bigMargin");
}

dropOne.addEventListener("click", toggle1);

// dropdown2
const dropTwo = document.querySelector("#dropdown-two");
const togglerTwo = document.querySelector("#toggle-two");

const toggle2 = () => {
    togglerTwo.classList.toggle("is-active");
    togglerTwo.classList.toggle("bigMargin");
}

dropTwo.addEventListener("click", toggle2);

// dropdown3
const dropThree = document.querySelector("#dropdown-three");
const togglerThree = document.querySelector("#toggle-three");

const toggle3 = () => {
    togglerThree.classList.toggle("is-active");
    togglerThree.classList.toggle("bigMargin");
}

dropThree.addEventListener("click", toggle3);

// dropdown4
const dropFour = document.querySelector("#dropdown-four");
const togglerFour = document.querySelector("#toggle-four");

const toggle4 = () => {
    togglerFour.classList.toggle("is-active");
    togglerFour.classList.toggle("bigMargin");
}

dropFour.addEventListener("click", toggle4);

// dropdown5
const dropFive = document.querySelector("#dropdown-five");
const toggler5 = document.querySelector("#toggle-five");

const toggle5 = () => {
    toggler5.classList.toggle("is-active");
    toggler5.classList.toggle("bigMargin");
}

dropFive.addEventListener("click", toggle5);

// dropdown6
const dropSix = document.querySelector("#dropdown-six");
const toggler6 = document.querySelector("#toggle-six");

const toggle6 = () => {
    toggler6.classList.toggle("is-active");
    toggler6.classList.toggle("bigMargin");
}

dropSix.addEventListener("click", toggle6);

// dropdown7
const dropSeven = document.querySelector("#dropdown-seven");
const toggler7 = document.querySelector("#toggle-seven");

const toggle7 = () => {
    toggler7.classList.toggle("is-active");
    toggler7.classList.toggle("bigMargin");
}

dropSeven.addEventListener("click", toggle7);
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
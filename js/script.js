
let btnContainer = document.querySelector("#navbar");
let btns = btnContainer.querySelectorAll(".nav-link");
let btnsArr = Array.from(btns);

btnsArr.map((items) => {
    items.addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
})



let counterSec = document.querySelector("#counter_part");
let counter = counterSec.querySelectorAll(".count");
let counterArr = Array.from(counter);

counterArr.map((items) => {
    let count = 0;

    function counterUp() {
        count++
        items.innerHTML = count;

        if (count == items.dataset.change) {
            clearInterval(stop);
        }
    }

    let stop = setInterval(function () {
        counterUp();
    }, 1000 / items.dataset.change);
});
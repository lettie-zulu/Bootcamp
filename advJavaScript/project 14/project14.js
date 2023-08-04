// let canvas = document.createElement("canvas");
// let ctx = canvas.getContext("2d");
// canvas.setAttribute("width", "800");
// canvas.setAttribute("height", "600");
// document.body.prepend(canvas);
// let colVal = [];
// for (let x = 0; x < 100; x++) {
//     colVal.push(0);
// }
// function matrix() {
//     ctx.fillStyle = "rgba(0,0,0,.10)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "green";
//     colVal.map((posY, index) => {
//         let output = Math.random() < 0.10 ? 0 : 1;
//         let posX = (index * 10) + 10;
//         ctx.fillText(output, posX, posY);
//         if (posY > 200 + Math.random() * 600) {
//             colVal[index] = 0;
//         } else {
//             colVal[index] = posY + 10;
//         }
//     });
// }
// setInterval(matrix, 100);

let endDate = document.querySelector("input[name='endDate']");
let clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;
let savedValue = localStorage.getItem("countdown") || false;
if (savedValue) {
    startClock(savedValue);
    let inputValue = new Date(savedValue);
    endDate.valueAsDate = inputValue;
}
endDate.addEventListener("change", function (e) {
    e.preventDefault();
    clearInterval(timeInterval);
    let temp = new Date(endDate.value);
    localStorage.setItem("countdown", temp);
    startClock(temp);
    timeStop = true;
});
function startClock(d) {
    function updateCounter() {
        let tl = (timeLeft(d));
        if (tl.total <= 0) {
            timeStop = false;
        }
        for (let pro in tl) {
            let el = clock.querySelector("." + pro);
            if (el) {
                el.innerHTML = tl[pro];
            }
        }
    }
    updateCounter();
    if (timeStop) {
        timeInterval = setInterval(updateCounter, 1000);
    } else {
        clearInterval(timeInterval);
    }
}
function timeLeft(d) {
    let currentDate = new Date();
    let t = Date.parse(d) - Date.parse(currentDate);
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}
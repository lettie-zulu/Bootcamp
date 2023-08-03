let endDate = "August 1 2023";

function countdown() {
    let totalDate = Date.parse(endDate) - new Date();
    let days = Math.floor(totalDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((totalDate / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((totalDate / 1000 / 60) % 60);
    let seconds = Math.floor((totalDate / 1000) % 60);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function update() {
    let tempValue = countdown();
    let outputValue = "";

    for (let property in tempValue) {
        outputValue += (`${property}: ${tempValue[property]} `);
    }

    console.log(outputValue);
    setTimeout(update, 1000);
}

update();
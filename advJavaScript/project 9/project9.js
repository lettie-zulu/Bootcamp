let output = document.querySelector(".output");
let mainList = output.querySelector("ul");

mainList.id = "mainList";
console.log(mainList);

let tagElements = document.querySelectorAll("div");

for (let i = 0; i < tagElements.length; i++) {
    console.log(tagElements[i].tagName);
    tagElements[i].id = "id" + (i + 1);
    if (i % 2) {
        tagElements[i].style.color = "red";
    } else {
        tagElements[i].style.color = "blue";
    }
}
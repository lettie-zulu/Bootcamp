window.onload = build;

let myArray = ["Thato", "Phumzile", "Victoria", "Daisy", "Vanessa"];
let message = document.getElementById("message");
let addNew = document.getElementById("addNew");
let addFriend = document.getElementById("addFriend");
let output = document.getElementById("output");

addNew.onclick = function () {
    let newFriend = addFriend.value;
    adder(newFriend, myArray.length, 0);
    myArray.push(newFriend);
}

function build() {
    myArray.forEach((item, index) => {
        adder(item, index, 0);
    });
}

function adder(name, index, counter) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.classList.add("box");
    td1.textContent = index + 1;
    const td2 = document.createElement("td");
    td2.textContent = name;
    const td3 = document.createElement("td");
    td3.textContent = counter;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    tr.onclick= function () {
        console.log(tr.lastChild);
        let value = Number(tr.lastChild.textContent);
        value++;
        tr.lastChild.textContent = value;
    }
    output.appendChild(tr);
}
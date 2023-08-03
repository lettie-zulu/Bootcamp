let myname = "Phumzile";
        
function wordscrambler(val) {
    let nameleng = val.length;
    let tempString = "";

    for(let i = 0; i < nameleng; i++){
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length);
        tempString += val[index]; 
        console.log(tempString); 
        val = val.substr(0, index) + val.substr(index + 1);
        console.log(val);
    }

    return tempString;
}

console.log(wordscrambler(myname));
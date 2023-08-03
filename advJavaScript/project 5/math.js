const multiplicationTable = [];
const valNum = 15;

for(let i = 0; i < valNum; i ++){
    const temp = [];
    for(let j = 0; j < valNum; j++){
        temp.push(i * j);
    }
    multiplicationTable.push(temp);
}
 
console.table(multiplicationTable); 
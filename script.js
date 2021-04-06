let num = 266219;
let numStr= num+'';
let total = 1;

for (let i=0; i<numStr.length; i++){
    total = total * numStr[i];
}

total=total*total*total;
total+='';

console.log(total[0]+total[1]);
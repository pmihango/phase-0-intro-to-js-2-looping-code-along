// Code your solutions in this file
// Code your solutions in this file
function writeCards(name){
    let newArray = [];
    for(let i = 0; i < name.length; i++){
        let message = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
        newArray.push(message);
    }
    return newArray;
}
let count;
function countDown(count){
    while(count >=0){
        console.log(count);
        count--;
    }
}
countDown(count)







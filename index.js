// Code your solutions in this file
function writeCards(name, event){
    let message = [];
    for(let i = 0; i < name.length; i++){
        message[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    }
    return message;
}

function countDown(n){
    while(n >= 0){
        console.log(n);
        n--
    }
    
}
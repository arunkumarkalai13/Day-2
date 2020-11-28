let random = () =>{
    let randomNumber = '';
    for(let i=0;i<6;i++){
    let randin = Math.floor(Math.random()*6);
    randomNumber+=randin;
}
console.log(randomNumber);
}
random()
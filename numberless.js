let max=100;
let min=1;
let answer=Math.floor(Math.random()*(max-min)+min);
let guess;
let count=0;

let isrunning=true;
while(isrunning){
    guess=window.prompt(`ENTER A NUMBER BETWEEN ${min}-${max}`);
    if(isNaN(guess)){
        alert("PLEASE ENTER A NUMBER");
        count++;
    }
    else if(guess>max || guess<min){
        alert("OUT OF RANGE");
        count++;
    }
    else {
        if(guess>answer){
            alert("NUMBER TOO LARGE");
            count++;
        }
        else if(guess<answer){
            alert("NUMBER TOO SMALL");
        }
        else{
            alert(`YOU GUEESED THE ANSWER IT WAS ${answer} in ${count} steps`);
            isrunning=false;
        }
    }
}

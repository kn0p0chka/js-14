const counter = document.querySelector('.number');
const plus = document.querySelector('.plus');
const minus = document.querySelector(".minus");

//console.log(counter);
//console.log(plus);
//console.log(minus);
//console.dir(plus);


let n =0
minus.disabled=true
function render(){
    counter.innerHTML=n
    if (n>0){
        minus.disabled=false
    }
    else if(n<=0){
        minus.disabled=true
    }
}

plus.addEventListener("click", function(){
    n++
    console.log("PLUS",n);
    render()
})
minus.addEventListener("click", function(){
    if(n>0){
        n--
    console.log("MINUS",n);
    render()
    }
})
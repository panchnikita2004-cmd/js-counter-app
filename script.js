let count = 0;
let display = document.getElementById("counter");
let addBtn = document.getElementById("add");
let subBtn = document.getElementById("sub");
let resetBtn = document.getElementById("reset");
addBtn.addEventListener("click",function(){
    count = count + 1;
    display.innerText = count
});

subBtn.addEventListener("click",function(){
    count = count - 1;
    display.innerText = count
});

resetBtn.addEventListener("click",function(){
    count = 0 ;
    display.innerText = count
});

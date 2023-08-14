
let count = 0;
document.getElementById('plus-btn').addEventListener('click',function(){
    
   const variable = document.getElementById('count-variable');
   count++;
   variable.innerText = count;
})
document.getElementById('minus-btn').addEventListener('click',function(){
    const variable = document.getElementById('count-variable');
    count--;
    variable.innerText = count;
})
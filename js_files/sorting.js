const arr_size = document.querySelector("#arr_sz");
const arr_sz_val = document.querySelector("#arr_sz_val");
const speed_input = document.querySelector("#speed_input");

// Global delay time in milliseconds
let delayTime = 100;

let array = [];


const new_array_btn = document.querySelector('#new-array');



arr_size.addEventListener("input", () => {
    arr_sz_val.textContent = arr_size.value;
});

new_array_btn.addEventListener('click',(e) => {
    newArray(parseInt(arr_size.value));
})

function newArray(arrSize){

    array = [];
    
    for(let i=0; i<arrSize; i++){
        let randomNumber = Math.floor(Math.random()*300);
        array.push(randomNumber);
    }
    
    const barContainer = document.querySelector('#bar-container');
    barContainer.innerHTML = "";
    
    for(let i=0; i<array.length; i++){
        const bar = document.createElement('div');
        bar.classList.add('bar');
        
        // Scale height (e.g., 1 unit = 3px)
        bar.style.height = `${array[i]*4}px`;
    
        barContainer.appendChild(bar);
    }
}


function swap(bar1, bar2){
    const style1 = window.getComputedStyle(bar1);
    const style2 = window.getComputedStyle(bar2);

    const trans1 = style1.getPropertyValue("height");
    const trans2 = style2.getPropertyValue("height");

    bar1.style.height = trans2;
    bar2.style.height = trans1;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Speed control listener
speed_input.addEventListener("input", () => {
    delayTime = 310 - parseInt(speed_input.value); // inverse for faster motion
});
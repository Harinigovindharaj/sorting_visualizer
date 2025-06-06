//Bubble sort


async function bubbleSort(array, bars) {
    let n = array.length;

    for (let i = n-1; i >=0; i--) {
        let didSwap = 0;
        for (let j = 0; j < i; j++) {

            // Highlight bars being compared
            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await delay(delayTime);  // adjust delay as needed

            if (array[j] > array[j + 1]) {
                // Swap values
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Swap bars visually
                swap(bars[j], bars[j + 1]);

                // Swap bar references in array
                let tempBar = bars[j];
                bars[j] = bars[j + 1];
                bars[j + 1] = tempBar;
                didSwap = 1;
            }
            bars[j].style.background = "#e7eb25";
            bars[j + 1].style.background = "#e7eb25";
            
        }
        if(didSwap = 0){
            break;
        }
        // Reset color after comparison
        bars[i].style.background = "green";

    }

    // Mark first bar as sorted at the end
    bars[0].style.background = "green";
}


const bubble_sort_btn = document.querySelector('#bubble')

bubble_sort_btn.addEventListener('click', async () =>{
    const bars = document.querySelectorAll('.bar');
    await bubbleSort(array,  bars);
})




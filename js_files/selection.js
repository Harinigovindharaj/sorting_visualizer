//Selection sort


async function selectionSort(array, bars) {
    let n = array.length;

    for (let i = 0; i< n; i++) {
        let min = i;
        for (let j = i+1; j < n; j++) {
            bars[j].style.background = "blue"
            await delay(delayTime);  // adjust delay as needed
            
            if (array[j] < array[min]) {
                bars[min].style.background = "#e7eb25"
                min = j;
                bars[min].style.background = "red"
            }else{
                bars[j].style.background = "#e7eb25"
            }
        }
    
        // Swap values
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;

        // Swap bars visually
        swap(bars[i], bars[min]);

        // Swap bar references in array
        let tempBar = bars[i];
        bars[i] = bars[min];
        bars[min] = tempBar;
        bars[min].style.background = "#e7eb25"
        
        
        
        // Reset color after comparison
        bars[i].style.background = "green";


    }

    // Mark first bar as sorted at the end
    bars[n-1].style.background = "green";
}


const selection_sort_btn = document.querySelector('#selection')

selection_sort_btn.addEventListener('click', async () =>{
    const bars = document.querySelectorAll('.bar');
    await selectionSort(array,  bars);
})




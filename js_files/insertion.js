//Insertion sort


async function insertionSort(array, bars) {
    let n = array.length;

    for (let i = 0; i <n; i++) {
        let j = i;
        bars[i].style.background = "red";
        await delay(50);

        while(j > 0 &&  array[j-1] > array[j]) {
            bars[j - 1].style.background = "blue";
           
            await delay(delayTime);  // adjust delay as needed

            
            // Swap values
           [array[j], array[j - 1]] = [array[j - 1], array[j]];

            // Swap bars visually
            [bars[j].style.height, bars[j - 1].style.height] = [bars[j - 1].style.height, bars[j].style.height];


            // Swap bar references in array
            // let tempBar = bars[j-1];
            // bars[j-1] = bars[j];
            // bars[j] = tempBar;
            
            // bars[j+1].style.background = "#e7eb25";
            // bars[j].style.background = "#red";
            
            j--;
            
        }
        
        // Reset color after comparison
        bars[i].style.background = "yellow";

    }
     // Final coloring for all bars
    for (let k = 0; k < n; k++) {
        bars[k].style.background = "green"; // 🟢 Sorted
        await delay(delayTime);
    }
}


const insertion_sort_btn = document.querySelector('#insertion')

insertion_sort_btn.addEventListener('click', async () =>{
    const bars = document.querySelectorAll('.bar');
    await insertionSort(array,  bars);
})




function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function partition(array, bars, low, high) {
    let pivot = array[high];
    bars[high].style.background = "red"; // Mark pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
        bars[j].style.background = "blue"; // Comparing
        await delay(delayTime);

        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            [bars[i].style.height, bars[j].style.height] = [bars[j].style.height, bars[i].style.height];
            await delay(delayTime);
        }

        bars[j].style.background = "green"; // Mark sorted/corrected
    }

    // Place pivot in correct position
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    [bars[i + 1].style.height, bars[high].style.height] = [bars[high].style.height, bars[i + 1].style.height];

    bars[high].style.background = "green";       // Reset pivot bar color
    bars[i + 1].style.background = "green";      // Final pivot position
    await delay(delayTime);

    return i + 1;
}


async function quickSort(array, bars, low, high) {
    if (low < high) {
        let pi = await partition(array, bars, low, high);
        await quickSort(array, bars, low, pi - 1);
        await quickSort(array, bars, pi + 1, high);
    } else if (low === high) {
        bars[low].style.background = "green"; // Mark single element as sorted
    }
}

const quick_sort_btn = document.querySelector('#quick')

quick_sort_btn.addEventListener('click', async () =>{
    const bars = document.querySelectorAll('.bar');
    await quickSort(array,  bars, 0, array.length-1);
})
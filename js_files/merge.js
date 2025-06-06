//Merge sort
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function merge(array, bars, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = array.slice(left, mid + 1);
    const R = array.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        bars[k].style.background = "red";
        await delay(40);

        if (L[i] <= R[j]) {
            array[k] = L[i];
            bars[k].style.height = `${L[i]*4}px`;
            i++;
        } else {
            array[k] = R[j];
            bars[k].style.height = `${R[j]*4}px`;
            j++;
        }

        bars[k].style.background = "yellow";
        k++;
    }

    while (i < n1) {
        array[k] = L[i];
        bars[k].style.height = `${L[i]*4}px`;
        bars[k].style.background = "yellow";
        i++;
        k++;
        await delay(delayTime);
    }

    while (j < n2) {
        array[k] = R[j];
        bars[k].style.height = `${R[j]*4}px`;
        bars[k].style.background = "yellow";
        j++;
        k++;
        await delay(delayTime);
    }

    for (let t = left; t <= right; t++) {
        bars[t].style.background = "green";
    }
}

async function mergeSort(array, bars, left, right) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    await mergeSort(array, bars, left, mid);
    await mergeSort(array, bars, mid + 1, right);
    await merge(array, bars, left, mid, right);
}



const merge_sort_btn = document.querySelector('#merge')

merge_sort_btn.addEventListener('click', async () =>{
    const bars = document.querySelectorAll('.bar');
    await mergeSort(array,  bars, 0, array.length-1);
})




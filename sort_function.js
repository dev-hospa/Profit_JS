function sort(originalArray){
    for(let i = 0; i < originalArray.length; i++){
        let indexMin = findIndexOfMin(originalArray.slice(i, ));
        let temp = originalArray[i];
        originalArray[i] = originalArray.slice(i, )[indexMin];
        originalArray[indexMin + i] = temp;
    }
}

function findIndexOfMin(numbers){
    let min = numbers[0];
    let minIndex = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i];
            minIndex = i;
        }
    }
    return minIndex;
}

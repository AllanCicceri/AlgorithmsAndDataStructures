var numOfSteps = 0
var swaps = 0

function selectionSort(unorderedArr){
    for (let i = 0; i < unorderedArr.length; i++) {
        let lowerValueIndex = i

        for (let j = i + 1; j < unorderedArr.length; j++) {
            numOfSteps++

            if(unorderedArr[j] < unorderedArr[lowerValueIndex]){
                lowerValueIndex = j
            }
        }

        if(lowerValueIndex != i){
            const temp = unorderedArr[i]
            unorderedArr[i] = unorderedArr[lowerValueIndex]
            unorderedArr[lowerValueIndex] = temp
            swaps++
        }
    }

    return unorderedArr
}

const unArr = [4, 2, 1, 8, 5]
const orderedArr = selectionSort(unArr)
console.log(orderedArr)
console.log('steps: ', numOfSteps)//for 5 elements, 10 comparisons
console.log('swaps: ', swaps)//2 swaps (cause the good scenario [only needed to swap 1 and 5])
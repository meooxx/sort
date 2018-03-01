


const arr = [4,1,3,5,6, 7,9,2, 9]
//[4,1,3,2] [6,7,9, 9]
// [1,2], [3,4]  [6,7], [9,9]
//  [1] [2] [3] [4] [6] [7]
const quickSort = (arr) => {
  if(arr.length <= 1 ) return arr
  const pivotIndex = Math.floor(arr.length/2)
  const pivot = arr.splice([pivotIndex], 1)
  const left = []
  const right = []

  arr.forEach(element => {
    if(element > pivot) {
      right.push(element)
    }else {
      left.push(element)
    }
  });

  const result = quickSort(left).concat( pivot, quickSort(right))
  
  return result

}

const result = quickSort(arr)


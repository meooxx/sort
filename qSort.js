



const arr = [1,4,3,2, 1 ]



//1, [4] ,3, 2, [1]
//1,1, [3], [2], [4]
// 1,1,[2], [3],[4]





const swap = (arr, a, b) => {
    
    const t = arr[a]
    arr[a] = arr[b]
    arr[b] = t
    return arr

}

const partition = (arr, left, right) => {
  const pivot = Math.floor((left + right)/2)
  while(left <= right) {
    while( arr[left] < arr[pivot]) {
      // arr[left] < pivot
      left++ 
    }
    while( arr[right] > arr[pivot]) {
      // arr[left] < pivot
      right--
    }

    if(left <= right) {
      swap(arr, left, right)
      left++
      right--
    }
    return left
  }
}


const quickSort = (arr, left, right) => {

  const len = arr.length
  const index = partition(arr, left, right)

  if( left < index - 1 ) {
    quickSort(arr, left, index-1)
  }
  if(right > index) {
    quickSort(arr, index, right)
  }
  return arr

}

console.log(quickSort(arr,0, arr.length-1))
    


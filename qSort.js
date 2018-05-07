



const arr = [1,3,5,2,0 ]



//1, [4] ,3, 2, [1]
//1,1, [3], [2], [4]
// 1,1,[2], [3],[4]

//先定位 左边的值 及 while i <= j , 找到 > pivot 的index 与右边 < pivot 左边交换，再移动一个位置
// 通过指定， left， 与right 索引实现 对arr 分组

const swap = (arr, a, b) => {
    
  const t = arr[a]
  arr[a] = arr[b]
  arr[b] = t
  return arr

}

const partition = (arr, left, right) => {
  const pivot = Math.floor((left + right)/2)
  pivotValue = arr[pivot]
  while(left <= right) {
    while( arr[left] < pivotValue) {
      // arr[left] < pivot
      left++ 
    }
    while( arr[right] > pivotValue) {
      // arr[left] < pivot
      right--
    }

    if(left <= right) {
      swap(arr, left, right)
      left++
      right--
    }
  }
  return left

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
    


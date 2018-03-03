

// 将 数组分成俩个部分
// 分别依次取值 与另外一个相比， 存入小的。 从小的那个数组下一个值与大的比较
//[1,3,2]


// [1], [3,2]
// [1], [3], [2]
//[1], merge([3], [2])
// merge([1], [2,3])

// merge(a, b)
// while iL, iR = 0, iL < leftLength && iR < rightLength
//a[il] < b[iR] push a[il++]
//else push b[iR++]


const merge = (leftArray, rightArray) => {
 // debugger
  const leftArrayLength = leftArray.length
  const rightArrayLength = rightArray.length
  let iLeft = 0, iRight = 0 
  const result = []

  while( iLeft < leftArrayLength && iRight < rightArrayLength ) {
    if(leftArray[iLeft] < rightArray[iRight]) {
      result.push(leftArray[iLeft++])
    }else {
      result.push(rightArray[iRight++])
    }
  }


  return result.concat(leftArray.slice(iLeft), rightArray.slice(iRight))
}

const mergeSort = (arr) => {
  //debugger
  if(arr.length < 2 ) return arr

  const pivotIndex = Math.floor(arr.length/2)
  const leftArray = arr.slice(0, pivotIndex)
  const rightArray = arr.slice(pivotIndex)
 
  const sortedL = mergeSort(leftArray)
  const sortedR = mergeSort(rightArray)


  const result = merge(sortedL, sortedR)

  // 操作原来的数组
  Array.prototype.splice.apply(arr, [0, arr.length, ...result])
  return arr
}

const sortedArray = mergeSort([1,3,2, 6,4 ])
console.log(sortedArray)
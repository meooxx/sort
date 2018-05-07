

const arr = [ 1, 2, -3, -2, 5, 1, 0, 4]


const maxSunseqSum = (arr) => {
  //debugger
  const len = arr.length
  let maxSum = 0 
  let currentSum = 0
  for( let i=0;i<len;i++ ) {
     currentSum += arr[i]
    if(currentSum > maxSum ) {
      maxSum = currentSum
    } else if( currentSum < 0 ) {
      currentSum = 0
    }
  }
  return maxSum
}


console.log(maxSunseqSum(arr) === 10)


/**
 * [1,3,5,2,0]
 * 
 * pivot = (left+right)/2  =2
 * 
 * for arr[left]<arr[pivot] 
 *   [1], 3, (5), 2, 0  arr[left]<arr[pivot] then  left=0;left++ =1
 *   1, [3], (5), 2, 0  arr[left]<arr[pivot] then left=1;left++ =2
 *   1,3,[(5)],2,0      arr[left]<arr[pivot] then left=2; left++=3
 * 
 * for arr[right]>arr[pivot]
 *   1,3,(5),2, [0]                       rigth=4;  
 * 
 * swap(arr, left, right)
 * 
 * 1,3,0,2,5
 * 
 * left == 3
 * 
 * quickSort(arr, left, 2)
 * quickSort(arr, index=3, right)
 * 
 * 
 * 
 * 
 *  
 */



package main 

import (
	"math"
	"fmt"
)

func main(){
	arr:= []int{1,3,5,2,0}
	quickSort(arr, 0 , len(arr)-1)
	fmt.Println(arr)

}


func partion(arr []int, left, right int) int {
	pivotF64 := math.Floor(float64(left+right)/2)
	pivotInt := arr[int(pivotF64)]
	for left<=right {
		for arr[left] < pivotInt {
				left++
		}
		for arr[right]>pivotInt {
				right--
		}
		if left <= right {
			arr[right], arr[left] = arr[left], arr[right]
			left++
			right--
		}

	}
	fmt.Println("lf", left)
	return left
}

func quickSort(arr []int, left, right int ) {
	index:=partion(arr, left, right)
	if left < index-1 {
		quickSort(arr, left, index-1)
	}
	if right > index {
		quickSort(arr, index, right)
	}

}
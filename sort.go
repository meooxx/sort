


package main 

import (
	"fmt"
)

func main() {

	a:=[]int{1,3,2,4,5}
	quickSort(a, 0, len(a)-1)
	fmt.Println(a)

}

func quickSort(arr []int, left, right int) {
	index:=partion(arr, left, right)
	if left>=right {
		return
	}
	quickSort(arr, left, index-1)
	quickSort(arr, index+1, right)
}

func partion(arr []int, left,right int) int {
	temp:=arr[right]
	begin:=left
	for begin<right {
		if arr[left] <= temp {
			arr[left], arr[begin] = arr[begin], arr[left]
			left++
		}
		begin++
	}
	fmt.Println(left, right)
	arr[left], arr[right] = arr[right], arr[left]
	return left
}
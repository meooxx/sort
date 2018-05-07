
/**
 * 
 * partion() 以right 为baseline func(arr, left, right int) int 返回值为 分割点
 * 
 * 对right 索引 前每个元素 与 arr[right] 比较
 * 俩个 变量 begin, left。 begin 用于 遍历right前每个 变量，
 * left 记录当小于 right 值的时候 ++，且 与 begin 索引与 left 索引值交换
 * 
 * 循环结束， 交换right 索引 与 left索引的值，return left
 * begin < right; begin++
 * 
 * [1,3,2,4,5,2,]      <> left;[]begin
 * [<1>],3,2,4,5,   2  left==begin=0     1<2 left++
 * 1, [<3>],2,4,5   2   begin=1,left=1
 * 1,<3>,[2], 4,5   2   begin=2,left=1      
 * 1, 2,<3>, [4],5,2    begin=3, left=2
 * 1,2,<3>,4,[5]    2   begin=4, left=2
 * 
 * over loop then 1,2, 2,  4,5,  3   swap(arr, left, rigth) 
 * 										left     right
 * 继续对base 前后 俩个部分快排
 * left >= right
 *   quickSort(arr, left, index-1)
 * 	 quickSort(arr, index+1, right)
 * 
 */

package main 

import (
	"fmt"
)

func main() {

	a:=[]int{1,3,2,4,5, 7,0,2}
	quickSort(a, 0, len(a)-1)
	fmt.Println(a)

}

func quickSort(arr []int, left, right int) {
	if left>=right {
		return
	}
	index:=partion(arr, left, right)

	quickSort(arr, left, index-1)
	quickSort(arr, index+1, right)
}

func partion(arr []int, left,right int) int {
	temp:=arr[right] 
	begin:=left 
	for begin < right {
		if arr[begin] <= temp {
			arr[begin], arr[left] = arr[left], arr[begin]
			left++
		}
		begin++
	}
	fmt.Println(left, right)
	arr[left], arr[right] = arr[right], arr[left]
	return left
	
}
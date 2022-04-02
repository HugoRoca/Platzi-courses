package main

import "fmt"

func main() {
	// Array, are immutable
	var array [4]int
	array[0] = 1
	array[1] = 2

	fmt.Println(array, "longitude:", len(array), "weight", cap(array))

	// slice are mutable
	slice := []int{0, 1, 2, 3, 4, 5, 6}
	fmt.Println(slice, "longitude:", len(slice), "weight", cap(slice))

	// Methods in slice
	fmt.Println(slice[0])
	fmt.Println(slice[:3])
	fmt.Println(slice[2:4])
	fmt.Println(slice[4:])

	// append
	slice = append(slice, 7)
	fmt.Println(slice)

	// append new list
	newSlice := []int{8, 9, 10}
	slice = append(slice, newSlice...)
}

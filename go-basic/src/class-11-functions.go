package main

import "fmt"

func normalFunction(message string) {
	fmt.Print(message)
}

func tripleArgs(a int, b int, c string) {
	fmt.Println(a, b, c)
}

func tripleArgsWithShort(a, b int, c string) {
	fmt.Println(a, b, c)
}

func returnValue(a int) int {
	return a * 2
}

func doubleReturn(a int) (c, d int) {
	return a, a * 2
}

func main() {
	normalFunction("Hello word")
	tripleArgs(1, 2, "hi")
	tripleArgsWithShort(3, 4, "hi")

	value := returnValue(10)
	fmt.Println("value:", value)

	value1, value2 := doubleReturn(50)
	fmt.Println("double function:", value1, value2)

	value3, _ := doubleReturn(50)
	fmt.Println("double function:", value3)
}

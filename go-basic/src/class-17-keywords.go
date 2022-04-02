package main

import "fmt"

func main() {
  // Defer
  defer fmt.Println("Hello")
  fmt.Println("word")

  // Continue y break
  for i := 0; i < 10; i++ {
    fmt.Println(i)

    if i == 2 {
      fmt.Println("is two")
      continue
    }

    if i == 8 {
      fmt.Println("break")
      break
    }
  }
}

package main

import (
  "fmt"
  "log"
  "strconv"
)

func main() {
  valor1 := 1
  valor2 := 2

  if valor1 == 1 {
    fmt.Println("It is 1")
  } else {
    fmt.Println("It isn't 1")
  }

  // With and
  if valor1 == 1 && valor2 == 2 {
    fmt.Println("is true")
  } else {
    fmt.Println("no true")
  }

  // With or
  if valor1 == 0 || valor2 == 2 {
    fmt.Println("is true!")
  }

  // Convert text to number
  value, err := strconv.Atoi("53")
  // nil = no error
  if err != nil {
    log.Fatal(err)
  }

  fmt.Println("value", value)
}

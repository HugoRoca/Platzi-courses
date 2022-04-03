package main

import "fmt"

func main() {
  m := make(map[string]int)

  m["José"] = 14
  m["Pepito"] = 20

  fmt.Println(m)

  // map
  for i, v := range m {
    fmt.Println(i, v)
  }

  // find value
  value, ok := m["José"]
  fmt.Println(value, ok)

  // if not exists key, return zero and false

}

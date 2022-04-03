package main

import "fmt"

type pc struct {
  ram   int
  disk  int
  brand string
}

func (myPC pc) ping() {
  fmt.Println(myPC.brand, "pong")
}

func (myPC *pc) duplicateRAM() {
  myPC.ram = myPC.ram * 2
}

func main() {
  a := 50
  b := &a // for memory direction

  fmt.Println(a)
  fmt.Println(*b) // for memory value

  *b = 100
  fmt.Println(a)

  //
  myPC := pc{ram: 16, disk: 240, brand: "HP"}
  fmt.Println(myPC)

  myPC.ping()

  fmt.Println(myPC)

  myPC.duplicateRAM()
  fmt.Println(myPC)

  myPC.duplicateRAM()
  fmt.Println(myPC)

  fmt.Println(myPC)
}

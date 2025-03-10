package main

import (
  "github.com/labstack/echo/v4"
  "net/http"
)

func main() {
  e := echo.New()

  // route
  e.GET("/", func(c echo.Context) error {
    return c.String(http.StatusOK, "Hello world")
  })

  e.Logger.Fatal(e.Start(":1323"))
}

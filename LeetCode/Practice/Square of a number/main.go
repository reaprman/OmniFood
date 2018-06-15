package main

import (
	"fmt"
)

func main() {
	var sq int
	fmt.Print("To find the Square please provide number: ")
	fmt.Scan(&sq)
	fmt.Printf("The square root of %v is %v\n", sq, sqMth(sq))
}

func sqMth(n int) int {
	return n * n
}

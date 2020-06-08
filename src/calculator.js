import "./calculator.css"
import $ from "jquery"

const $addition = $(".addition")
const $subtraction = $(".subtraction")
const $multiplication = $(".multiplication")
const $division = $(".division")
const $number = $(".number")
const n = localStorage.getItem("n")
$number.text(n || 100)

$addition.on("click", () => {
    let n = parseInt($number.text())
    n +=1
    localStorage.setItem("n", n)
    $number.text(n)
})
$subtraction.on("click", () => {
    let n = parseInt($number.text())
    n -=1
    localStorage.setItem("n", n)
    $number.text(n)
})
$multiplication.on("click", () => {
    let n = parseInt($number.text())
    n *=2
    localStorage.setItem("n", n)
    $number.text(n)
})
$division.on("click", () => {
    let n = parseInt($number.text())
    n /=2
    localStorage.setItem("n", n)
    $number.text(n)
})
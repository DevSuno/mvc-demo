import "./scroll.css"
import $ from "jquery"

const $square = $(".scroll .square")

$square.on("click", ()=>{
    $square.toggleClass("active")
})
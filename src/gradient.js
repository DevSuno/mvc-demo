import "./gradient.css"
import $ from "jquery"

const  $circle = $(".gradient .circle")

$circle.on("mouseenter", () =>{
    $circle.addClass("active")

}).on("mouseleave", () =>{
    $circle.removeClass("active")
})
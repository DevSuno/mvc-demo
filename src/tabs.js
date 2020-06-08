import "./tabs.css"
import $ from "jquery"

const $tabsBar = $(".tabs .tabsBar")
const $tabContent = $(".tabs .tabContent")

$tabsBar.on("click", "li",e =>{
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected")
    const index = $li.index()
    $tabContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active")
})

$tabsBar.children().eq(0).trigger("click")
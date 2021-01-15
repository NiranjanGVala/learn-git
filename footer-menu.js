$(document).ready(function() {
    let footerMenu = $("#footer-menu")
    footerMenu.click(function(event) {
        menuClickHandler(event.target)
    })
    $(footerMenu).hover(function(event) {
        menuClickHandler(event.target)
    })
})

function menuClickHandler(target) {
    if(target.classList.contains("menu-item-list")) {
        let dropDown = target.parentElement.querySelector(".sub-menu")
        $(dropDown).slideToggle()
    }
}
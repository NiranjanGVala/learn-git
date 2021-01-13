let displayMenu = document.getElementById("display-menu")
let menu = [
	{
		name: "Home",
		url: "/home/"
	},
	{
		name: "About us",
		url: "/about/"
	},
	{
		name: "Contact us",
        url: "/contact/"
	},
	{
		name: "login",
		url: "/login/"
    },
    {
		name: "account",
		url: "/account/"
	}
]
menu.forEach(function(item) {
    let menuTemplate = `<li><a href="${item.url}">${item.name}</a></li>`
    displayMenu.insertAdjacentHTML("beforeend", menuTemplate)
})
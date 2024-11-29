import { getAboutPage, getHomePage, getPosterPage } from "./pages.js";

export const routes = [
	{ url: '/index.htm', title: "Forside", method: getHomePage },
	{ url: '/about.htm', title: "Om", method: getAboutPage },
	{ url: '/posters.htm', title: "Plakater", method: getPosterPage }
]

export const getRoute = () => {
	const path = window.location.pathname
	routes.find(route => route.url === path).method();
}

getRoute()
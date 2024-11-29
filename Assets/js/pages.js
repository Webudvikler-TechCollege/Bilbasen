import { getPosters, createElement, createFooter, createHeader, getRandomPosters } from "./helpers.js"

const ROOT = document.getElementById('root')

export const getHomePage = async () => {	
	ROOT.appendChild(createHeader('Forside'))
	ROOT.appendChild(await getRandomPosters())
	ROOT.appendChild(createFooter())	
}

export const getAboutPage = () => {
	ROOT.appendChild(createHeader('Om os'))
	ROOT.appendChild(createElement('p', 'Lorem Ipsum'))
	ROOT.appendChild(createFooter())	
}

export const getPosterPage = async () => {
	ROOT.appendChild(createHeader('Plakater'))
	ROOT.appendChild(await getPosters())
	ROOT.appendChild(createFooter())	
}
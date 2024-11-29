import { routes } from "./main.js";

/**
 * Create Header
 * @param {*} parentElm 
 */
export const createHeader = title => {
	const header = createElement(
		'header',
		'Hej verden',
		[{ 
			name: "id", 
			value: "header"
		}],
		['header']
	);
	header.append(createNavBar())
	document.title = title
	
	return header
}

/**
 * Creates a partial footer element
 * @returns html object
 */
export const createFooter = () => {
	const accHtml = createElement(
		'footer',
		'2024'
	)

	return accHtml
}

/**
 * Creates navigation bar
 * @returns 
 */
export const createNavBar = () => {
	const accHtml = createElement('ul','',[{ name: 'id', value: 'navbar'}])

	for(let item of routes) {
		const li = createElement('li')
		const a = createElement('a', item.title, [
			{ name: 'href', value: item.url },
		])
		li.append(a)
		accHtml.append(li)
	}

	return accHtml
}

/**
 * 
 * @returns 
 */
export const getRandomPosters = async () => {
	const data = await myFetch(`http://localhost:3000/posters?limit=4`)
	const accHtml = createElement('ul')
	for(let item of data) {
		const li = createElement('li', item.name)
		accHtml.append(li)				
	}
	console.log(accHtml);
	return accHtml
}

/**
 * 
 * @returns 
 */
export const getPosters = async () => {
	const data = await myFetch(`http://localhost:3000/posters`)
	const accHtml = createElement('ul')
	for(let item of data) {
		const li = createElement('li', item.name)
		accHtml.append(li)				
	}
	console.log(accHtml);
	return accHtml
}


/**
 * Funktion til at fetche med
 * @param {String} url 
 * @param {String} method 
 * @returns any
 */
export const myFetch = async (url, method = 'GET') => {
	try {
		const response = await fetch(url, {
			method
		})
		if(!response.ok) {
			throw new Error(`Fejl i myFetch: ${response.status} - ${response.statusText}`)
		}
		const data = await response.json()
		return data;
	} catch (error) {
		console.error(error)
	}
}

/**
 * Creates an html element
 * @param {*} elm 
 * @param {*} attributes 
 * @param {*} classes 
 * @returns 
 */
export const createElement = (elm, innerText = '', attributes = [], classes = []) => {	

	const output = document.createElement(elm);
	if(attributes) {
		for(let item of attributes) {
			output.setAttribute(item.name, item.value)
		}
	}
	if(classes) {
		for(let item of classes) {
			output.classList.add(item)
		}
	}

	if(innerText) {
		output.innerText = innerText
	}

	return output
}

export const clearRoot = () => {
	document.getElementById('root').innerHTML = ''
} 

/**
 * Create Header
 * @param {*} parentElm 
 */
export const createHeader = parentElm => {
	const accHtml = createElement(
		'header',
		'Hej verden',
		[{ 
			name: "id", 
			value: "header"
		}],
		['header']
	);
	parentElm.append(accHtml)
}

/**
 * Create Footer
 * @param {*} parentElm 
 */
export const createFooter = parentElm => {
	const accHtml = createElement(
		'footer',
		'2024'
	)
	parentElm.append(accHtml)
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

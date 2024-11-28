export const createElement = () => {
	const ROOT = document.getElementById('root')

	const arrItems = [
		{ title: "Star Wars", description: "A movie "},
		{ title: "Avatar", description: "A movie "},
		{ title: "Indiana Jones", description: "A movie "},
		{ title: "Gladiator", description: "A movie "},
	]
	
	const ul = document.createElement('ul');
	ul.setAttribute('id', 'posterlist')
	ul.classList.add('posterlist')
	
	for(let item of arrItems) {
		const li = document.createElement('li')
		li.innerText = `${item.title}: ${item.description}`
		
		ul.append(li)
	}
	
	ROOT.prepend(ul)
}

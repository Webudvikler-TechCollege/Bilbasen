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
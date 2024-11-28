import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = ''
const supabaseKey = ''
export const supabase = createClient(supabaseUrl, supabaseKey)

export const fetchData = async () => {
	try {
		const { data, error } = await supabase
			.from('cars')
			.select('model, brands(name)')
		if(error) {
			throw error
		}
		return data

	} catch (error) {
		console.log(error)
	}
}


const data = await fetchData()
console.log(data);

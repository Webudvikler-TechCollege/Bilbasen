import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://avrkzifxylsaixsjdumi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2cmt6aWZ4eWxzYWl4c2pkdW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMTQ5NzMsImV4cCI6MjA0NDg5MDk3M30.NrWx8Cgid-Li1b0ejtOFN4HKLEN0XdQHtT-mIkAKrpg'
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

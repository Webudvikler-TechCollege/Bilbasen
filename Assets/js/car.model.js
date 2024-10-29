import { supabase } from './supabase.js';

/**
 * Class CarModel
 */
export class carModel {

	// Method list
	async list() {
		try {
			// Fetch data from cars table
			const { data, error } = await supabase.from('cars').select('*');
			if (error) {
				throw error;
			}
			return data
		} catch (error) {
			console.error('Error fetching cars', error);
		}
	}
}
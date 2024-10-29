import { supabase } from './supabase.js';

/**
 * Class CarModel
 */
export class carModel {
	async list() {
		try {
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
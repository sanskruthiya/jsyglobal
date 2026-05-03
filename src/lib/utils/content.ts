import type { Language } from '$lib/stores/language';

export async function loadContent(lang: Language, section: string): Promise<any> {
	try {
		const response = await fetch(`/data/${section}.${lang}.json`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		if (lang === 'ja') {
			try {
				const fallbackResponse = await fetch(`/data/${section}.en.json`);
				if (!fallbackResponse.ok) {
					throw new Error(`HTTP error! status: ${fallbackResponse.status}`);
				}
				return await fallbackResponse.json();
			} catch (fallbackError) {
				console.error(`Failed to load content for section: ${section}`, fallbackError);
				return {};
			}
		}
		console.error(`Failed to load content for section: ${section}`, error);
		return {};
	}
}

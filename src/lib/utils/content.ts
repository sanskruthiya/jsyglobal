import type { Language } from '$lib/stores/language';

export async function loadContent(lang: Language, section: string): Promise<any> {
	try {
		const content = await import(`$lib/data/${section}.${lang}.json`);
		return content.default || content;
	} catch (error) {
		if (lang === 'ja') {
			try {
				const fallback = await import(`$lib/data/${section}.en.json`);
				return fallback.default || fallback;
			} catch (fallbackError) {
				console.error(`Failed to load content for section: ${section}`, fallbackError);
				return {};
			}
		}
		console.error(`Failed to load content for section: ${section}`, error);
		return {};
	}
}

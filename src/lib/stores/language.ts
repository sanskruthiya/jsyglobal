import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'en' | 'ja';

function createLanguageStore() {
	const defaultLang: Language = 'ja';
	
	let initialLang: Language = defaultLang;
	
	if (browser) {
		const stored = localStorage.getItem('language') as Language | null;
		if (stored && (stored === 'en' || stored === 'ja')) {
			initialLang = stored;
		} else {
			const browserLang = navigator.language.toLowerCase();
			if (browserLang.startsWith('ja')) {
				initialLang = 'ja';
			} else {
				initialLang = 'en';
			}
		}
	}
	
	const { subscribe, set } = writable<Language>(initialLang);
	
	return {
		subscribe,
		set: (lang: Language) => {
			if (browser) {
				localStorage.setItem('language', lang);
			}
			set(lang);
		},
		toggle: () => {
			if (browser) {
				const current = localStorage.getItem('language') as Language | null;
				const newLang: Language = current === 'ja' ? 'en' : 'ja';
				localStorage.setItem('language', newLang);
				set(newLang);
			}
		}
	};
}

export const language = createLanguageStore();

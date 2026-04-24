<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';

	let content: any = $state({});
	let mobileMenuOpen = $state(false);
	let currentLang = $state($language);

	$effect(() => {
		currentLang = $language;
		loadContent($language, 'content').then((data) => {
			content = data;
		});
	});

	function toggleLanguage() {
		language.toggle();
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 bg-white shadow-sm">
	<nav class="container-custom">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="flex items-center gap-2">
					<img src="/images/LogoOnly.png" alt="JSY-Global Logo" class="h-10 w-auto" />
					<span class="text-xl font-bold text-primary-600">
						{content.site?.name || 'JSY-Global'}
					</span>
				</a>
			</div>

			<div class="hidden items-center space-x-8 md:flex">
				<a href="/" class="text-gray-700 transition-colors hover:text-primary-600">
					{content.nav?.home || 'Home'}
				</a>
				<a href="/about" class="text-gray-700 transition-colors hover:text-primary-600">
					{content.nav?.about || 'About'}
				</a>
				<a href="/services" class="text-gray-700 transition-colors hover:text-primary-600">
					{content.nav?.services || 'Services'}
				</a>
				<a href="/works" class="text-gray-700 transition-colors hover:text-primary-600">
					{content.nav?.works || 'Works'}
				</a>
				<a href="/news" class="text-gray-700 transition-colors hover:text-primary-600">
					{content.nav?.news || 'News'}
				</a>
				<a href="/blog" class="text-gray-700 transition-colors hover:text-primary-600">
					{content.nav?.blog || 'Blog'}
				</a>
				<a href="/contact" class="text-gray-700 transition-colors hover:text-primary-600">
					{content.nav?.contact || 'Contact'}
				</a>

				<button
					onclick={toggleLanguage}
					class="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
					aria-label="Toggle language"
				>
					{currentLang === 'ja' ? 'EN' : 'JA'}
				</button>
			</div>

			<button
				onclick={toggleMobileMenu}
				class="md:hidden"
				aria-label="Toggle mobile menu"
			>
				<svg
					class="h-6 w-6 text-gray-700"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
		</div>

		{#if mobileMenuOpen}
			<div class="border-t border-gray-200 py-4 md:hidden">
				<div class="flex flex-col space-y-4">
					<a
						href="/"
						onclick={closeMobileMenu}
						class="text-gray-700 transition-colors hover:text-primary-600"
					>
						{content.nav?.home || 'Home'}
					</a>
					<a
						href="/about"
						onclick={closeMobileMenu}
						class="text-gray-700 transition-colors hover:text-primary-600"
					>
						{content.nav?.about || 'About'}
					</a>
					<a
						href="/services"
						onclick={closeMobileMenu}
						class="text-gray-700 transition-colors hover:text-primary-600"
					>
						{content.nav?.services || 'Services'}
					</a>
					<a
						href="/works"
						onclick={closeMobileMenu}
						class="text-gray-700 transition-colors hover:text-primary-600"
					>
						{content.nav?.works || 'Works'}
					</a>
					<a
						href="/news"
						onclick={closeMobileMenu}
						class="text-gray-700 transition-colors hover:text-primary-600"
					>
						{content.nav?.news || 'News'}
					</a>
					<a
						href="/blog"
						onclick={closeMobileMenu}
						class="text-gray-700 transition-colors hover:text-primary-600"
					>
						{content.nav?.blog || 'Blog'}
					</a>
					<a
						href="/contact"
						onclick={closeMobileMenu}
						class="text-gray-700 transition-colors hover:text-primary-600"
					>
						{content.nav?.contact || 'Contact'}
					</a>

					<button
						onclick={toggleLanguage}
						class="w-fit rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
					>
						{currentLang === 'ja' ? 'EN' : 'JA'}
					</button>
				</div>
			</div>
		{/if}
	</nav>
</header>

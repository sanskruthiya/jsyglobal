<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';

	let content: any = $state({});

	$effect(() => {
		loadContent($language, 'content').then((data) => {
			content = data;
		});
	});
</script>

<footer class="border-t border-gray-200 bg-gray-50">
	<div class="container-custom py-12">
		<div class="grid gap-8 md:grid-cols-3">
			<div>
				<div class="mb-4 flex items-center gap-3">
					<img src="/images/LogoOnly.png" alt="JSY-Global Logo" class="h-10 w-auto" />
					<h3 class="text-lg font-bold text-gray-900">
						{content.site?.name || 'JSY-Global'}
					</h3>
				</div>
				<p class="text-sm text-gray-600">
					{content.site?.tagline || 'Connecting the World through International Development'}
				</p>
			</div>

			<div>
				<h4 class="mb-4 font-semibold text-gray-900">
					{$language === 'ja' ? '会社情報' : 'Company Information'}
				</h4>
				<div class="space-y-2 text-sm text-gray-600">
					<p>1-6-16-405 KandaIzumi,<br />Chiyoda-ku, Tokyo, Japan</p>
				</div>
			</div>

			<div>
				<h4 class="mb-4 font-semibold text-gray-900">Quick Links</h4>
				<nav class="flex flex-col space-y-2 text-sm">
					<a href="/" class="text-gray-600 transition-colors hover:text-primary-600">
						{content.nav?.home || 'Home'}
					</a>
					<a href="/about" class="text-gray-600 transition-colors hover:text-primary-600">
						{content.nav?.about || 'About'}
					</a>
					<a href="/services" class="text-gray-600 transition-colors hover:text-primary-600">
						{content.nav?.services || 'Services'}
					</a>
					<a href="/works" class="text-gray-600 transition-colors hover:text-primary-600">
						{content.nav?.works || 'Works'}
					</a>
					<a href="/news" class="text-gray-600 transition-colors hover:text-primary-600">
						{content.nav?.news || 'News'}
					</a>
					<a href="/blog" class="text-gray-600 transition-colors hover:text-primary-600">
						{content.nav?.blog || 'Blog'}
					</a>
					<a href="/contact" class="text-gray-600 transition-colors hover:text-primary-600">
						{content.nav?.contact || 'Contact'}
					</a>
				</nav>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
			<p>{content.footer?.copyright || ' 2026 JSY-Global. All rights reserved.'}</p>
		</div>
	</div>
</footer>

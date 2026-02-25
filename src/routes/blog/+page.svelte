<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';

	let content: any = $state({});

	$effect(() => {
		loadContent($language, 'content').then((data) => {
			content = data;
		});
	});

	const blogUrl = 'https://example.com/blog';
</script>

<svelte:head>
	<title>{content.nav?.blog || 'Blog'} - JSY Global</title>
	<meta name="description" content="JSY Global Blog" />
</svelte:head>

<section class="bg-primary-600 py-16 text-white">
	<div class="container-custom">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">{content.nav?.blog || 'Blog'}</h1>
		<p class="text-xl">
			{$language === 'ja' 
				? 'JSY Globalのブログをご覧いただけます' 
				: 'Visit JSY Global Blog'}
		</p>
	</div>
</section>

<section class="py-16">
	<div class="container-custom">
		<div class="mx-auto max-w-3xl text-center">
			<div class="card">
				<div class="mb-8">
					<svg class="mx-auto h-24 w-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-gray-900">
					{$language === 'ja' 
						? 'ブログサイトへ移動します' 
						: 'Go to Blog Site'}
				</h2>
				<p class="mb-8 text-gray-600">
					{$language === 'ja' 
						? '下のボタンをクリックすると、外部のブログサイトに移動します。' 
						: 'Click the button below to visit our external blog site.'}
				</p>
				<a 
					href={blogUrl} 
					target="_blank" 
					rel="noopener noreferrer"
					class="btn-primary inline-flex items-center gap-2 text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
				>
					{$language === 'ja' ? 'ブログを見る' : 'Visit Blog'}
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

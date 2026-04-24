<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let content: any = $state({});

	$effect(() => {
		loadContent($language, 'content').then((data) => {
			content = data;
		});
	});
</script>

<svelte:head>
	<title>{content.nav?.blog || 'Blog'} - JSY-Global</title>
	<meta name="description" content="JSY-Global Blog" />
</svelte:head>

<PageHeader 
	title={content.nav?.blog || 'Blog'} 
	subtitle={$language === 'ja' ? 'ブログページは現在準備中です' : 'Blog page is currently under construction'} 
/>

<section class="py-16">
	<div class="container-custom">
		<div class="mx-auto max-w-3xl text-center">
			<div class="card">
				<div class="mb-8">
					<svg class="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-gray-900">
					{$language === 'ja' 
						? 'Coming Soon' 
						: 'Coming Soon'}
				</h2>
				<p class="mb-8 text-gray-600">
					{$language === 'ja' 
						? 'ブログページは現在準備中です。近日公開予定ですので、しばらくお待ちください。' 
						: 'The blog page is currently under construction. Please check back soon.'}
				</p>
				<button 
					disabled
					class="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-300 px-8 py-3 text-lg font-semibold text-gray-500 opacity-60"
				>
					{$language === 'ja' ? 'ブログを見る（準備中）' : 'Visit Blog (Coming Soon)'}
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>

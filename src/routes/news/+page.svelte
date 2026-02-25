<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';

	let news: any = $state({});

	$effect(() => {
		loadContent($language, 'news').then((data) => {
			news = data;
		});
	});

	let sortedNews = $derived(
		[...(news.news || [])].sort((a: any, b: any) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		})
	);
</script>

<svelte:head>
	<title>{news.hero?.title || 'News'} - JSY Global</title>
	<meta name="description" content={news.hero?.subtitle || 'Latest updates'} />
</svelte:head>

<section class="bg-primary-600 py-16 text-white">
	<div class="container-custom">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">{news.hero?.title || 'News'}</h1>
		<p class="text-xl">{news.hero?.subtitle || 'Latest updates'}</p>
	</div>
</section>

<section class="py-16">
	<div class="container-custom">
		<div class="mx-auto max-w-4xl space-y-6">
			{#each sortedNews as item}
				<article class="card">
					<div class="mb-3 flex items-center justify-between">
						<span class="rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
							{item.category}
						</span>
						<time class="text-sm text-gray-500">{item.date}</time>
					</div>
					<h2 class="mb-3 text-2xl font-bold text-gray-900">{item.title}</h2>
					<p class="text-gray-600">{item.summary}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

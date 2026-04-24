<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';
	import Hero from '$lib/components/Hero.svelte';

	let content: any = $state({});
	let services: any = $state({ services: [] });
	let works: any = $state({ works: [] });
	let news: any = $state({ news: [] });

	$effect(() => {
		loadContent($language, 'content').then((data) => {
			content = data;
		});
		loadContent($language, 'services').then((data) => {
			services = data;
		});
		loadContent($language, 'works').then((data) => {
			works = data;
		});
		loadContent($language, 'news').then((data) => {
			news = data;
		});
	});

	let featuredWorks = $derived(works.works?.filter((w: any) => w.featured).slice(0, 2) || []);
	let latestNews = $derived(news.news?.slice(0, 2) || []);
</script>

<svelte:head>
	<title>{content.site?.name || 'JSY-Global'}</title>
	<meta name="description" content={content.site?.tagline || 'International Development Company'} />
</svelte:head>

<Hero />

<section class="py-16">
	<div class="container-custom">
		<h2 class="section-title text-center">{services.hero?.title || 'Our Services'}</h2>
		<div class="grid gap-8 md:grid-cols-3">
			{#each services.services?.slice(0, 3) || [] as service}
				<div class="card">
					<h3 class="mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
					<p class="text-gray-600">{service.description}</p>
				</div>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a href="/services" class="btn-primary">
				{content.common?.viewAll || 'View All'}
			</a>
		</div>
	</div>
</section>

<section class="bg-gray-50 py-16">
	<div class="container-custom">
		<h2 class="section-title text-center">{works.hero?.title || 'Our Works'}</h2>
		<div class="grid gap-8 md:grid-cols-2">
			{#each featuredWorks as work}
				<div class="card">
					{#if work.image}
						<div class="mb-4 h-48 overflow-hidden rounded-lg">
							<img 
								src={work.image} 
								alt={work.title}
								class="h-full w-full object-cover"
							/>
						</div>
					{:else}
						<div class="mb-4 h-48 rounded-lg bg-gray-200"></div>
					{/if}
					<div class="mb-2 flex items-center justify-between">
						<span class="text-sm font-semibold text-primary-600">{work.category}</span>
						<span class="text-sm text-gray-500">{work.year}</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-gray-900">{work.title}</h3>
					<p class="mb-4 text-gray-600">{work.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each work.tags || [] as tag}
							<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a href="/works" class="btn-primary">
				{content.common?.viewAll || 'View More'}
			</a>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container-custom">
		<h2 class="section-title text-center">{news.hero?.title || 'News'}</h2>
		<div class="mx-auto max-w-3xl space-y-6">
			{#each latestNews as item}
				<div class="card">
					<div class="mb-2 flex items-center justify-between">
						<span class="text-sm font-semibold text-primary-600">{item.category}</span>
						<span class="text-sm text-gray-500">{item.date}</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
					<p class="text-gray-600">{item.summary}</p>
				</div>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a href="/news" class="btn-primary">
				{content.common?.viewAll || 'View All'}
			</a>
		</div>
	</div>
</section>

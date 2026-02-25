<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';

	let company: any = $state({});

	$effect(() => {
		loadContent($language, 'company').then((data) => {
			company = data;
		});
	});
</script>

<svelte:head>
	<title>{company.hero?.title || 'About'} - JSY Global</title>
	<meta name="description" content={company.hero?.subtitle || 'About JSY Global'} />
</svelte:head>

<section class="bg-primary-600 py-16 text-white">
	<div class="container-custom">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">{company.hero?.title || 'About Us'}</h1>
		<p class="text-xl">{company.hero?.subtitle || 'Learn more about JSY Global'}</p>
	</div>
</section>

<section class="py-16">
	<div class="container-custom">
		<h2 class="section-title">{company.info?.title || 'Company Information'}</h2>
		<div class="mx-auto max-w-3xl">
			<div class="card">
				<dl class="space-y-4">
					{#each company.info?.items || [] as item}
						<div class="grid grid-cols-1 gap-2 border-b border-gray-200 pb-4 last:border-0 md:grid-cols-3">
							<dt class="font-semibold text-gray-900">{item.label}</dt>
							<dd class="text-gray-700 md:col-span-2">{item.value}</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</section>

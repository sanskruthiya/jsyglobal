<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';

	let services: any = $state({});

	$effect(() => {
		loadContent($language, 'services').then((data) => {
			services = data;
		});
	});
</script>

<svelte:head>
	<title>{services.hero?.title || 'Services'} - JSY Global</title>
	<meta name="description" content={services.hero?.subtitle || 'Our Services'} />
</svelte:head>

<section class="bg-primary-600 py-16 text-white">
	<div class="container-custom">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">{services.hero?.title || 'Our Services'}</h1>
		<p class="text-xl">{services.hero?.subtitle || 'What we offer'}</p>
	</div>
</section>

<section class="py-16">
	<div class="container-custom">
		<div class="space-y-12">
			{#each services.services || [] as service, index}
				<div class="card">
					<div class="grid gap-8 md:grid-cols-2">
						<div class={index % 2 === 0 ? 'order-1' : 'order-2'}>
							<div class="mb-4 flex items-center">
								<div class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
									{index + 1}
								</div>
								<h2 class="text-2xl font-bold text-gray-900">{service.title}</h2>
							</div>
							<p class="mb-4 text-lg text-gray-700">{service.description}</p>
							<p class="text-gray-600">{service.details}</p>
						</div>
						<div class={index % 2 === 0 ? 'order-2' : 'order-1'}>
							<div class="h-64 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 md:h-full"></div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

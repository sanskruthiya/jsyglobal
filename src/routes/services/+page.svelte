<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let services: any = $state({});

	$effect(() => {
		loadContent($language, 'services').then((data) => {
			services = data;
		});
	});
</script>

<svelte:head>
	<title>{services.hero?.title || 'Services'} - JSY-Global</title>
	<meta name="description" content={services.hero?.subtitle || 'Our Services'} />
</svelte:head>

<PageHeader 
	title={services.hero?.title || 'Our Services'} 
	subtitle={services.hero?.subtitle || 'What we offer'} 
/>

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
							<div class="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 md:h-full">
								<div class="text-center">
									<svg class="mx-auto mb-3 h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
									<p class="text-sm font-medium text-gray-500">
										{$language === 'ja' ? '画像準備中' : 'Image Coming Soon'}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

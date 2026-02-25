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

<section class="relative h-[600px] overflow-hidden rounded-2xl bg-gray-100">
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/coverimage.webp');"></div>
	<div class="absolute inset-0 bg-white/60"></div>
	<div class="container-custom relative flex h-full items-center">
		<div class="max-w-4xl">
			<h1 class="mb-8 bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-800 bg-clip-text text-6xl font-extrabold leading-tight tracking-tight text-transparent md:text-7xl lg:text-7xl">
				{content.site?.name || 'JSY Global'}
			</h1>
			<p class="mb-8 bg-gradient-to-r from-gray-700 via-gray-600 to-slate-700 bg-clip-text text-xl font-semibold text-transparent md:text-xl">
				{content.site?.tagline || 'Community Development, Consulting, Research, Education, and More'}
			</p>
			<div class="flex flex-wrap gap-4">
				<a href="/contact" class="btn-primary">
					{content.common?.contactUs || 'Contact Us'}
				</a>
			</div>
		</div>
	</div>
</section>

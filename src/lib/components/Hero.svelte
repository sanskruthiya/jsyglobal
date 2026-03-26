<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';

	interface Content {
		site?: {
			name?: string;
			tagline?: string;
		};
		common?: {
			contactUs?: string;
		};
	}

	let content: Content = $state({});

	$effect(() => {
		loadContent($language, 'content').then((data) => {
			content = data;
		});
	});
</script>

<section class="relative overflow-hidden bg-white py-12 md:py-20 lg:py-32">
	<div class="absolute inset-0 bg-cover bg-center opacity-10" style="background-image: url('/images/coverimage.webp');"></div>
	<div class="container-custom relative">
		<div class="flex flex-col items-center lg:flex-row lg:items-center">
			<div class="mb-8 flex w-full justify-center lg:hidden">
				<div class="h-60 w-60 overflow-hidden rounded-full shadow-2xl sm:h-80 sm:w-80">
					<img 
						src="/images/contents/20xx_ET.webp" 
						alt="JSY Global" 
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
			<div class="w-full text-center lg:w-7/12 lg:pr-12 lg:text-left">
				<h1 class="mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl xl:text-7xl" style="font-family: 'Montserrat', sans-serif; filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06));">
					{content.site?.name || 'JSY Global'}
				</h1>
				<p class="mb-8 text-base text-gray-700 md:text-lg lg:max-w-xl">
					{content.site?.tagline || 'Community Development, Consulting, Research & Education'}
				</p>
				<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
					<a href="/contact" class="btn-primary">
						{content.common?.contactUs || 'Contact Us'}
					</a>
				</div>
			</div>
			<div class="absolute right-20 top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 lg:block xl:h-[400px] xl:w-[400px]">
				<div class="h-full w-full overflow-hidden rounded-full shadow-2xl">
					<img 
						src="/images/contents/20xx_ET.webp" 
						alt="JSY Global" 
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

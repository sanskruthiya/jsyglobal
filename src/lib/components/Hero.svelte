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
			learnMore?: string;
		};
	}

	let content: Content = $state({});

	$effect(() => {
		loadContent($language, 'content').then((data) => {
			content = data;
		});
	});
</script>

<style>
	@keyframes float-gentle {
		0%, 100% {
			transform: translate(0, 0) rotate(0deg);
		}
		25% {
			transform: translate(15px, -15px) rotate(3deg);
		}
		50% {
			transform: translate(-10px, -25px) rotate(-2deg);
		}
		75% {
			transform: translate(-15px, 10px) rotate(4deg);
		}
	}

	@keyframes letter-appear {
		0% {
			opacity: 0;
			transform: translateY(-20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes inc-appear {
		0% {
			opacity: 0;
			transform: scale(0.8) translateY(10px);
		}
		60% {
			transform: scale(1.05) translateY(0);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	.shape-float-1 {
		animation: float-gentle 12s ease-in-out infinite;
	}

	.shape-float-2 {
		animation: float-gentle 15s ease-in-out infinite 1s;
	}

	.shape-float-3 {
		animation: float-gentle 10s ease-in-out infinite 2s;
	}

	.shape-float-4 {
		animation: float-gentle 13s ease-in-out infinite 0.5s;
	}

	.letter-animate {
		display: inline-block;
		opacity: 0;
		animation: letter-appear 0.5s ease-out forwards;
	}

	.inc-animate {
		display: inline-block;
		opacity: 0;
		animation: inc-appear 0.6s ease-out 1.1s forwards;
	}
</style>

<section class="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
	<!-- Decorative geometric shapes inspired by the penguin's polygon art style -->
	<div class="absolute inset-0 overflow-hidden" aria-hidden="true">
		<div class="shape-float-1 absolute -right-16 -top-16 h-72 w-72 rotate-12 rounded-3xl bg-primary-100/50 md:h-96 md:w-96"></div>
		<div class="shape-float-2 absolute -bottom-20 -left-20 h-64 w-64 -rotate-6 rounded-3xl bg-teal-100/45 md:h-80 md:w-80"></div>
		<div class="shape-float-3 absolute right-1/4 top-1/3 hidden h-32 w-32 rotate-45 rounded-2xl bg-sky-100/40 lg:block"></div>
		<div class="shape-float-4 absolute bottom-1/4 left-1/3 hidden h-24 w-24 -rotate-12 rounded-xl bg-primary-200/35 lg:block"></div>
	</div>

	<div class="container-custom relative py-16 md:py-20">
		<div class="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
			<!-- Left: Logo penguin icon -->
			<div class="flex shrink-0 justify-center lg:w-5/12">
				<img
					src="/images/JSYglobalLogo.webp"
					alt="JSY Global Logo"
					class="h-auto w-36 drop-shadow-xl sm:w-44 md:w-52 lg:w-60"
				/>
			</div>

			<!-- Right: Company info -->
			<div class="w-full text-center lg:text-left">
				<h1
					class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
					style="font-family: 'Montserrat', sans-serif;"
				>
					<span class="inline-block">
						<span class="letter-animate" style="animation-delay: 0s;">J</span><span class="letter-animate" style="animation-delay: 0.1s;">S</span><span class="letter-animate" style="animation-delay: 0.2s;">Y</span><span class="letter-animate" style="animation-delay: 0.3s;">-</span><span class="letter-animate" style="animation-delay: 0.4s;">G</span><span class="letter-animate" style="animation-delay: 0.5s;">l</span><span class="letter-animate" style="animation-delay: 0.6s;">o</span><span class="letter-animate" style="animation-delay: 0.7s;">b</span><span class="letter-animate" style="animation-delay: 0.8s;">a</span><span class="letter-animate" style="animation-delay: 0.9s;">l</span>
					</span>
					<span class="block text-primary-600 inc-animate">Inc.</span>
				</h1>

				<div class="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-teal-400 mx-auto lg:mx-0"></div>

				<p class="mb-8 max-w-lg text-lg leading-relaxed text-gray-600 mx-auto lg:mx-0">
					{content.site?.tagline || 'Community Development, Consulting, Research & Education'}
				</p>

				<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
					<a href="/contact" class="btn-primary">
						{content.common?.contactUs || 'Contact Us'}
					</a>
					<a href="/about" class="btn-secondary">
						{content.common?.learnMore || 'Learn More'}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

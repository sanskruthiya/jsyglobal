<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';

	let content: any = $state({});
	let formData = $state({
		company: '',
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	$effect(() => {
		loadContent($language, 'content').then((data) => {
			content = data;
		});
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
	}
</script>

<svelte:head>
	<title>{content.nav?.contact || 'Contact'} - JSY Global</title>
	<meta name="description" content="Contact JSY Global" />
</svelte:head>

<section class="bg-primary-600 py-16 text-white">
	<div class="container-custom">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">{content.nav?.contact || 'Contact Us'}</h1>
		<p class="text-xl">
			{$language === 'ja' ? 'お気軽にお問い合わせください' : 'Feel free to contact us'}
		</p>
	</div>
</section>

<section class="py-16">
	<div class="container-custom">
		<div class="grid gap-12 lg:grid-cols-2">
			<div>
				<h2 class="mb-6 text-2xl font-bold text-gray-900">
					{$language === 'ja' ? 'お問い合わせフォーム' : 'Contact Form'}
				</h2>
				<form onsubmit={handleSubmit} class="space-y-6">
					<div>
						<label for="company" class="mb-2 block font-medium text-gray-700">
							{$language === 'ja' ? '会社名' : 'Company Name'}
						</label>
						<input
							type="text"
							id="company"
							bind:value={formData.company}
							class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
							required
						/>
					</div>

					<div>
						<label for="name" class="mb-2 block font-medium text-gray-700">
							{$language === 'ja' ? 'お名前' : 'Your Name'}
							<span class="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
							required
						/>
					</div>

					<div>
						<label for="email" class="mb-2 block font-medium text-gray-700">
							{$language === 'ja' ? 'メールアドレス' : 'Email Address'}
							<span class="text-red-500">*</span>
						</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
							required
						/>
					</div>

					<div>
						<label for="phone" class="mb-2 block font-medium text-gray-700">
							{$language === 'ja' ? '電話番号' : 'Phone Number'}
						</label>
						<input
							type="tel"
							id="phone"
							bind:value={formData.phone}
							class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
						/>
					</div>

					<div>
						<label for="message" class="mb-2 block font-medium text-gray-700">
							{$language === 'ja' ? 'お問い合わせ内容' : 'Message'}
							<span class="text-red-500">*</span>
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							rows="6"
							class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
							required
						></textarea>
					</div>

					<button type="submit" class="btn-primary w-full">
						{$language === 'ja' ? '送信する' : 'Send Message'}
					</button>
				</form>

				<p class="mt-4 text-sm text-gray-600">
					{$language === 'ja'
						? '※ Formspreeの設定が必要です。後ほど設定してください。'
						: '* Formspree configuration required. Please set up later.'}
				</p>
			</div>

			<div>
				<h2 class="mb-6 text-2xl font-bold text-gray-900">
					{content.footer?.company || 'Company Information'}
				</h2>
				<div class="card space-y-6">
					<div>
						<h3 class="mb-2 font-semibold text-gray-900">
							{$language === 'ja' ? '所在地' : 'Address'}
						</h3>
						<p class="text-gray-600">{content.footer?.address || ''}</p>
					</div>

					<div>
						<h3 class="mb-2 font-semibold text-gray-900">
							{$language === 'ja' ? '電話' : 'Phone'}
						</h3>
						<p class="text-gray-600">{content.footer?.phone || ''}</p>
					</div>

					<div>
						<h3 class="mb-2 font-semibold text-gray-900">
							{$language === 'ja' ? 'メール' : 'Email'}
						</h3>
						<p class="text-gray-600">{content.footer?.email || ''}</p>
					</div>
				</div>

				<div class="mt-8">
					<div class="h-64 rounded-lg bg-gray-200">
						<p class="flex h-full items-center justify-center text-gray-500">
							{$language === 'ja' ? '地図は後日実装予定' : 'Map will be implemented later'}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let content: any = $state({});
	let formData = $state({
		company: '',
		name: '',
		email: '',
		phone: '',
		message: ''
	});
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

	$effect(() => {
		loadContent($language, 'content').then((data) => {
			content = data;
		});
	});

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';

		try {
			const response = await fetch('https://formspree.io/f/mpwjnvdr', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				submitStatus = 'success';
				formData = {
					company: '',
					name: '',
					email: '',
					phone: '',
					message: ''
				};
			} else {
				submitStatus = 'error';
			}
		} catch (error) {
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>{content.nav?.contact || 'Contact'} - JSY-Global</title>
	<meta name="description" content="Contact JSY-Global" />
</svelte:head>

<PageHeader 
	title={content.nav?.contact || 'Contact Us'} 
	subtitle={$language === 'ja' ? 'お気軽にお問い合わせください' : 'Feel free to contact us'} 
/>

<section class="py-16">
	<div class="container-custom">
		<div class="mx-auto max-w-2xl">
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

				<button type="submit" class="btn-primary w-full" disabled={isSubmitting}>
					{#if isSubmitting}
						{$language === 'ja' ? '送信中...' : 'Sending...'}
					{:else}
						{$language === 'ja' ? '送信する' : 'Send Message'}
					{/if}
				</button>
			</form>

			{#if submitStatus === 'success'}
				<div class="mt-4 rounded-lg bg-green-50 p-4 text-green-800">
					{$language === 'ja'
						? 'お問い合わせを受け付けました。ありがとうございます。'
						: 'Thank you for your message. We will get back to you soon.'}
				</div>
			{:else if submitStatus === 'error'}
				<div class="mt-4 rounded-lg bg-red-50 p-4 text-red-800">
					{$language === 'ja'
						? '送信に失敗しました。もう一度お試しください。'
						: 'Failed to send message. Please try again.'}
				</div>
			{/if}
		</div>
	</div>
</section>

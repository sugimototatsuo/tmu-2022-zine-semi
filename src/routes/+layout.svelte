<script>
	import '../app.postcss';
	import { Heading, P, Footer, FooterCopyright } from 'flowbite-svelte';
</script>

<div class="container mx-8 px-8 mx-auto">
	<header class="flex-none w-full mx-auto">
		<a href="/">
			<p class="px-8 py-10 w-fit text-6xl bg-red-800 text-white hover:bg-red-900">
				This is <span class="font-bold">OUR VALUES</span><br />
				<span class="text-base">Zine Stand 2022</span>
			</p>
		</a>
	</header>

	<main class="w-full mx-auto">
		<slot />
	</main>

	<Footer class="">
		<FooterCopyright
			href="https://class.sugimototatsuo.com/"
			by="Network Design Studio | Department of Industrial Art | TMU"
			year={2022}
			copyrightMessage=""
		/>
	</Footer>
</div>

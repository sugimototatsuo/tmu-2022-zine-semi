<script>
	import { Carousel, Card } from 'flowbite-svelte';
	const showThumbs = false;
	const showCaptions = false;
	const showIndicators = false;
  const divClass = "max-w-full h-fit";
	export let data;
	$: ({ zines, zine, images } = data);

	console.log(data);
</script>

<nav class="mt-8 flex flex-wrap">
  {#each zines as z}
  <a href={`/zine/${z.username}`}>
    <div class="inline-block m-0 p-4 w-fit bg-gray-400 text-white hover:bg-red-900"
      class:bg-red-800={z.username === zine.username}>
      {z.price}
    </div>  
  </a>
  {/each}
</nav>

<p class="my-4 p-4 w-fit text-xl font-bold bg-red-800 text-white hover:bg-red-900">
  {zine.price}
</p>

<h3 class="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{zine.title}</h3>
<p class="mb-2 font-bold">{zine.author}</p>
<p>{zine.description}</p>

<Card class="max-w-full">
	<Carousel {images} {showThumbs} {showCaptions} {showIndicators} {divClass} />
</Card>

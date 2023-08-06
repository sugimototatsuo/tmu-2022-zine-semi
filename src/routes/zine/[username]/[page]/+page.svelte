<script>
  import * as d3 from 'd3';
	import { goto } from '$app/navigation';
  import { Carousel, Card, Pagination, ChevronLeft, ChevronRight } from 'flowbite-svelte';


  const showThumbs = false;
	const showCaptions = false;
	const showIndicators = false;
  const divClass = "max-w-full h-fit";
	export let data;  
	$: ({ zines, zine, images, username, currentPage, pages } = data);
  
  const previous = () => {
    if (+currentPage > 1) {
      goto(`./${+currentPage - 1}`, {
        noScroll: true
      });
    }
  };
  const next = () => {
    if (+currentPage < pages.length) {
      goto(`./${+currentPage + 1}`, {
        noScroll: true
      });
    }
  };

	// console.log(data);
</script>

<svelte:head>
	<title>{zine.title} | This is OUR VALUE</title>
</svelte:head>

<nav class="mt-8 w-full flex flex-wrap text-small bg-gray-400">
  {#each zines as z}
  <a href={`/zine/${z.username}/1`}>
    <div class="inline-block m-0 p-2 w-fit bg-gray-400 text-white hover:bg-red-900 hover:font-bold"
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

<Pagination {pages} large on:previous={previous} on:next={next} icon  >
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <ChevronLeft class="w-5 h-5"/>
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <ChevronRight class="w-5 h-5"/>
  </svelte:fragment>
</Pagination>

<Card class="max-w-full">
  <a href="#" on:click|preventDefault={next}>
  <img src={`/zine-images/${username}/${d3.format('02d')(currentPage)}.jpg`} 
    alt={zine.title} class="max-h-[80vh] w-fit cursor-pointer"
   /></a>
	<!-- <Carousel {images} {showThumbs} {showCaptions} {showIndicators} {divClass} /> -->
</Card>

<Pagination {pages} large on:previous={previous} on:next={next} icon  >
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <ChevronLeft class="w-5 h-5"/>
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <ChevronRight class="w-5 h-5"/>
  </svelte:fragment>
</Pagination>
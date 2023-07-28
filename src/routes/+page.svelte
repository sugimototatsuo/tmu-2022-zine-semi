<script>
  import { P, Card, Badge, Button } from 'flowbite-svelte';

  export let data;
  $: ({zines} = data)

  let zineViewer;
  function openZine() {
    zineViewer.style.display = 'block';
  }
</script>

<svelte:head>
	<title>Zine Stand 2022</title>
</svelte:head>

<P class="my-8">
  このページは、2022年度基礎ゼミナールで制作したZineを紹介しています。<br>
  東京都立大学システムデザイン学部インダストリアルアート学科<br>
  担当教員：杉本達應<br>
</P>

<div class="lg:grid lg:grid-cols-4 lg:gap-4">
  {#each zines as zine}
  <Card class="mb-8">
    <p class="mb-4 p-4 w-fit text-xl font-bold bg-red-800 text-white hover:bg-red-900">{zine.price}</p>
    <a href={`zine/${zine.username}`}><img class="cover" src={`/covers/${zine.username}.jpg`} alt={zine.title} /></a>
    <h3 class="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{zine.title}</h3>
    <p class="mb-2 font-bold">{zine.author}</p>
    <p>{zine.description}</p>
    <Button class="w-fit mt-4" href={`zine/${zine.username}`}>読む</Button>    
    {#if zine.visibility === '限定公開'}<Badge class="w-fit" color="dark">限定公開</Badge>{/if}
  </Card>
  {/each}
</div>

<div id="zine-viewer" bind:this={zineViewer}>

</div>

<style>
#zine-viewer {
  display: none;
  position: fixed;
}
.cover {
  width: 100%;
  min-height: 200px;
  background-color: #f8f8f8;
}
</style>

<script>
  import Icon from '@iconify/svelte';

  import { lexicon } from "./lib/lexicon";
	import Flashcard from "./lib/components/Flashcard.svelte";
	
	let flashcardIndex = 0;
	$: front = lexicon[flashcardIndex];
	$: back = flashcardIndex + 1;
	
	let showCardBack = false;	
	const toggleShowBack = () => showCardBack = !showCardBack;

  const randomIndex = () => {
    return Math.floor(Math.random() * lexicon.length);
  }
	
	const nextCard = () => {
		showCardBack = false;
		flashcardIndex = randomIndex();
	}
</script>

<main>
	<!-- FLASHCARD -->
	<div class="flip-box">
		<div class="flip-box-inner" class:flip-it={showCardBack}>
			<Flashcard {front} 
								 {back} 
								 {showCardBack} 
								 />
		</div>
	</div>

	<!-- BUTTONS -->
	<div id="btn-cont">
		<!-- <button class="btn btn-info" on:click={nextCard}>&#8592;</button> -->
		

    <button class="btn btn-primary" on:click={toggleShowBack}>
      {showCardBack ? "Hide Answer" : "Show Answer"}
    </button>
		<button class="btn btn-ghost" on:click={nextCard}><Icon icon="heroicons:arrow-path-rounded-square" height=24 /></button>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 15%;
		height: 100vh;
	}
	
	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: transparent;
		width: 400px;
		height: 300px;
/* 		border: 1px solid #ddd; */
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip on button click */
	.flip-it {
		transform: rotateY(180deg);
	}
	
	#btn-cont {
		width: 200px;
		padding: 10px 0;
		display: flex;
		justify-content: space-evenly;
	}

	/* button {
		background-color: 	hsl(65, 6%, 40%);
		padding: 10px 10px;
		color: white;
		cursor: pointer;
	} */
</style>
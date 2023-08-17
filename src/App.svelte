<script>
  import Icon from '@iconify/svelte';

  import { lexicon } from "./lib/lexicon";
	import Flashcard from "./lib/components/Flashcard.svelte";
	
  const randomIndex = () => {
    return Math.floor(Math.random() * lexicon.length);
  }

	let flashcardIndex = randomIndex();
	$: front = lexicon[flashcardIndex];
	$: back = flashcardIndex + 1;
	
	let showCardBack = false;	
	const toggleShowBack = () => showCardBack = !showCardBack;
	
	const nextCard = () => {
		showCardBack = false;
		flashcardIndex = randomIndex();
	}
</script>

<main>
  <h1 class="text-violet-500 font-bold">
    Alphanumeric
  </h1>
  <p>
    Waste of time app to learn the index of every letter in the alphabet!!!!
  </p>

  <div class="body">
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
      <button class="btn btn-primary" on:click={toggleShowBack}>
        {showCardBack ? "Hide Answer" : "Show Answer"}
      </button>
      <button class="btn btn-ghost" on:click={nextCard}><Icon icon="heroicons:arrow-path-rounded-square" height=24 /></button>
    </div>
  </div>
</main>

<style>
	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 15%;
		height: 100vh;
	}
	
	.flip-box {
		background-color: transparent;
		width: 400px;
		height: 300px;
		perspective: 1000px; 
	}

	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	.flip-it {
		transform: rotateY(180deg);
	}
	
	#btn-cont {
		width: 200px;
		padding: 10px 0;
		display: flex;
		justify-content: space-evenly;
	}

</style>
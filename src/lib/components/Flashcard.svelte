<script>
	export let front;
	export let back;
	export let showCardBack;
</script>


<div class="rounded-xl flip-box-front">
	<h2>{front.toUpperCase()}</h2>
</div>

<div class="rounded-xl flip-box-back" class:conceal-answer={showCardBack}>
	<h2>{back}</h2>
</div>


<style>
	/* Position the front and back side */
	.flip-box-front, .flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
		box-shadow: -1px 1px 3px black;
	}

	/* Style the front side */
	.flip-box-front {
		background-color: #a0c3ff;
		color: #1c4da2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 4rem;
	}
	
	@keyframes revealTextSlowly {
		to { color: #1a7a26 }
	}
	
	.conceal-answer {
		animation: revealTextSlowly .3s forwards;
	}
	
	/* Style the back side */
	.flip-box-back {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #c5f9cb;
		font-size: 4rem;
		transform: rotateY(180deg);
	}
</style>
<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { pageTransitionVariants } from './../../utils/variants';
</script>

<svelte:head>
	<title>Nagasai Vegur</title>
</svelte:head>

<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
	<div use:motion>
		<h2>Nagasai Vegur</h2>
		<h3>A Developer, Designer and Computer enthusiast.</h3>
		<div class="small-divider" />
		<p>Experimenting with interfaces in Web and Native. Passionate about Data.</p>
		<p>
			Exploring computer science engineering in second year at
			<a class="small-underline" href="https://iiitdm.ac.in/"
				><i class="fas fa-university" /> IIITDM.</a
			>
		</p>
	</div>
</Motion>

<style lang="scss">
	.small-divider {
		background: var(--secondary-text-color);
		opacity: 0.5;
		height: 1px;
		width: 50px;
		margin: 20px 0;
	}
	a {
		position: relative;
	}

	p a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -5px;
		height: 1px;
		width: 100%;
		opacity: 0.5;
		background: var(--secondary-text-color);
	}
</style>

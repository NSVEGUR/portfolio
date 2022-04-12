<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { pageTransitionVariants } from '../../utils/variants';
</script>

<svelte:head>
	<title>Writings – Nagasai Vegur</title>
</svelte:head>

<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
	<div class="dotted" use:motion>
		<h2>Writings</h2>
		<h3>A collection of my <span>somewhat</span> (un) organised writings.</h3>
		<div>
			<p>Yet to come.</p>
			<span>April 2022.</span>
		</div>
	</div>
</Motion>

<style lang="scss">
	h3 {
		span {
			text-decoration: line-through;
			color: var(--primary-text-color);
		}
		padding-bottom: 5px;
		border-bottom: dotted 2px var(--dotted-border);
	}
	// a {
	// 	position: relative;
	// }
	// p a::after {
	// 	content: '';
	// 	position: absolute;
	// 	left: 0;
	// 	bottom: -5px;
	// 	height: 1px;
	// 	width: 100%;
	// 	opacity: 0.5;
	// 	background: var(--secondary-text-color);
	// }
	.dotted {
		margin-left: -30px;
		min-height: 80vh;
		width: 100%;
		padding-left: 40px;
		border-left: dotted 2px var(--dotted-border);
		&:first-child div {
			margin-top: 20px;
		}
		div {
			padding: 10px;
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-radius: 10px;
			&:hover {
				background-color: var(--hover-color);
			}
			span {
				position: absolute;
				left: -110px;
				transform: rotate(90deg);
				font-family: var(--secondary-font);
				color: var(--primary-text-color);
			}
			// li {
			// 	list-style: disc;
			// 	color: var(--secondary-text-color);
			// }
		}
	}
</style>

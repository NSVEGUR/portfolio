<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { pageTransitionVariants } from '../../utils/variants';
</script>

<svelte:head>
	<title>Writings – Nagasai Vegur</title>
</svelte:head>

<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
	<div class="dotted" use:motion>
		<div class="head">
			<h2>Writings</h2>
			<h3>A collection of my <span>somewhat</span> (un) organised writings.</h3>
		</div>
		<a
			class="writings"
			href="https://drive.google.com/file/d/1f_MJsxE3U13CQTNL7bWah2bRsHcg-uQh/view?usp=sharing"
			target="_blank"
		>
			<h3>The Unlove Story</h3>
			<p>A lovestory? novel written by me at the time of lockdown.</p>
			<span>April 2020.</span>
		</a>
		<div class="writings">
			<p>Yet to come.</p>
			<span>May 2022.</span>
		</div>
	</div>
</Motion>

<style lang="scss">
	.dotted {
		.head {
			margin-top: 20px;
			padding: 10px;
			h3 {
				span {
					text-decoration: line-through;
					color: var(--primary-text-color);
				}
				padding-bottom: 5px;
				border-bottom: dotted 2px var(--dotted-border);
			}
		}
		margin-left: -30px;
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 100%;
		padding-left: 40px;
		border-left: dotted 2px var(--dotted-border);
		.writings {
			padding: 10px;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			border-radius: 10px;
			min-height: 100px;
			h3 {
				color: var(--primary-text-color);
				font-size: 1.4rem;
			}
			p {
				font-size: 1rem;
			}
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
		}
	}
</style>

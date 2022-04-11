<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { pageTransitionVariants } from './../../utils/variants';
</script>

<svelte:head>
	<title>Education – Nagasai Vegur</title>
</svelte:head>

<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
	<div use:motion>
		<h2>Education</h2>
		<div class="timeline">
			<div class="line" />
			<div class="seciton">
				<div class="bead" />
				<div class="content">
					<h2>Web Development</h2>
					<p>
						Anim enim minim eiusmod ex aliqua commodo laboris occaecat dolore nisi labore eiusmod
						reprehenderit laboris. Aliqua ea adipisicing velit sint.
					</p>
				</div>
			</div>
			<div class="seciton">
				<div class="bead" />
				<div class="content">
					<h2>Web Development</h2>
					<p>
						Anim enim minim eiusmod ex aliqua commodo laboris occaecat dolore nisi labore eiusmod
						reprehenderit laboris. Aliqua ea adipisicing velit sint.
					</p>
				</div>
			</div>
			<div class="seciton">
				<div class="bead" />
				<div class="content">
					<h2>Web Development</h2>
					<p>
						Anim enim minim eiusmod ex aliqua commodo laboris occaecat dolore nisi labore eiusmod
						reprehenderit laboris. Aliqua ea adipisicing velit sint.
					</p>
				</div>
			</div>
			<div class="seciton">
				<div class="bead" />
				<div class="content">
					<h2>Web Development</h2>
					<p>
						Anim enim minim eiusmod ex aliqua commodo laboris occaecat dolore nisi labore eiusmod
						reprehenderit laboris. Aliqua ea adipisicing velit sint.
					</p>
				</div>
			</div>
			<div class="seciton">
				<div class="bead" />
				<div class="content">
					<h2>Web Development</h2>
					<p>
						Anim enim minim eiusmod ex aliqua commodo laboris occaecat dolore nisi labore eiusmod
						reprehenderit laboris. Aliqua ea adipisicing velit sint.
					</p>
				</div>
			</div>
		</div>
	</div>
</Motion>

<style lang="scss">
	.timeline {
		position: relative;
		min-height: 150px;
		.line {
			position: absolute;
			z-index: 2;
			width: 2px;
			left: calc(50% - 1px);
			top: -50px;
			bottom: -50px;
			background: var(--primary-text-color);
			display: none;
			&::after,
			&::before {
				content: '';
				position: absolute;
				display: block;
				height: 1rem;
				width: 1rem;
				border-radius: 50%;
				background: var(--primary-text-color);
				left: 50%;
				transform: translateX(-50%);
			}
			&:after {
				bottom: 0;
			}
		}
	}
</style>

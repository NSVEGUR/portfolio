<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { pageTransitionVariants } from './../../utils/variants';
</script>

<svelte:head>
	<title>About – Nagasai Vegur</title>
</svelte:head>

<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
	<div class="dotted" use:motion>
		<h2>About</h2>
		<h3>Things quite <span>interest</span> describe me.</h3>
		<div>
			<p>
				Innovative individual with passion in learning something new, and enjoy trying out new
				technologies. Interested in SDE Intern at Hike where I can apply my technical skills in
				coding and software design to fulfil the clients’ particular requirements and augment the
				reputation of the company. Find my resume <a
					href="https://drive.google.com/file/d/1qtKLrpesOIMoixgejV707UBGfiYe-ebU/view?usp=sharing"
					target="_blank">here</a
				>.
			</p>
			<span>Blah things.</span>
		</div>
		<div>
			<p>
				Processing with <a href="https://github.com/NSVEGUR">typescript</a> , painting in css, reacting
				on svelte, widgeting with flutter, competing in cplusplus, skating on python and many more.
			</p>
			<span>I'm Cooking.</span>
		</div>
		<div>
			<ul>
				<li>Ability to work as a part of team and take responsibility.</li>
				<li>Flexible and adaptable to new environment and culture.</li>
				<li>A Self motivated quick learner.</li>
				<li>
					Competent in Prioritising multiple tasks and balancing the tasks to meet the deadlines.
				</li>
				<li>Good communication skills at all level of the working environments.</li>
			</ul>
			<span>My Recipes.</span>
		</div>
	</div>
</Motion>

<style lang="scss">
	h3 {
		span {
			text-decoration: line-through;
			color: var(--primary-text-color);
		}
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
	.dotted {
		margin-left: -30px;
		min-height: 100vh;
		width: 100%;
		padding-left: 40px;
		border-left: dotted 2px var(--dotted-border);
		@media screen and (max-width: 658px) {
			margin-left: -40px;
		}
		&:first-child div {
			margin-top: 20px;
		}
		div {
			padding: 30px 0;
			border-top: dotted 2px var(--dotted-border);
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			span {
				position: absolute;
				left: -110px;
				transform: rotate(90deg);
				font-family: var(--secondary-font);
				color: var(--primary-text-color);
			}
			li {
				list-style: disc;
				color: var(--secondary-text-color);
			}
		}
	}
</style>

<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { pageTransitionVariants } from '../../utils/variants';
	import { onMount } from 'svelte';
	import { scrollHandler, initiateTimeline } from '../../utils/timeline';

	onMount(initiateTimeline);
</script>

<svelte:head>
	<title>Education – Nagasai Vegur</title>
</svelte:head>
<svelte:window on:scroll={scrollHandler} />

<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
	<div use:motion>
		<h1>Education</h1>
		<div class="timeline">
			<div class="line" />
			<div class="section show-me">
				<div class="bead" />
				<div class="content">
					<h2>Schooling <span>(2008-2018)</span></h2>
					<p>Sri Sai Chaitanya Public School, Hiredinni camp, Karnataka.</p>
				</div>
			</div>
			<div class="section">
				<div class="bead" />
				<div class="content">
					<h2>Feat - X <span>(2018)</span></h2>
					<ul>
						<li>Worked as school pupil leader.</li>
						<li>Scored 96.96 percentage in secondary school.</li>
						<li>Secured district second from KSEEB Board.</li>
					</ul>
				</div>
			</div>
			<div class="section">
				<div class="bead" />
				<div class="content">
					<h2>Plus One & Two <span>(2018-2020)</span></h2>
					<p>Sri Siddaganga Science PU College, Davanagere, Karnataka.</p>
				</div>
			</div>
			<div class="section">
				<div class="bead" />
				<div class="content">
					<h2>Feat - XII <span>(2020)</span></h2>
					<ul>
						<li>Scored 98.03 in IIT-JEE and acquired district highest.</li>
						<li>Earned 98 percentage in higher secondary school.</li>
						<li>Honoured as one of the state top ten rankers by KSPUB Board.</li>
					</ul>
				</div>
			</div>
			<div class="section">
				<div class="bead" />
				<div class="content">
					<h2>Techie - Bee <span>(2020 - ongoing)</span></h2>
					<p>Indian Institute of Information Technology, Design and Manufacturing. Chennai.</p>
				</div>
			</div>
			<div class="section">
				<div class="bead" />
				<div class="content">
					<h2>Feat - Bachelor <span>(2020 - ongoing)</span></h2>
					<ul>
						<li>Received 8.96 GPA out of 10 (as of semester 3).</li>
						<li>Working as developer in webops team of IIITDM.</li>
					</ul>
				</div>
			</div>
			<div class="section">
				<div class="bead" />
				<div class="content">
					<h2>Spidey <span>(2021 - ongoing)</span></h2>
					<ul>
						<li>Worked as a web developer for a reputed academy named VBS in 2021 December.</li>
						<li>
							Working as Full Stack Developer for MagicDot a clothing startup, Bangalore since March
							2022.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</Motion>

<style lang="scss">
	ul {
		li {
			font-size: 0.9rem;
			list-style: disc;
			color: var(--secondary-text-color);
		}
	}
	h1 {
		text-align: center;
	}
	.timeline {
		position: relative;
		min-height: 150px;
		overflow: hidden;
		margin-bottom: 5rem;
		h2 {
			font-size: 1.3rem;
			span {
				font-size: 0.8rem;
				color: var(--secondary-text-color);
			}
		}
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
		.section {
			display: flex;
			opacity: 0;
			transform: translateX(-100%);
			transition: 600ms ease;
			position: relative;
			z-index: 1;
			margin: 20px 0;
			padding: 1rem;
			border-radius: 1rem;
			align-items: center;
			min-height: 100px;
			&:nth-child(odd) {
				flex-direction: row-reverse;
				transform: translateX(100%);
			}
		}
		.bead {
			position: absolute;
			display: block;
			height: 1rem;
			width: 1rem;
			border-radius: 50%;
			background-color: var(--system-text-color);
			left: 50%;
			top: 20%;
			transform: translateX(-50%);
		}
		.content {
			width: calc(50% - 2rem);
		}
		.show-me:nth-child(n) {
			transform: none;
			opacity: 1;
		}
	}
</style>

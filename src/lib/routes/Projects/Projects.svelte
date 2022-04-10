<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte';
	import AnimateSharedLayout from 'svelte-motion/src/components/AnimateSharedLayout/AnimateSharedLayout.svelte';
	import { data } from '../../utils/data/project';
	import { pageTransitionVariants } from './../../utils/variants';
	let projects = data;
</script>

<svelte:head>
	<title>Projects – Nagasai Vegur</title>
</svelte:head>

<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
	<div use:motion>
		<div class="head">
			<h2>Projects</h2>
			<h3>Interesting thingies built with svelte, nextjs, typescript and flutter.</h3>
			<div class="dotted" />
		</div>
		<AnimateSharedLayout>
			<Motion let:motion={m1} layout initial={{ borderRadius: 25 }}>
				<ul use:m1>
					{#each projects as project, i}
						<Motion let:motion={m2} layout initial={{ borderRadius: 10 }}>
							<li
								use:m2
								on:click={() => {
									projects = projects.map((p, j) => {
										if (j === i) {
											p.isOpen = !p.isOpen;
											return p;
										}
										return p;
									});
								}}
								class:active={project.isOpen}
							>
								<Motion layout let:motion={m3}>
									<div class="project" use:m3>
										<div>
											<p>
												{project.title} <span>{project.subTitle}</span>
											</p>
										</div>
										<div class="project-dot" />
										<div><span>{project.year}</span></div>
									</div>
								</Motion>
								<AnimatePresence list={project.isOpen ? [{ key: 1 }] : []}>
									<Motion
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										let:motion={m4}
									>
										<div use:m4 class="about-project">
											<div>
												<img src="/projects/magicdot.png" alt="project-img" />
											</div>
											<div class="about-text">
												<p>
													<span>Mollit</span> est sit irure ea. Irure mollit commodo ipsum ad id nostrud
													commodo pariatur esse. Culpa enim adipisicing Lorem et mollit et anim dolor
													laborum quis culpa aute eiusmod.
												</p>
												<div>
													<a href="https://github.com/">Source</a>
													<a href="https://github.com/">Demo</a>
												</div>
											</div>
										</div>
									</Motion>
								</AnimatePresence>
							</li>
						</Motion>
					{/each}
				</ul>
			</Motion>
		</AnimateSharedLayout>
	</div>
</Motion>

<style lang="scss">
	img {
		max-width: 100%;
		max-height: 100%;
	}
	.head {
		padding: 0 20px;
	}
	.dotted {
		border-top: dotted 2px var(--dotted-border);
		margin: 20px 0;
	}
	a {
		position: relative;
		&:after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0px;
			height: 1px;
			width: 100%;
			opacity: 0.5;
			background: var(--secondary-text-color);
		}
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-bottom: 10rem;
	}
	li {
		&:hover {
			background-color: var(--hover-color);
		}
	}
	.active {
		background-color: var(--hover-color);
	}
	.project {
		display: flex;
		border-radius: 10px;
		padding: 15px;
		flex-direction: row;
		align-items: center;
		min-height: 60px;
		gap: 10px;
		cursor: pointer;
		.project-dot {
			width: 100%;
			flex: 1;
			border: dotted 1.5px var(--dotted-border);
		}
		p {
			color: var(--primary-text-color);
			font-family: var(--secondary-font);
			span {
				color: var(--secondary-text-color);
				font-family: var(--primary-font);
				margin-left: 5px;
			}
		}
	}
	.about-project {
		display: flex;
		padding: 10px;
		gap: 10px;
		flex-direction: row;
		img {
			border-radius: 10px;
		}
		&:last-child div {
			width: 70%;
		}
		.about-text {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			div {
				display: flex;
				gap: 10px;
			}
		}
		p {
			span {
				margin-left: 15px;
			}
		}
	}
</style>

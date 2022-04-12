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
										exit={{
											opacity: 0,
											transition: {
												type: 'spring',
												duration: 0.5
											}
										}}
										let:motion={m4}
									>
										<div use:m4 class="about-project">
											<div class="project-img">
												<img src="/projects/{project.img}.png" alt="project-img" />
											</div>
											<div class="about-text">
												<p>
													<span />{project.description}
												</p>
												<div>
													<a href={project.source}>Source</a>
													<a href={project.demo}>Demo</a>
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
	.head {
		padding: 0 20px;
	}
	.dotted {
		border-top: dotted 2px var(--dotted-border);
		margin: 20px 0;
	}
	a {
		position: relative;
		background: var(--dotted-border);
		padding: 0 5px;
		border-radius: 5px;
		&:hover {
			transition: all 0.3s;
			box-shadow: inset 0 0 0 0.1px rgb(245 245 245 / 70%), hsla(0, 0%, 0%, 0.3) 2px 5px 10px;
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
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;

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
		gap: 15px;
		height: 100%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: justify;
		.project-img {
			height: 100%;
			width: 50%;
		}
		img {
			border-radius: 10px;
			max-width: 100%;
			max-height: 100%;
		}
		.about-text {
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 50%;
			justify-content: space-evenly;
			div {
				margin-top: 20px;
				display: flex;
				gap: 10px;
			}
			@media screen and (max-width: 658px) {
				p,
				a {
					font-size: 0.8rem;
				}
			}
		}
		p {
			span {
				margin-left: 15px;
			}
		}
	}
</style>

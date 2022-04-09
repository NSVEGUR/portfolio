<script lang="ts">
	import { onMount } from 'svelte';
	import DockItem from './DockItem.svelte';
	import { dockIcons, Route } from '../../store/store';
	let mouseX: number | null = null;
	const routingIcons: string[] = ['Home', 'About', 'Education', 'Blogs', 'Projects'];
	onMount(() => {
		const icons = document.querySelectorAll('.icon');
		const theme = document.getElementById('Theme');
		icons.forEach((icon) => {
			icon.addEventListener('click', (e: any) => {
				e.preventDefault();
				const route = e.target.closest('.icon').dataset?.class;
				$Route = route;
				if (routingIcons.includes(route)) {
					const iconDots = document.querySelectorAll('.icon-dot');
					iconDots.forEach((iconDot) => {
						iconDot.classList.remove('active');
					});
					const activeIcon = e.target.closest('.icon').dataset?.iconid;
					const activeDot: HTMLElement = document.querySelector(`[data-dotid="${activeIcon}"]`);
					activeDot.classList.add('active');
				}
			});
		});
		theme.addEventListener('click', () => {
			document.body.classList.toggle('dark-theme');
			theme.querySelector('i').classList.toggle('fa-sun');
		});
	});
</script>

<section class="dock-container">
	<div
		class="dock-el"
		on:mousemove={(event) => (mouseX = event.x)}
		on:mouseleave={() => (mouseX = null)}
	>
		{#each dockIcons as icon}
			{#if icon.type !== 'div'}
				<DockItem {mouseX} section={icon} />
			{:else}
				<div class={icon.class} />
			{/if}
		{/each}
	</div>
</section>

<style lang="scss">
	.dock-container {
		margin-bottom: 1rem;
		left: 0;
		bottom: 0;
		z-index: 9900;
		position: fixed;

		width: 100%;
		height: 5.6rem;

		padding: 0.6rem;

		padding-bottom: 0.9rem;

		display: flex;
		justify-content: center;
	}
	.dock-el {
		backdrop-filter: blur(5px);
		background-color: var(--primary-accent-color);

		box-shadow: inset 0 0 0 0.1px rgb(245 245 245 / 70%), hsla(0, 0%, 0%, 0.3) 2px 5px 10px;

		padding: 0.3rem;

		border-radius: 1.2rem;

		height: 100%;

		display: flex;
		align-items: flex-end;
	}
	.dock-div {
		width: 0.5px;
		height: 90%;
		margin: 0 5px 2px 5px;
		background-color: var(--secondary-text-color);
		filter: blur(0.5px);
	}
	@media (max-width: 768px) {
		.dock-el {
			max-width: 95%;
			overflow-x: scroll;
		}
	}
</style>

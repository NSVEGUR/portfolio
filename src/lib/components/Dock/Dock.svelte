<script lang="ts">
	import { onMount } from 'svelte';
	import DockItem from './DockItem.svelte';
	import { dockIcons } from '../../utils/data/dock';
	import { Route, SoundFlag } from '../../store/store';
	let mouseX: number | null = null;
	const routingIcons: string[] = ['Home', 'About', 'Education', 'Writings', 'Projects'];
	onMount(() => {
		const theme = document.getElementById('Theme');
		const sound = document.getElementById('Sound');
		const clickSound = new Audio('/musics/click.wav');
		const soundOn = new Audio('/musics/soundon.wav');
		const soundOff = new Audio('/musics/soundoff.wav');
		const themeSound = new Audio('/musics/theme.wav');
		const dock = document.getElementById('dock');

		dock.addEventListener('click', (e: any) => {
			if (!e.target.closest('.icon')) return;
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
			} else if (route === 'Theme') {
				document.body.classList.toggle('light-theme');
				theme.querySelector('i').classList.toggle('fa-moon');
				theme.querySelector('i').classList.toggle('fa-sun');
				if ($SoundFlag) {
					themeSound.play();
				}
			} else if (route === 'Sound') {
				sound.querySelector('i').classList.toggle('fa-volume-up');
				sound.querySelector('i').classList.toggle('fa-volume-mute');
				if ($SoundFlag) {
					soundOff.play();
				} else {
					soundOn.play();
				}
				$SoundFlag = !$SoundFlag;
			}
			if (e.target.closest('.sound')) {
				if (route === 'Theme' || route === 'Sound') return;
				if ($SoundFlag) {
					clickSound.play();
				}
			}
		});
	});
</script>

<section class="dock-container">
	<div
		class="dock-el"
		id="dock"
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

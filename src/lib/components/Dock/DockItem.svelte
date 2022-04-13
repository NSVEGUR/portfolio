<script lang="ts">
	import { interpolate } from 'popmotion';
	import { spring, tweened } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';
	import ButtonBase from './ButtonBase.svelte';
	import type { dockIcon } from '../../utils/data/dock';
	import { onMount } from 'svelte';

	let screenWidth: number | null = 1200;

	onMount(() => {
		screenWidth = window.innerWidth;
	});

	export let section: dockIcon;
	export let mouseX: number | null;

	let el: HTMLElement;

	const baseWidth = 57.6;
	const distanceLimit = baseWidth * 6;
	const beyondTheDistanceLimit = distanceLimit + 1;
	const distanceInput = [
		-distanceLimit,
		-distanceLimit / 1.25,
		-distanceLimit / 2,
		0,
		distanceLimit / 2,
		distanceLimit / 1.25,
		distanceLimit
	];
	const widthOutput = [
		baseWidth,
		baseWidth * 1.1,
		baseWidth * 1.618,
		baseWidth * 2.618,
		baseWidth * 1.618,
		baseWidth * 1.1,
		baseWidth
	];

	let distance = beyondTheDistanceLimit;

	const widthPX = spring(baseWidth, {
		damping: 0.38,
		stiffness: 0.1
	});

	$: $widthPX = interpolate(distanceInput, widthOutput)(distance);

	let width: string;
	$: width = `${$widthPX / 18}rem`;

	let raf: number;

	function animate(mouseX: number | null) {
		if (el && mouseX !== null) {
			const rect = el.getBoundingClientRect();

			// get the x coordinate of the img DOMElement's center
			// the left x coordinate plus the half of the width
			const imgCenterX = rect.left + rect.width / 2;

			// difference between the x coordinate value of the mouse pointer
			// and the img center x coordinate value
			const distanceDelta = mouseX - imgCenterX;
			distance = distanceDelta;
			return;
		}

		distance = beyondTheDistanceLimit;
	}

	$: raf = requestAnimationFrame(() => animate(mouseX));

	const appOpenIconBounceTransform = tweened(0, {
		duration: 400,
		easing: sineInOut
	});

	async function openApp(e: MouseEvent) {
		await appOpenIconBounceTransform.set(-39.2);
		appOpenIconBounceTransform.set(0);
	}
</script>

<svelte:window
	on:resize={() => {
		screenWidth = window.innerWidth;
	}}
/>

<section>
	<div on:click={openApp} style="transform: translate3d(0, {$appOpenIconBounceTransform}%, 0)">
		{#if screenWidth >= 700}
			<ButtonBase {width} buttonBase={section}>
				<i
					bind:this={el}
					style="width: {width}; height: {width}; font-size: {`${parseFloat(width) / 2}rem`};"
					class={section.class}
				/>
			</ButtonBase>
		{:else}
			<ButtonBase {width} buttonBase={section}>
				<i style="width: 50px; height: 50px;" class={section.class} />
			</ButtonBase>
		{/if}
	</div>
</section>

<style lang="scss">
	i {
		color: #7c7c7c;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>

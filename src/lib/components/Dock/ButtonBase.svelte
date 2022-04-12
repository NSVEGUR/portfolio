<script lang="ts">
	import type { dockIcon } from '../../utils/data/dock';
	export let width: string | null;
	export let buttonBase: dockIcon;
	const getTarget = (span: string): string => {
		const blanks = ['Github', 'Twitter', 'Mail'];
		if (blanks.includes(span)) return '_blank';
		return '';
	};
</script>

<a
	href={buttonBase.route}
	class={buttonBase.type}
	data-class={buttonBase.name}
	data-iconid={buttonBase.id}
	id={buttonBase.name}
	target={getTarget(buttonBase.name)}
>
	<button {...$$props} style="border-radius: {`${parseFloat(width) * 3}px`}">
		<slot />
	</button>
	<span class:active={buttonBase.name == 'Home'} class="icon-dot" data-dotid={buttonBase.id} />
	<span class="icon-title">{buttonBase.name}</span>
</a>

<style lang="scss">
	button {
		color: inherit;
		text-decoration: none;
		vertical-align: middle;

		border: 0;
		border-radius: 0;

		outline: 0;

		margin: 3px 4px;
		padding: 0;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		position: relative;

		user-select: none;

		appearance: none;

		background-color: transparent;
		-webkit-tap-highlight-color: transparent;
		background: var(--secondary-accent-color);
		&:not(:disabled) {
			cursor: pointer;
		}
	}
	a {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		&:hover .icon-title {
			display: block;
		}
	}
	.icon-title {
		position: absolute;
		top: -2.5rem;
		font-size: 0.75rem;
		padding: 0 7px;
		border-radius: 5px;
		backdrop-filter: blur(5px);
		background-color: var(--primary-color);

		box-shadow: inset 0 0 0 0.1px rgb(245 245 245 / 70%), hsla(0, 0%, 0%, 0.3) 2px 5px 10px;
		display: none;
	}
	.active {
		position: absolute;
		bottom: -0.2rem;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--secondary-text-color);
	}
</style>

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
	</div>
</Motion>

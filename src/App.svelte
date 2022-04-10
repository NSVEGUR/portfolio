<script lang="ts">
	import Dock from './lib/components/Dock/Dock.svelte';
	import Home from './lib/routes/Home/Home.svelte';
	import About from './lib/routes/About/About.svelte';
	import Projects from './lib/routes/Projects/Projects.svelte';
	import Blogs from './lib/routes/Blogs/Blogs.svelte';
	import Education from './lib/routes/Education/Education.svelte';
	import { Route } from './lib/store/store';
	import { onMount } from 'svelte';

	let componentRoute = Home;

	$: switch ($Route) {
		case 'Home':
			componentRoute = Home;
			break;
		case 'About':
			componentRoute = About;
			break;
		case 'Projects':
			componentRoute = Projects;
			break;
		case 'Blogs':
			componentRoute = Blogs;
			break;
		case 'Education':
			componentRoute = Education;
			break;
		default:
			break;
	}

	onMount(() => {
		const faviconTag: any = document.getElementById('faviconTag');
		const isDark = window.matchMedia('(prefers-color-scheme: dark)');
		if (isDark.matches) faviconTag.href = '/favicon-light.ico';
		else faviconTag.href = '/favicon-dark.ico';
	});
</script>

<main>
	<svelte:component this={componentRoute} />
	<Dock />
</main>

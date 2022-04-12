<script lang="ts">
	import Dock from './lib/components/Dock/Dock.svelte';
	import Home from './lib/routes/Home/Home.svelte';
	import About from './lib/routes/About/About.svelte';
	import Projects from './lib/routes/Projects/Projects.svelte';
	import Writings from './lib/routes/Writings/Writings.svelte';
	import Education from './lib/routes/Education/Education.svelte';
	import { Route } from './lib/store/store';

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
		case 'Writings':
			componentRoute = Writings;
			break;
		case 'Education':
			componentRoute = Education;
			break;
		default:
			break;
	}
</script>

<main>
	<svelte:component this={componentRoute} />
	<Dock />
</main>

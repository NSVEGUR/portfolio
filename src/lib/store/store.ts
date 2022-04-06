import { writable } from 'svelte/store';

export const themeFlag = writable(true);
export const soundFlag = writable(true);
export const dockIcons = writable([
	{
		class: 'fas fa-home fa-2x',
		type: 'icon',
		name: 'Home',
		route: ''
	},
	{
		class: 'fas fa-user fa-2x',
		type: 'icon',
		name: 'About',
		route: ''
	},
	{
		class: 'fas fa-lightbulb fa-2x',
		type: 'icon',
		name: 'Projects',
		route: ''
	},
	{
		class: 'fas fa-pencil-alt fa-2x',
		type: 'icon',
		name: 'Blogs',
		route: ''
	},
	{
		class: 'fas fa-user-graduate fa-2x',
		type: 'icon',
		name: 'Education',
		route: ''
	},
	{
		class: 'dock-div',
		type: 'div',
		name: 'none',
		route: ''
	},
	{
		class: 'fab fa-github fa-2x',
		type: 'icon',
		name: 'Github',
		route: 'https://github.com/NSVEGUR'
	},
	{
		class: 'fab fa-twitter fa-2x',
		type: 'icon',
		name: 'Twitter',
		route: 'https://twitter.com/VegurS'
	},
	{
		class: 'fas fa-envelope-open fa-2x',
		type: 'icon',
		name: 'Mail',
		route: 'mailto:nsvegur@gmail.com'
	},
	{
		class: 'dock-div',
		type: 'div',
		name: 'none',
		route: ''
	},
	{
		class: 'fas fa-moon fa-2x',
		type: 'link',
		name: 'Theme',
		route: ''
	},
	{
		class: 'fas fa-volume-up fa-2x',
		type: 'link',
		name: 'Sound',
		route: ''
	}
]);

export type dockIcon = {
	class: string | null;
	type: string | null;
	name: string | null;
	route: string | null;
};

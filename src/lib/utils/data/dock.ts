export const dockIcons = [
	{
		id: 1,
		class: 'fas fa-home fa-2x',
		type: 'icon sound',
		name: 'Home',
		route: '#'
	},
	{
		id: 2,
		class: 'fas fa-user fa-2x',
		type: 'icon sound',
		name: 'About',
		route: '#'
	},
	{
		id: 3,
		class: 'fas fa-lightbulb fa-2x',
		type: 'icon sound',
		name: 'Projects',
		route: '#'
	},
	{
		id: 4,
		class: 'fas fa-pencil-alt fa-2x',
		type: 'icon sound',
		name: 'Writings',
		route: '#'
	},
	{
		id: 5,
		class: 'fas fa-user-graduate fa-2x',
		type: 'icon sound',
		name: 'Education',
		route: '#'
	},
	{
		id: 0,
		class: 'dock-div',
		type: 'div',
		name: 'none',
		route: '#'
	},
	{
		id: 6,
		class: 'fab fa-github fa-2x',
		type: 'link sound',
		name: 'Github',
		route: 'https://github.com/NSVEGUR'
	},
	{
		id: 7,
		class: 'fab fa-twitter fa-2x',
		type: 'link sound',
		name: 'Twitter',
		route: 'https://twitter.com/VegurS'
	},
	{
		id: 8,
		class: 'fas fa-envelope-open fa-2x',
		type: 'link sound',
		name: 'Mail',
		route: 'mailto:nsvegur@gmail.com'
	},
	{
		id: 0,
		class: 'dock-div',
		type: 'div',
		name: 'none',
		route: '#'
	},
	{
		id: 9,
		class: 'fas fa-sun fa-2x',
		type: 'icon sound',
		name: 'Theme',
		route: '#'
	},
	{
		id: 10,
		class: 'fas fa-volume-up fa-2x',
		type: 'icon sound',
		name: 'Sound',
		route: '#'
	}
];

export type dockIcon = {
	class: string | null;
	type: string | null;
	name: string | null;
	route: string | null;
	id: number;
};

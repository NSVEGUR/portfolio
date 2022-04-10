export const data = [
	{
		id: 1,
		title: 'Magic-dot',
		subTitle: 'e-commerce website building for a startup.',
		year: 2022,
		isOpen: false
	},
	{
		id: 2,
		title: 'CarnetOS',
		subTitle: 'painting of macOS integrated with railway ticket booking.',
		year: 2022,
		isOpen: false
	},
	{
		id: 3,
		title: 'GossipBox',
		subTitle: 'social media chat application based on email.',
		year: 2021,
		isOpen: false
	},
	{
		id: 4,
		title: 'VBS',
		subTitle: 'a tutorial portal integrated with payments and youtube lectures.',
		year: 2021,
		isOpen: false
	},
	{
		id: 5,
		title: 'Agri-Connect',
		subTitle: 'decentralised app for agricultural transactions.',
		year: 2021,
		isOpen: false
	},
	{
		id: 6,
		title: 'Web Pages',
		subTitle: 'built for Institute fests and clubs.',
		year: '2021-2022',
		isOpen: false
	}
];

export type dataType = {
	id: number;
	title: string;
	subTitle: string;
	year: number | string;
	isOpen: boolean;
};

export const data = [
	{
		id: 1,
		title: 'Magic-dot',
		subTitle: 'e-commerce website building for a startup.',
		year: 2022,
		isOpen: false,
		img: 'magicdot',
		description:
			'A full stack e-commerce website (still in progress) which is built on top of next.js, react and nest.js. This project is for a start up company named magic-dot to be started with t-shirt sales.',
		source: 'https://github.com/NSVEGUR/magic-dot.git',
		demo: 'https://github.com/NSVEGUR/magic-dot.git'
	},
	{
		id: 2,
		title: 'CarnetOS',
		subTitle: 'painting of macOS integrated with railway ticket booking.',
		year: 2022,
		isOpen: false,
		img: 'carnetos',
		description:
			'I am very fond of macOS design, as suggests my portfolio website xD!. This is a college driven project on railway ticket booking innovated into operating system built with svelte and sql as database.',
		source: 'https://github.com/NSVEGUR/carnetOS-web.git',
		demo: 'https://carnet-os-web.vercel.app'
	},
	{
		id: 3,
		title: 'GossipBox',
		subTitle: 'social media chat application based on email.',
		year: 2021,
		isOpen: false,
		img: 'gossipbox',
		description:
			'A simple chat application uses firebase as auth & database, built with the latest trending technologies flutter and firebase.',
		source: 'https://github.com/NSVEGUR/GossipBox.git',
		demo: 'https://drive.google.com/file/d/1Cft897MpzN5LpEtn5jF8HSlhpVM5gFc9/view'
	},
	{
		id: 4,
		title: 'VBS',
		subTitle: 'a tutorial portal integrated with payments and youtube lectures.',
		year: 2021,
		isOpen: false,
		img: 'vbs',
		description: `A tutorial portal like website integrated with razorpay and a simple youtube clone using template engine pug. It's free of cost for a coaching institute.`,
		source: 'https://github.com/NSVEGUR/VBS_ShriSaiAcademy.git',
		demo: 'https://vbsshrisai-academy.herokuapp.com'
	},
	{
		id: 5,
		title: 'Agri-Connect',
		subTitle: 'decentralised app for agricultural transactions.',
		year: 2021,
		isOpen: false,
		img: 'agriconnect',
		description:
			'Mobile application based on web3 technologies like smart contracts melded with firebase. This is presented for DotSlash Hackathon 5.o Jan 2022.',
		source: 'https://github.com/NSVEGUR/DotSlash5.0.git',
		demo: 'https://devfolio.co/projects/agro-connect-e06d'
	},
	{
		id: 6,
		title: 'Web Pages',
		subTitle: 'built for Institute fests and clubs.',
		year: '2021-2022',
		isOpen: false,
		img: 'infinitechallengers',
		description:
			'As a member of webops team of CS Club IIITDMK made many web pages for fests and clubs using plane web languages and some with frameworks.',
		source: 'https://github.com/WebOpsIIITDMK',
		demo: 'https://github.com/WebOpsIIITDMK'
	}
];

export type dataType = {
	id: number;
	title: string;
	subTitle: string;
	year: number | string;
	isOpen: boolean;
	img: string;
	source: string;
	demo: string;
	description: string;
};

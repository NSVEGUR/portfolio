export const pageTransitionVariants = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			type: 'spring'
		}
	},
	hidden: {
		opacity: 0,
		y: 1000
	}
};

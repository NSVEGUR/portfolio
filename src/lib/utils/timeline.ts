/* eslint-disable @typescript-eslint/no-explicit-any */
let prevScrollY: number;
let up: boolean, down: boolean;
let full = false;
let set = 0;

export function scrollHandler() {
	const sections: NodeListOf<HTMLElement> = document.querySelectorAll('.section');
	const timeline: HTMLElement = document.querySelector('.timeline');
	const line: HTMLElement = document.querySelector('.line');
	const { scrollY } = window;
	up = scrollY < prevScrollY;
	down = !up;
	const timelineRect = timeline.getBoundingClientRect();
	const targetY: number = window.innerHeight * 0.8;

	const dist = targetY - timelineRect.top;

	if (down && !full) {
		set = Math.max(set, dist);
		line.style.bottom = `calc(100% - ${set}px)`;
	}

	if (dist > timeline.offsetHeight + 50 && !full) {
		full = true;
		line.style.bottom = `-50px`;
	}

	sections.forEach((item: any) => {
		const rect = item.getBoundingClientRect();

		if (rect.top + item.offsetHeight / 5 < targetY) {
			item.classList.add('show-me');
		}
	});

	prevScrollY = window.scrollY;
}

export function initiateTimeline() {
	const line: HTMLElement = document.querySelector('.line');
	line.style.bottom = `calc(100% - 20px)`;
	line.style.display = 'block';
	prevScrollY = window.scrollY;
	scrollHandler();
}

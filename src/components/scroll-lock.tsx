'use client';

import {useEffect} from 'react';

const ScrollLock = ({enabled}: {enabled: boolean}) => {
	useEffect(() => {
		if (enabled) {
			// Disable scrolling
			document.body.style.overflow = 'hidden';

			// Store the current scroll position
			const scrollPosition = window.pageYOffset;

			// Add listener to keep the scroll position
			const handleScroll = () => {
				window.scrollTo(0, scrollPosition);
			};
			window.addEventListener('scroll', handleScroll);

			// Return cleanup function to re-enable scrolling
			return () => {
				document.body.style.overflow = '';
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, [enabled]);

	return null;
};

export default ScrollLock;

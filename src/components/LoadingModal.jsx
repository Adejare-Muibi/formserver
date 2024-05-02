import React from 'react';
import {ColorRing, FallingLines, ThreeDots} from 'react-loader-spinner';

const LoadingModal = () => {
	return (
		<div>
			<div className="fixed bg-[rgba(0,0,0,0.3)] top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center">
				<ColorRing
					colors={['#c02dc1', '#c02dc1', '#c02dc1', '#c02dc1', '#c02dc1']}
				/>
			</div>
		</div>
	);
};

export default LoadingModal;

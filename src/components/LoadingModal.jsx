import React from 'react';
import {ThreeDots} from 'react-loader-spinner';

const LoadingModal = () => {
	return (
		<div>
			<div className="fixed bg-[rgba(0,0,0,0.3)] top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center">
				<ThreeDots
					visible={true}
					height="80"
					width="80"
					color="#4fa94d"
					radius="9"
					ariaLabel="three-dots-loading"
					wrapperStyle={{}}
					wrapperClass=""
				/>
			</div>
		</div>
	);
};

export default LoadingModal;

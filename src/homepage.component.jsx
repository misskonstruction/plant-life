import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
	<div className='homepage'>
		<div className='directory-menu'>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>SUCCULENTS</h1>
					<span className='subtitle'>BROWSE NOW</span>
				</div>
			</div>

			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>LETTUCES</h1>
					<span className='subtitle'>BROWSE NOW</span>
				</div>
			</div>

			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>HERBS</h1>
					<span className='subtitle'>BROWSE NOW</span>
				</div>
			</div>

			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>MARY JANE</h1>
					<span className='subtitle'>BROWSE NOW</span>
				</div>
			</div>

			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>POISONOUS</h1>
					<span className='subtitle'>BROWSE NOW</span>
				</div>
			</div>
		</div>
	</div>
	);

export default HomePage;
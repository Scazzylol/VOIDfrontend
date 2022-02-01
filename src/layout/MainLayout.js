import React from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';

import Landing from '../pages/landing';
import DashBoard from '../pages/dashboard';
import Iframe from '../pages/iframe'
import ComingSoon from '../pages/coming'
import Particles from '../components/Particles'

import { SWAP_LINK, CHART_LINK } from '../config/link'

const MainLayout = () => {
	return (
		<>
			<Particles />
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/buy" element={<Iframe targetUrl={SWAP_LINK} />} />
				<Route exact path="/chart" element={<Iframe targetUrl={CHART_LINK} />} />
				<Route exact path="/rewards" element={<DashBoard />} />
				<Route exact path="/treasury" element={<ComingSoon />} />
			</Routes>

		</>
	);
}

export default MainLayout;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderLayout from './header/HeaderLayout'
import DashBoard from '../pages/dashboard';
import Iframe from '../pages/iframe'

import { SWAP_LINK, CHART_LINK } from '../config/link'

const MainLayout = () => {
	return (
		<Routes>
			<Route exact path="/buy" element={<Iframe targetUrl={SWAP_LINK} />} />
			<Route exact path="/chart" element={<Iframe targetUrl={CHART_LINK} />} />
			<Route exact path="/rewards" element={<DashBoard />} />
		</Routes>
	);
}

export default MainLayout;
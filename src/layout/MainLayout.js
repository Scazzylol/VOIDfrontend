import React from 'react';
import DashBoard from '../pages/dashboard';
import Iframe from '../pages/iframe'

import { SWAP_LINK, CHART_LINK } from '../config/link'

const BuyLayout = () => {
	return (
		<Iframe targetUrl={CHART_LINK} />
	);
}

export default BuyLayout;
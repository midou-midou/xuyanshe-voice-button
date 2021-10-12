import { Fragment } from 'react';
import { Route } from 'react-router';
import XiaoXi from './component/XiaoXi';
import XiaoTao from './component/XiaoTao';
import SiteInfo from './component/SiteInfo';
import Footer from './component/Footer';

import './source/sass/index.scss';

function App() {
	return (
		<Fragment>
			<SiteInfo />
			<Route path="/xx" component={XiaoXi}></Route>
			<Route path="/xt" component={XiaoTao}></Route>
			<Footer />
		</Fragment>
	);
}

export default App;

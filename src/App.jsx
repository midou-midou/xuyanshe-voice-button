import { Fragment } from 'react';
import { Redirect, Route } from 'react-router';
import XiaoXi from './component/XiaoXi';
import XiaoTao from './component/XiaoTao';
import XiaoRou from './component/XiaoRou';
import SiteInfo from './component/SiteInfo';
import Footer from './component/Footer';
import Reine from './component/Reine';
import Ailurus from './component/Ailurus';

import './source/sass/index.scss';

function App() {
	return (
		<Fragment>
			<SiteInfo />
			<Route path="/xx" component={XiaoXi}></Route>
			<Route path="/xt" component={XiaoTao}></Route>
			<Route path="/xr" component={XiaoRou}></Route>
			<Route path="/reine" component={Reine}></Route>
			<Route path="/ailurus" component={Ailurus}></Route>
			<Redirect to="/xx"/>
			<Footer />
		</Fragment>
	);
}

export default App;

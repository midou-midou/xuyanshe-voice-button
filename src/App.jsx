import { Fragment } from 'react';
import { Redirect, Route } from 'react-router';
import XiaoXi from './component/Vup/XiaoXi';
import XiaoTao from './component/Vup/XiaoTao';
import XiaoRou from './component/Vup/XiaoRou';
import SiteInfo from './component/SiteInfo';
import Footer from './component/Footer';
import Reine from './component/Vup/Reine';
import Ailurus from './component/Vup/Ailurus';

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

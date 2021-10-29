import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import XiaoXi from './component/Vup/XiaoXi';
import XiaoTao from './component/Vup/XiaoTao';
import XiaoRou from './component/Vup/XiaoRou';
import SiteInfo from './component/Panel/SiteInfo';
import Footer from './component/Footer';
import Reine from './component/Vup/Reine';
import Ailurus from './component/Vup/Ailurus';

import './source/sass/index.scss';

function App() {
	return (
		<Fragment>
			<SiteInfo />
			<Switch>
				<Route exact path="/xx" component={XiaoXi}></Route>
				<Route exact path="/xt" component={XiaoTao}></Route>
				<Route exact path="/xr" component={XiaoRou}></Route>
				<Route exact path="/reine" component={Reine}></Route>
				<Route exact path="/ailurus" component={Ailurus}></Route>
				<Redirect to="/xx"/>
			</Switch>
			<Footer />
		</Fragment>
	);
}

export default App;

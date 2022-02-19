import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Nav from './component/Navs/Nav';
import XiaoXi from './component/Vup/XiaoXi';
import XiaoTao from './component/Vup/XiaoTao';
import XiaoRou from './component/Vup/XiaoRou';
import SiteInfo from './component/Panel/SiteInfo';
import Footer from './component/Footer';
import Reine from './component/Vup/Reine';
import Ailurus from './component/Vup/Ailurus';
import YangBao from './component/Vup/YangBao';
import Console from './component/utills/Console';
import SupportBtn from './component/utills/SupportBtn';
import NavPanel from './component/Panel/NavPanel';
import FeaturePanel from './component/Panel/FeaturePanel';
import { useSelector } from 'react-redux';

import './source/sass/index.scss';

function App() {
	const vups = useSelector((state) => state.getVupData);

	return (
		<Fragment>
			<Nav />
			<SiteInfo />
			<SupportBtn />
			<NavPanel vups={vups}/>
			<FeaturePanel />
			<Switch>
				<Route exact path="/xx" component={XiaoXi}></Route>
				<Route exact path="/xt" component={XiaoTao}></Route>
				<Route exact path="/xr" component={XiaoRou}></Route>
				<Route exact path="/reine" component={Reine}></Route>
				<Route exact path="/ailurus" component={Ailurus}></Route>
				<Route exact path="/yangbao" component={YangBao}></Route>
				<Redirect to="/xx"/>
			</Switch>
			<Footer />
			<Console />
		</Fragment>
	);
}

export default App;

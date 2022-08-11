import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Nav from './component/Navs/Nav';
import { BrowserRouter } from 'react-router-dom';
import SiteInform from './component/utills/SiteInform';
import SiteInfo from './component/Panel/SiteInfo';
import Footer from './component/Footer';
import Vup from './component/Vup'
import Console from './component/utills/Console';
import SupportBtn from './component/utills/SupportBtn';
import NavPanel from './component/Panel/NavPanel';
import FeaturePanel from './component/Panel/FeaturePanel';
import FriendBtn from './component/utills/FriendBtn';
import { useSelector } from 'react-redux';

import './source/sass/index.scss';
function App() {
	const vups = useSelector((state) => state.getVupData);

	return (
		<Fragment>
			<BrowserRouter>
				<Nav />
				<SiteInform />
				<SiteInfo />
				<SupportBtn />
				<FriendBtn />
				<NavPanel vups={vups}/>
				<FeaturePanel />
				<Switch>
					{
						vups.map((v, k) => {
							return <Route exact path={`/:name`} key={k} component={Vup}></Route>
						})
					}
					<Redirect to="/xiaoxi"/>
				</Switch>
			</BrowserRouter>
			<Footer />
			<Console />
		</Fragment>
	);
}

export default App;

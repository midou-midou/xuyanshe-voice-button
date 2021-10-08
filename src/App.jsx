import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import XiaoXi from './component/XiaoXi'
import XiaoTao from './component/XiaoTao'

import './source/sass/index.scss';

function App() {
	return (
		<Fragment>
			<Route path="/xx" component={XiaoXi}></Route>
			<Route path="/xt" component={XiaoTao}></Route>
		</Fragment>
	);
}

export default App;

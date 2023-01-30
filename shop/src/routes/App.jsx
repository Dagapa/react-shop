import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RecoveryPassword from '../pages/RecoveryPassword';
import useInitialState from '../hooks/useInitialState';
import CreateAccount from '../pages/CreateAccount'
import AppContext from '../context/appContext';
import NewPassword from '../pages/NewPassword';
import SendEmail from '../pages/SendEmail';
import MyAccount from '../pages/MyAccount';
import Layout from '../containers/Layout';
import NotFound from '../pages/NotFound';
import CheckOut from '../pages/Checkout';
import Orders from '../pages/Orders'
import Login from '../pages/Login';
import Home from '../pages/Home';
import '../styles/global.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState} >
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route exact path="/password-recovery" element={<RecoveryPassword />} />
						<Route exact path="/send-email" element={<SendEmail />} />
						<Route exact path="/new-password" element={<NewPassword />} />
						<Route exact path="/account" element={<MyAccount />} />
						<Route exact path="/signup" element={<CreateAccount />} />
						<Route exact path="/checkout" element={<CheckOut />} />
						<Route exact path="/orders" element={<Orders />} />
						<Route path="*" element={NotFound} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;

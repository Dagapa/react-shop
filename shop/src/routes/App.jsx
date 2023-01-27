import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RecoveryPassword from '../pages/RecoveryPassword';
import CreateAccount from '../pages/CreateAccount'
import NewPassword from '../pages/NewPassword';
import SendEmail from '../pages/SendEmail';
import MyAccount from '../pages/MyAccount';
import Layout from '../containers/Layout';
import CheckOut from '../pages/Checkout'
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Orders from '../pages/Orders'
import Home from '../pages/Home';
import '../styles/global.css';

const App = () => {
	return (
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
	);
}

export default App;

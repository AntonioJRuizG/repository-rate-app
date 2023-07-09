import React from 'react';
import { View } from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';
import { Route, Routes } from 'react-router-native';
import SignIn from './SignIn.jsx';

const Main = () => {
	return (
		<View style={{ flex: 1 }}>
			{/* Flex: 1 to make the items list fill the 100% heigth of the content */}
			<AppBar></AppBar>
			<Routes>
				<Route exact path='/' Component={RepositoryList}></Route>
				<Route path='/signin' Component={SignIn}></Route>
			</Routes>
		</View>
	);
};

export default Main;

import React from 'react';
import { View } from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';

const Main = () => {
	return (
		<View style={{ flex: 1 }}>
			{/* Flex: 1 to make the items list fill the 100% heigth of the content */}
			<AppBar></AppBar>
			<RepositoryList></RepositoryList>
		</View>
	);
};

export default Main;

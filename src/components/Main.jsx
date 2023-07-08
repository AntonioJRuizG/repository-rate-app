import React from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList.jsx';

const Main = () => {
	return (
		<View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
			<Text>Rate Repository List Application</Text>
			<RepositoryList></RepositoryList>
		</View>
	);
};

export default Main;

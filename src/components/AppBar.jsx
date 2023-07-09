import React from 'react';
import { ViewProps, StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.appBar.primary,
		flexDirection: 'row',
		paddingTop: Constants.statusBarHeight + 10,
	},
	scroll: {
		paddingBottom: 15,
	},
	text: {
		color: theme.appBar.textSecondary,
		paddingHorizontal: 10,
		paddingBottom: 10,
	},
	active: {
		color: theme.appBar.textPrimary,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<StyledText fontWeight='bold' style={styles.text}>
				Repositories
			</StyledText>
		</View>
	);
};

export default AppBar;

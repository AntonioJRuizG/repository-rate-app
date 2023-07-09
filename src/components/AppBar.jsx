import React from 'react';
import {
	ViewProps,
	StyleSheet,
	View,
	TouchableWithoutFeedback,
} from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

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

const AppBarTab = ({ active, children, to }) => {
	return (
		<Link to={to} component={TouchableWithoutFeedback}>
			<StyledText fontWeight='bold' style={styles.text}>
				{children}
			</StyledText>
		</Link>
	);
};

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab active to='/'>
				Repositories
			</AppBarTab>
			<AppBarTab active to='/signin'>
				Sign in
			</AppBarTab>
		</View>
	);
};

export default AppBar;

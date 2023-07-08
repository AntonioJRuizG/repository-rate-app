import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
	},
	strong: {
		color: '#89f',
		fontWeight: 'bold',
		marginBottom: 5,
	},
});

const RepositoryListItem = (item) => {
	return (
		<View key={item.id} style={styles.container}>
			<Text style={styles.strong}>id: {item.id}</Text>
			<Text>FullName {item.fullName}</Text>
			<Text>Description: {item.description}</Text>
			<Text>Languaje: {item.language}</Text>
			<Text>Starts: {item.stargazersCount}</Text>
			<Text>Forks: {item.forksCount}</Text>
			<Text>Review: {item.reviewCount}</Text>
			<Text>Rating: {item.ratingAverage}</Text>
		</View>
	);
};

export default RepositoryListItem;

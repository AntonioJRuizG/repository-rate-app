import { View, Text, StyleSheet } from 'react-native';
import StyledText from './StyledText';

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
			<StyledText big bold>
				id: {item.id}
			</StyledText>
			<StyledText blue>FullName {item.fullName}</StyledText>
			<StyledText blue>Description: {item.description}</StyledText>
			<StyledText blue>Languaje: {item.language}</StyledText>
			<StyledText blue>Starts: {item.stargazersCount}</StyledText>
			<StyledText small>Forks: {item.forksCount}</StyledText>
			<StyledText small>Review: {item.reviewCount}</StyledText>
			<StyledText small>Rating: {item.ratingAverage}</StyledText>
		</View>
	);
};

export default RepositoryListItem;

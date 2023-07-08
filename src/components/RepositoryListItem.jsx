import { View, Text, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
	},
});

const RepositoryListItem = (item) => {
	return (
		<View key={item.id} style={styles.container}>
			<StyledText fontWeight='bold' fontSize='subheading'>
				{item.fullName}
			</StyledText>
			<StyledText>{item.description}</StyledText>
			<StyledText>{item.language}</StyledText>
			<StyledText>Starts: {item.stargazersCount}</StyledText>
			<StyledText>Forks: {item.forksCount}</StyledText>
			<StyledText>Review: {item.reviewCount}</StyledText>
			<StyledText>Rating: {item.ratingAverage}</StyledText>
		</View>
	);
};

export default RepositoryListItem;

import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
	},
});

const RepositoryStats = (props) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
			<View>
				<StyledText fontWeight='bold'>Starts</StyledText>
				<StyledText>{props.stargazersCount}</StyledText>
			</View>
			<View>
				<StyledText fontWeight='bold'>Forks</StyledText>
				<StyledText>{props.forksCount}</StyledText>
			</View>
			<View>
				<StyledText fontWeight='bold'>Review</StyledText>
				<StyledText>{props.reviewCount}</StyledText>
			</View>
			<View>
				<StyledText fontWeight='bold'>Rating</StyledText>
				<StyledText>{props.ratingAverage}</StyledText>
			</View>
		</View>
	);
};

const RepositoryListItem = (item) => {
	return (
		<View key={item.id} style={styles.container}>
			<StyledText fontWeight='bold' fontSize='subheading'>
				{item.fullName}
			</StyledText>
			<StyledText>{item.description}</StyledText>
			<StyledText>{item.language}</StyledText>
			<RepositoryStats {...item}></RepositoryStats>
		</View>
	);
};

export default RepositoryListItem;

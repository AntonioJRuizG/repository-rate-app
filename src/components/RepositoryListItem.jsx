import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';

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
			<RepositoryStats {...item}></RepositoryStats>
		</View>
	);
};

export default RepositoryListItem;

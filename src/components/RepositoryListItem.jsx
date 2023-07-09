import { View, StyleSheet, Image } from 'react-native';
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';

const RepositoryItemHeader = ({
	ownerAvatarUrl,
	fullName,
	description,
	language,
}) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				paddingBottom: 2,
				gap: 5,
				alignItems: 'flex-start',
			}}
		>
			<View style={{ flex: 0 }}>
				{/* Image needs to be styled to appear on screen */}
				<Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
			</View>
			<View style={{ flexGrow: 1 }}>
				<StyledText fontWeight='bold' fontSize='subheading'>
					{fullName}
				</StyledText>
				<StyledText color='secondary'>{description}</StyledText>
				<StyledText style={styles.language}>{language}</StyledText>
			</View>
		</View>
	);
};

const RepositoryListItem = (item) => {
	return (
		<View key={item.id} style={styles.container}>
			<RepositoryItemHeader {...item}></RepositoryItemHeader>
			<RepositoryStats {...item}></RepositoryStats>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
	},
	language: {
		padding: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
		borderRadius: 4,
		overflow: 'hidden', // To make the borderRadius work
		marginBottom: 4,
		marginTop: 4,
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4,
	},
});

export default RepositoryListItem;

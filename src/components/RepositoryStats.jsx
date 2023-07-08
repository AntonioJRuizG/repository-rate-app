import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from './StyledText';

const parseThousands = (value) => {
	return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});

const RepositoryStats = (props) => {
	return (
		<View style={styles.container}>
			<View>
				<StyledText fontWeight='bold' align='center'>
					Starts
				</StyledText>
				<StyledText align='center'>
					{parseThousands(props.stargazersCount)}
				</StyledText>
			</View>
			<View>
				<StyledText fontWeight='bold' align='center'>
					Forks
				</StyledText>
				<StyledText align='center'>
					{parseThousands(props.forksCount)}
				</StyledText>
			</View>
			<View>
				<StyledText fontWeight='bold' align='center'>
					Review
				</StyledText>
				<StyledText align='center'>{props.reviewCount}</StyledText>
			</View>
			<View>
				<StyledText fontWeight='bold' align='center'>
					Rating
				</StyledText>
				<StyledText align='center'>{props.ratingAverage}</StyledText>
			</View>
		</View>
	);
};

export default RepositoryStats;

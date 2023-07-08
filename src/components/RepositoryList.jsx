import React from 'react';
import { View, Text, FlatList } from 'react-native';
import repositories from '../../data/repositories';

const RepositoryList = () => {
	return (
		<FlatList
			data={repositories}
			ItemSeparatorComponent={() => <Text> </Text>}
			renderItem={({ item: repo }) => (
				<View
					key={repo.id}
					style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}
				>
					<Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
						id: {repo.id}
					</Text>
					<Text>FullName {repo.fullName}</Text>
					<Text>Description: {repo.description}</Text>
					<Text>Languaje: {repo.language}</Text>
					<Text>Starts: {repo.stargazersCount}</Text>
					<Text>Forks: {repo.forksCount}</Text>
					<Text>Review: {repo.reviewCount}</Text>
					<Text>Rating: {repo.ratingAverage}</Text>
				</View>
			)}
		></FlatList>
	);
};

export default RepositoryList;

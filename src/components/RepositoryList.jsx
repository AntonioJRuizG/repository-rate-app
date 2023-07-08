import React from 'react';
import { View, Text, FlatList } from 'react-native';
import repositories from '../../data/repositories';
import RepositoryListItem from './RepositoryListItem';

const RepositoryList = () => {
	return (
		<FlatList
			data={repositories}
			ItemSeparatorComponent={() => <Text> </Text>}
			renderItem={({ item: repo }) => (
				<RepositoryListItem {...repo}></RepositoryListItem>
			)}
		></FlatList>
	);
};

export default RepositoryList;

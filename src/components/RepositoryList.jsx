import React from 'react';
import { Text, FlatList } from 'react-native';
import RepositoryListItem from './RepositoryListItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
	const { repositories } = useRepositories();

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

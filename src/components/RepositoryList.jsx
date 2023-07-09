import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import RepositoryListItem from './RepositoryListItem';

const RepositoryList = () => {
	const [repositories, setRepositories] = useState(null);

	const fetchRepositories = async () => {
		const response = await global
			.fetch('https://rate-repository-api-nng9.onrender.com/api/repositories')
			.catch((error) => {
				console.log(error);
				return;
			});

		if (response === undefined) return;

		const data = await response.json().catch((error) => {
			console.log(error);
		});

		setRepositories(data);
	};

	useEffect(() => {
		fetchRepositories();
		setRepositories(repositoriesNodes);
	}, []);

	const repositoriesNodes = repositories
		? repositories?.edges?.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoriesNodes}
			ItemSeparatorComponent={() => <Text> </Text>}
			renderItem={({ item: repo }) => (
				<RepositoryListItem {...repo}></RepositoryListItem>
			)}
		></FlatList>
	);
};

export default RepositoryList;

import { useEffect, useState } from 'react';

const useRepositories = () => {
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
	}, []);

	const repositoriesNodes = repositories
		? repositories?.edges?.map((edge) => edge.node)
		: [];

	return { repositories: repositoriesNodes };
};

export default useRepositories;

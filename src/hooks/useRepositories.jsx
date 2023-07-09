import { useEffect, useState } from 'react';
import getRepositories from '../services/repositoriesRepo';

const useRepositories = () => {
	const [repositories, setRepositories] = useState(null);

	const fetchRepositories = async () => {
		const data = await getRepositories();
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

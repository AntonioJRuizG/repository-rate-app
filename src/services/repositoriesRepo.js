const getRepositories = async () => {
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

	return data;
};

export default getRepositories
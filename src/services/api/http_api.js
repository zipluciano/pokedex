const fecthData = async (route) => {
	const response = await fetch(route);
	const data = await response.json();
	return data;
};

export default fecthData;

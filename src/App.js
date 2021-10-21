import { React, useState, useEffect } from 'react';
import { Pokemon } from './components/Pokemon';
import fecthData from './services/api/http_api';

const App = () => {
	const [pokemonsData, setPokemonsData] = useState([]);

	useEffect(() => {
		fecthData('http://localhost:3001/pokemons').then((data) =>
			setPokemonsData(data)
		);
	}, []);

	return (
		<>
			<div className='logo'>
				<img
					src='https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png'
					alt='pokemon logo'
				/>
			</div>
			<div className='pokedex'>
				{pokemonsData.map(({ id, image, name, base, type }) => (
					<Pokemon
						key={id}
						image={image}
						name={name.english}
						attack={base.Attack}
						defense={base.Defense}
						hp={base.HP}
						type={type}
					/>
				))}
			</div>
		</>
	);
};

export default App;

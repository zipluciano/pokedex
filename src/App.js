import { React, Component } from 'react';
import Pokemon from './components/Pokemon';
import DATA from './assets/pokemons';

class App extends Component {
	render() {
		return (
			<div>
				<div className='logo'>
					<img
						src='https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png'
						alt=''
					/>
				</div>
				<div className='pokedex'>
					{DATA.map((item) => (
						<Pokemon
							key={item.id}
							image={item.image}
							name={item.name.english}
							attack={item.base.Attack}
							defense={item.base.Defense}
							hp={item.base.HP}
							type={item.type}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;

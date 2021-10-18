import { React, Component } from 'react';
import { changeBgColor } from '../../utils';

class Pokemon extends Component {
	render() {
		const bgColor = changeBgColor(this.props.type[0]);
		const image =
			this.props.image !== undefined
				? this.props.image
				: 'https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/Pok%C3%A9mon-go.png';

		return (
			<div className='pokemon' style={{ background: bgColor }}>
				<div className='image-container'>
					<img src={image} alt={`Pokemon: ${this.props.name}`} />
				</div>
				<div className='infos'>
					<h2>{this.props.name.toUpperCase()}</h2>
					<ul>
						<li className='attack'>Attack: {this.props.attack}</li>
						<li className='defense'>Defense: {this.props.defense}</li>
						<li className='hp'>HP: {this.props.hp}</li>
					</ul>
					<h3 className='type'>{this.props.type.join(' | ')}</h3>
				</div>
			</div>
		);
	}
}

export default Pokemon;

import React from 'react';
import PropTypes from 'prop-types';
import { changeBgColor } from '../../utils';

export const Pokemon = (props) => {
	const { image, name, attack, defense, hp, type } = props;

	const bgColor = changeBgColor(type[0]);
	const imagePath =
		image !== undefined
			? image
			: 'https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/Pok%C3%A9mon-go.png';

	return (
		<div className='pokemon' style={{ background: bgColor }}>
			<div className='image-container'>
				<img src={imagePath} alt={`Pokemon: ${name}`} />
			</div>
			<div className='infos'>
				<h2>{name.toUpperCase()}</h2>
				<ul>
					<li className='attack'>Attack: {attack}</li>
					<li className='defense'>Defense: {defense}</li>
					<li className='hp'>HP: {hp}</li>
				</ul>
				<h3 className='type'>{type.join(' | ')}</h3>
			</div>
		</div>
	);
};

Pokemon.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string.isRequired,
	attack: PropTypes.number.isRequired,
	defense: PropTypes.number.isRequired,
	hp: PropTypes.number.isRequired,
	type: PropTypes.arrayOf(PropTypes.string),
};

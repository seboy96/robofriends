import React from 'react';

// destructuring props right in the arguments section
// instead of (props) => we do ({ name, email, id })
// would be the same as---> const { name, email, id } = props;
const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;
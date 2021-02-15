import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faCaravan } from '@fortawesome/free-solid-svg-icons';

const Site = ({ site }) => {
	const {
		name,
		telephone,
		email,
		website,
		address,
		excerpt,
		description,
		pitches,
		units,
		facitilties,
	} = site;
	return (
		<div className='card'>
			<h5 className='card-header'>Site Details</h5>
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>{telephone}</p>
				<p className='card-text'>{email}</p>
				<p className='card-text'>{website}</p>
				<p className='card-text'>{excerpt}</p>
				<p className='card-text'>{description}</p>
				<p className='card-text'>{pitches}</p>
				<p className='card-text'>{units}</p>
				<p className='card-text'>{facitilties}</p>
				<FontAwesomeIcon icon={faCampground}></FontAwesomeIcon>
				<FontAwesomeIcon icon={faCaravan}></FontAwesomeIcon>
			</div>
		</div>
	);
};

export default Site;

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
		<>
			<h3>{name}</h3>
			<p>{telephone}</p>
			<p>{email}</p>
			<p>{website}</p>
			<p>{excerpt}</p>
			<p>{description}</p>
			<p>{pitches}</p>
			<p>{units}</p>
			<p>{facitilties}</p>
		</>
	);
};

export default Site;

import { sites } from '../../../data';

const getSite = ({ query: { id } }, res) => {
	console.log(id);
	const filtered = sites.filter((site) => site.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({
			message: `Site with the id of ${id} is not found`,
		});
	}
};

export default getSite;

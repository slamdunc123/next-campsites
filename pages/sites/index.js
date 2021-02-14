import Sites from '../../components/Sites';

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:3000/api/sites');
	const data = await res.json();

	return {
		props: { sites: data },
	};
};

const SitesPage = ({ sites }) => {
	return <Sites sites={sites} />;
};

export default SitesPage;

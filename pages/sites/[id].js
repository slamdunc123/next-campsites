import Link from 'next/link';
import Site from '../../components/Site';

export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:3000/api/sites');
	const data = await res.json();
	const paths = data.map((site) => {
		console.log(site);
		return {
			params: { id: site.id },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`http://localhost:3000/api/sites/${id}`);
	const data = await res.json();

	return {
		props: { site: data },
	};
};

const SitePage = ({ site }) => {
	return (
		<>
			<Site site={site} />
		</>
	);
};

export default SitePage;

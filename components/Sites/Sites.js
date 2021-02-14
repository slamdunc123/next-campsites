import Link from 'next/link';

const Sites = ({ sites }) => {
	return (
		<ul>
			{sites.map((site) => (
				<li key={site.id}>
					<Link href={`/sites/${site.id}`}>
						<a>{site.name}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Sites;

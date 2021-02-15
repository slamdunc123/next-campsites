import Link from 'next/link';

const Sites = ({ sites }) => {
	return (
		<ul className='list-group'>
			{sites.map((site) => (
				<li
					key={site.id}
					className='list-group-item list-group-item-action'
				>
					<Link href={`/sites/${site.id}`}>
						<a>{site.name}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Sites;

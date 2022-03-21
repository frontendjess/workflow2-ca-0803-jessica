import { gql, useQuery } from '@apollo/client';
import { orderBy } from 'lodash';

const GET_CHARACTERS = gql`
	query {
		characters {
			results {
				id
				name
				species
				gender
				image
			}
		}
	}
`;

function CharactersList() {
	const { loading, error, data } = useQuery(GET_CHARACTERS);

	console.log({ loading, error, data });

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Oops, something is wrong</div>;
	
// 	NOTE: You need to order data before placing it in JSX
	const orderedData = orderBy(data.characters.results, ['key'], ['desc']);

// 	NOTE: This is a function that needs to be called
	const formatData = orderedData.characters.results.map((character) => {
		return (
			<div key={character.id}>
				<img alt={character.name} src={character.image} />
				<h2>{character.name}</h2>
				<h4>{character.species}</h4>
				<h4>{character.gender}</h4>
			</div>
		);
	});

	const orderedData = orderBy(formatData, ['key'], ['desc']);

	console.log(
		'the list is now rendered by order of the key id descending',
		orderedData
	);

// 	NOTE: You need to call the function
	return <div className='Results'>{formatData()}</div>;
}

export default CharactersList;

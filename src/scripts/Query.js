import { gql, useQuery } from '@apollo/client';

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

	return (
		<div className='Results'>
			{data.characters.results.map((character) => {
				return (
					<div key={character.id}>
						<img src={character.image} />
						<h2>{character.name}</h2>
						<h4>{character.species}</h4>
						<h4>{character.gender}</h4>
					</div>
				);
			})}
		</div>
	);
}

export default CharactersList;

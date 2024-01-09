import Card from '../Card/Card';
import './Cards.css';

export default function Cards(props) {
   const { characters, onClose,addFavorites } = props;

   return (<div className='cartasflex'>
      {characters.map((character) => (
      <Card 
         key={character.id}
         name={character.name}
         gender={character.gender}
         status={character.status}
         species={character.species}
         image={character.image}
         character={character}
         id={character.id}
         onClose={onClose} 
         addFavorites={addFavorites}/>))}
   </div>);
}









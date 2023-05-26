import Card from '../Card/Card';

export default function Cards(props) {
  const { SearchResults} = props;

  return (
    <div>
      {SearchResults?.map((country, index) => (
        <Card
          key={index}
          id={country.id}
          name={country.name}
          image={country.image}
          continents={country.continents}
          capital={country.capital}
          area={country.area}
          population={country.population}
          
         />
      ))}
    </div>
  );
}

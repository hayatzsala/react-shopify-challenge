import SearchResult from '../Components/SearchResult'
export default function SearchResults({results, addFavorite}){
    return(
    <div>
        {console.log(results)}
        {results.isLoaded && results.data !== undefined &&
        results.data.map(element => 
        <SearchResult key={element.imdbID} data={element} addFavorite={addFavorite}/>)}
        {results.isLoaded && results.data === undefined && <h1>Hello</h1> }
    </div>
    );
}
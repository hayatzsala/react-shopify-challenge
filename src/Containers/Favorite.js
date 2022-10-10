import FavoriteMovie from "../Components/FavoriteMovie";
export default function Favorite({favoriteList, deleteFavorite}){
    return(
        <div>
            <h1>Favorite List</h1>
            
            {favoriteList.data !== undefined && favoriteList.data.map(element => 
            <FavoriteMovie key={element.imdbID} data={element} deleteFavorite={deleteFavorite}/>)}
            {favoriteList.data.length === 0 && <h2>Empty List</h2>}
        </div>
    );
}
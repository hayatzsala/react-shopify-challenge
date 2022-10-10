export default function FavoriteMovie({data, deleteFavorite}){
    return (
        <div>
            <img src={data.Poster} alt={data.Title}/>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
            <button onClick={()=> deleteFavorite(data)}>Delete</button>
        </div>
    );
}
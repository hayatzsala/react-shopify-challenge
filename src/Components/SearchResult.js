

export default function SearchResult({data,addFavorite}){
    
    return(
        <div className="resultCard">
            <img src={data.Poster} alt={data.Title}/>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
            <button onClick={()=>addFavorite(data)}>Nominate</button>
        </div>
    )
}
import { useState } from 'react';
import './App.css';
import Search from './Containers/Search';
import SearchResults from './Containers/SearchResults';
import Favorite from './Containers/Favorite';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [searchResults,setSearchResults] = useState({data:[],isLoaded:false});
  const [favoriteList, setFavoriteList] = useState({data:[]});
  const [favFull, setFavFull]= useState(false);

  const handleSearchResults =(data)=>{
    setSearchResults(data);
  }
  const handleFavoriteList = (data)=>{
    //debugger
    let favList = favoriteList.data;
    if(!favFull){
      favList.push(data)
      setFavoriteList({data:favList});
    }
    
    if(favoriteList.data.length === 5){
      setFavFull(true);
    }
    
  }
  const handleDeletFavorite=(data)=>{
    let favList = favoriteList.data;
    const id = favList.indexOf(data);
    const favList2 = favList.filter((element,index)=> index !== id);
    console.log(id)
    console.log(favList2);
    setFavoriteList({data:favList2});
    if(favoriteList.data.length !== 5){
      setFavFull(false);
    }

  }
  return (
    <div className="App">
      <Search setSearchResults={handleSearchResults} />
      <SearchResults results={searchResults} addFavorite={handleFavoriteList}/>
      <Favorite favoriteList={favoriteList} deleteFavorite={handleDeletFavorite}/>
      {console.log("is Full ", favFull)}
    </div>
  );
}

export default App;

import { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import useFetch from "../Hooks/useFetch";
export default function SearchBar({setSearchResults}){
    const [searchKey, setSearchKey] = useState('');
    const URL = 'http://www.omdbapi.com/?apikey=a655a1d4&s=';
    const {data,error,isLoading} = useFetch(URL,searchKey);
    const result = {data,error,isLoading};
    const handleFetchedData = (e)=>{
        setSearchKey(e.target.value);
        console.log('firstttt '+ isLoading);
        if(!isLoading){
            console.log(result)
             setSearchResults(result)
     }
        
    }
    return (
        <div className="searchBar">
           <InputGroup className="mb-3">
        <Form.Control 
        placeholder="Search"
        aria-label="Text input with checkbox" 
        onChange={(e)=>handleFetchedData(e)}/>
      </InputGroup>
           
        </div>
    
    );
}
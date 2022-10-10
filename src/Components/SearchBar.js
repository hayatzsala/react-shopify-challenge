import { useEffect,useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
export default function SearchBar({setSearchResults}){
    const [searchKey, setSearchKey] = useState('');
    
    useEffect(()=>{
        function fetchData(){
            fetch(`http://www.omdbapi.com/?apikey=a655a1d4&s=${searchKey}`)
            .then(response => {
                //console.log(response)
                return response.json()})
            .then(dataList => {
                //console.log(dataList);
                //debugger
                setSearchResults({data:dataList.Search,isLoaded:true});
            })
        }
        fetchData();
    },[searchKey])

    return (
        <div className="searchBar">
           <InputGroup className="mb-3">
        <Form.Control 
        placeholder="Search"
        aria-label="Text input with checkbox" 
        onChange={(e)=> setSearchKey(prev => e.target.value)}/>
      </InputGroup>
           
        </div>
    
    );
}
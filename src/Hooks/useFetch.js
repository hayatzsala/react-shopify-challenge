import { useState,useEffect } from "react"

const useFetch = (url, searchKey)=>{
    const [data, setData] = useState();
    const [error,setError] = useState();
    const [isLoading, setIsLoading] = useState();
    useEffect(()=>{
        function fetchData(){
            setIsLoading(true);
            const urlFetch = url+searchKey;
            console.log('urlll' + urlFetch);
            fetch(urlFetch)
            .then(response =>{
                
                return response.json()
            })
            .then(dataList => {
                console.log('fetch result',dataList);
                //debugger
                setData(dataList);
                setError(null);
            })
            .catch(err => {
                setError(err);
                setData(null);
            })
            .finally(()=>setIsLoading(false));

        }
        fetchData();
    },[url,searchKey])
    return [data,error,isLoading];
}

export default useFetch;
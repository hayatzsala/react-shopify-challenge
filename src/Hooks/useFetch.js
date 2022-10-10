import { useState,useEffect } from "react"

const useFetch = (url, searchKey)=>{
    const [data, setData] = useState();
    const [error,setError] = useState();
    const [isLoading, setIsLoading] = useState();
    useEffect(()=>{
        function fetchData(){
            setIsLoading(true);
            fetch(url + searchKey)
            .then(response => {
                //console.log(response)
                return response.json()})
            .then(dataList => {
                console.log(dataList);
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
    })
}

export default useFetch;
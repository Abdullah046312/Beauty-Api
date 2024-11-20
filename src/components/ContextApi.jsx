import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
let ApiData = createContext()


const ContextApi = ({children}) => {
    let [info, setinfo] = useState([])
    let [loading, setLoading] = useState(true);

    let getData = ()=>{
        axios.get("https://dummyjson.com/products").then((response)=>{
            setinfo(response.data.products);
            setLoading(false);

        })
    }

    useEffect(()=>{
        getData()

    },[])

  return (
    <ApiData.Provider value={{info, loading}}>{children}</ApiData.Provider>
  )
}

export {ContextApi, ApiData}

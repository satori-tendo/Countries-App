import React, {FC, useEffect, useState} from 'react'
import { Country } from '../Main/Main'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'
import s from './SearchResults.module.css'



const SearchResults: FC = () => {

    const [results, setResults] = useState<Country[]>([])
    const [isFetching, setIsFetchingg] = useState<boolean>(true)

    const params = useParams()
    const value: string | undefined = params.string

    useEffect(() => {

        axios.get(`https://restcountries.com/v3.1/name/${value}`)
            .then(response => {
                console.log(response.data);
                
                setResults(response.data)
                setIsFetchingg(false)
            })
    }, [])

  return (

      
      <div className={s.container}>
        <Link to={'/'}>
            <button>back</button>
        </Link>
        {isFetching && <Loading />}
        <h1 className={s.headerTitle}>
            Search for: {value}
        </h1>
        <div className={s.countries}>
            {results.map( //@ts-ignore
                i => <Card key={i.area} flags={i.flags.svg} name={i.name.common} population={i.population}
                    region={i.region} capital={i.capital} />
            )}
        </div>
    </div>
  )
}

export default SearchResults
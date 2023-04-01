import React, {useEffect, useState, FC} from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import Loading from '../Loading/Loading'
import s from './Main.module.css'

export interface Country {
    name: {common: string, official: string}
    flags: string
    population: number
    capital: string[]
    region: string
    key: number
}

const Main: FC = () => {


    const [countries, setCountries] = useState<Country[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(true)
    const [selectedRegion, setSelectedRegion] = useState<string>('')


    const [inputValue, setInputValue] = useState<string>('')
    const inputOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value)
    }

    const fetchingDefaultCountries = () => {
        axios.get('https://restcountries.com/v3.1/all')
          .then(response => {
            setCountries(response.data)
            setIsFetching(false)
        })
    }


    useEffect(() => { // посмотреть как типизировать. если это вообще типизируется
        fetchingDefaultCountries()
      }, [])
    

    const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            window.location = '/search/' + inputValue
        }
    }

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> | undefined = (e) => {
        const value: string = e.target.value 
        console.log(value)
        setIsFetching(true)
        setSelectedRegion(value)
        if(value == '') fetchingDefaultCountries()
        else axios.get(`https://restcountries.com/v3.1/region/${value}`)
            .then(response => {
                setCountries(response.data)
                setIsFetching(false)
            })
    }
 
    return (
        <div className={s.wrapper}>
            {isFetching && <Loading />}
            {!isFetching && 
            <div className={s.container}>
                <div className={s.firstRow}>
                        <input className={s.input} name='input' placeholder='Search for a country...' value={inputValue}
                            onChange={inputOnChange} onKeyDown={onKeyDownHandler} /> 
                        
                    <select className={s.select} value={selectedRegion} onChange={handleSelectChange}>
                        <option value="">Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
                <div className={s.countries}> 
                    {countries.map(i => <Card flags={i.flags.svg} key={countries[i]}
                        name={i.name.common} population={i.population} region={i.region}
                        capital={i.capital}/>)}
                </div>
            </div>}
        </div>
    )
}

export default Main
import { useEffect, useState } from "react"
import { fetchCountries } from "./api"
import type { Country } from "./type"
import "./App.css"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

function App() {
  const [countries,setCountries] = useState<Country[]>([])
  const [searchQuery, setSearchQuery] = useState("asia")
  const [loading, setLoading] = useState(false)
  const loadCountries = async (query: string) => {
    setLoading(true)
    try{
      const data = await fetchCountries(query)
      if (typeof data !== "string") {
        setCountries(data)
        }
    }finally{
      setLoading(false)
    }
      
    }
  useEffect(() => {
    loadCountries(searchQuery)
  }, [])

  const handleSearch = () => {
    loadCountries(searchQuery)
  }
    

  return (
    <>
      
       <div className="w-full h-full flex justify-center items-center flex-col bg-[#081621] gap-5">
        <div className="w-full h-25 flex flex-col items-center justify-center gap-5">
           <Input className="w-75 mt-5 text-white text-2xl" type="text" value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter region (e.g., asia, europe)"/>
           <Button onClick={handleSearch} variant="outline">{loading ? "Loading..." : "Search"}</Button>
        </div>
       
          <div className="grid grid-cols-3 gap-5">
            {loading && <div className="card">Loading countries...</div>}
            {!loading && countries.map(c => (
              <div className="card">
                  <div className="card__img">
                    <img className="w-[230px] h-[150px]" src={c.flags.png} alt="" />
                  </div>
                  <div className="card__subtitle">{c.region}</div>
                  <div className="card__subtitle"> {c.subregion}</div>
                  <div className="card__title text-green-700">{c.name.common}</div>
                  <div className="card__subtitle">Capital: {c.capital}</div>
                  <div className="card__subtitle">Population: {c.population}</div>
              </div>
            ))}
          </div>
       </div>
    </>
  )
}
export default App
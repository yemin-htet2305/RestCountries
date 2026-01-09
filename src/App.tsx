import { useEffect, useState } from "react"
import { fetchCountries } from "./api"
import type { Country } from "./type"

function App() {
  const [countries,setCountries] = useState<Country[]>([])
  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries("oceania")
      if (typeof data !== "string") {
        setCountries(data)
        }
    }
    loadCountries()},[]);

  return (
    <>
       <ul>
        {countries.map(c => (
          <li> <img src={c.flags['png']}/> {c.name['common']} | {c.population} | {c.capital} | {c.region} | {c.subregion} </li>
        ))}
       </ul>
    </>
  )
}
export default App

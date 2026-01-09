import axios from "axios"
import type { Country } from "./type"

export const fetchCountries = async (query: string) => {
    try{
        const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/region/${query}`);
        return response.data;
    }catch(error){
        if (axios.isAxiosError(error)){
            console.log(error.message);
            return error.message;
        } else{
            console.log("unexpected error: ",error);
            return "An unexpected error has occured"
        }
    }
}
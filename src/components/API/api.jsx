import axios from "axios";


export const getData = () => {
    return axios.get("https://api.rawg.io/api/platforms?key=0189db470f4249f784e23e550c38d3b8")
            .then((res=>res.data.results))
            .catch(e=>console.log(e))

}
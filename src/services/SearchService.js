
import ScryFallApi from "./ScryFallApi";



export default{

    get(name){
        return ScryFallApi.get(`cards/search?q=${name}`)
    }

};
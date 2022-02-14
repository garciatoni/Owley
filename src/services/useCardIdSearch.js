
import ScryFallApi from "./ScryFallApi";



export default{

    get(id){
        return ScryFallApi.get(`cards/${id}`)
    }

};
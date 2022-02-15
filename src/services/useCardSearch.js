
import ScryFallApi from "./ScryFallApi";



export default{

    get(name, page){
        return ScryFallApi.get(`cards/search?q=${name}&page=${page}`)
    },
};
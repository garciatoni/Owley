import ScryFallApi from "./ScryFallApi";

export default{

    get(code){
        return ScryFallApi.get(`/sets/${code}`)
    }

};
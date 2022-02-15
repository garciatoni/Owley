import ScryFallApi from "./ScryFallApi";

export default{

    get(){
        return ScryFallApi.get('/sets')
    }

};
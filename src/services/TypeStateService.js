import axios from 'axios';
const TYPESTATE_API_BASE_URL = "http://localhost:8080/api/v1/typeState";


class TypeStateService{
    getTypes(){
        return axios.get(TYPESTATE_API_BASE_URL);
    }

    addType(typeState){
        return axios.post(TYPESTATE_API_BASE_URL, typeState);
    }

    getTypesById(id = 1){
        if(id===0){
            id=1;
        }
        let TPEACCOUNT_API_BY_ID = "http://localhost:8080/api/v1/typeState/" + id;
        return axios.get(TPEACCOUNT_API_BY_ID);
    }

    
}

export default new TypeStateService(); 
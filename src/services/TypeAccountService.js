import axios from 'axios';
const TYPEACCOUNT_API_BASE_URL = "http://localhost:8080/api/v1/typeAccounts";


class TypeAccountService{
    getTypes(){
        return axios.get(TYPEACCOUNT_API_BASE_URL);
    }

    addType(typeAccount){
        return axios.post(TYPEACCOUNT_API_BASE_URL, typeAccount);
    }

    getTypesById(id = 1){
        if(id===0){
            id=1;
        }
        let TPEACCOUNT_API_BY_ID = "http://localhost:8080/api/v1/typeAccounts/" + id;
        return axios.get(TPEACCOUNT_API_BY_ID);
    }

    
}

export default new TypeAccountService(); 
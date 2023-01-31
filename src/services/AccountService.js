import axios from 'axios';
const ACCOUNT_API_BASE_URL = "http://localhost:8080/api/v1/accounts";


class CuentaService{
    
    getAccounts(){
        return axios.get(ACCOUNT_API_BASE_URL);
    }

    addAccount(account){
        return axios.post(ACCOUNT_API_BASE_URL, account);
    }

    getTypesById(id = 1){
        let ACCOUNT_API_BY_ID = "http://localhost:8080/api/v1/accounts/" + id;
        return axios.get(ACCOUNT_API_BY_ID);
    }

    updateAccount(id, account){
        let ACCOUNT_API_BY_ID = "http://localhost:8080/api/v1/accounts/" + id;
        return axios.put(ACCOUNT_API_BY_ID, account);
    }

    deleteAccount(id){
        return axios.delete(ACCOUNT_API_BASE_URL + '/' + id);
    }
}

export default new CuentaService(); 
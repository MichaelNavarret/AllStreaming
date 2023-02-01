import axios from 'axios';
const ACCOUNT_API_BASE_URL = "http://localhost:8080/api/v1/";


class CuentaService{
    
    getAccounts(){
        return axios.get(ACCOUNT_API_BASE_URL+"accounts");
    }

    addAccount(account){
        return axios.post(ACCOUNT_API_BASE_URL+"create", account);
    }

    getTypesById(id = 1){
        //let ACCOUNT_API_BY_ID = "http://localhost:8080/api/v1/accounts/" + id;
        return axios.get(ACCOUNT_API_BASE_URL+"accounts/"+id);
    }

    updateAccount(id, account){
        //let ACCOUNT_API_BY_ID = "http://localhost:8080/api/v1/accounts/" + id;
        return axios.put(ACCOUNT_API_BASE_URL+"accounts/"+id, account);
    }

    deleteAccount(id){
        return axios.delete(ACCOUNT_API_BASE_URL + 'accounts/' + id);
    }

    filterTypeId(typeId, stateId){
        if(typeId === 0 && stateId === 0){
            //let ACCOUNT_API_BY_TYPESTATE_ID= "http://localhost:8080/api/v1/search";
            return axios.get(ACCOUNT_API_BASE_URL+"search")
        }

        if(typeId !== 0 && stateId === 0){
            //let ACCOUNT_API_BY_TYPESTATE_ID= "http://localhost:8080/api/v1/search?typeId=" + typeId;
            return axios.get(ACCOUNT_API_BASE_URL + "search?typeId=" + typeId);
        }

        if(typeId === 0 && stateId !== 0){
            let ACCOUNT_API_BY_TYPESTATE_ID= "http://localhost:8080/api/v1/search?stateId=" + stateId;
            return axios.get(ACCOUNT_API_BASE_URL + "search?stateId=" + stateId);
        }

        if(typeId !== 0 && stateId !== 0){
            //let ACCOUNT_API_BY_TYPESTATE_ID= "http://localhost:8080/api/v1/search?typeId="+typeId+"&stateId="+stateId;
            return axios.get(ACCOUNT_API_BASE_URL+ "search?typeId=" + typeId+ "&stateId=" + stateId);
        }
    }
}

export default new CuentaService(); 
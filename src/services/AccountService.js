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
        return axios.get(ACCOUNT_API_BASE_URL+"accounts/"+id);
    }

    updateAccount(id, account){
        return axios.put(ACCOUNT_API_BASE_URL+"accounts/"+id, account);
    }

    deleteAccount(id){
        return axios.delete(ACCOUNT_API_BASE_URL + 'accounts/' + id);
    }

    filterTypeId(typeId, stateId){
        return axios.get(ACCOUNT_API_BASE_URL+ "search?typeId=" + typeId+ "&stateId=" + stateId)
       /*  console.log("ValoresFront: " + typeId + " y " + stateId);
        if(typeId === 0 && stateId === 0){
            return axios.get(ACCOUNT_API_BASE_URL+"search")
        }

        if(typeId !== 0 && stateId === 0){
            return axios.get(ACCOUNT_API_BASE_URL + "search?typeId=" + typeId);
        }

        if(typeId === 0 && stateId !== 0){
            return axios.get(ACCOUNT_API_BASE_URL + "search?stateId=" + stateId);
        }

        if(typeId !== 0 && stateId !== 0){
            return axios.get(ACCOUNT_API_BASE_URL+ "search?typeId=" + typeId+ "&stateId=" + stateId);
        } */
    }
}

export default new CuentaService(); 
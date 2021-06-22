import axios from "axios";

controllerUrl = `http://localhost:8080/api/jobs`;

export default class JobsService {



    getall() {
        return axios.get(`${this.controllerUrl}`);    
      }

    getCompanyName(companyName) {
        return axios.get(`${this.controllerUrl}/summary-table/contains/company-name?companyName=`,{params:{companyName}})
    }
    getjobTitle(jobTitle) {
        return axios.get(`${this.controllerUrl}/summary-table/contains/job-title?jobTitle=`,{params:{jobTitle}})
    }

    getAllSummaryTable(){
        return axios.get(`${this.controllerUrl}/summary-table`)
    }
    add(){
        return axios.post(`${this.controllerUrl}/save`)
    }

    passive(id){
        return axios.post(`${this.controllerUrl}/`,{params:{id}},`/set/passive`);
    }
    
    active(id){
        return axios.post(`${this.controllerUrl}/`,{params:{id}},`/set/active`);
    }


    }

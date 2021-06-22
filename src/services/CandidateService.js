import axios from "axios";

controllerUrl = `http://localhost:8080/api/employees`;

export default class CandidateService {
    getall() {
        return axios.get(`${this.controllerUrl}`);    
      }

    add(){
        return axios.post(`${this.controllerUrl}/save`)
    }
    }

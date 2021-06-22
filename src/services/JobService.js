import axios from "axios";

controllerUrl = `http://localhost:8080/api/job-titles`;

export default class JobService {
    getall() {
        return axios.get(`${this.controllerUrl}`);    
      }

    add(){
        return axios.post(`${this.controllerUrl}/save`)
    }
    }

import axios from "axios";


export default class EmployeesService {
    
    getall() {
        return axios.get(`${this.controllerUrl}`);    
      }

    add(){
        return axios.post(`${this.controllerUrl}/save`)
    }
}

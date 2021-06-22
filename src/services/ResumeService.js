import axios from "axios";

controllerUrl = `http://localhost:8080/api/resumes/`;

export default class ResumeService {
  add() {
    return axios.post(`${this.controllerUrl}save`);
  }

  getAllSummaryDto() {
    return axios.get(`${this.controllerUrl}summary-table`);
  }
  getDetailDtoById(id) {
    return axios.get(`${this.controllerUrl}`,{params:{id}},`/detail-table`);
  }

  // uploadImage(id , file) {
  //   return axios.get(`${this.controllerUrl}`,{params:{id}},`/detail-table`);
  // }
}

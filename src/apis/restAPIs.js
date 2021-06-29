import axios from "axios";

const API_BASE_URL = "http://3.6.93.11/api/";

// People
export const GetFacultyList = () => axios.get(`${API_BASE_URL}people/faculties`);
export const GetStudentList = () => axios.get(`${API_BASE_URL}people/students`);
export const GetStaffList = () => axios.get(`${API_BASE_URL}people/staff`);

// Events
export const GetConfWS = () => axios.get(`${API_BASE_URL}events/conf-workshops-presentations`);
export const GetAwards = () => axios.get(`${API_BASE_URL}events/awards`);
export const GetTalks = () => axios.get(`${API_BASE_URL}events/talks`);

// Others
export const GetResearch = () => axios.get(`${API_BASE_URL}research`);
export const GetAcads = () => axios.get(`${API_BASE_URL}acads`);
export const GetCommittees = () => axios.get(`${API_BASE_URL}committees`);
export const GetHome = () => axios.get(`${API_BASE_URL}home`);

import axios from "axios";

const API =
"http://localhost:5000/api/activity";


export const getActivities = async()=>{

const response =
await axios.get(API);

return response.data;

};
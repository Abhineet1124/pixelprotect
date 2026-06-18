import axios from "axios";


const API_URL =
"http://localhost:5000/api/files";


export const uploadFile = async(
file:File
)=>{


const formData =
new FormData();


formData.append(
"file",
file
);



const token =
localStorage.getItem("token");



const response =
await axios.post(
`${API_URL}/upload`,
formData,
{
headers:{
Authorization:`Bearer ${token}`,
"Content-Type":"multipart/form-data"
}
}
);



return response.data;


};
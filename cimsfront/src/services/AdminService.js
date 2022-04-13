import axios from "axios";
const base_url="http://localhost:8080/";
class AdminService{
getAdmin(){
    return axios.get(base_url+"Admin")
}

addAdmin(user){
         return axios.post(base_url+"Admin",user,{
             headers:{
                 'Content-Type':'application/json'
             }
         });
}
getByAdminEmail(data){
    return axios.post(base_url+"Admin/login",data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}

updateAdmin(user){
    return axios.put(base_url+"Admin",user,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
deleteAdmin(email){
    return axios.delete(base_url+"Admin/"+email);
}

}

export default new AdminService();
import axios from "axios";
const base_url="http://localhost:8080/";
class FacultyService{
getFacultys(){
    return axios.get(base_url+"Faculty")
}

addFaculty(user){
         return axios.post(base_url+"Faculty",user,{
             headers:{
                 'Content-Type':'application/json'
             }
         });
}
getByFacultyEmail(data){
    return axios.post(base_url+"Faculty/login",data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}

getById(id){
    return axios.get(base_url+"Faculty/"+id)
}
getByCourse(course){
    return axios.get(base_url+"Faculty/Course/"+course)
}
updateFaculty(user){
    return axios.put(base_url+"Faculty",user,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
deleteFaculty(email){
    return axios.delete(base_url+"Faculty/"+email);
}

}

export default new FacultyService();
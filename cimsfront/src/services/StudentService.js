import axios from "axios";
const base_url="http://localhost:8080/";
class StudentService{
getStudents(){
    return axios.get(base_url+"Student")
}

addStudent(emp){
         return axios.post(base_url+"Student",emp,{
             headers:{
                 'Content-Type':'application/json'
             }
         });
}

getById(id){
    return axios.get(base_url+"Student/"+id)
}

getByCourses(courses){
    return axios.post(base_url+"Student/Course",courses,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}

getByStudentEmail(data){
    return axios.post(base_url+"Student/login",data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}

updateStudent(emp){
    return axios.put(base_url+"Student",emp,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
deleteStudent(empid){
    return axios.delete(base_url+"Student/"+empid);
}

}

export default new StudentService();
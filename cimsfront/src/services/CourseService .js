import axios from "axios";
const base_url="http://localhost:8080/";
class CourseService{
getCourses(){
    return axios.get(base_url+"Course")
}

addCourse(emp){
         return axios.post(base_url+"Course",emp,{
             headers:{
                 'Content-Type':'application/json'
             }
         });
}
getById(id){
    return axios.get(base_url+"Course/"+id)
}
getByCourseName(cr){
    return axios.get(base_url+"Course/Course/"+cr)
}
updateCourse(emp){
    return axios.put(base_url+"Course",emp,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
deleteCourse(empid){
    return axios.delete(base_url+"Course/"+empid);
}

}

export default new CourseService();
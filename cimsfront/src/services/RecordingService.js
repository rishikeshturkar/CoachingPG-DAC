import axios from "axios";
const base_url="http://localhost:8080/";
class RecordingService{
getRecordings(){
    return axios.get(base_url+"Recording")
}

addRecording(emp){
         return axios.post(base_url+"Recording",emp,{
             headers:{
                 'Content-Type':'application/json'
             }
         });
}
getById(id){
    return axios.get(base_url+"Recording/"+id);
}

getByCourse(course){
    return axios.get(base_url+"Recording/Course/"+course);
}

getByCourses(cour){
    return axios.post(base_url+"Recording/Courses",cour,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}

updateRecording(emp){
    return axios.put(base_url+"Recording",emp,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
deleteRecording(empid){
    return axios.delete(base_url+"Recording/"+empid);
}

}

export default new RecordingService();
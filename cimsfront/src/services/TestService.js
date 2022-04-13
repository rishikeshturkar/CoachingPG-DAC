import axios from "axios";
const base_url="http://localhost:8080/";
class TestService{
getTests(){
    return axios.get(base_url+"Test")
}

addTest(emp){
         return axios.post(base_url+"Test",emp,{
             headers:{
                 'Content-Type':'application/json'
             }
         });
}
getById(id){
    return axios.get(base_url+"Test/"+id)
}

updateTest(emp){
    return axios.put(base_url+"Test",emp,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
deleteTest(empid){
    return axios.delete(base_url+"Test/"+empid);
}

}

export default new TestService();
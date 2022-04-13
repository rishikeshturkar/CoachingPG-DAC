import './App.css';
import { ProtectedRoute } from './hooks/ProtectedRoute';
import Login from './Login';
import Header from "./Header";
import Student from './components/Student';
import Faculty from './components/Faculty';
import Admin from './components/Admin';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import StudentRegister from './StudentRegister';
import FacultyRegister from './FacultyRegister';
import StudentList from './components/Students/StudentList';
import StudentAdd from './components/Students/StudentAdd';
import StudentDetails from './components/Students/StudentDetails';
import RecordingList from './components/Recorded/RecordingList';
import RecordingAdd from './components/Recorded/RecordingAdd';
import RecordingDetails from './components/Recorded/RecordingDetails';
import CourseAdd from './components/Courses/CourseAdd';
import CourseList from './components/Courses/CourseList';
import CourseDetails from './components/Courses/CourseDetails';
import FacultyAdd from './components/Facultys/FacultyAdd';
import FacultyList from './components/Facultys/FacultyList';
import FacultyDetails from './components/Facultys/FacultyDetails';
import TestList from './components/Tests/TestList';
import TestAdd from './components/Tests/TestAdd';
import TestDetails from './components/Tests/TestDetails';
import RecordingListForStudent from './components/Recorded/RecordingListForStudent';
import NotesForStudent from './components/Notes/NotesForStudent';
import FacultyListForStudent from './components/Facultys/FacultyListForStudent';
import CourseDetailForStudent from "./components/Courses/CourseDetailForStudent"; 
import TestAddForFaculty from './components/Tests/TestAddForFaculty';
import TestListForFaculty from './components/Tests/TestListForFaculty';
import TestDetailsForStudent from './components/Tests/TestDetailsForStudent';
import TestDetailsForFaculty from "./components/Tests/TestDetailsForFaculty";
function App() {

 



  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/StudentRegistration" exact component={StudentRegister}/>
        <Route path="/FacultyRegistration" exact component={FacultyRegister}/>
        
        <ProtectedRoute path="/Student" exact component={Student}/>
        <ProtectedRoute path="/Faculty" exact component={Faculty}/>
        <ProtectedRoute path="/Admin" exact component={Admin}/>
        <ProtectedRoute path="/Admin/Recordings" exact component={RecordingList}/>
        <ProtectedRoute path="/Admin/Recordings/add/:id" exact component={RecordingAdd}/>
        <ProtectedRoute path="/Admin/Recordings/view/:id" exact component={RecordingDetails}/>
        <ProtectedRoute path="/Admin/Courses" exact component={CourseList}/>
        <ProtectedRoute path="/Admin/Courses/add/:id" exact component={CourseAdd}/>
        <ProtectedRoute path="/Admin/Courses/view/:id" exact component={CourseDetails}/>
        <ProtectedRoute path="/Admin/Students" exact component={StudentList}/>
        <ProtectedRoute path="/Admin/Students/add/:id" exact component={StudentAdd}/>
        <ProtectedRoute path="/Admin/Students/view/:id" exact component={StudentDetails}/>
        <ProtectedRoute path="/Admin/Facultys" exact component={FacultyList}/>
        <ProtectedRoute path="/Admin/Facultys/add/:id" exact component={FacultyAdd}/>
        <ProtectedRoute path="/Admin/Facultys/view/:id" exact component={FacultyDetails}/>
        <ProtectedRoute path="/Admin/Tests" exact component={TestList}/>
        <ProtectedRoute path="/Admin/Tests/add/:id" exact component={TestAdd}/>
        <ProtectedRoute path="/Admin/Tests/view/:id" exact component={TestDetails}/>
        <ProtectedRoute path="/Faculty/Tests" exact component={TestListForFaculty}/>
        
        
        <ProtectedRoute path="/Student/Recordings" exact component={RecordingListForStudent}/>
        <ProtectedRoute path="/Student/Notes" exact component={NotesForStudent}/>
        <ProtectedRoute path="/Student/Faculties" exact component={FacultyListForStudent}/>
        <ProtectedRoute path="/Student/Course/:course" exact component={CourseDetailForStudent}/>
        <ProtectedRoute path="/Faculty/Tests/add/:id" exact component={TestAddForFaculty}/>
        
        <ProtectedRoute path="/Student/Tests/view/:id" exact component={TestDetailsForStudent}/>
        <ProtectedRoute path="/Faculty/Tests/view/:id" exact component={TestDetailsForFaculty}/>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;

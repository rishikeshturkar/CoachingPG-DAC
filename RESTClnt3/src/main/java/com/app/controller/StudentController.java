package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.CL;
import com.app.pojos.Student;
import com.app.service.IStudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Student")
public class StudentController {

	// dependency : service layer i/f
	@Autowired
	private IStudentService StudentService;

	public StudentController() {
		System.out.println("in ctor of " + getClass());
	}

	// add request handling method to send all Students to the caller(front end) :
	// getting resources : GET
	@GetMapping
	public ResponseEntity<?> getAllStudentDetails() {
		System.out.println("in get all Students");
		return new ResponseEntity<>(StudentService.getAllStudents(), HttpStatus.OK);
	}

	// add request handling method to insert new Student detaild(create a new resource)
	// : POST
	@PostMapping
	public Student addStudentDetails(@RequestBody Student e) // de-serial (un marshalling) + apply validation rules
	{

		System.out.println("in add Student " + e);
		return StudentService.addOrUpdateStudentDetails(e);
	}

	@GetMapping("/{id}")
	public Student getStudentByEmail(@PathVariable int id) {
		System.out.println("in get By student id method "+id);
		return StudentService.fetchStudentDetails(id);
	}
	
	@DeleteMapping("/{id}")
	public String deleteStudentDetails(@PathVariable int id) {
		System.out.println("in del Student dtls " + id);
		return StudentService.deleteStudentDetails(id);
	}
	
	@PostMapping("/Course")
	public List<Student> getByCourses(@RequestBody CL e) // de-serial (un marshalling) + apply validation rules
	{

		System.out.println("in add Student " + e);
		return StudentService.getByCourses(e.getCo1(),e.getCo2(),e.getCo3());
	}
	// add req handling method to get selected Student details by id.
	// URL : http://host:port/api/Students/1234 , method=GET
	@PostMapping("/login")
	public ResponseEntity<?> getStudentDetails(@RequestBody Student StudentId) {
		System.out.println("in get Student dtls " + StudentId);
		
			return new ResponseEntity<>(StudentService.getStudentByEmailAndPassword(StudentId.getEmail(),StudentId.getPassword()), HttpStatus.OK);

	}
	
	
	// add request handling method to update existing Student details (update a
	// resource) : PUT
	@PutMapping
	public Student updateStudentDetails(@RequestBody @Valid  Student e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add Student " + e);
		return StudentService.addOrUpdateStudentDetails(e);
	}

}

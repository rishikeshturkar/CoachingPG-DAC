package com.app.controller;

import java.util.List;
import java.util.Optional;

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

import com.app.pojos.Faculty;
import com.app.service.IFacultyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Faculty")
public class FacultyController {

	// dependency : service layer i/f
	@Autowired
	private IFacultyService FacultyService;

	public FacultyController() {
		System.out.println("in ctor of " + getClass());
	}

	// add request handling method to send all Facultys to the caller(front end) :
	// getting resources : GET
	@GetMapping
	public ResponseEntity<?> getAllFacultyDetails() {
		System.out.println("in get all Facultys");
		return new ResponseEntity<>(FacultyService.getAllFaculty(), HttpStatus.OK);
	}

	// add request handling method to insert new Faculty detaild(create a new resource)
	// : POST
	@PostMapping
	public Faculty addFacultyDetails(@RequestBody Faculty e) // de-serial (un marshalling) + apply validation rules
	{

		System.out.println("in add Faculty " + e);
		return FacultyService.addOrUpdateFacultyDetails(e);
	}

	@GetMapping("/{id}")
	public Optional<Faculty> getFacultyByEmail(@PathVariable int id) {
		System.out.println("in get By id method "+id);
		return FacultyService.getFacultyById(id);
	}
	
	@GetMapping("/Course/{course}")
	public List<Faculty> getFacultyByCourse(@PathVariable String course) {
		System.out.println("in get By Course method "+course);
		return FacultyService.getByCourse(course);
	}
	
	@DeleteMapping("/{id}")
	public String deleteFacultyDetails(@PathVariable int id) {
		System.out.println("in del Faculty dtls " + id);
		return FacultyService.deleteFacultyDetails(id);
	}

	// add req handling method to get selected Faculty details by id.
	// URL : http://host:port/api/Facultys/1234 , method=GET
	@PostMapping("/login")
	public ResponseEntity<?> getFacultyDetails(@RequestBody Faculty FacultyId) {
		System.out.println("in get Faculty dtls " + FacultyId);
		
			return new ResponseEntity<>(FacultyService.getFacultyByEmailAndPassword(FacultyId.getEmail(),FacultyId.getPassword()), HttpStatus.OK);

	}
	
//	@GetMapping("/{email}")
//	public ResponseEntity<?> getFaculty(@PathVariable String FacultyId) {
//		System.out.println("in get Faculty dtls " + FacultyId);
//	//	try {
//			// invoke service layer's method
//			return new ResponseEntity<>(FacultyService.getFacultyByEmail(FacultyId), HttpStatus.OK);
//
//	}
//	
	// add request handling method to update existing Faculty details (update a
	// resource) : PUT
	@PutMapping
	public Faculty updateFacultyDetails(@RequestBody @Valid  Faculty e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add Faculty " + e);
		return FacultyService.addOrUpdateFacultyDetails(e);
	}

}

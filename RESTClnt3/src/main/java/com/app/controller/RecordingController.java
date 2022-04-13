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

import com.app.pojos.CL;
import com.app.pojos.Recording;
import com.app.service.IRecordingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Recording")
public class RecordingController {
	@Autowired
	private IRecordingService RecordingService;

	public RecordingController() {
		System.out.println("in ctor of " + getClass());
	}

	// add request handling method to send all Recordings to the caller(front end) :
	// getting resources : GET
	@GetMapping
	public ResponseEntity<?> getAllRecordingDetails() {
		System.out.println("in get all Recordings");
		return new ResponseEntity<>(RecordingService.getAllRecordings(), HttpStatus.OK);
	}

	// add request handling method to insert new Recording detaild(create a new resource)
	// : POST
	@PostMapping
	public Recording addRecordingDetails(@RequestBody Recording e) // de-serial (un marshalling) + apply validation rules
	{

		System.out.println("in add Recording " + e);
		return RecordingService.addOrUpdateRecordingDetails(e);
	}

	@GetMapping("/{id}")
	public Optional<Recording> getRecordingById(@PathVariable int id) {
		System.out.println("in get By email method "+id);
		return RecordingService.getRecordingByRecord_id(id);
	}
	
	@GetMapping("/Course/{course}")
	public List<Recording> getRecordingByCourseId(@PathVariable String course) {
		System.out.println("in get By course method "+course);
		return RecordingService.getRecordingByCourse(course);
	}
	
	@PostMapping("/Courses")
	public List<Recording> getRecordingByCourseId(@RequestBody CL e) {
		System.out.println("in get By courses method "+e.getCo1()+","+e.getCo2()+","+e.getCo3());
		return RecordingService.getRecordingByCourses(e.getCo1(),e.getCo2(),e.getCo3());
	}
	
	@DeleteMapping("/{id}")
	public String deleteRecordingDetails(@PathVariable int id) {
		System.out.println("in del Recording dtls " + id);
		return RecordingService.deleteRecordingDetails(id);
	}
	
	// add request handling method to update existing Recording details (update a
	// resource) : PUT
	@PutMapping
	public Recording updateRecordingDetails(@RequestBody @Valid  Recording e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add Recording " + e);
		return RecordingService.addOrUpdateRecordingDetails(e);
	}
}

package com.app.controller;

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

import com.app.pojos.Course;
import com.app.service.ICourseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Course")
public class CourseController {

	// dependency : service layer i/f
	@Autowired
	private ICourseService CourseService;

	public CourseController() {
		System.out.println("in ctor of " + getClass());
	}

	// add request handling method to send all Courses to the caller(front end) :
	// getting resources : GET
	
	@GetMapping
	public ResponseEntity<?> getAllCourseDetails() {
		System.out.println("in get all Courses");
		return new ResponseEntity<>(CourseService.getAllCourse(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public Optional<Course> getRecordingById(@PathVariable int id) {
		System.out.println("in get By id method "+id);
		return CourseService.getCourseById(id);
	}
	
	@GetMapping("/Course/{course}")
	public Course getRecordingById(@PathVariable String course) {
		System.out.println("in get By id method "+course);
		return CourseService.getByCourseName(course);
	}

	// add request handling method to insert new Course detaild(create a new resource)
	// : POST
	@PostMapping
	public Course addRecordingDetails(@RequestBody Course e) // de-serial (un marshalling) + apply validation rules
	{

		System.out.println("in add Recording " + e);
		return CourseService.addOrUpdateCourseDetails(e);
	}

	
	@DeleteMapping("/{id}")
	public String deleteCourseDetails(@PathVariable int id) {
		System.out.println("in del Course dtls " + id);
		return CourseService.deleteCourseDetails(id);
	}

	
	
	// add request handling method to update existing Course details (update a
	// resource) : PUT
	@PutMapping
	public Course updateCourseDetails(@RequestBody @Valid  Course e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add Course " + e);
		return CourseService.addOrUpdateCourseDetails(e);
	}

}

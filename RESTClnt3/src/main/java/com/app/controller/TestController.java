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

import com.app.pojos.Test;
import com.app.service.ITestService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Test")
public class TestController {
	@Autowired
	private ITestService TestService;

	public TestController() {
		System.out.println("in ctor of " + getClass());
	}

	// add request handling method to send all Tests to the caller(front end) :
	// getting resources : GET
	@GetMapping
	public ResponseEntity<?> getAllTestDetails() {
		System.out.println("in get all Tests");
		return new ResponseEntity<>(TestService.getAllTests(), HttpStatus.OK);
	}

	// add request handling method to insert new Test detaild(create a new resource)
	// : POST
	@PostMapping
	public Test addTestDetails(@RequestBody Test e) // de-serial (un marshalling) + apply validation rules
	{

		System.out.println("in add Test " + e);
		return TestService.addOrUpdateTestDetails(e);
	}

	@GetMapping("/{id}")
	public Optional<Test> getTestById(@PathVariable int id) {
		System.out.println("in get By email method "+id);
		return TestService.getById(id);
	}
	
	
	@DeleteMapping("/{id}")
	public String deleteTestDetails(@PathVariable int id) {
		System.out.println("in del Test dtls " + id);
		return TestService.deleteById(id);
	}
	
	
	// add request handling method to update existing Test details (update a
	// resource) : PUT
	@PutMapping
	public Test updateTestDetails(@RequestBody @Valid  Test e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add Test " + e);
		return TestService.addOrUpdateTestDetails(e);
	}
	
}

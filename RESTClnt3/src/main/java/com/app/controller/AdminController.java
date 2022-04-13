package com.app.controller;

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

import com.app.pojos.Admin;
import com.app.service.IAdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Admin")
public class AdminController {

		// dependency : service layer i/f
		@Autowired
		private IAdminService AdminService;

		public AdminController() {
			System.out.println("in ctor of " + getClass());
		}

		// add request handling method to send all Admins to the caller(front end) :
		// getting resources : GET
		@GetMapping
		public ResponseEntity<?> getAllAdminDetails() {
			System.out.println("in get all Admins");
			return new ResponseEntity<>(AdminService.getAllAdmin(), HttpStatus.OK);
		}

		// add request handling method to insert new Admin detaild(create a new resource)
		// : POST
		@PostMapping
		public Admin addAdminDetails(@RequestBody Admin e) // de-serial (un marshalling) + apply validation rules
		{

			System.out.println("in add Admin " + e);
			return AdminService.addOrUpdateAdminDetails(e);
		}

//		@GetMapping("/{email}")
//		public Admin getAdminByEmail(@PathVariable String email) {
//			System.out.println("in get By email method "+email);
//			return AdminService.getAdminByEmail(email);
//		}
		
		@DeleteMapping("/{id}")
		public String deleteAdminDetails(@PathVariable int id) {
			System.out.println("in del Admin dtls " + id);
			return AdminService.deleteAdminDetails(id);
		}

		// add req handling method to get selected Admin details by id.
		// URL : http://host:port/api/Admins/1234 , method=GET
		@PostMapping("/login")
		public ResponseEntity<?> getAdminDetails(@RequestBody Admin AdminId) {
			System.out.println("in get Admin dtls " + AdminId);
			
				return new ResponseEntity<>(AdminService.getAdminByEmailAndPassword(AdminId.getEmail(),AdminId.getPassword()), HttpStatus.OK);

		}
		
		@GetMapping("/{email}")
		public ResponseEntity<?> getAdmin(@PathVariable String AdminId) {
			System.out.println("in get Admin dtls " + AdminId);
		//	try {
				// invoke service layer's method
				return new ResponseEntity<>(AdminService.getAdminByEmail(AdminId), HttpStatus.OK);

		}
		
		// add request handling method to update existing Admin details (update a
		// resource) : PUT
		@PutMapping
		public Admin updateAdminDetails(@RequestBody @Valid  Admin e) // de-serial (un marshalling)
		{
			// e : DETACHED POJO , containing updated state
			System.out.println("in add Admin " + e);
			return AdminService.addOrUpdateAdminDetails(e);
		}

	}


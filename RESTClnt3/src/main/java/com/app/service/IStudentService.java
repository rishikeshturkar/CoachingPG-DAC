 package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Student;

public interface IStudentService {
	List<Student> getAllStudents();
	Student addOrUpdateStudentDetails(Student transientEmp);
	String deleteStudentDetails(int id);
	Student getStudentByName(String name);
	List<Student> getStudentsByRole(String role);
	Student fetchStudentDetails(int StudentId);
	Student getStudentByEmailAndPassword(String email,String password);
	Student getStudentByEmail(String email);
	List<Student> getByCourses(String co1,String co2,String co3);
	Optional<Student> getStudentById(int id);
}

package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{

	Student findStudentByEmail(String email);
	Student findStudentByEmailAndPassword(String email,String password);
	List<Student> findStudentByRole(String role);
	Student findByName(String name);
	List<Student> findByCourse(String course);
}

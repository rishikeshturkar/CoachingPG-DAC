package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Faculty;

public interface FacultyRepository extends JpaRepository<Faculty, Integer>{
	
	Faculty findFacultyByEmailAndPassword(String email, String password);
	List<Faculty> findByCourse1(String course);
	List<Faculty> findByCourse2(String course);
	List<Faculty>findByCourse3(String course);
}

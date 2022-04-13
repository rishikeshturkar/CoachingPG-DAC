package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Faculty;

public interface IFacultyService {
	List<Faculty> getAllFaculty();

	Faculty addOrUpdateFacultyDetails(Faculty e);
	String deleteFacultyDetails(int id);
	Faculty getFacultyByEmailAndPassword(String email, String password);
	Optional<Faculty> getFacultyById(int id);

	List<Faculty> getByCourse(String id);
}

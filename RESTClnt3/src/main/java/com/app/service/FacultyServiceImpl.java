package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FacultyRepository;
import com.app.pojos.Faculty;
@Service
@Transactional
public class FacultyServiceImpl implements IFacultyService {

	@Autowired
	FacultyRepository facultyRepo;
	
	@Override
	public List<Faculty> getAllFaculty() {
		// TODO Auto-generated method stub
		return facultyRepo.findAll();
	}

	@Override
	public Faculty addOrUpdateFacultyDetails(Faculty e) {
		// TODO Auto-generated method stub
		return facultyRepo.save(e);
	}

	@Override
	public String deleteFacultyDetails(int id) {
		// TODO Auto-generated method stub
		facultyRepo.deleteById(id);
		return "Faculty Details with ID " + id + " deleted successfuly... ";
	}

	@Override
	public Faculty getFacultyByEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return facultyRepo.findFacultyByEmailAndPassword(email,password);
	}

	@Override
	public Optional<Faculty> getFacultyById(int id) {
		// TODO Auto-generated method stub
		return facultyRepo.findById(id);
	}

	@Override
	public List<Faculty> getByCourse(String course) {
		// TODO Auto-generated method stub
		List<Faculty> list= facultyRepo.findByCourse1(course);
		list.addAll(facultyRepo.findByCourse2(course));
		list.addAll(facultyRepo.findByCourse3(course));
		return list;
	}

}

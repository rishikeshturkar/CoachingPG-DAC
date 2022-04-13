package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.StudentRepository;
import com.app.pojos.Student;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {
	
	@Autowired
	private StudentRepository StudentRepo;

	@Override
	public List<Student> getAllStudents() {
		
		return StudentRepo.findAll();
	}

	@Override
	public Student addOrUpdateStudentDetails(Student Student) {
		
		return StudentRepo.save(Student);
	}

	@Override
	public String deleteStudentDetails(int id) {
		
		StudentRepo.deleteById(id);
		return "Student Details with ID " + id + " deleted successfuly... ";
	}

	@Override
	public Student fetchStudentDetails(int StudentId) {
		
		return StudentRepo.findById(StudentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student by ID " + StudentId + " not found!!!!"));
	}

	@Override
	public Student getStudentByName(String name) {
		// TODO Auto-generated method stub
		return StudentRepo.findByName(name);
	}

	@Override
	public List<Student> getStudentsByRole(String role) {
		// TODO Auto-generated method stub
		return StudentRepo.findStudentByRole(role);
	}

	@Override
	public Student getStudentByEmailAndPassword(String email,String password) {
		// TODO Auto-generated method stub
		return StudentRepo.findStudentByEmailAndPassword(email,password);
	}

	@Override
	public Student getStudentByEmail(String email) {
		// TODO Auto-generated method stub
		return StudentRepo.findStudentByEmail(email);
	}

	@Override
	public Optional<Student> getStudentById(int id) {
		// TODO Auto-generated method stub
		return StudentRepo.findById(id);
	}

	@Override
	public List<Student> getByCourses(String c1,String c2,String c3) {
		// TODO Auto-generated method stub
		List<Student> list = StudentRepo.findByCourse(c1);
		list.addAll(StudentRepo.findByCourse(c2));
		list.addAll(StudentRepo.findByCourse(c3));
		return list;
		
	}

	

}

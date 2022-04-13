package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CourseRepository;
import com.app.pojos.Course;


@Service
@Transactional
public class CourseServiceImpl implements ICourseService {

	@Autowired
	CourseRepository courseRepo;
	
	@Override
	public List<Course> getAllCourse() {
		// TODO Auto-generated method stub
		return courseRepo.findAll();
	}

	@Override
	public Course addOrUpdateCourseDetails(Course e) {
		// TODO Auto-generated method stub
		return courseRepo.save(e);
	}

	@Override
	public String deleteCourseDetails(int id) {
		// TODO Auto-generated method stub
		courseRepo.deleteById(id);
		return "Course Details with ID " + id + " deleted successfuly... ";
		
	}

	@Override
	public Optional<Course> getCourseById(int course_id) {
		// TODO Auto-generated method stub
		return courseRepo.findById(course_id);
	}

	

	@Override
	public Course getByCourseName(String course) {
		// TODO Auto-generated method stub
		return courseRepo.findByCourseName(course);
	}



}

package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Course;

public interface ICourseService {
	List<Course> getAllCourse();
	Optional<Course> getCourseById(int course_id);
	Course addOrUpdateCourseDetails(Course e);
	String deleteCourseDetails(int id);
	
	Course getByCourseName(String course);
	
	
	
}

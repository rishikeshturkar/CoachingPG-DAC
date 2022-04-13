package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Recording;

public interface IRecordingService {
	List<Recording> getAllRecordings();

	Recording addOrUpdateRecordingDetails(Recording e);

	String deleteRecordingDetails(int id);

	Optional<Recording> getRecordingByRecord_id(int id);

	List<Recording> getRecordingByCourse(String course);

	List<Recording> getRecordingByCourses(String co1, String co2, String co3);

	
	
}

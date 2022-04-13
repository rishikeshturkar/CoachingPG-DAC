package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.RecordingRepository;
import com.app.pojos.Recording;

@Service
@Transactional
public class RecordingServiceImpl implements IRecordingService {

	@Autowired
	RecordingRepository recoRepo;
	

	@Override
	public List<Recording> getAllRecordings() {
		// TODO Auto-generated method stub
		return recoRepo.findAll();
	}

	@Override
	public Recording addOrUpdateRecordingDetails(Recording e) {
		// TODO Auto-generated method stub
		return recoRepo.save(e);
	}

	@Override
	public String deleteRecordingDetails(int id) {
		// TODO Auto-generated method stub
		recoRepo.deleteById(id);
		return "Recording Details with ID " + id + " deleted successfuly... ";
		
	}

	@Override
	public Optional<Recording> getRecordingByRecord_id(int id) {
		// TODO Auto-generated method stub
		return recoRepo.findById(id);
	}

	@Override
	public List<Recording> getRecordingByCourse(String course) {
		// TODO Auto-generated method stub
		return recoRepo.findByCourse(course);
	}

	@Override
	public List<Recording> getRecordingByCourses(String co1, String co2, String co3) {
		// TODO Auto-generated method stub
		List<Recording> courses=recoRepo.findByCourse(co1);
		courses.addAll(recoRepo.findByCourse(co2));
		courses.addAll(recoRepo.findByCourse(co3));
		return courses;
	}

	
}

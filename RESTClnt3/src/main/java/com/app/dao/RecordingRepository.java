package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Recording;

public interface RecordingRepository extends JpaRepository<Recording, Integer> {
	
	List<Recording> findAll();
	List<Recording> findByCourse(String c);
	List<Recording> findBySubject(String s);
	List<Recording> findByLink(String link);
	
	}



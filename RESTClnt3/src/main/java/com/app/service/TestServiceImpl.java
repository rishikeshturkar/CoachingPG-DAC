package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.TestRepository;
import com.app.pojos.Test;
@Service
@Transactional
public class TestServiceImpl implements ITestService {

	@Autowired
	TestRepository questionRepo;

	@Override
	public Optional<Test> getById(long id) {
		// TODO Auto-generated method stub
		return questionRepo.findById(id);
	}

	@Override
	public List<Test> getAllTests() {
		// TODO Auto-generated method stub
		return questionRepo.findAll();
	}

	@Override
	public Test addOrUpdateTestDetails(Test e) {
		// TODO Auto-generated method stub
		return questionRepo.save(e);
	}

	

	@Override
	public String deleteById(long id) {
		// TODO Auto-generated method stub
		questionRepo.deleteById(id);
		return "Test with id "+id+" deleted Successfully";
	}

	

	
}

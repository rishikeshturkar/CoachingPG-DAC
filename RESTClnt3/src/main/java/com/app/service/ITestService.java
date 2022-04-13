package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Test;

public interface ITestService {
	Optional<Test> getById(long id);
	
	List<Test> getAllTests();
	Test addOrUpdateTestDetails(Test e);
	
	String deleteById(long id);

	
	
}

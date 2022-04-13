package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Test;

public interface TestRepository extends JpaRepository<Test, Long> {

	
	
}

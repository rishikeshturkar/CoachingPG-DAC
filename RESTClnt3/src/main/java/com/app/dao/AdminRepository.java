package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

	Admin findByName(String name);

	List<Admin> findAdminByRole(String role);

	Admin findAdminByEmailAndPassword(String email, String password);

	Admin findAdminByEmail(String email);

}

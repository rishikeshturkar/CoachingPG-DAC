package com.app.service;

import java.util.List;

import com.app.pojos.Admin;

public interface IAdminService {

	public List<Admin> getAllAdmin();

	public Admin addOrUpdateAdminDetails(Admin e);

	public String deleteAdminDetails(int id);

	public Admin getAdminByEmailAndPassword(String email, String password);

	public Admin getAdminByEmail(String adminId);

	Admin fetchAdminDetails(int AdminId);

	Admin getAdminByName(String name);

	List<Admin> getAdminsByRole(String role);

	List<Admin> getAllAdmins();
}

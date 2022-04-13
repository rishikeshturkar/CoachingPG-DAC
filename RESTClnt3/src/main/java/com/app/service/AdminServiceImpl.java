
	package com.app.service;

	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;
	import org.springframework.transaction.annotation.Transactional;

	import com.app.custom_exception.ResourceNotFoundException;
	import com.app.dao.AdminRepository;
	import com.app.pojos.Admin;

	@Service
	@Transactional
	public class AdminServiceImpl implements IAdminService {
		
		@Autowired
		private AdminRepository AdminRepo;

		@Override
		public List<Admin> getAllAdmins(){
			
			return AdminRepo.findAll();
		}

		@Override
		public Admin addOrUpdateAdminDetails(Admin Admin) {
			
			return AdminRepo.save(Admin);
		}

		@Override
		public String deleteAdminDetails(int id) {
			
			AdminRepo.deleteById(id);
			return "Admin Details with ID " + id + " deleted successfuly... ";
		}

		@Override
		public Admin fetchAdminDetails(int AdminId) {
			
			return AdminRepo.findById(AdminId)
					.orElseThrow(() -> new ResourceNotFoundException("Admin by ID " + AdminId + " not found!!!!"));
		}

		@Override
		public Admin getAdminByName(String name) {
			// TODO Auto-generated method stub
			return AdminRepo.findByName(name);
		}

		@Override
		public List<Admin> getAdminsByRole(String role) {
			// TODO Auto-generated method stub
			return AdminRepo.findAdminByRole(role);
		}

		@Override
		public Admin getAdminByEmailAndPassword(String email,String password) {
			// TODO Auto-generated method stub
			return AdminRepo.findAdminByEmailAndPassword(email,password);
		}

		@Override
		public Admin getAdminByEmail(String email) {
			// TODO Auto-generated method stub
			return AdminRepo.findAdminByEmail(email);
		}

		@Override
		public List<Admin> getAllAdmin() {
			// TODO Auto-generated method stub
			return null;
		}

	}

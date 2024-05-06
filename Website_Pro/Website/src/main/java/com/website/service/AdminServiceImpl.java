package com.website.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.website.Repo.AdminRepo;
import com.website.model.Admin;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	AdminRepo adminrepo;

	@Override
	public List<Admin> getAdmin() {
		
		return adminrepo.findAll();
	}

	

	@Override
	
	public Optional<Admin> findByEmail(String email) {
		return adminrepo.findByEmail(email);
		 			
	}



	@Override
	public void updatePasswordByEmail(String email, String newPassword) {
		
		Optional<Admin> optionalAdmin = adminrepo.findByEmail(email);
		
		if(optionalAdmin.isPresent())
		{
			Admin admin = optionalAdmin.get(); //get previous object
	        admin.setPassword(newPassword);
	        adminrepo.save(admin);
		}
		else {
            throw new EntityNotFoundException("Admin with email " + email + " not found");
        }
		
	}



	@Override
	public boolean validateCredentials(String email, String password) {
		
        Optional<Admin> optionalAdmin = adminrepo.findByEmail(email);
        
        if(optionalAdmin.isPresent())
        {
        	Admin admin=optionalAdmin.get();
        	
        	return admin.getPassword().equals(password);
        }
        

		
		return false;
	}
	
	
	
	

}

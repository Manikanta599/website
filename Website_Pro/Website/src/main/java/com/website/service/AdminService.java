package com.website.service;

import java.util.List;
import java.util.Optional;

import com.website.model.Admin;
import com.website.model.UserInfo;

public interface AdminService {
	List<Admin> getAdmin();
	
	Optional<Admin> findByEmail(String email);
	
	public void updatePasswordByEmail(String email, String newPassword);

	public boolean validateCredentials(String email, String password);

}

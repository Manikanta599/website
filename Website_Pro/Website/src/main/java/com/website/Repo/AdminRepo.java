package com.website.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.website.model.Admin;
@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
	public Optional<Admin> findByEmail(String email);

}

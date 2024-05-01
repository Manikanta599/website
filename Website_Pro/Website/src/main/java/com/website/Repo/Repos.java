package com.website.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.website.model.UserInfo;

@Repository
public interface Repos extends JpaRepository<UserInfo, Integer>{

}

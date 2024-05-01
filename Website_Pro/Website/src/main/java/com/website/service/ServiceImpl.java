package com.website.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.website.Repo.Repos;
import com.website.model.UserInfo;

@Service
public class ServiceImpl implements com.website.service.Service {

	@Autowired
	Repos repo;
	@Override
	public boolean saveUser(UserInfo userinfo) {
		
		try {
			UserInfo saveduser= repo.save(userinfo);
			
			if(saveduser!=null)
			{
				return true;
			}
			
		} catch (Exception e) {
			
		}
		
		return false;
	}
	@Override
	public List<UserInfo> getUser() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
	

}

package com.website.service;

import java.util.List;

import com.website.model.UserInfo;

public interface Service  {

	boolean saveUser(UserInfo userinfo);

	List<UserInfo> getUser();
	
	

}

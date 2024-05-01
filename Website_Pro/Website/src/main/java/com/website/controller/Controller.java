package com.website.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.website.model.UserInfo;
import com.website.service.Service;

import jakarta.annotation.PostConstruct;

@RestController
@RequestMapping(path = "/users")
public class Controller {
	
	@Autowired
	Service service;
	
	@CrossOrigin
	@PostMapping(path = "/save")
	public ResponseEntity<String> save(@RequestBody UserInfo userinfo)
	{
		if(service.saveUser(userinfo))
		{
			return new ResponseEntity<>("user saved ",HttpStatus.OK);
		}
		
			return new ResponseEntity<>("something wrong",HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	@CrossOrigin
	@GetMapping(path = "/getusers")
	public ResponseEntity<List<UserInfo>> get()
	{
		
		
			return new ResponseEntity<>(service.getUser(),HttpStatus.OK);
		
	}
	
	public String getdata()
	{
		return "users";
	}
	
	
	
}

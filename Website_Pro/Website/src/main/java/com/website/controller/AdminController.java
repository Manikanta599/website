package com.website.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.website.model.Admin;
import com.website.model.UserInfo;
import com.website.service.AdminService;
import com.website.service.Service;

import jakarta.persistence.EntityNotFoundException;

@Controller
@RequestMapping(path = "/admin")
public class AdminController {
	
	@Autowired
	Service userservice;
	
	@Autowired
	AdminService service;
	
	@CrossOrigin
	@GetMapping(path = "/getadmin")
	public ResponseEntity<List<Admin>> get()
	{
			return new ResponseEntity<>(service.getAdmin(),HttpStatus.OK);
	}
	
	
	@CrossOrigin
	@PutMapping(path = "/updateadmin")
	public ResponseEntity<Object> updatePasswordByEmail(@RequestBody Admin request) {
        try {
        	service.updatePasswordByEmail(request.getEmail(),request.getPassword());
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	@CrossOrigin
	@PostMapping(path="/login")
	public ResponseEntity<Object> login(@RequestBody Admin request) {
        boolean isValid = service.validateCredentials(request.getEmail(), request.getPassword());
        if (isValid) {
        	System.out.println("matched");
            return ResponseEntity.ok().build();
        } else {
        	System.out.println("not matched");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
	}
	
	
	@CrossOrigin
	@GetMapping(path = "/getusers")
	public ResponseEntity<List<UserInfo>> getusers()
	{
		
		
			return new ResponseEntity<>(userservice.getUser(),HttpStatus.OK);
		
	}
	
	
	
	
	

}

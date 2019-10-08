package com.bean.progap3;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

@ManagedBean
@SessionScoped
public class JavaBean{
	private String firstName;
	private String lastName;
	private int age;
	private String contactNumber;
	private String email;
	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	private Map<String, String> auditTrail = new LinkedHashMap<String, String>();

	public JavaBean() {
		// TODO Auto-generated constructor stub
	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Map<String, String> getAuditTrail() {
		return auditTrail;
	}

	public void setAuditTrail(Map<String, String> auditTrail) {
		this.auditTrail = auditTrail;
	}

	public String update() {
		setFirstName(firstName);
		setLastName(lastName);
		setEmail(email);
		setContactNumber(contactNumber);
		return "homepage.xhtml";
	}
	
	public String logout() {
		FacesContext.getCurrentInstance().getExternalContext().invalidateSession();
		return "index.xhtml?faces-redirect=true";
	}

	public String proceed() {
		Date date = new Date();
		auditTrail.put("Login", dateFormat.format(date).toString());
		return "homepage";
	}

}

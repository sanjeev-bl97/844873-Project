package com.naukri.stepdefinition;

import com.naukri.excel.ExcelUtility;
import com.naukri.pages.ResumeUploadPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ResumeUploadStep {
	
	ResumeUploadPage resume=new ResumeUploadPage();
	ExcelUtility excel=new ExcelUtility();
	

	@Given("^user launchs the chrome browser for resume$")
	public void user_launchs_the_chrome_browser_for_resume() throws Throwable {
	  resume.browserLaunch("chrome");  
	}

	@When("^user opens naukri homepage for resume$")
	public void user_opens_naukri_homepage_for_resume() throws Throwable {
	    resume.url();
	}
	
	@Then("^user uploads resume$")
	public void user_uploads_resume() throws Throwable {

		resume.loginResume(excel.getUsername(2),excel.getPassword(2));
		resume.resumeUpload();
	}

}

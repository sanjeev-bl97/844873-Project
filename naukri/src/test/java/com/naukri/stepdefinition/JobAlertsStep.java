package com.naukri.stepdefinition;

import com.naukri.pages.JobAlertsPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JobAlertsStep {

	JobAlertsPage jobalert = new JobAlertsPage();
	
	@Given("^user launchs the chrome browser for job alert$")
	public void user_launchs_the_chrome_browser_for_job_alert() throws Throwable {
	   jobalert.browserLaunch("chrome"); 
	}

	@When("^user opens naukri homepage for job alert$")
	public void user_opens_naukri_homepage_for_job_alert() throws Throwable {
	   jobalert.url();
	}
	
	@Then("^user create job alert$")
	public void user_create_job_alert() throws Throwable {
		
		jobalert.jobAlert();
		jobalert.screenshot("src\\test\\resources\\Screenshot\\jobalert.png");
		jobalert.closeBrowser();
	}

}

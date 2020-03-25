package com.naukri.stepdefinition;


import com.naukri.pages.JobSearchPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JobSearchStep {

	JobSearchPage job=new JobSearchPage();

	
	@Given("^user launchs the chrome browser for search$")
	public void user_launchs_the_chrome_browser_for_search() throws Throwable {
	    job.browserLaunch("chrome");
	}

	@When("^user opens naukri homepage for search$")
	public void user_opens_naukri_homepage_for_search() throws Throwable {
	    job.url();
	}

	@When("^user login into the account using \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_login_into_the_account_using_and(String username, String password) throws Throwable {
	    job.loginSearch(username, password);
	}
	
	@Then("^user search the job$")
	public void user_clicks_search() throws Throwable {
		job.jobSearch();
		job.screenshot("src\\test\\resources\\Screenshot\\Jobsearch.png");
		job.closeBrowser();
		
	}

}

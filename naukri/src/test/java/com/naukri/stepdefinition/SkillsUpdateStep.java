package com.naukri.stepdefinition;

import com.naukri.pages.SkillsUpdatePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SkillsUpdateStep {

	SkillsUpdatePage skills=new SkillsUpdatePage();
	
	@Given("^user launchs the chrome browser for skills$")
	public void user_launchs_the_chrome_browser_for_skills() throws Throwable {
	   skills.browserLaunch("chrome"); 
	}

	@When("^user opens naukri homepage for skills$")
	public void user_opens_naukri_homepage_for_skills() throws Throwable {
	   skills.url(); 
	}
	
	@Then("^user adds skills$")
	public void user_adds_skills() throws Throwable {
		skills.loginSkills();
		skills.updateSkills();
		skills.screenshot("src\\test\\resources\\Screenshot\\Skills.png");
		skills.closeBrowser();
	}

	
}

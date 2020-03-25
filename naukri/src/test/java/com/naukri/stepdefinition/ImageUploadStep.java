package com.naukri.stepdefinition;

import com.naukri.excel.ExcelUtility;
import com.naukri.pages.ImageUploadPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ImageUploadStep {

	ImageUploadPage image = new ImageUploadPage();
	ExcelUtility excel=new ExcelUtility();
	
	@Given("^user launchs the chrome browser for image$")
	public void user_launchs_the_chrome_browser_for_image() throws Throwable {
	    image.browserLaunch("chrome");
	    
	}

	@When("^user opens naukri homepage for image$")
	public void user_opens_naukri_homepage_for_image() throws Throwable {
	    image.url();
	}
	
	@Then("^user uploads image$")
	public void user_uploads_image() throws Throwable {
		image.loginImage(excel.getUsername(1),excel.getPassword(1));
		
		image.imageUpload();
	    image.screenshot("src\\test\\resources\\Screenshot\\Image.png");
		image.closeBrowser();
	}

}

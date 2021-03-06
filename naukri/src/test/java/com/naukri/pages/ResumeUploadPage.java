package com.naukri.pages;

import java.io.File;
import java.io.IOException;
import org.openqa.selenium.By;

//Sends resume file from TestData folder and deletes the resume
public class ResumeUploadPage extends JobSearchPage {
	
		
		
		//Login
		public void loginResume(String username,String password) throws IOException {
			driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();                  //Clicks login button on home page
			driver.findElement(By.id("eLoginNew")).sendKeys(username);                            //Sends username from excel file
			driver.findElement(By.id("pLogin")).sendKeys(password);                               //Sends password from excel file
			driver.findElement(By.xpath("//*[@id=\"lgnFrmNew\"]/div[9]/button")).click();        //Clicks final login button                                                                            
                                                                                                              
		}

       public void resumeUpload() throws InterruptedException {

		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div[2]/div/div[2]/div[1]/div/div[1]/div[2]/div")).click();   //Clicks Update profile button
		File file = new File("src/test/resources/Testdata/test.docx");
		driver.findElement(By.id("attachCV")).sendKeys(file.getAbsolutePath());              //Uploads resume from the given path to the profile
		Thread.sleep(7000);



	}

}

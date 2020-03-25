package com.naukri.pages;

import java.io.File;
import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.By;




//To upload image in profile
public class ImageUploadPage extends JobSearchPage {

	

	// Login
	public void loginImage(String username,String password) throws IOException {
		
		driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();                     //Clicks login button on home page
		driver.findElement(By.id("eLoginNew")).sendKeys(username);                                //Sends username from excel file
		driver.findElement(By.id("pLogin")).sendKeys(password);                                   //Sends password from excel file
		driver.findElement(By.xpath("//*[@id=\"lgnFrmNew\"]/div[9]/button")).click();             //Clicks final login button
	}

	public void imageUpload() throws InterruptedException {

		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div[2]/div/div[2]/div[1]/div/div[1]/div[2]/div")).click();        //Clicks Update profile button 
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div/div/div[1]/div[1]/div/div[1]/div/div[1]/div/em")).click();   //Clicks image upload icon
		File file = new File("src/test/resources/Testdata/Desert.jpg");
		driver.findElement(By.id("fileUpload")).sendKeys(file.getAbsolutePath());                        // Uploads image file from the path given
		Thread.sleep(6000);
		driver.findElement(By.xpath("//*[@id=\"submit\"]")).click();                                     //After upload submit button is clicked
		Thread.sleep(3000);
		//Assert.assertTrue(false);

		

	}

}

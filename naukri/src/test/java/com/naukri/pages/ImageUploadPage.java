package com.naukri.pages;

import java.io.File;
import java.io.IOException;
import org.openqa.selenium.By;


//To upload image in profile
public class ImageUploadPage extends JobSearchPage {

	

	// Login
	public void loginImage(String username,String password) throws IOException {
		driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();
		driver.findElement(By.id("eLoginNew")).sendKeys(username);
		driver.findElement(By.id("pLogin")).sendKeys(password);
		driver.findElement(By.xpath("//*[@id=\"lgnFrmNew\"]/div[9]/button")).click();
	}

	public void imageUpload() throws InterruptedException {

		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div[2]/div/div[2]/div[1]/div/div[1]/div[2]/div")).click();
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div/div/div[1]/div[1]/div/div[1]/div/div[1]/div/em")).click();
		File file = new File("src/test/resources/Testdata/Desert.jpg");
		driver.findElement(By.id("fileUpload")).sendKeys(file.getAbsolutePath()); // Uploads image
		Thread.sleep(6000);
		driver.findElement(By.xpath("//*[@id=\"submit\"]")).click();
		Thread.sleep(3000);

		driver.close();

	}

}

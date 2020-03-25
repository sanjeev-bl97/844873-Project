package com.naukri.pages;

import java.io.IOException;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;


//Update skills in profile page
public class SkillsUpdatePage extends JobSearchPage  {
	
	
			
	    //Login
		public void loginSkills() throws IOException {
			driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();
			driver.findElement(By.id("eLoginNew")).sendKeys("swasthikswasthik09876@gmail.com");
			driver.findElement(By.id("pLogin")).sendKeys("!234567E");
			driver.findElement(By.xpath("//*[@id=\"lgnFrmNew\"]/div[9]/button")).click();
		}


	public void updateSkills() throws InterruptedException {

		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div[2]/div/div[2]/div[1]/div/div[1]/div[2]/div")).click();    //Clicks Update profile button
		Thread.sleep(4000);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1100)");                                              //Scrolls down vertically by 1100 pixels

		Thread.sleep(2000);

		driver.findElement(By.xpath("//*[contains(text(),'ADD DETAILS')]")).click();             //Clicks ADD DETAILS button in skills column
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"itSkillSugg\"]")).sendKeys("java");                
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"itSkillSugg\"]")).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"version\"]")).sendKeys("12");                          //Sends all the data and clicks save button
		driver.findElement(By.xpath("//*[@id=\"lastUsedDroopeFor\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_lastUsedDroope\"]/ul/li[2]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"expYearDroopeFor\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_expYearDroope\"]/ul/li[3]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"expMonthDroopeFor\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_expMonthDroope\"]/ul/li[3]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"saveITSkills\"]")).click();

		Thread.sleep(4000);
		

	}

}

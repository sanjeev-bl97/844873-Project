package com.naukri.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

public class JobAlertsPage extends JobSearchPage {

	
	public void jobAlert() throws InterruptedException {
		
		
		driver.findElement(By.linkText("CREATE JOB ALERT")).click();
		Thread.sleep(2000);
		
		driver.findElement(By.id("Sug_kwdsugg")).sendKeys("manager");
		Thread.sleep(2000);
		driver.findElement(By.id("Sug_kwdsugg")).sendKeys(Keys.TAB);
		
		driver.findElement(By.id("Sug_locsugg")).sendKeys("chennai");
		Thread.sleep(2000);
		driver.findElement(By.id("Sug_locsugg")).sendKeys(Keys.TAB);
		
		
		Thread.sleep(2000);
		driver.findElement(By.id("cjaExp")).click();
		driver.findElement(By.id("~3")).click();
		
		
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"block\"]")).click();
		
		Thread.sleep(2000);
		driver.findElement(By.id("cjaMinSal")).click();
		
		Thread.sleep(2000);
		driver.findElement(By.id("cjaMinSal")).sendKeys(Keys.ARROW_DOWN);
		driver.findElement(By.id("cjaMinSal")).sendKeys(Keys.ARROW_DOWN);
		driver.findElement(By.id("cjaMinSal")).sendKeys(Keys.RETURN);
		
		
		driver.findElement(By.id("cjaInd")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_indCja\"]/div/div[1]/ul/li[6]/a")).click();
		driver.findElement(By.id("cjaInd")).click();
		
		
		
		driver.findElement(By.id("cjaJob")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_jcCja\"]/div/div[1]/ul/li[8]/a")).click();
		driver.findElement(By.id("cjaJob")).click();
		
		
		driver.findElement(By.id("cjaRole")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_roleCja\"]/div/div[1]/ul/li[2]/a")).click();
		driver.findElement(By.id("cjaRole")).click();
	
		
		driver.findElement(By.id("nyja")).sendKeys("R&D Manager");
		driver.findElement(By.id("eml")).sendKeys("sanjeev.bl@gmail.com");
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,200)");                                              //Scrolls down vertically by 200 pixels

		
		driver.findElement(By.id("cjaSubmit")).click();
		
		Thread.sleep(3000);
		
		
		}
	
}

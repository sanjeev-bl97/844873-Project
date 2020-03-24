package com.naukri.pages;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

//Update skills in profile page
public class SkillsUpdatePage  {
	
	
	static WebDriver driver;
	public void browserLaunch(String browser)
	{
		try {
					//To launch firefox Browser
			if (browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver","src//test//resources//Driver//geckodriver.exe");
				driver = new FirefoxDriver();
			}
					// To launch chrome Browser
			else if (browser.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver","src//test//resources//Driver//chromedriver.exe");
				driver=new ChromeDriver();
			}
					// To launch InternetExplorer
			else if (browser.equalsIgnoreCase("internetexplorer")) {
					System.setProperty("webdriver.ie.driver","src//test//resources//Driver//IEDriverServer.exe");
				driver=new InternetExplorerDriver();  
			}
					//to maximize the window
			driver.manage().window().maximize(); 
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			
		
		} catch (WebDriverException e) {
			System.out.println("Browser could not be launched");
		}
	}
	
	//Launches the naukri url
		public void url() {
			driver.get("https://www.naukri.com/");

			String windowTitle = getCurrentWindowTitle();                                     
			String mainWindow = getMainWindowHandle(driver);                                
			Assert.assertTrue(closeAllOtherWindows(mainWindow));                       //If all windows are closed except main window assert is true
			Assert.assertTrue(windowTitle.contains("Jobs - Recruitment"));             //Asserts true if window title is Jobs - Recruitment
		}

		public String getMainWindowHandle(WebDriver driver) { 
			return driver.getWindowHandle();
		}

		public String getCurrentWindowTitle() {
			String windowTitle = driver.getTitle();
			return windowTitle;
		}

		// To close all the other  windows except the main window.

		public static boolean closeAllOtherWindows(String openWindowHandle) {
			Set<String> allWindowHandles = driver.getWindowHandles();
			for (String currentWindowHandle : allWindowHandles) {
				if (!currentWindowHandle.equals(openWindowHandle)) {
					driver.switchTo().window(currentWindowHandle);
					driver.close();
				}
			}

			driver.switchTo().window(openWindowHandle);
			if (driver.getWindowHandles().size() == 1)
				return true;
			else
				return false;
		}
		
		//Login
		public void login() throws IOException {
			driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();
			driver.findElement(By.id("eLoginNew")).sendKeys("swasthikswasthik09876@gmail.com");
			driver.findElement(By.id("pLogin")).sendKeys("!234567E");
			driver.findElement(By.xpath("//*[@id=\"lgnFrmNew\"]/div[9]/button")).click();
		}


	public void updateSkills() throws InterruptedException {

		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div[2]/div/div[2]/div[1]/div/div[1]/div[2]/div")).click();
		Thread.sleep(2000);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1100)");

		Thread.sleep(2000);

		driver.findElement(By.xpath("//*[contains(text(),'ADD DETAILS')]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"itSkillSugg\"]")).sendKeys("java");
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"itSkillSugg\"]")).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"version\"]")).sendKeys("12");
		driver.findElement(By.xpath("//*[@id=\"lastUsedDroopeFor\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_lastUsedDroope\"]/ul/li[2]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"expYearDroopeFor\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_expYearDroope\"]/ul/li[3]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"expMonthDroopeFor\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"ul_expMonthDroope\"]/ul/li[3]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"saveITSkills\"]")).click();

		Thread.sleep(4000);
		driver.close();

	}

}

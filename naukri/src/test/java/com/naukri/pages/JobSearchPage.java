package com.naukri.pages;

import java.io.File;
import java.io.IOException;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

//Search jobs based on the details given
public class JobSearchPage {

	static WebDriver driver;

	public void browserLaunch(String browser) {
		try {
			// To launch firefox Browser
			if (browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver", "src//test//resources//Driver//geckodriver.exe");
				driver = new FirefoxDriver();
			}
			// To launch chrome Browser
			else if (browser.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver", "src//test//resources//Driver//chromedriver.exe");
				ChromeOptions options = new ChromeOptions();
				options.addArguments("--disable-notifications");
				driver = new ChromeDriver(options);
			}
			// To launch InternetExplorer
			else if (browser.equalsIgnoreCase("internetexplorer")) {
				System.setProperty("webdriver.ie.driver", "src//test//resources//Driver//IEDriverServer.exe");
				driver = new InternetExplorerDriver();
			}
			//To maximize the window
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		} 
		//To throw exception
		catch (WebDriverException e) {
			System.out.println("Browser could not be launched");
		}
	}

	// Launch the naukri url
	public void url() {
		driver.get("https://www.naukri.com/");
        
		//To close popup ads
		
		String windowTitle = getCurrentWindowTitle();
		String mainWindow = getMainWindowHandle(driver);
		Assert.assertTrue(closeAllOtherWindows(mainWindow));               // If all windows are closed except main window assert is true
		Assert.assertTrue(windowTitle.contains("Jobs - Recruitment"));     // Asserts true if window title is Jobs - Recruitment
	}

	public String getMainWindowHandle(WebDriver driver) {
		return driver.getWindowHandle();                                     //Returns main naukri window handle
	}

	public String getCurrentWindowTitle() {
		String windowTitle = driver.getTitle();                            
		return windowTitle;                                                  //Returns main naukri window title
	}

	// To close all the other windows except the main window.

	public static boolean closeAllOtherWindows(String openWindowHandle) {
		Set<String> allWindowHandles = driver.getWindowHandles();                  //Gets all opened window handles
		for (String currentWindowHandle : allWindowHandles) {                      
			if (!currentWindowHandle.equals(openWindowHandle)) {                   //Checks if the window is popup or main window and if it is a popup the if block is executed
				driver.switchTo().window(currentWindowHandle);                     //Switches to all popup window except main window
				driver.close();                                                    //Closes all popup window except main window
			}
		}

		driver.switchTo().window(openWindowHandle);
		if (driver.getWindowHandles().size() == 1)                               //Checks whether only the main window is open
			return true;
		else
			return false;
	}

	// Login
	public void loginSearch(String username, String password) throws IOException {
		driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();              //Clicks login button on home page
		driver.findElement(By.id("eLoginNew")).sendKeys(username);                         //Sends username from scenario outline
		driver.findElement(By.id("pLogin")).sendKeys(password);                           //Sends password from scenario outline
		driver.findElement(By.xpath("//*[@id=\"lgnFrmNew\"]/div[9]/button")).click();     //Clicks final login button
	}

	// Search job
	public void jobSearch() throws InterruptedException {

		driver.findElement(By.xpath("//*[@id=\"qsb-keyskill-sugg\"]")).sendKeys("dbms");                   //Sends dbms in skills field
		driver.findElement(By.xpath("//*[@id=\"qsb-location-sugg\"]")).sendKeys("chennai");                //Sends chennai in location field
        driver.findElement(By.xpath("//*[@id=\"search-jobs\"]/button")).click();                          //Clicks search button
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div[4]/div[2]/section[1]/div[2]/div[3]/div[2]/div[1]/label/p/span[1]")).click();  //Clicks salary filter
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div[4]/div[2]/section[1]/div[2]/div[1]/div[2]/div[2]/label/p/span[1]")).click();   //Clicks 2nd salary filter
		Thread.sleep(4000);

	}

	// Used to take screenshot
	public void screenshot(String path) throws IOException {

		TakesScreenshot ts = (TakesScreenshot) driver;                                   //Creates object for screenshot class                       
		File SrcFile = ts.getScreenshotAs(OutputType.FILE);                             //Stores screenshot as file
		FileUtils.copyFile(SrcFile, new File(path));                                    //Copy the file in the given path
	}

	public void closeBrowser() {

		driver.quit();                                                                  //Close the browser
	}
}

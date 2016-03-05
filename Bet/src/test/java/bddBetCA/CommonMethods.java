/**
 * 
 */
package bddBetCA;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * @author CAdari
 *
 */
public class CommonMethods {
	public static WebDriver driver;
			
 	public WebDriver StartBrowser(WebDriver driver)
	{
		System.setProperty("webdriver.chrome.driver", "resources/driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();

		// We need to get the run time parameter and implement this
		
		/*		
		switch(browser)
		{
		case "chrome":
			System.setProperty("webdriver.chrome.driver", "resources/driver/chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();	
			break;
		case "IE":
			System.setProperty("webdriver.ie.driver", "resources/driver/InternetExplorerDriver.exe");
			DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
			capabilities.setCapability(InternetExplorerDriver.IE_ENSURE_CLEAN_SESSION, true);
			driver = new InternetExplorerDriver(capabilities);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();	
			break;
		case "Firefox":
			FirefoxProfile profile = new FirefoxProfile();
			profile.setAcceptUntrustedCertificates(false);
			driver = new FirefoxDriver(profile);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();	
			break;
		}
		return null;
*/
		return driver;
	}
	public void EndBrowser(WebDriver driver)
	{
		driver.close();
		driver.quit();
		System.out.println("Driver closed");
	}
}

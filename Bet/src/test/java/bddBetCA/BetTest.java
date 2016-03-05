package bddBetCA;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * @author CAdari
 *
 */
public class BetTest extends CommonMethods {

	public WebDriver driver;
	String pageTitle;

	@Given("^the google news \"([^\"]*)\" webpage is open and title is \"([^\"]*)\"$")
	public void the_google_news_webpage_is_open(String url, String Title) throws Throwable {
		driver = StartBrowser(driver);
		driver.get(url);
		Assert.assertEquals(driver.getTitle(), pageTitle = Title);
	}

	@Then("^I want to print important content$")
	public void i_want_to_print_important_content() throws Throwable {
		if (pageTitle.matches("Google News")) {
			driver.findElement(By.id("app-name")).click();
			System.out.println(
					"+++++++++++++++++++++++ print out all the headlines displayed on the page.+++++++++++++++++++++++");
			System.out.println(driver.findElement(By.id("anchorman-two-browse-nav")).getText());
			Assert.assertEquals(driver.findElement(By.id("app-name")).getText(), "News");
		} else {
			driver.findElement(By.id("inplaylinkbutton")).click();
			System.out.println(
					"+++++++++++++++++++++++ print out all the live games displayed on the page+++++++++++++++++++++++");
			System.out.println(driver.findElement(By.className("inplay_menu")).getText());
			Assert.assertTrue(
					driver.findElement(By.className("inplayNav_sportContainer")).getText().contains("Football"),
					"BetWay Live games");
		}
		EndBrowser(driver);
	}

}

package bddBetCA;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @author CAdari
 *
 */

@RunWith(Cucumber.class)

@CucumberOptions(strict = false,

features = {"src/test/java/bddBetCA/"},

plugin = {"pretty", "html:target/cucumber-html-report/", "junit:target/cucumber-junit-report/BetReport.xml"},

tags = {"@Runme"}

)

public class testrunner {

}
package steps;

import java.io.IOException;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.After;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.Testbase;

public class Login_Steps_Definition extends Testbase {
	LoginPage loginPage;
	DashboardPage dashboardPage;
	NewAccountPage newAccountPage;

	@Before
	public void beforemethod() {
		initDriver();
		Random();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);// For Page object Model
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class);
	}

	@Given("^User is on the Techfios Login Page$")

	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("^User enters username as \"([^\"]*)\"$")

	public void user_enters_usename_as(String username) {
		loginPage.insertUserName(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String arg1) throws Throwable {
		loginPage.insertPassword(arg1);
	}

	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String Button) throws Throwable {
		switch (Button) {
		case "Signin":
			loginPage.clickOnSignInButton();

			break;
		case "bankCash":
			dashboardPage.clickOnBankcash();

			break;
		case "newAccount":
			dashboardPage.clickOnNewAccount();
			
			break;
		case "Submit":
			newAccountPage.clickOnSubmit();
			Thread.sleep(3000);
			break;

		}

	}

	@Then("^User should be able to login to Dashboard page$")
	public void user_should_be_able_to_login_to_Dashboard_page() throws InterruptedException, IOException {
		String actual = loginPage.getPageTitle();
		String Expected = "Dashboard- iBilling";
		Assert.assertEquals("Wrong Page", Expected, actual);
		takeScreenshot(driver);
		Thread.sleep(3000);
	}
	
	@Then("^User should be able to land on New accounts page$")
	public void user_should_be_able_to_land_on_New_accounts_page() throws InterruptedException, IOException {
		String actual = newAccountPage.getPageTitle();
		String Expected = "Accounts- iBilling";
		Assert.assertEquals("Wrong Page", Expected, actual);
		takeScreenshot(driver);
		Thread.sleep(3000);
	}

	@And("^User enters account title as \"([^\"]*)\"$")
	public void user_enters_account_title_as(String accountTitle) throws Throwable {
		newAccountPage.insertaccountTitle(accountTitle + Random());
	}

	@And("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String description) throws Throwable {
		newAccountPage.insertDescription(description);
	}

	@And("^User enters initial balance as \"([^\"]*)\"$")
	public void user_enters_initial_balance_as(String initialBalance) throws Throwable {
		newAccountPage.insertInitialBalance(initialBalance);
	}

	@And("^User enters account number as \"([^\"]*)\"$")
	public void user_enters_account_number_as(String accountNumber) throws Throwable {
		newAccountPage.insertAccountNumber(accountNumber + + Random());
	}

	@And("^User enters contact Person as \"([^\"]*)\"$")
	public void user_enters_contact_Person_as(String contactPerson) throws Throwable {
		newAccountPage.insertContactPerson(contactPerson);
	}

	@And("^User enters Phone as \"([^\"]*)\"$")
	public void user_enters_Phone_as(String Phone) throws Throwable {
		newAccountPage.insertPhone(Phone + Random());
	}

	@And("^User enters internetBankingURL as \"([^\"]*)\"$")
	public void user_enters_internetBankingURL_as(String internetBankingURL) throws Throwable {
		newAccountPage.insertURL(internetBankingURL);
	}

	@And("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
		newAccountPage.assertionaccountcreation();
		takeScreenshot(driver);
		Thread.sleep(3000);
	}
	@After
	public void aftermethod() {
		driver.close();
		driver.quit();
	}
	
	

}

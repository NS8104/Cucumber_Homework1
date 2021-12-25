package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class NewAccountPage {
	WebDriver driver;

	public NewAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//input[@id=\"account\"]")
	WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id=\"description\"]")
	WebElement DESCRIPTION_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id=\"balance\"]")
	WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id=\"account_number\"]")
	WebElement ACC_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id=\"contact_person\"]")
	WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id=\"contact_phone\"]")
	WebElement PHONE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id=\"ib_url\"]")
	WebElement URL_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@class=\"btn btn-primary\"]")
	WebElement SUBMIT_ELEMENT;
	@FindBy(how = How.XPATH, using = "//h5[text()='Manage Accounts']")
	WebElement ASSERTION_ACCOUNT_CREATION_ELEMENT;

	public void insertaccountTitle(String accountTitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(accountTitle);
	}

	public void insertDescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
	}

	public void insertInitialBalance(String initialBalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
	}
	
	public void insertAccountNumber(String accountNumber) {
		ACC_NUMBER_ELEMENT.sendKeys(accountNumber);
	}
	
	public void insertContactPerson(String contactPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
	}
	public void insertPhone(String Phone) {
		PHONE_ELEMENT.sendKeys(Phone);
	}
	public void insertURL(String internetBankingURL) {
		URL_ELEMENT.sendKeys(internetBankingURL);
	}

	public void clickOnSubmit() {
		SUBMIT_ELEMENT.click();
	}
	public String getPageTitle() {
		return driver.getTitle();
		}
	
	public void assertionaccountcreation() {
	
	Assert.assertEquals("WrongPage","Manage Accounts",ASSERTION_ACCOUNT_CREATION_ELEMENT.getText());
	
	}
}

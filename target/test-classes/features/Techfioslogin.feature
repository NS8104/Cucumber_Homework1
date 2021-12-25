@Feature
Feature: Techfios Login Functionality Validation 

Scenario Outline: User should be able to login with valid credentials 

	Given User is on the Techfios Login Page    
	When User enters username as "<username>"        
	When User enters password as "<password>" 
	And  User clicks on "Signin"
	Then User should be able to login to Dashboard page
	And User clicks on "bankCash" 
	And User clicks on "newAccount"
	Then User should be able to land on New accounts page   
	And User enters account title as "<accountTitle>"          
	And User enters description as "<description>" 
	And User enters initial balance as "<initialBalance>" 
	And User enters account number as "<accountNumber>"  
	And User enters contact Person as "<contactPerson>"
	And User enters Phone as "<Phone>" 
	And User enters internetBankingURL as "<internetBankingURL>"
	And User clicks on "Submit"   
	Then User should be able to validate account created successfully
	
    Examples:
    
    |username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|internetBankingURL|
    |demo@techfios.com|abc123|NargisTest|Test|$100|10110125|ABC|972-151-2572 |https://www.formstack.com/|
    
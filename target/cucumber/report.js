$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/Techfioslogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios Login Functionality Validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the Techfios Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to login to Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters account title as \"\u003caccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters initial balance as \"\u003cinitialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters account number as \"\u003caccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters contact Person as \"\u003ccontactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters internetBankingURL as \"\u003cinternetBankingURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 25,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "NargisTest",
        "Test",
        "$100",
        "10110125",
        "ABC",
        "972-151-2572",
        "https://www.formstack.com/"
      ],
      "line": 26,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3299520300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Feature"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Techfios Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to login to Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters account title as \"NargisTest\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"Test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters initial balance as \"$100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters account number as \"10110125\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters contact Person as \"ABC\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"972-151-2572\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters internetBankingURL as \"https://www.formstack.com/\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps_Definition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1253989000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "Login_Steps_Definition.user_enters_usename_as(String)"
});
formatter.result({
  "duration": 86884200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "Login_Steps_Definition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 67922500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Signin",
      "offset": 16
    }
  ],
  "location": "Login_Steps_Definition.user_clicks_on(String)"
});
formatter.result({
  "duration": 2451270700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps_Definition.user_should_be_able_to_login_to_Dashboard_page()"
});
formatter.result({
  "duration": 3009730400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 16
    }
  ],
  "location": "Login_Steps_Definition.user_clicks_on(String)"
});
formatter.result({
  "duration": 88776200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "Login_Steps_Definition.user_clicks_on(String)"
});
formatter.result({
  "duration": 3597718700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NargisTest",
      "offset": 30
    }
  ],
  "location": "Login_Steps_Definition.user_enters_account_title_as(String)"
});
formatter.result({
  "duration": 48600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 28
    }
  ],
  "location": "Login_Steps_Definition.user_enters_description_as(String)"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 32
    }
  ],
  "location": "Login_Steps_Definition.user_enters_initial_balance_as(String)"
});
formatter.result({
  "duration": 40700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10110125",
      "offset": 31
    }
  ],
  "location": "Login_Steps_Definition.user_enters_account_number_as(String)"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 31
    }
  ],
  "location": "Login_Steps_Definition.user_enters_contact_Person_as(String)"
});
formatter.result({
  "duration": 51300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "972-151-2572",
      "offset": 22
    }
  ],
  "location": "Login_Steps_Definition.user_enters_Phone_as(String)"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.formstack.com/",
      "offset": 35
    }
  ],
  "location": "Login_Steps_Definition.user_enters_internetBankingURL_as(String)"
});
formatter.result({
  "duration": 66500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 16
    }
  ],
  "location": "Login_Steps_Definition.user_clicks_on(String)"
});
formatter.result({
  "duration": 4074336700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps_Definition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.after({
  "duration": 807487800,
  "status": "passed"
});
});
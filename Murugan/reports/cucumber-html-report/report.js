$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/Test.feature");
formatter.feature({
  "line": 2,
  "name": "SauceDemo_Website",
  "description": "",
  "id": "saucedemo-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SauceDemo"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "view the about us in company field",
  "description": "",
  "id": "saucedemo-website;view-the-about-us-in-company-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Select_the_company_field_in_about_option"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login the home page using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "check about us in company field",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "saucedemo-website;view-the-about-us-in-company-field;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "saucedemo-website;view-the-about-us-in-company-field;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "saucedemo-website;view-the-about-us-in-company-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "view the about us in company field",
  "description": "",
  "id": "saucedemo-website;view-the-about-us-in-company-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Select_the_company_field_in_about_option"
    },
    {
      "line": 1,
      "name": "@SauceDemo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login the home page using \"standard_user\" and \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "check about us in company field",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_demo_aboutus_stepdefinition.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 17443103395,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_aboutus_stepdefinition.the_user_open_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 5058691187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 36
    },
    {
      "val": "secret_sauce",
      "offset": 56
    }
  ],
  "location": "Sauce_demo_aboutus_stepdefinition.the_user_login_the_home_page_using_and(String,String)"
});
formatter.result({
  "duration": 16558611280,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_aboutus_stepdefinition.check_about_us_in_company_field()"
});
formatter.result({
  "duration": 43059010077,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_aboutus_stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 3727720940,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "checking company news in company field",
  "description": "",
  "id": "saucedemo-website;checking-company-news-in-company-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC02_Search_latest_company_news_in_companyfield"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the user launching the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the users open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The user logins the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "check company news in company field",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_demo_companynews_stepdefinition.the_user_launching_the_chrome_application()"
});
formatter.result({
  "duration": 5491141450,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_companynews_stepdefinition.the_users_open_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 5008365919,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_companynews_stepdefinition.the_user_logins_the_home_page()"
});
formatter.result({
  "duration": 17895189230,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_companynews_stepdefinition.check_company_news_in_company_field()"
});
formatter.result({
  "duration": 37163912116,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_companynews_stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 6819562410,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "checking valid details in company field",
  "description": "",
  "id": "saucedemo-website;checking-valid-details-in-company-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@TC03_valid_partnership_details_in_the_company_field"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "user open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user login the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "check valid partnership details in the company field",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "closing the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_demo_validcontact_stepdefinition.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 10201470780,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_validcontact_stepdefinition.user_open_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 3888826089,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_validcontact_stepdefinition.user_login_the_home_page()"
});
formatter.result({
  "duration": 9512370007,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_validcontact_stepdefinition.check_valid_partnership_details_in_the_company_field()"
});
formatter.result({
  "duration": 63904253042,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_validcontact_stepdefinition.closing_the_browser()"
});
formatter.result({
  "duration": 3247140251,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "checking invalid partnership details in company field",
  "description": "",
  "id": "saucedemo-website;checking-invalid-partnership-details-in-company-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@TC04_Invalid_partnership_details_in_the_company_field"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user launching the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "user opens the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user logins the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "check Invalid partnership details in the company field",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Closing the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_demo_invalidcontact_stepdefinition.user_launching_the_chrome_application()"
});
formatter.result({
  "duration": 8480775321,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_invalidcontact_stepdefinition.user_opens_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 5503060246,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_invalidcontact_stepdefinition.user_logins_the_home_page()"
});
formatter.result({
  "duration": 13519116549,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_invalidcontact_stepdefinition.check_Invalid_partnership_details_in_the_company_field()"
});
formatter.result({
  "duration": 66264159457,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_demo_invalidcontact_stepdefinition.closing_the_browser()"
});
formatter.result({
  "duration": 3422191164,
  "status": "passed"
});
});
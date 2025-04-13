$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/InMakeLogin.feature");
formatter.feature({
  "name": "To login Inmakes infotech website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@feature1"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To check the valid/invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User can give the inmakes url to the browser",
  "keyword": "When "
});
formatter.step({
  "name": "User can give Valid or invalid username \"\u003cuserid\u003e\" to the browser",
  "keyword": "And "
});
formatter.step({
  "name": "User can give Valid or invalid password \"\u003cpwd\u003e\" to the browser",
  "keyword": "And "
});
formatter.step({
  "name": "User can click login button",
  "keyword": "And "
});
formatter.step({
  "name": "can close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userid",
        "pwd"
      ]
    },
    {
      "cells": [
        "ghouthiya1997@gmail.com",
        "Gv8870361996"
      ]
    },
    {
      "cells": [
        "thiyajesh2020@gmail.com",
        "INMAKES@123"
      ]
    },
    {
      "cells": [
        "miki2020@gmail.com",
        "Gv9087349822"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "InmakesLoginBrowser.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the valid/invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User can give the inmakes url to the browser",
  "keyword": "When "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_the_inmakes_url_to_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can give Valid or invalid username \"ghouthiya1997@gmail.com\" to the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_Valid_or_invalid_username_to_the_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can give Valid or invalid password \"Gv8870361996\" to the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_Valid_or_invalid_password_to_the_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can click login button",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "can close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidOrInvalidIds.can_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "InmakesLoginBrowser.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the valid/invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User can give the inmakes url to the browser",
  "keyword": "When "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_the_inmakes_url_to_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can give Valid or invalid username \"thiyajesh2020@gmail.com\" to the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_Valid_or_invalid_username_to_the_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can give Valid or invalid password \"INMAKES@123\" to the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_Valid_or_invalid_password_to_the_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can click login button",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "can close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidOrInvalidIds.can_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "InmakesLoginBrowser.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the valid/invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User can give the inmakes url to the browser",
  "keyword": "When "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_the_inmakes_url_to_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can give Valid or invalid username \"miki2020@gmail.com\" to the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_Valid_or_invalid_username_to_the_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can give Valid or invalid password \"Gv9087349822\" to the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_give_Valid_or_invalid_password_to_the_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can click login button",
  "keyword": "And "
});
formatter.match({
  "location": "ValidOrInvalidIds.user_can_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "can close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidOrInvalidIds.can_close_browser()"
});
formatter.result({
  "status": "passed"
});
});
@feature1
Feature: To login Inmakes infotech website
Background:
Given To launch the browser and maximize the window
@regression
Scenario: To check the inmakes valid username and invalid password
When To give the inmakes url to the browser
And To give valid username
And To give invalid password
And To click login button
Then To close the browser
@smoke
Scenario Outline: To check the valid/invalid username and password 
When User can give the inmakes url to the browser
And User can give Valid or invalid username "<userid>" to the browser
And User can give Valid or invalid password "<pwd>" to the browser
And User can click login button
Then can close browser

    Examples: 
      |          userid         |      pwd     |
      | ghouthiya1997@gmail.com | Gv8870361996 |
      | thiyajesh2020@gmail.com | INMAKES@123  |
      | miki2020@gmail.com      | Gv9087349822 |

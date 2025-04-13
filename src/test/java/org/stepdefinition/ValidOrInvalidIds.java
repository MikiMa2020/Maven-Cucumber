package org.stepdefinition;

import org.ba.Base;
import org.ba.Pojo;


import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ValidOrInvalidIds extends Base{
	Pojo d;
	@When("User can give the inmakes url to the browser")
	public void user_can_give_the_inmakes_url_to_the_browser() {
	    launchUrl("http://inmakeslh.com/internLogin");	   
	}
	@When("User can give Valid or invalid username {string} to the browser")
	public void user_can_give_Valid_or_invalid_username_to_the_browser(String usname) {
	    d = new Pojo();
		passText(usname, d.getUsername());
	}
	@When("User can give Valid or invalid password {string} to the browser")
	public void user_can_give_Valid_or_invalid_password_to_the_browser(String pass) {
	   d = new Pojo();
	   passText(pass, d.getPwd());
	}
	@When("User can click login button")
	public void user_can_click_login_button() {
	   d = new Pojo();
	   clickBtn(d.getLogin());
	}
	@Then("can close browser")
	public void can_close_browser() {
	    closeEntireBrowser();
	}
}

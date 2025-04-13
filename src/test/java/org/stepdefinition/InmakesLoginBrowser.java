package org.stepdefinition;

import org.ba.Base;
import org.ba.Pojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InmakesLoginBrowser extends Base{
	Pojo p;
	@Given("To launch the browser and maximize the window")
	public void to_launch_the_browser_and_maximize_the_window() {
	   launchBrowser();
	}
	@When("To give the inmakes url to the browser")
	public void to_give_the_inmakes_url_to_the_browser() {
	    launchUrl("http://inmakeslh.com/internLogin");
	}
	@When("To give valid username")
	public void to_give_valid_username() {
	    p = new Pojo();
	    passText("thiyajesh2020@gmail.com", p.getUsername());
	}
	@When("To give invalid password")
	public void to_give_invalid_password() {
		p = new Pojo();
		passText("INMAKES@123", p.getPwd());
	}
	@When("To click login button")
	public void to_click_login_button() {
	   clickBtn(p.getLogin());
	}
	@Then("To close the browser")
	public void to_close_the_browser() {
	    closeEntireBrowser();
	}

}

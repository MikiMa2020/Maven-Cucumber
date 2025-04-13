package org.ba;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pojo extends Base{
	public Pojo() {
		PageFactory.initElements(driver, this);
		}
		@FindBy(xpath="//input[@name='email']")
		private WebElement username;
		@FindBy(xpath="//input[@id='id_password']")
		private WebElement pwd;
		@FindBy(xpath="//button[@class='login-btn']")
		private WebElement login;
		public WebElement getUsername() {
			return username;
		}
		public WebElement getPwd() {
			return pwd;
		}
		public WebElement getLogin() {
			return login;
		}
}

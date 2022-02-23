package testing;

import org.testng.annotations.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

public class CPF_testNg11 {
	@BeforeTest
	public void beforeAnyTests() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe");

	}

	@Test(priority=1)
	public void cpf11() {
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081");
		driver.findElement(By.xpath("//a[contains(text(),'About')]")).click();
		driver.close();
	}

	

}

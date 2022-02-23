package testing;

import org.testng.annotations.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

public class CPF_testNg7 {
	@BeforeTest
	public void beforeAnyTests() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe");

	}

	@Test
	public void cpf7() {
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081");
		driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr[2]/td[1]/p/a")).click();
		driver.close();

	}
	
}

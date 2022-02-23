package testing;

import org.testng.annotations.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

public class CPF_testNg9 {
	@BeforeTest
	public void beforeAnyTests() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe");

	}

	@Test
	public void cpf9() {
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081");
		driver.findElement(By.xpath("//a[contains(text(),'Account')]")).click();
		System.out.println(driver.findElement(By.xpath("//body/form[1]/div[1]/center[1]/h1[1]")).getText());
		driver.close();
	}

	
}

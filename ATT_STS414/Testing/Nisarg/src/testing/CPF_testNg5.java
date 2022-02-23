package testing;

import org.testng.annotations.Test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

public class CPF_testNg5 {
	@BeforeTest
	public void beforeAnyTests() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe");

	}

	@Test
	public void cpf5() {
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081/signin");
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='uname']")).sendKeys("test@test.com");
		driver.findElement(By.xpath("//input[@id='pwd']")).sendKeys("");
		driver.findElement(By.xpath("//strong[contains(text(),'Sign In')]")).click();

		System.out.println(driver.findElement(By.xpath("//p[contains(text(),'Username')]")).getText());

		driver.close();

	}
	

}

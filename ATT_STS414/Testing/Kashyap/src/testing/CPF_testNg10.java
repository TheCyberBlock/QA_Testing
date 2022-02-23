package testing;

import org.testng.annotations.Test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

public class CPF_testNg10 {
	static JavascriptExecutor jse;
	@BeforeTest
	public void beforeAnyTests() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe");

	}

	@Test(priority=1)
	public void cpf10() {
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081");
		driver.findElement(By.xpath("//a[contains(text(),'Account')]")).click();
		driver.get("http://localhost:8081/signin");
		driver.findElement(By.xpath("//input[@id='uname']")).sendKeys("Tester1");
		driver.findElement(By.xpath("//input[@id='pwd']")).sendKeys("Tester@0");
		driver.findElement(By.xpath("//strong[contains(text(),'Sign In')]")).click();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
		driver.get("http://localhost:8081/account");
		jse = (JavascriptExecutor) driver;
		jse.executeScript("scroll(0,700)");
		driver.close();
	}

	
}

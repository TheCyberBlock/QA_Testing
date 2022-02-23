package testing;

import org.testng.annotations.Test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

public class CPF_testNg3 {
	@BeforeTest
	public void beforeAnyTests() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe");

	}

	@Test
	public void cpf3() {
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:8081/signup");
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);

		driver.findElement(By.xpath("//*[@id=\'fname\']")).sendKeys("Tester1");
		driver.findElement(By.xpath("//*[@id=\"lname\"]")).sendKeys("Tester1");
		driver.findElement(By.xpath("//*[@id=\"phone\"]")).sendKeys("1111111111");
		driver.findElement(By.xpath("//input[@id='city']")).sendKeys("Test");
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys("test1@test.com");
		driver.findElement(By.xpath("//input[@id='uname']")).sendKeys("Tester1");
		driver.findElement(By.xpath("//input[@id='pwd']")).sendKeys("Tester@0");
		driver.findElement(By.xpath("//input[@id='repwd']")).sendKeys("Tester@0");

		driver.findElement(By.xpath("//strong[contains(text(),'Sign Up')]")).click();
		System.out.println(driver.findElement(By.xpath("/html/body/form/div/center/p[1]")).getText());

		driver.close();

	}

}

package testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class CPF_testNg16 {
	WebDriver driver;
	
	@BeforeTest
	public void f0() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe"); // value
		

	}
	@Test
	public void f() {

		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:8081/admin");
		driver.findElement(By.xpath("//*[@id=\'uname\']")).sendKeys("Tester1");
		// driver.findElement(By.xpath("//input[@id='pwd']")).sendKeys("Tester@0");
		driver.findElement(By.xpath("//body/form[1]/div[1]/center[1]/button[1]")).click();

		System.out.println(driver.findElement(By.xpath("/html/body/form/div/center/p")).getText());
	}
}

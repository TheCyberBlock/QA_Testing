package testing;

import org.testng.annotations.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

public class CPF_testNg8 {
	static JavascriptExecutor jse;
	@BeforeTest
	public void beforeAnyTests() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe");

	}
	@Test
	public void cpf8() {
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081/signin");
		driver.findElement(By.xpath("//input[@id='uname']")).sendKeys("Tester1");
		driver.findElement(By.xpath("//input[@id='pwd']")).sendKeys("Tester@0");
		driver.findElement(By.xpath("//strong[contains(text(),'Sign In')]")).click();
		driver.get("http://localhost:8081/submit");
		driver.findElement(By.xpath("//input[@id='pname']")).sendKeys("Title-1");
		driver.findElement(By.xpath("//textarea[@id='pdes']")).sendKeys("Test description");
		driver.findElement(By.xpath("//input[@id='fund']")).sendKeys("100");
		driver.findElement(By.xpath("//body/section[2]/div[1]/center[1]/form[1]/div[1]/button[1]")).click();
		driver.findElement(By.xpath("//a[contains(text(),'Projects')]")).click();

		jse = (JavascriptExecutor) driver;
		jse.executeScript("scroll(0,700)");
		driver.close();
	}

	

}

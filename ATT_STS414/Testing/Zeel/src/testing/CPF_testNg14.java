package testing;

import org.testng.annotations.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

public class CPF_testNg14 {
	@BeforeTest
	public void beforeAnyTests() {
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe");

	}

	@Test(priority = 1)
	public void cpf14() {
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081/contact");
		driver.findElement(By.xpath("//input[@id='fname']")).sendKeys("Testerr1");
		driver.findElement(By.xpath("//input[@id='lname']")).sendKeys("Tester1");
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys("test1@test.com");
		driver.findElement(By.xpath("//input[@id='project']")).sendKeys("Title1");
		driver.findElement(By.xpath("//textarea[@id='message']")).sendKeys("query-1");
		driver.findElement(By.xpath(
				"//body/section[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[6]/div[1]/input[1]"))
				.click();
		System.out.println(driver.findElement(By.xpath("//*[@id=\"contactForm\"]/p")).getText());
		driver.close();
	}

}

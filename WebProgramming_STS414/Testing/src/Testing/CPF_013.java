package Testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CPF_013 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe"); // value
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081/contact");
		driver.findElement(By.xpath("//input[@id='fname']")).sendKeys("Testerr1");
		driver.findElement(By.xpath("//input[@id='lname']")).sendKeys("Tester1");
		//driver.findElement(By.xpath("//input[@id='email']")).sendKeys("test1@test.com");
		driver.findElement(By.xpath("//input[@id='project']")).sendKeys("Title1");
		driver.findElement(By.xpath("//textarea[@id='message']")).sendKeys("query-1");
		driver.findElement(By.xpath(
				"//body/section[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[6]/div[1]/input[1]"))
				.click();
		System.out.println(driver.findElement(By.xpath("//*[@id=\"contactForm\"]/p")).getText());
	}

}

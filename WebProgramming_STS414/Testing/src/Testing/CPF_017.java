package Testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CPF_017 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe"); // value
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081/admin");
		driver.findElement(By.xpath("//*[@id=\'uname\']")).sendKeys("Tester1");
		driver.findElement(By.xpath("//input[@id='pwd']")).sendKeys("Tester@0");
		driver.findElement(By.xpath("//body/form[1]/div[1]/center[1]/button[1]")).click();

		System.out.println(driver.getTitle());
	}
	
}

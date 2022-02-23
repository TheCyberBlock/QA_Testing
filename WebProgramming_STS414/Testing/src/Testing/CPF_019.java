package Testing;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CPF_019 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe"); // value
		WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:8081/admin");
		driver.findElement(By.xpath("//*[@id=\'uname\']")).sendKeys("Tester1");
		driver.findElement(By.xpath("//input[@id='pwd']")).sendKeys("Tester@0");
		driver.findElement(By.xpath("//body/form[1]/div[1]/center[1]/button[1]")).click();

		driver.findElement(By.xpath("//a[contains(text(),'Delete User')]")).click();
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='delUser']")).sendKeys("3");

		driver.findElement(By.xpath("//body/section[1]/div[1]/form[1]/input[2]")).click();

	}

}

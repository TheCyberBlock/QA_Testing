package Testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CPF_011 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chrome driver\\chromedriver1.exe"); // value
		WebDriver driver = new ChromeDriver();
	
		
		
		driver.get("http://localhost:8081");
		driver.findElement(By.xpath("//a[contains(text(),'About')]")).click();
	}

}

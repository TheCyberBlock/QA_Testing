package Testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CPF_007 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", // key or property
				"C:\\Selenium\\chromedriver.exe"); // value
		WebDriver driver = new ChromeDriver();
	
		
		driver.get("http://localhost:8081");
		driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr[2]/td[1]/p/a")).click();
	}

}

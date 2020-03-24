package com.naukri.excel;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


public class ExcelUtility 
{
	
	public  String getUsername(int i) throws IOException
	{
		  
		  FileInputStream file = new FileInputStream(new File("src\\test\\resources\\Testdata\\naukri.xlsx"));
		  XSSFWorkbook workbook = new XSSFWorkbook(file);
		  XSSFSheet sheet=workbook.getSheet("Sheet1");
		  
		    
			  XSSFRow row =sheet.getRow(i);
			  XSSFCell cell=row.getCell(0);
			  String username=cell.getStringCellValue();
			        
	  	return username;

	}

	public  String getPassword(int i) throws IOException
	{
		  
		  FileInputStream file = new FileInputStream(new File("src\\test\\resources\\Testdata\\naukri.xlsx"));
		  XSSFWorkbook workbook = new XSSFWorkbook(file);
		  XSSFSheet sheet=workbook.getSheet("Sheet1");
		  
		  
			  XSSFRow row =sheet.getRow(i);
			  XSSFCell cell1=row.getCell(1);
			  String password=cell1.getStringCellValue();
      
	   	return password;

	}
}







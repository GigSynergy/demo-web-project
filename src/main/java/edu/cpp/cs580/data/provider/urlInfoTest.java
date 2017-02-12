package edu.cpp.cs580.data.provider;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import edu.cpp.cs580.data.UrgentCareInfo;



public class urlInfoTest 
{
	
	/* Assignment 6 - Test to check if the list is Not NULL -- Done by Shubhangi Shimpi */
	@Test
	public void testuciInfo()
	{
		urlInfo imanager = new urlInfo();
		List<UrgentCareInfo> inf = imanager.listInfo();
		Assert.assertNotNull(inf);
	}
	
	
	/* Assignment 6 - Test to check if it returns 10 number of Urgent cares -- Done by Tannaz Rezaei */
	@Test
	public void testuciNumber()
	{
		urlInfo uci_List_Number = new urlInfo();
		List<UrgentCareInfo> listnum = uci_List_Number.listInfo();
		Assert.assertEquals(10 , listnum.size());
	}
}
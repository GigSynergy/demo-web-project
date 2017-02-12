package edu.cpp.cs580.data.provider;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import edu.cpp.cs580.data.UrgentCareInfo;



public class urlInfoTest 
{
	@Test
	public void testuciInfo()
	{
		urlInfo imanager = new urlInfo();
		List<UrgentCareInfo> inf = imanager.listInfo();
		Assert.assertNotNull(inf);
	}
}

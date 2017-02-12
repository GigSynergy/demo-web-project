package edu.cpp.cs580.data.provider;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;


import edu.cpp.cs580.data.UrgentCareInfo;

public class urlInfo implements URLlinkManager 
{

	@Override
	public List<UrgentCareInfo> listInfo() 
	{
		List<UrgentCareInfo> ucinfo = new ArrayList<>();
		Document doc;
		try 
		{
			doc = Jsoup.connect("http://www.yellowpages.com/pomona-ca/24-hour-urgent-care").get();


			// title
			Elements elements = doc.select("h3.n");
			for(Element e : elements) {
				System.out.println(e.text());
			}

			/*// Address
			Elements elements2 = doc.select("li.div.address");
			for(Element e : elements2) {
				System.out.println(e.text());
			}*/

			/*/Phone Number
			Elements e2 = doc.select("div.links.a");
			//Elements elements3 = doc.select("div.phones primary phone");
			for(Element e : e2) 
			{
				System.out.println(e.attr("href"));
			}*/

			for(int i = 2; i < 12; i++) 
			{
				UrgentCareInfo uci = new UrgentCareInfo(
						elements.get(i).text());
				ucinfo.add(uci);
			}
			
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		return ucinfo;
	}

}
package edu.cpp.cs580.data.provider;
import java.sql.Connection;
import java.sql.ResultSet;

import java.sql.Statement;

import org.springframework.stereotype.Component;

import edu.cpp.cs580.data.Patient;

@Component
public class UCPatientManager implements PatientManager
{
	
		@Override
		public boolean addPatient(Patient p)
		{
			
			int lastid = 5;
			int facilityid = 2;
			//int facilityid = Integer.parseInt(p.getFacilityID());
			System.out.println("You are in addPatient function");
			System.out.println(p.getFirstName());
			
			try {
				
			JDBCManager myConn = new JDBCManager();
			Connection connect = myConn.createJDBCconnection();
			Statement myStat = connect.createStatement();
	
			
			java.sql.Date Date = new java.sql.Date(new java.util.Date().getTime());
			System.out.println(Date);
			java.sql.Time Time = new java.sql.Time(new java.util.Date().getTime());
			System.out.println(Time);
			
			String phone = p.getPhone();
			System.out.println(phone);
			String lname = p.getLastName();
			System.out.println(lname);
			String fname = p.getFirstName();
			System.out.println(lname);
			String mname = p.getMiddleName();
			System.out.println(lname);
			
			myStat.executeUpdate("INSERT INTO urgentcaredb.tblpatient VALUES ('"+lastid+"','"+phone+"', '"+fname+"', '"+mname+"', '"+lname+"','"+Date+"'  , '"+Time+"' , '2','5')");	
				ResultSet myRs = myStat.executeQuery("select * from urgentcaredb.tblpatient");
					//System.out.println(s);	
					connect.close();
					return true;
			}
			catch (Exception e)
			{
				e.printStackTrace();
				return false;
			}
			
		}

		
			
			
}


		


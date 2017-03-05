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
			int numberRow=0;
			int facilityid = 0;
			
			int count = 0;
			String facilityname = p.getFacilityID();
			String facilityqn = p.getWaitTime();
			System.out.println("You are in addPatient function");
			System.out.println(p.getFirstName());
			try 
			{
				
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
			System.out.println(fname);
			String mname = p.getMiddleName();
			System.out.println(mname);
			
			ResultSet myRs,rs;
			
			rs = myStat.executeQuery("SELECT * FROM urgentcaredb.tblpatient");
			while(rs.next())
			{
			        numberRow = rs.getInt("Patient_ID") +1;
			} 
			
	
			System.out.println(facilityid);
			System.out.println(facilityqn);
			myStat.executeUpdate("INSERT INTO urgentcaredb.tblpatient VALUES ('"+numberRow+"','"+phone+"', '"+fname+"', '"+mname+"', '"+lname+"','"+Date+"'  , '"+Time+"' , '"+facilityname+"','"+facilityqn+"')");	
			myRs = myStat.executeQuery("select * from urgentcaredb.tblpatient");
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


		


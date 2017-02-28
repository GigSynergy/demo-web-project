package edu.cpp.cs580.data.provider;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import org.springframework.stereotype.Component;

import edu.cpp.cs580.data.Patient;

@Component
public class UCPatientManager implements PatientManager{
	

		@Override
		public boolean addPatient(Patient s) {
			
			try {
				
			JDBCManager myConn = new JDBCManager();
			Connection connect = myConn.createJDBCconnection();
			Statement myStat = connect.createStatement();
			//Document doc;
			/*
			String patient[]= null;
			patient[0] = "Tannaz";
			patient[1] = "R";
			patient[2] = "Damavandi";
			patient[3] = "1246548";
			patient[4] = "urgent care1";
			patient[5] = "20";*/
			
			java.sql.Date Date = new java.sql.Date(new java.util.Date().getTime());
			System.out.println(Date);
			java.sql.Time Time = new java.sql.Time(new java.util.Date().getTime());
			System.out.println(Time);
			
		
								
				myStat.executeUpdate("INSERT INTO tblpatient(`Patient_ID`, `Patient_Phone`, `Patient_F_Name`, "
						+ "`Patient_M_Name`, `Patient_L_Name`, `Service_Date`, `Service_Time`, `Facility_ID`)" 
							+ "VALUES (100, patient[3], patient[0], patient[1], patient[2],'"+Date+"'  , '"+Time+"' , 1)");	
					ResultSet myRs = myStat.executeQuery("select * from tblpatient");
						
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

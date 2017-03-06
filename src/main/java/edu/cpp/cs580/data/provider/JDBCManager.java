package edu.cpp.cs580.data.provider;
import java.sql.*;

public class  JDBCManager implements JDBCConnManager 
		{
	
		@Override
		
		public Connection createJDBCconnection()
		{
			Connection myConnection = null;
			
			try
			{
			// 1. Get a Connection to DB
			
			Connection myConn = DriverManager.getConnection("jdbc:mysql://ec2-52-53-219-178.us-west-1.compute.amazonaws.com:3306/urgentcaredb","user1","Sandhya@26");
			// 2. Create a Statement
			Statement myStat = myConn.createStatement();
			// 3. Create a ResultSet
			myConnection = myConn;
			}
			catch (SQLException e) 
			{
				System.out.println("Connection Failed! Check output console");
				e.printStackTrace();
			}
			
			return myConnection;
		}
		
	}
			


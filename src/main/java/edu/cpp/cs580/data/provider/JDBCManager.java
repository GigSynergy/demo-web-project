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
			
			Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/urgentcare","root","Sandhya@26");
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
			


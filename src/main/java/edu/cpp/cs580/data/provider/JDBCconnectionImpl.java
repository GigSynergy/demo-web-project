package edu.cpp.cs580.data.provider;
import java.sql.*;

import org.springframework.stereotype.Service;
public class JDBCconnectionImpl implements JDBCconnection
{
	
	public void createJDBCconnection()
	{
		try
		{
		// 1. Get a Connection to DB
		
		Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/urgentcare","user","password");
		// 2. Create a Statement
		Statement myStat = myConn.createStatement();
		// 3. Create a ResultSet

		}
		catch (SQLException e) 
		{
			System.out.println("Connection Failed! Check output console");
			e.printStackTrace();
			return;
		}
	}
}
		

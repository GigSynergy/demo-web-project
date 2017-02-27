package edu.cpp.cs580.data;

public class Patient 

{
	private String firstName;
	private String middleName;
	private String lastName;
	private String phoneNumber;
	
	private String facilityID;
	private int queueNumber;
	
	
	public String getfirstName(){
		return firstName;
	}
	
	public void setfirstName(String firstName){
		this.firstName = firstName;
	}
	
	public String getmiddleName(){
		return middleName;
	}
	
	public void setmiddleName(String middleName){
		this.middleName = middleName;
	}
	
	public String getlastName(){
		return lastName;
	}
	
	public void setlastName(String lastName){
		this.lastName = lastName;
	}
	
	public String getphoneNumber(){
		return phoneNumber;
	}
	
	public void setMessage(String phoneNumber){
		this.phoneNumber = phoneNumber;
	}
	

	
	public String getFacilityID()
	{
		return facilityID;
	}
	
	public void setFacilityID(String facilityID)
	{
		this.facilityID = facilityID;
		
	}
	
	public int getQueueNumber()
	{
		return queueNumber;
	}
	
	public void setQueueNumber(int queueNumber)
	{
		this.queueNumber = queueNumber;
	}
}

	


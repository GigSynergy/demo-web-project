package edu.cpp.cs580.data;
//class patient -set and get method
public class Patient 

{
	private String firstName;
	private String middleName;
	private String lastName;
	private String phoneNumber;
	
	private String facilityID;
	private int queueNumber;
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getFacilityID() {
		return facilityID;
	}
	public void setFacilityID(String facilityID) {
		this.facilityID = facilityID;
	}
	public int getQueueNumber() {
		return queueNumber;
	}
	public void setQueueNumber(int queueNumber) {
		this.queueNumber = queueNumber;
	}
	

}

	



// Added by Irwin Soni for Assignment 6
package edu.cpp.cs580.controller;

import java.io.*;
import java.util.*;

import edu.cpp.cs580.controller.WebController; 

import org.junit.Test;
import org.junit.Assert;



public class WebControllerTest {
	
	@Test
	public void testGetNameAndAddress(){
		WebController w1 = new WebController();
		
		w1.getNameAndAddress();
	}
	
	@Test
	public void testReadFile() {
WebController w2 = new WebController();
		
		w2.readFile();
		
	}
	

}

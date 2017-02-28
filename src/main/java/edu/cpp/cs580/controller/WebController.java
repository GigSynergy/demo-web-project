package edu.cpp.cs580.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import edu.cpp.cs580.App;
import edu.cpp.cs580.data.GpsProduct;
import edu.cpp.cs580.data.Patient;
import edu.cpp.cs580.data.UrgentCareInfo;
import edu.cpp.cs580.data.User;
import edu.cpp.cs580.data.provider.GpsProductManager;
import edu.cpp.cs580.data.provider.UCPatientManager;
import edu.cpp.cs580.data.provider.URLlinkManager;
import edu.cpp.cs580.data.provider.UserManager;



/**
 * This is the controller used by Spring framework.
 * <p>
 * The basic function of this controller is to map
 * each HTTP API Path to the correspondent method.
 *
 */

@RestController
public class WebController {

	/**
	 * When the class instance is annotated with
	 * {@link Autowired}, it will be looking for the actual
	 * instance from the defined beans.
	 * <p>
	 * In our project, all the beans are defined in
	 * the {@link App} class.
	 */
	@Autowired
	private UserManager userManager;
	@Autowired
	private GpsProductManager gpsManager;
	
	@Autowired
	private URLlinkManager urlInfo2Manager ;
	
	//@Autowired
	//private JDBCConnManager  jconnection;
	
	@Autowired
	private UCPatientManager patientManager;
	
	
	/**
	 * This is a simple example of how the HTTP API works.
	 * It returns a String "OK" in the HTTP response.
	 * To try it, run the web application locally,
	 * in your web browser, type the link:
	 * 	http://localhost:8080/cs580/ping
	 */
	@RequestMapping(value = "/cs580/healthcheck", method = RequestMethod.GET)
	String healthCheck() {
		// You can replace this with other string,
		// and run the application locally to check your changes
		// with the URL: http://localhost:8080/
		return "OK-CS580 in Class Demo";
	}

	@RequestMapping(value = "/cs580/gpslist", method = RequestMethod.GET)
	List<GpsProduct> listGps() {
		// You can replace this with other string,
		// and run the application locally to check your changes
		// with the URL: http://localhost:8080/
		return gpsManager.listGps();
	}
	
	/**
	 * Added by Shubhangi Shimpi
	 * Try the method using --> http://localhost:8080/URLlink
	 
	 * @return
	 */
	
	@RequestMapping(value = "/cs580/ucilist", method = RequestMethod.GET) 
	List<UrgentCareInfo> listInfo()
	{
		return urlInfo2Manager.listInfo();

	}	
	
	// Request Mapping Method for adding a patient.
	/*
	 * {
	 * 	"firstName" : "Yu",
	 *  "lastName" : "Sun",
	 *  ..
	 *  ..
	 *  ..
	 *  ..
	 * }
	 */
	@RequestMapping(value = "/cs580/patient", method = RequestMethod.POST)
	public boolean  InsertPatient(@RequestBody Patient patient) {
		System.out.println(patient.getFirstName());
		patientManager.addPatient(patient);
		return false;
	}
	
	/*/Adding patient to DB
	@RequestMapping(value = "/register", method = RequestMethod.POST, consumes = "application/json")
	public boolean register(@RequestBody String registerDetails) throws JsonParseException, JsonMappingException, IOException {
            Gson gson = new GsonBuilder().create();
            Register register = gson.fromJson(registerDetails, Register.class);
            List<String> list = new ArrayList<>();
            list = patientManager.isPatientExist(register.getEmail());

            if (list.isEmpty()) {
                patientManager.register(register);
                return true;
            } 
            else 
            {
                return false;
            }
	}
	  }*/
	
	/**
	 * This is a simple example of how to use a data manager
	 * to retrieve the data and return it as an HTTP response.
	 *
	 * <p>
	 * Note, when it returns from the Spring, it will be
	 * automatically converted to JSON format.
	 * <p>
	 * Try it in your web browser:
	 * 	http://localhost:8080/cs580/user/user101
	 */
	@RequestMapping(value = "/cs580/user/{userId}", method = RequestMethod.GET)
	User getUser(@PathVariable("userId") String userId) {
		User user = userManager.getUser(userId);
		return user;
	}
	
	@RequestMapping(value = "/cs580/uczip", method = RequestMethod.GET)
	 String getZip(@PathVariable("zipc") String zipcode) 
	{
		System.out.print("Zipcode entered is" + zipcode);
		return zipcode;
	}

	/**
	 * This is an example of sending an HTTP POST request to
	 * update a user's information (or create the user if not
	 * exists before).
	 *
	 * You can test this with a HTTP client by sending
	 *  http://localhost:8080/cs580/user/user101
	 *  	name=John major=CS
	 *
	 * Note, the URL will not work directly in browser, because
	 * it is not a GET request. You need to use a tool such as
	 * curl.
	 *
	 * @param id
	 * @param name
	 * @param major
	 * @return
	 */
	@RequestMapping(value = "/cs580/user/{userId}", method = RequestMethod.POST)
	User updateUser(
			@PathVariable("userId") String id,
			@RequestParam("name") String name,
			@RequestParam(value = "major", required = false) String major) {
		User user = new User();
		user.setId(id);
		user.setMajor(major);
		user.setName(name);
		userManager.updateUser(user);
		return user;
	}

	/**
	 * This API deletes the user. It uses HTTP DELETE method.
	 *
	 * @param userId
	 */
	@RequestMapping(value = "/cs580/user/{userId}", method = RequestMethod.DELETE)
	void deleteUser(
			@PathVariable("userId") String userId) {
		userManager.deleteUser(userId);
	}

	/**
	 * This API lists all the users in the current database.
	 *
	 * @return
	 */
	@RequestMapping(value = "/cs580/users/list", method = RequestMethod.GET)
	List<User> listAllUsers() {
		return userManager.listAllUsers();
	}
	
	
	/**
	 * Added by Irwin Soni
	 *Try the methods using --> http://localhost:8080/getNameAndAddress
                            --> http://localhost:8080/ReadFile
	 
	 * @return
	 */
	
	@RequestMapping(value = "/getNameAndAddress", method = RequestMethod.GET) 
	public static String getNameAndAddress(){
		//gets name and address from the user
        return "getNameAndAddress.html";
	}


	@RequestMapping(value = "/ReadFile", method = RequestMethod.GET) 
	public void readFile(){
		
		File filename = new File("ReadFile.html");
		Scanner scan = null;
		
		try{
			scan = new Scanner(filename);
			
			// opens and reads the file ReadFile.html
			
			while(scan.hasNextLine()){
				System.out.println(scan.nextLine());
				
			}
			}
		catch(FileNotFoundException e){
			e.printStackTrace();
		}
		}
		
		

	/*********** Web UI Test Utility **********/
	/**
	 * This method provide a simple web UI for you to test the different
	 * functionalities used in this web service.
	 */
	@RequestMapping(value = "/cs580/home", method = RequestMethod.GET)
	ModelAndView getUserHomepage() {
		ModelAndView modelAndView = new ModelAndView("home");
		modelAndView.addObject("users", listAllUsers());
		return modelAndView;
	}

}

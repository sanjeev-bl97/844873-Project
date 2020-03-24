@naukri_Feature
Feature: naukri website

	
@tc01_Search
	Scenario Outline:	
	To check that the user can search for job 
	
	Given  user launchs the chrome browser for search 
	When  user opens naukri homepage for search
	When  user login into the account using "<username>" and "<password>"
	Then user search the job 

Examples: 

|username	                            |password	    | 
|swasthikswasthik09876@gmail.com		|!234567E		|


	
@tc02_Resume_upload
Scenario:	
	To check that the user is able to upload resume
	
	Given  user launchs the chrome browser for resume
	When  user opens naukri homepage for resume
	Then user uploads resume
	
@tc03_Image_upload
Scenario:	
	To check that the user is able to upload image
	
	Given  user launchs the chrome browser for image
	When  user opens naukri homepage for image
	Then user uploads image	
	
@tc_04_Update_skills
Scenario:	
	To check that the user is able to add IT skills
	
	Given  user launchs the chrome browser for skills
	When  user opens naukri homepage for skills
	Then user adds skills	
	
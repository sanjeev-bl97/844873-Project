package com.naukri.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources/feature/naukri_feature.feature",        //Feature file location
        plugin = { "pretty","html:reports/cucumber-html-report" },                      //Report generation in html format
        	//	tags = {"@tc_04_Update_skills"}, 
        glue = {"com.naukri.stepdefinition"},                                          //Stepdefinition package name
		monochrome = true)
        

public class NaukriTestRunner {

}

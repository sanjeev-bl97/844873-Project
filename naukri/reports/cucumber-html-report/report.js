$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/naukri_feature.feature");
formatter.feature({
  "line": 2,
  "name": "naukri website",
  "description": "",
  "id": "naukri-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To check that the user can search for job",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-can-search-for-job",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc01_JobSearch"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user launchs the chrome browser for search",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user opens naukri homepage for search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user login into the account using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user search the job",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-can-search-for-job;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "naukri-website;to-check-that-the-user-can-search-for-job;;1"
    },
    {
      "cells": [
        "swasthikswasthik09876@gmail.com",
        "!234567E"
      ],
      "line": 16,
      "id": "naukri-website;to-check-that-the-user-can-search-for-job;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "To check that the user can search for job",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-can-search-for-job;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    },
    {
      "line": 5,
      "name": "@tc01_JobSearch"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user launchs the chrome browser for search",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user opens naukri homepage for search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user login into the account using \"swasthikswasthik09876@gmail.com\" and \"!234567E\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user search the job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchStep.user_launchs_the_chrome_browser_for_search()"
});
formatter.result({
  "duration": 8952349011,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.user_opens_naukri_homepage_for_search()"
});
formatter.result({
  "duration": 16949232684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swasthikswasthik09876@gmail.com",
      "offset": 35
    },
    {
      "val": "!234567E",
      "offset": 73
    }
  ],
  "location": "JobSearchStep.user_login_into_the_account_using_and(String,String)"
});
formatter.result({
  "duration": 2039719054,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.user_clicks_search()"
});
formatter.result({
  "duration": 31627527846,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To check that the user is able to upload resume",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-able-to-upload-resume",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@tc02_Resume_upload"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user launchs the chrome browser for resume",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user opens naukri homepage for resume",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user uploads resume",
  "keyword": "Then "
});
formatter.match({
  "location": "ResumeUploadStep.user_launchs_the_chrome_browser_for_resume()"
});
formatter.result({
  "duration": 4299360900,
  "status": "passed"
});
formatter.match({
  "location": "ResumeUploadStep.user_opens_naukri_homepage_for_resume()"
});
formatter.result({
  "duration": 27104210744,
  "status": "passed"
});
formatter.match({
  "location": "ResumeUploadStep.user_uploads_resume()"
});
formatter.result({
  "duration": 40215485087,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "To check that the user is able to upload image",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-able-to-upload-image",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@tc03_Image_upload"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user launchs the chrome browser for image",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user opens naukri homepage for image",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user uploads image",
  "keyword": "Then "
});
formatter.match({
  "location": "ImageUploadStep.user_launchs_the_chrome_browser_for_image()"
});
formatter.result({
  "duration": 4222895802,
  "status": "passed"
});
formatter.match({
  "location": "ImageUploadStep.user_opens_naukri_homepage_for_image()"
});
formatter.result({
  "duration": 11005097844,
  "status": "passed"
});
formatter.match({
  "location": "ImageUploadStep.user_uploads_image()"
});
formatter.result({
  "duration": 57196591760,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SANJEEV-PC\u0027, ip: \u0027192.168.43.196\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\SANJEEV\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53905}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b593a41ae28cb11ddf949870a3a046de\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.naukri.pages.ImageUploadPage.imageUpload(ImageUploadPage.java:34)\r\n\tat com.naukri.stepdefinition.ImageUploadStep.user_uploads_image(ImageUploadStep.java:29)\r\n\tat ✽.Then user uploads image(src/main/resources/feature/naukri_feature.feature:32)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 35,
  "name": "To check that the user is able to add IT skills",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-able-to-add-it-skills",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@tc_04_Update_skills"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user launchs the chrome browser for skills",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user opens naukri homepage for skills",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user adds skills",
  "keyword": "Then "
});
formatter.match({
  "location": "SkillsUpdateStep.user_launchs_the_chrome_browser_for_skills()"
});
formatter.result({
  "duration": 4580581347,
  "status": "passed"
});
formatter.match({
  "location": "SkillsUpdateStep.user_opens_naukri_homepage_for_skills()"
});
formatter.result({
  "duration": 31437874696,
  "status": "passed"
});
formatter.match({
  "location": "SkillsUpdateStep.user_adds_skills()"
});
formatter.result({
  "duration": 53719579344,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To check that the user is able to create job alert",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-able-to-create-job-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tc_05_Job_Alert"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user launchs the chrome browser for job alert",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "user opens naukri homepage for job alert",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user create job alert",
  "keyword": "Then "
});
formatter.match({
  "location": "JobAlertsStep.user_launchs_the_chrome_browser_for_job_alert()"
});
formatter.result({
  "duration": 6938607777,
  "status": "passed"
});
formatter.match({
  "location": "JobAlertsStep.user_opens_naukri_homepage_for_job_alert()"
});
formatter.result({
  "duration": 25041288580,
  "status": "passed"
});
formatter.match({
  "location": "JobAlertsStep.user_create_job_alert()"
});
formatter.result({
  "duration": 30987305238,
  "status": "passed"
});
});
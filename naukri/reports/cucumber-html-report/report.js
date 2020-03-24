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
  "name": "Search",
  "description": "To check that the user can search for job",
  "id": "naukri-website;search",
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
  "line": 9,
  "name": "user launchs the chrome browser for search",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user opens naukri homepage for search",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user login into the account using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user search the job",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "naukri-website;search;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "naukri-website;search;;1"
    },
    {
      "cells": [
        "swasthikswasthik09876@gmail.com",
        "!234567E"
      ],
      "line": 17,
      "id": "naukri-website;search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Search",
  "description": "To check that the user can search for job",
  "id": "naukri-website;search;;2",
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
  "line": 9,
  "name": "user launchs the chrome browser for search",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user opens naukri homepage for search",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user login into the account using \"swasthikswasthik09876@gmail.com\" and \"!234567E\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user search the job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchStep.user_launchs_the_chrome_browser_for_search()"
});
formatter.result({
  "duration": 6031990825,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.user_opens_naukri_homepage_for_search()"
});
formatter.result({
  "duration": 19497270595,
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
  "duration": 2016402083,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.user_clicks_search()"
});
formatter.result({
  "duration": 36339651667,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "To check that the user is able to upload resume",
  "id": "naukri-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@tc02_Resume_upload"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user launchs the chrome browser for resume",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user opens naukri homepage for resume",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user uploads resume",
  "keyword": "Then "
});
formatter.match({
  "location": "ResumeUploadStep.user_launchs_the_chrome_browser_for_resume()"
});
formatter.result({
  "duration": 4977719059,
  "status": "passed"
});
formatter.match({
  "location": "ResumeUploadStep.user_opens_naukri_homepage_for_resume()"
});
formatter.result({
  "duration": 19000333914,
  "status": "passed"
});
formatter.match({
  "location": "ResumeUploadStep.user_uploads_resume()"
});
formatter.result({
  "duration": 25922549648,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "To check that the user is able to upload image",
  "id": "naukri-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@tc03_Image_upload"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user launchs the chrome browser for image",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "user opens naukri homepage for image",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user uploads image",
  "keyword": "Then "
});
formatter.match({
  "location": "ImageUploadStep.user_launchs_the_chrome_browser_for_image()"
});
formatter.result({
  "duration": 4314914573,
  "status": "passed"
});
formatter.match({
  "location": "ImageUploadStep.user_opens_naukri_homepage_for_image()"
});
formatter.result({
  "duration": 20540468601,
  "status": "passed"
});
formatter.match({
  "location": "ImageUploadStep.user_uploads_image()"
});
formatter.result({
  "duration": 28004172270,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "",
  "description": "To check that the user is able to add IT skills",
  "id": "naukri-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@tc_04_Update_skills"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "user launchs the chrome browser for skills",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "user opens naukri homepage for skills",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user adds skills",
  "keyword": "Then "
});
formatter.match({
  "location": "SkillsUpdateStep.user_launchs_the_chrome_browser_for_skills()"
});
formatter.result({
  "duration": 4285780524,
  "status": "passed"
});
formatter.match({
  "location": "SkillsUpdateStep.user_opens_naukri_homepage_for_skills()"
});
formatter.result({
  "duration": 19018798491,
  "status": "passed"
});
formatter.match({
  "location": "SkillsUpdateStep.user_adds_skills()"
});
formatter.result({
  "duration": 31726153129,
  "status": "passed"
});
});
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
  "duration": 7240490475,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.user_opens_naukri_homepage_for_search()"
});
formatter.result({
  "duration": 11934441678,
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
  "duration": 1771806957,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.user_clicks_search()"
});
formatter.result({
  "duration": 26415045092,
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
  "duration": 5220453909,
  "status": "passed"
});
formatter.match({
  "location": "ResumeUploadStep.user_opens_naukri_homepage_for_resume()"
});
formatter.result({
  "duration": 12296831038,
  "status": "passed"
});
formatter.match({
  "location": "ResumeUploadStep.user_uploads_resume()"
});
formatter.result({
  "duration": 38529867180,
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
  "duration": 6466962612,
  "status": "passed"
});
formatter.match({
  "location": "ImageUploadStep.user_opens_naukri_homepage_for_image()"
});
formatter.result({
  "duration": 22708970197,
  "status": "passed"
});
formatter.match({
  "location": "ImageUploadStep.user_uploads_image()"
});
formatter.result({
  "duration": 27674699034,
  "status": "passed"
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
  "duration": 4299076098,
  "status": "passed"
});
formatter.match({
  "location": "SkillsUpdateStep.user_opens_naukri_homepage_for_skills()"
});
formatter.result({
  "duration": 9224055535,
  "status": "passed"
});
formatter.match({
  "location": "SkillsUpdateStep.user_adds_skills()"
});
formatter.result({
  "duration": 31566892162,
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
  "duration": 7108310864,
  "status": "passed"
});
formatter.match({
  "location": "JobAlertsStep.user_opens_naukri_homepage_for_job_alert()"
});
formatter.result({
  "duration": 18516338174,
  "status": "passed"
});
formatter.match({
  "location": "JobAlertsStep.user_create_job_alert()"
});
formatter.result({
  "duration": 28948774142,
  "status": "passed"
});
});
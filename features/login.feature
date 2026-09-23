Feature: Login Functionality

Scenario: Login as a Subcontractor
Given User is on the login page
When User enters "new-york1@planhubteam.testinator.com" & "Planhub1234#" & clicks on the signIn button
Then User should be redirected to "https://subcontractor.qa.planhub.com/leads/list?type=planhub"


Scenario: Login as a GC
Given User is on the login page
When User enters "gc@planhubteam.testinator.com" & "Planhub123#" & clicks on the signIn button
Then GC url should be "https://generalcontractor.qa.planhub.com/dashboard/overview"
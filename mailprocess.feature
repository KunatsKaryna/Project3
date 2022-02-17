Feature: Cheking mail functionality

Scenario: 1.As a user, I can log into the mail
  Given I am on the main page
  When I click on signin button
  And I enter login
  And I click on next button
  And I enter password
  And I click on next
  Then I should see mail button

Scenario: 2.As a user, I can create a email
  When I click on mail button
  And I click on write button
  And I enter text in receiver field
  And I enter text in theme field
  And I enter text in body of email
  Then I should see the text in body field is correct

Scenario: 3.As a user, I can save a email as a draft
  When I click on draft folder
  And I wait for display of a draft
  Then I should see display of draft

Scenario: 4.As a user, I can verify that draft email is filled correctly
  When I click on draft email
  Then I should see that receiver field is filled with adress'test12082011@yahoo.com'
  Then I should see that theme field is filled with text'letter'
  Then I should see that body of draft is filled with text 'Hello, tester'

Scenario: 5.As a user, I can verify that the email is in sent folder
  When I click on send button
  And I click on sent folder button
  And I wait when sent letter will be displayed
  Then I should see that sent letter is displayed
  Then I should see that time of mail sent matches the RegExp pattern

Scenario: 6.As a user, I can verify that the email disappeared from draft folder
  When I click on draft button
  And I wait for the draft to disappear
  Then I should see that the draft disappeared from draft folder

Scenario: 7.As a user, I can verify that I log out of mailbox
  When I move to profile button
  And I wait for display of logoff button
  And I click on logoff button
  And I wait for display of signin button
  Then I should see signin button
    
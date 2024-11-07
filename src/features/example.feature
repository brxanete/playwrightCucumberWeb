Feature: Example Feature

Scenario: Visit Playwright website
  Given I open the Playwright homepage
  When I click on the "Get started" button
  Then I should see "Installation" in the page title

Feature: Print out google headlines
	As a user
	I want to view webpage
	so that Its contents
@Runme	
	Scenario: print headlines
		Given the google news "https://news.google.com" webpage is open and title is "Google News"
		Then I want to print important content	
@Runme			
	Scenario: print headlines
		Given the google news "https://sports.betway.com/" webpage is open and title is "Online Betting at Betway: Football Bets, Horses & other Sports!"
		Then I want to print important content		
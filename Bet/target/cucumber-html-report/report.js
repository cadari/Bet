$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("firsttest.feature");
formatter.feature({
  "line": 1,
  "name": "Print out google headlines",
  "description": "As a user\r\nI want to view webpage\r\nso that Its contents",
  "id": "print-out-google-headlines",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "print headlines",
  "description": "",
  "id": "print-out-google-headlines;print-headlines",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Runme"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the google news \"https://news.google.com\" webpage is open and title is \"Google News\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I want to print important content",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://news.google.com",
      "offset": 17
    },
    {
      "val": "Google News",
      "offset": 72
    }
  ],
  "location": "BetTest.the_google_news_webpage_is_open(String,String)"
});
formatter.result({
  "duration": 5271696939,
  "status": "passed"
});
formatter.match({
  "location": "BetTest.i_want_to_print_important_content()"
});
formatter.result({
  "duration": 3291696631,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "print headlines",
  "description": "",
  "id": "print-out-google-headlines;print-headlines",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Runme"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the google news \"https://sports.betway.com/\" webpage is open and title is \"Online Betting at Betway: Football Bets, Horses \u0026 other Sports!\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I want to print important content",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://sports.betway.com/",
      "offset": 17
    },
    {
      "val": "Online Betting at Betway: Football Bets, Horses \u0026 other Sports!",
      "offset": 75
    }
  ],
  "location": "BetTest.the_google_news_webpage_is_open(String,String)"
});
formatter.result({
  "duration": 8347313765,
  "error_message": "java.lang.AssertionError: expected [Online Betting at Betway: Football Bets, Horses \u0026 other Sports!] but found [Online Betting Site BetWay: Latest Odds \u0026 Best Offers]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat bddBetCA.BetTest.the_google_news_webpage_is_open(BetTest.java:22)\r\n\tat ✽.Given the google news \"https://sports.betway.com/\" webpage is open and title is \"Online Betting at Betway: Football Bets, Horses \u0026 other Sports!\"(firsttest.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BetTest.i_want_to_print_important_content()"
});
formatter.result({
  "status": "skipped"
});
});
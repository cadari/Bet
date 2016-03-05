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
  "duration": 5622053322,
  "status": "passed"
});
formatter.match({
  "location": "BetTest.i_want_to_print_important_content()"
});
formatter.result({
  "duration": 3007899592,
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
  "duration": 6399537504,
  "status": "passed"
});
formatter.match({
  "location": "BetTest.i_want_to_print_important_content()"
});
formatter.result({
  "duration": 4952023317,
  "status": "passed"
});
});
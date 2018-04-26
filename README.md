# Project Overview

Write a test suites for given a web-based [application](http://github.com/udacity/frontend-nanodegree-feedreader) that reads RSS feeds.

The goal is to learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
Good tests gives the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# Test suites

**Suite 1 *RSS Feeds***

TEST 1 - URL properties   
loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty;

TEST 2 - name properties  
loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty;

**Suite 2 *The menu***

TEST 3 - hidden menu  
ensures the menu element is hidden by default;

TEST 4 - after click on icon changing menu visibility  
ensures the menu changes visibility when the menu icon is clicked. This test have two expectations: does the menu display when clicked and does it hide when clicked again;

**Suite 3 *Initial Entries***

TEST 5 - loaded feeds   
ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container;

**Suite 4 *New Feed Selection***

TEST 6 - feed has loaded new content  
ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
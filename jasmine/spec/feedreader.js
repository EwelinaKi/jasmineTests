/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        describe('RSS Feeds URL properties', function () {
            allFeeds.forEach((value, index) => {
                it('feed ' + index + ' has defined URL which is not empty', function() {
                    expect(allFeeds[index].url).not.toBe(undefined);
                    expect(allFeeds[index].url).not.toBe("");
                });
            });
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        describe('RSS Feeds NAME properties', function () {
            allFeeds.forEach((value, index) => {
                it('feed ' + index + ' has defined NAME which is not empty', function() {
                    expect(allFeeds[index].name).not.toBe(undefined);
                    expect(allFeeds[index].name).not.toBe("");
                });
            });
        });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            const classesOfBodyTag = Array.from(document.getElementsByTagName("body")[0].classList);
            expect(classesOfBodyTag).toContain("menu-hidden");

        });

        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        describe('after click on icon', function(){

            beforeAll(function(){
                this.menuButton = Array.from(document.getElementsByClassName("menu-icon-link"))[0];
            });

            beforeEach(function() {
                this.menuButton.click();
                this.classesOfBodyTag = Array.from(document.getElementsByTagName("body")[0].classList);
            });

            it('can show', function() {
                expect(this.classesOfBodyTag).not.toContain("menu-hidden");
            });

            it('can hide', function() {
                expect(this.classesOfBodyTag).toContain("menu-hidden");
            });
        });
    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('has at least one .entry within the .feed container', function(done){
            const checkEntry = Array.from(document.getElementsByClassName("feed")[0].children[0].firstElementChild.classList);
            expect(checkEntry).toContain("entry");
            done();
        });
    });

        /* Write a new test suite named "New Feed Selection"
        * describe('New Feed Selection', function() {
        * Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
    describe('New Feed Selection', function() {

        let oldContent;
        let newContent;

        beforeEach(function (done) {
            loadFeed(0, function () {
                oldContent = document.getElementsByClassName("feed")[0].children[0].innerHTML;
                loadFeed(1, done);
            });
        });

        it('has loaded new content', function (done) {
            newContent = document.getElementsByClassName("feed")[0].children[0].innerHTML;
            expect(oldContent).not.toEqual(newContent);
            done();
        });
    });
}());

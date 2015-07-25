var expect = require("chai").expect;
var assert = require("chai").assert;
var routes = require("../lib/app/routes.js");
var AppConfig = require("../config/AppConfig");

AppConfig.topics = require("../data/topics");

describe("Routes", function(){

    it("should find default room route", function() {
        var redir = routes.findRedirect("default");
        assert.property(redir, 'topicObj', 'redir has a topicObj');
        assert.property(redir, 'org', 'route has an org');
        assert.property(redir, 'url', 'route has a url');

        var url = "https://gitter.im/" + AppConfig.org + "/" + "default room";

        assert.equal(redir.url, url);
    })

    // it("should find route for a default room", function() {
    //     var topic = topics.findRoom("blah");
    //     expect(topic.room).to.equal("default room");
    // })

});
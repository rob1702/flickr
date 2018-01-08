$(function() {
    // Called when the document is ready
    setUpFlickerApp();
});

var app = null;

// Set up the flicker app
function setUpFlickerApp() {
    
    app = new Vue({
        el: '#app',
        data: {
            flicker: {
                items : [],
                title : ''
            }
        },
        mounted: function () {

            // Get the flicker feed
            this.getFlickerFeed(this.flicker);
        },
        methods : {
            getFlickerFeed: function (flickerObj) {
                var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

                $.getJSON( flickerAPI, {

                    tags: "holiday",
                    tagmode: "any",
                    format: "json"
                }).done(function( data ) {

                        flickerObj.title = data.title;
                        flickerObj.items = data.items;

                        console.log('flicker data', data);

                        console.log('item', data.items[0].author_id);
                        return data;
                    });
            },
            getAuthorURl : function (authorId) {
                return 'https://www.flickr.com/photos/' + authorId;
            }
        }
    });

}

function getFlickerFeed() {}
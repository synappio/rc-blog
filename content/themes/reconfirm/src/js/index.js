/**
 * Main JS file for Reconfirm.it behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".go-back").click(function(){
          window.history.back();
        });

        $('.download-button').click(function(e){
          var fileUrl = $(e.currentTarget).attr('data-download-url');
          if ($('.btn-file-send').length) {
            $('.btn-file-send').attr('data-download-url', fileUrl);
          }
        });

        $('#file-download-form').submit(function(e){
          e.preventDefault();
          var email = $('#email').val();

          if (!$('#email').val()){
            $('#email').addClass('has-error');
            return;
          }

          if (validateEmail(email)) {
              // track user
              analytics.track('rc.content-download', {
                'Email': email
              });

              // download file
            }
        });

        // Save search term
        $(".homepage-search-input").keydown(function(e) {
            if(e.which == 13) {
                var searchVal = $('.homepage-search-input').val();
                sessionStorage.setItem("searchVal", searchVal);
            }
        });

        var articleTemplate = '<div class="col-sm-6 col-md-offset-0 col-md-4 padding-10">' +
        '<article class="post tag-{{tagHyphened}}">' +
            '<header class="post-header">' +
              '<div class="post-tag"><span class="tag-bubble"><a href="/tag/{{tagHyphened}}">{{category}}</a></span></div>' +
              '<time class="post-date">{{pubDate}}</time>' +
              '<h2 class="post-title"><a href="{{link}}">{{title}}</a></h2>' +
            '</header>' +
            '<section class="post-excerpt">{{description}}<a class="read-more" href="{{link}}">...</a></section>' +
        '</article></div>';

        var noResultsHTML = '<div class="no-results"> No results found</div>';

        $("#search-field").ghostHunter({
            rss : "/rss/",
            results : "#results",
            onKeyUp : true,
            displaySearchInfo: false,
            result_template : articleTemplate,
            onComplete : function( results ){
                // if there are no results, append a message to the results container
                if( results.length === 0 ){
                    $('#results').html(noResultsHTML);
                }
            }
        });

        // Write search term to search form, it will trigger automatically
        $('#search-field').val(sessionStorage.getItem("searchVal"));
        sessionStorage.removeItem("searchVal"); //clear storage after use
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });
    };
})(jQuery);

function validateEmail(email) {
   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}

//* Main.js document -----------------------------------------------------*/

var ulWidth = 0;
var noControls = true;
var timeout = new Object();

// Slider on the home page
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
				if (end == -1) {
					end = cookie.length;
				}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}
		
function setCookie (name, value) {
	document.cookie = name + "=" + escape(value)+';'+'expires=Fri, 21 Jan 2021 06:10:00 GMT; path=/;';
}


$(document).ready(function() {

	// Mobile menu
	$('.menu-toggle').click(function(){
		$(this).toggleClass('open');
		$('.navigation-search-holder').slideToggle('fast').toggleClass('open');
	});

    $('input.search').keydown(function(e) {
        if (e.keyCode == 13) {
            $('input.searchbtn').click();
            return false;
        }
    });


   	// SVG check
   	if (!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
		    return $(this).attr('src').replace('.svg', '.png');
		});
	}


    /*$('.tableBottom tr').first().addClass('grid-title');
    $('.tableBottom tr:even').addClass('grid-row-bg');

    $('.tableBottom tr').first().find('a').live('click', function() {
        $('.tablePosition').load(function() {
            console.log('dasdas');
        });

        $('.tableBottom tr').first().addClass('grid-title');
        $('.tableBottom tr:even').addClass('grid-row-bg');
    });*/

    $('#navigation li').not('#navigation li li').addClass('main-nav-link');
    if ($('.innerCont h3').text() == "History") {
        $('.innerCont h4').first().after('<h5>' + $('.subWrap span').text() + '</h5>');
        $('.subWrap br, .subWrap span').remove();
        $('.subWrap h4, .subWrap h5').unwrap('innerCont');
        $('.innerCont h4').first().addClass('history-h4');
        $('.innerCont h5').first().addClass('history-h5');
    }

    if ($('#sliderWrapper').size() > 0) {
        $('#sliderWrapper').wrap('<div />');
        $('#sliderWrapper').parent().css({
            width: '500px',
            overflow: 'hidden',
            margin: '0 auto',
            padding: '10px'
        });
        $('.text').wrapInner('<div class="slider-popup-content"></div>');
        constructInfoPanel();
        hoverActions();
        ulWidth = $('#slideArea > ul > li').size() * 72 + 30;
        if (ulWidth > 388) {
            $('#slideArea > ul').width(ulWidth);
            $(".slideBar").slider({
                animate: true,
                slide: function(event, ui) {
                    mainAnimation(ui.value, true);
                }
            });
            $('#sliderUI a').eq(0).click(function() {
                var value = $(".slideBar").slider("option", "value");
                value = value - 25;
                if (value < 0)
                    value = 0;
                $(".slideBar").slider("option", "value", value);
                mainAnimation(value, true);
                return false;
            });
            $('#sliderUI a').eq(1).click(function() {
                var value = $(".slideBar").slider("option", "value");
                value = value + 25;
                if (value > 100)
                    value = 100;
                $(".slideBar").slider("option", "value", value);
                mainAnimation(value, true);
                return false;
            });
        } else {
            $('#sliderUI').hide();
        }
    }
    //* Slider on the home page -----------------------------------------------------*/
    var el = 0;
    var slider = $('#slider ul');
    var sliderElem = slider.children();
    var size = slider.children().size();
    var arr = []
    while (arr.length < size) {
        var randomnumber = Math.ceil(Math.random() * size - 1);
        var found = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == randomnumber) { found = true; break }
        }
        if (!found) { arr[arr.length] = randomnumber; }
    }

    $('#slider ul li').remove();

    for (var j = 0; j < arr.length; j++) {
        $(sliderElem[arr[j]]).appendTo(slider)
    }

    var sudoSlider = $("#slider").sudoSlider({
        auto: true,
        numeric: true,
        fade: true,
        controlsFade: false,
        prevNext: false,
        pause: '30000'
    });

    //* Target Blank -----------------------------------------------------*/

    $(function() {
        $('a[rel*=external]').click(function() {
            window.open(this.href);
            return false;
        });
    });

    if ($.browser.msie) {
        $('.fb').addClass('fbIE');
        $('.tw').addClass('twIE');
        $('.yt').addClass('ytIE');
        $('.rss').addClass('rssIE');
        $('.name input, .email input').addClass('nameIE');
    }

    $('#subnav li:first a:first').addClass('firstItemsSubNav');

    //* Navigation -----------------------------------------------------*/

    $('.left-col ul li').last().addClass('last-logo-element');
    $('.right-col ul li').last().addClass('last-info-element');
    //$('.navigation-search-holder').append('<div class="nav-left"><div class="nav-right"></div></div>');
    $('#navigation li a').not('#navigation li li a').not('#navigation li div a').addClass('nav-link');



    /*$("#navigation li a.nav-link:contains('Education')").next().wrap("<div class='mega-drop-bottom drop-down'><div class='mega-drop-down'><div class='mage-drop-down-content'></div></div></div>");*/
    //$('<div class="banner"><img src="/img/banner.png" alt="#"/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p><a href="#" class="signUp">Sign Up</a> </div>').appendTo('.mage-drop-down-content');


    if ($('#navigation li:first').attr('id') == "current") {
        $('#navigation li:first').addClass('first-active');
    }


    $('#navigation li').not('#navigation li li').each(function() {
        if ($(this).find('.subItem')) {
            $(this).find('ul').addClass('subNav')
							  .wrap('<div class="subNavTop"><div class="subNavBottom"><div class="subNavContent"></div></div></div>')
							  .append('<div class="top-corner"></div>');

            $(this).find('ul li').last().addClass('last-sub-item');
            $(this).addClass('sub-item');
        }
    })

    $('.mage-drop-down-content li').last().addClass('last-list-item');
    $('#navigation .right-sub-col ul li').last().addClass('last-list-item');
    $('#navigation li:first a').addClass('home-link');

    $('.subNav').hover(function() {
        $(this).parents('.sub-item').addClass('activeSub');
    }, function() {
        $(this).parents('.sub-item').removeClass('activeSub');
    });

    $('#navigation li').each(function() {
        if ($(this).children().length > 1 && $(this).attr('class') != 'sub-item') {
            $(this).addClass('sub-drop-down');
        }
    });

    $('.drop-down').hover(function() {
        $(this).parents('.sub-drop-down').addClass('activeSub');
    }, function() {
        $(this).parents('.sub-drop-down').removeClass('activeSub');
    });

    /*if (!$.browser.msie) {
        $('.sub-drop-down').hover(function() {
            $('.row').each(function() {
                currentLink = $(this).find('a').height() / 2;
                $(this).find('a').css('padding-top', 20 - currentLink)
            });
        });
    }*/

    $('.middle-content ul.path li:last').addClass('last-path-element');

    inputReseter($('.name input'), 'Name');
    inputReseter($('.email input'), 'Email Address');
    inputReseter($('.search-field'), 'Search');

    // Vertical align

    /*$('.bg-widget-bottom').vAlign();*/


    // Random background images for inner page

    $('.shuffle').randomImage({ path: 'http://www.lindnerresearch.com/img/' });
    $('.right-sub-col div.subNavBottom').removeClass('subNavBottom');
    $('.right-sub-col div.subNavContent').removeClass('subNavContent');
    $('.right-sub-col div.subNavTop').removeClass('subNavTop');
    $('.mage-drop-down-content div.subNavTop').addClass('subNavMegaDropDonw').removeClass('subNavTop');
    $('.mage-drop-down-content .banner').wrapAll('<div class="bannerBox"></div>');
});

/*==============Scroll====================*/

$(function() {
	$('.scroll-pane').jScrollPane();
	$('.scroll-pane-arrows').jScrollPane(
	{
			showArrows: true,
			horizontalGutter: 10,
			/*verticalDragMinHeight: 13,
			verticalDragMaxHeight: 13,*/
			horizontalDragMinWidth: 106,
			horizontalDragMaxWidth: 106
		}
	);
});

/*==============Scroll box====================*/

$(".dateList li a").each(function () {
	$(this).click(function(event) {
		  event.preventDefault();
		$(".dateList").css("bottom", "25px");
		$(".dateList li").removeClass("activeBox");
		$(this).parent("li").addClass("activeBox");
			var some = $(this).parent().find(".dateBox").height()+35;
			$(".tabHeight").css("height", some);
			$(".jspContainer").css("height", some);
	});
});


  

	
$(".tableHolder tr th:nth-child(1)").addClass("section1");
$(".tableHolder tr th:nth-child(2)").addClass("section2");
$(".tableHolder tr th:nth-child(3)").addClass("section3");

$(".tableHolder tr td:nth-child(1)").addClass("sectionCont1");
$(".tableHolder tr td:nth-child(2)").addClass("sectionCont2");
$(".tableHolder tr td:nth-child(3)").addClass("sectionCont3");



$(".tableHolder tr:first").addClass("firstH");
$(".firstH").nextAll("tr:odd").addClass("rowBg");
$(".numbers ul li:last").addClass("lastTabNav");

$(".infoTable table tr:first-child").addClass("firstH");



$(".infoTable table").each(function () {
		var size = $(this).find('tr').size();
		var trMass = $(this).find('tr'); 
		for (var i = 0; i < size; i++) {
			if (i%2 !=0) {
					$(trMass[i]).addClass("colorNone");
			} 
		}
	});
/*==============Contact page table====================*/	

/*$(".formWrap #FieldTable tr:odd").addClass("contFormSpace");*/







function inputReseter(jqObj, iniVal){
$(jqObj).focus(function(){
value = $(this).val();
if( value == iniVal ){
$(this).val('');
}else{
// user has ented input, do nothing
}
});
$(jqObj).blur(function(){
if($(this).val() === ''){
$(this).val(iniVal);
}else{
// user has ented input, do nothing
}
});
}

$.fn.vAlign = function() {
	  return this.each(function(i){
	  var ah = $(this).height();
	  var ph = $(this).parent().height();
	  var mh = (ph - ah) / 2;
	  $(this).css('top', mh);
	  });
};


var tableNav = parseInt($(".tablePosition").width());
var navWidth = parseInt($(".numbers").width());
var count =parseInt((tableNav - navWidth) / 2);
$(".numbers").css("marginLeft", count);



function constructInfoPanel() {
	if( $('div#sliderWrapper').size() > 0 ) {											// FIRST EDIT HERE ********************************************
		$('div#sliderWrapper').parent().css('position', 'relative');
	}
	$('#slideArea').before('<div class="infoView"></div>');
	$('#slideArea > ul > li').eq(0).addClass('active');
	$('.infoView').html($('#slideArea li.active div.text').html());
	clearTimeout(timeout);
	timeout = setTimeout("infoRotator(false)", 15000);											// TIMEOUT
}

function hoverActions() {
	$('#slideArea > ul > li > a').click( function() {
		return false;
	});
	$('#slideArea > ul > li > a').hover( function() {
		noControls = false;
		clearTimeout(timeout);
		if( !$(this).parent().hasClass('active') ) {
			var offset = Math.floor(($('.infoView').width() - 100) / 2) + 16;
			var leftPos = $(this).parent().position().left - offset;
			var leftOffset = $(this).parent().parent().position().left;
			$(this).parent().siblings().removeClass('active');
			$(this).parent().addClass('active');
			$('.infoView').clearQueue().fadeOut(100, function() {
				$('.infoView').removeAttr('style');
				$('.infoView').css({
					'margin-left' :	leftPos + 'px',
					'left' :		leftOffset + 'px'
				});
				textInfo = '';
				if( $('#slideArea li.active p').html() )
					textInfo = $('#slideArea li.active div.text').html();
				$('.infoView').html(textInfo);
				$('.infoView').fadeIn(100);
			});
		}
	}, function() {
		clearTimeout(timeout);
		timeout = setTimeout("infoRotator(false)", 15000);											// TIMEOUT
		noControls = true;
	});
	$('#sliderUI > a').hover( function() {
		clearTimeout(timeout);
		noControls = false;
	}, function() {
		clearTimeout(timeout);
		timeout = setTimeout("infoRotator(false)", 15000);											// TIMEOUT
		noControls = true;
	});
	$('.slideBar').hover( function() {
		clearTimeout(timeout);
		noControls = false;
	}, function() {
		clearTimeout(timeout);
		timeout = setTimeout("infoRotator(false)", 15000);											// TIMEOUT
		noControls = true;
	});
//	$('#slider').click( function(e) {
//		var mousePos = e.pageX - $('#slider').offset().left - 8;
//		if( mousePos > 0 && mousePos <= 53 ) {
//			$( ".slideBar" ).slider( "option", "value", 0, true );
//			mainAnimation(0);
//		}
//		if( mousePos > 594 && mousePos <= 649 ) {
//			$( ".slideBar" ).slider( "moveTo", 100 );
//			mainAnimation(100);
//		}
//	});
}
function mainAnimation(val, truth) {
	if( val == 0 ) {
		$('#sliderUI a').eq(0).fadeOut(50);
	} else {
		$('#sliderUI a').eq(0).fadeIn(50);
	}
	if( val == 100 ) {
		$('#sliderUI a').eq(1).fadeOut(50);
	} else {
		$('#sliderUI a').eq(1).fadeIn(50);
	}
	var limit = $('#slideArea ul').eq(0).width() - $('#slideArea').width();
	var position = 0;
	if( truth ) {
		position = Math.floor(val / 100 * (ulWidth - 100));
	} else {
		position = Math.floor(val / 100 * (ulWidth - 100));
	}
	if( position > limit ) {
		position = limit;
	}
	$('#slideArea > ul').clearQueue().animate({
		'left' :	(-1) * position + 'px'
	}, 200);
	$('.infoView').clearQueue().animate({
		'left' :	(-1) * position + 'px'
	}, 200);
}
function infoRotator(truth) {
	var currentIndex = $('#slideArea > ul > li.active').index();
	var current = $('#slideArea > ul > li.active');
	var next = 0;
	if( noControls)	{
		if( currentIndex < $('#slideArea > ul > li').size() - 1 ) {
			next = currentIndex + 1;
		} else {
			next = 0;
		}
		current.removeClass('active');
		$('#slideArea > ul > li').eq(next).addClass('active');
		var offset = Math.floor(($('.infoView').width() - 100) / 2) + 16;
		var leftPos = $('#slideArea > ul > li').eq(next).position().left - offset;
		var leftOffset = $('#slideArea > ul > li').eq(next).parent().position().left;
		var sliderVal = Math.floor(next * 100 / ($('#slideArea > ul > li').size() - 1 ));
		$( ".slideBar" ).slider( "option", "value", sliderVal );
		mainAnimation(sliderVal, truth);
		$('.infoView').clearQueue().fadeOut(100, function() {
			$('.infoView').removeAttr('style');
			$('.infoView').css({
				'margin-left' :	leftPos + 'px',
				'left' :		leftOffset + 'px'
			})
			$('.infoView').html($('#slideArea li.active div.text').html());
			$('.infoView').fadeIn(100);
			clearTimeout(timeout);
			timeout = setTimeout("infoRotator(false)", 15000);											// TIMEOUT
		});
	}
}

$(window).load(function(){
	$('<img/>').attr('src', 'http://lindnerresearch.com/img/bg/sub-nav-top.png').load(function() {
		$('.subNavContent').css('background-image', 'url(http://lindnerresearch.com/img/bg/sub-nav-top.png)');
		//console.log('1');	   
	});
	
	$('<img/>').attr('src', 'http://lindnerresearch.com/img/bg/sub-nav-bg.png').load(function() {
		$('.subNavBottom').css('background-image', 'url(http://lindnerresearch.com/img/bg/sub-nav-bg.png)');
		//console.log('2');
	});
	
	$('<img/>').attr('src', 'http://lindnerresearch.com/img/bg/sub-nav-bottom.png').load(function() {
		$('.subNavTop').css('background-image', 'url(http://lindnerresearch.com/img/bg/sub-nav-bottom.png)');
		//console.log('3');
	});
	
	$('.research-sub .subNavTop').removeClass('subNavTop');
   	$('.mega-drop-down .subNavTop').removeClass('subNavTop');
	
});


// Responsive elements
$(document).ready(function(){
	checkSize(function(){moveElement(".acceptWrap", ".fullContent")});
});

function checkSize(actionItem) {
	if ($(window).width() < 768) {
	    return actionItem();
	}
}
function moveElement(elemName, appendTarget) {
	$(elemName).appendTo(appendTarget);
}




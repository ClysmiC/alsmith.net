/** Dynamically add padding to make sure content stays below navbar **/
$(window).resize(function () { 
    $('#tabContentContainer').css('padding-top', parseInt($('#mainNavbar').css("height"))+10);
});

$(window).load(function () { 
    $('#tabContentContainer').css('padding-top', parseInt($('#mainNavbar').css("height"))+10);        
});

/** Smooth scroll back to top **/
$(".backToTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

/** Switch panes on link clicks as well **/
$('#sampleLink').click(
    function()
    {
	activateTab('sampleWorks');
    }
);

$('#resumeLink').click(
    function()
    {
	activateTab('resume');
    }
);

function activateTab(tab)
{
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

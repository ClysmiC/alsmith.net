tabContentContainerIsSkinny = true;

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

$('.nav-tabs .skinnyPanel').on('shown.bs.tab',
    function()
    {
	setTabContentContainerSkinny();
    }
);

$('.nav-tabs .widePanel').on('shown.bs.tab',
    function()
    {
	setTabContentContainerWide();
    }
);

function activateTab(tab)
{
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

function setTabContentContainerSkinny()
{
    if(!tabContentContainerIsSkinny)
    {
	$('#tabContentContainer').removeClass("col-xs-8");
	$('#tabContentContainer').removeClass("col-xs-offset-2");
	$('#tabContentContainer').addClass("col-xs-6");
	$('#tabContentContainer').addClass("col-xs-offset-3");

	tabContentContainerIsSkinny = true;
    }
};

function setTabContentContainerWide()
{
    if(tabContentContainerIsSkinny)
    {
	$('#tabContentContainer').removeClass("col-xs-6");
	$('#tabContentContainer').removeClass("col-xs-offset-3");
	$('#tabContentContainer').addClass("col-xs-8");
	$('#tabContentContainer').addClass("col-xs-offset-2");

	tabContentContainerIsSkinny = false;
    }
};

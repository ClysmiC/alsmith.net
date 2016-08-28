tabContentContainerIsSkinny = true;
tabClicked = false;

// Use PDFObject to embed PDF properly
// Make its height comfortably fit in the viewport
PDFObject.embed("pdf/AndrewSmithResume.pdf", "#embeddedResume");

/** Dynamically add padding to make sure content stays below navbar **/
$(window).resize(function () { 
    $('#tabContentContainer').css('padding-top', parseInt($('#mainNavbar').css("height"))+10);
});

$(window).load(function () { 
    $('#tabContentContainer').css('padding-top', parseInt($('#mainNavbar').css("height"))+10);
});

$(document).ready(function () {
    openPanelBasedOnHash();
});

/** Smooth scroll back to top button **/
$(".backToTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

/** Switch panes on link clicks as well **/
$('#sampleLink').click(
    function()
    {
	    tabClicked = true;
	    window.location.hash = '#samples';
	    activateTab('sampleWorks');
    }
);

$('#resumeLink').click(
    function()
    {
	    tabClicked = true;
	    window.location.hash = '#resume';
	    activateTab('resume');
    }
);

$('.nav-tabs .skinnyPanel').on('shown.bs.tab',
    function()
    {
	    setTabContentContainerSkinny();
    }
);

$('.nav-tabs a[href="#aboutMe"]').on('click',
    function()
    {
	    tabClicked = true;
	    window.location.hash = '#about';
    }
);

$('.nav-tabs a[href="#sampleWorks"]').on('click',
    function()
    {
	    tabClicked = true;
	    window.location.hash = '#samples';
    }
);

$('.nav-tabs a[href="#resume"]').on('show.bs.tab',
    function()
    {
	    resizeResumeForViewport();
    }
);

$('.nav-tabs a[href="#resume"]').on('click',
    function()
    {
	    tabClicked = true;
	    window.location.hash = '#resume';
    }
);

$('.nav-tabs a[href="#contactMe"]').on('click',
    function()
    {
	    tabClicked = true;
	    window.location.hash = '#contact';
    }
);

$('.nav-tabs .widePanel').on('shown.bs.tab',
    function()
    {
	    setTabContentContainerWide();
    }
);

/** Re-load correct panel when hash changes (such as through back
  * or forward buttons. Use tabclicked variable to ignore this
  * function when the hash changes due to a real click.
  */
window.onhashchange = function ()
{
    if(tabClicked)
    {
	    tabClicked = false;
	    return;
    }

    openPanelBasedOnHash();
}

function activateTab(tab)
{
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
}

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
}

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
}

function resizeResumeForViewport()
{
    $('#embeddedResume').height($(window).height() - $('#mainNavbar').height() - 50);
}

function openPanelBasedOnHash()
{
    // Activate tab after # in URL
    if (window.location.hash === "#about")
    {
	    activateTab('aboutMe');
    }
    else if (window.location.hash === "#samples")
    {
	    activateTab('sampleWorks');
    }
    else if (window.location.hash === "#resume")
    {
	    activateTab('resume');
    }
    else if (window.location.hash === "#contact")
    {
	    activateTab('contactMe');
    }
    else
    {
	    //default
	    activateTab('aboutMe');
    }
}

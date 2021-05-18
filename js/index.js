var accordionTabHeaders = document.getElementById('accordion').querySelectorAll('.accordion__header');
for (var i = 0; i < accordionTabHeaders.length; i++) {
	accordionTabHeaders[i].addEventListener('click', function (event) {
		setActiveTab(event.currentTarget);
		showContent(event.currentTarget);
	})
}
// Set Default to show and active, after page loading
setActiveTab(accordionTabHeaders[0]);
showContent(accordionTabHeaders[0]);
// *** Highlighting active tab
// Check if the active class is present, and remove class
function setActiveTab(tab) {
	var activeTab = document.getElementById('accordion').querySelector('.active');
	if (activeTab) {
		activeTab.classList.remove('active');
	};
	// add active class
	tab.classList.add('active');
}
// *** Content showing
// Check if the show class is present
function showContent(content) {
	var showContent = document.getElementById('accordion').querySelector('.show');
	var contentToShow = document.getElementById('accordion').querySelector('.accordion__item--hiden');
	if (showContent) {
		showContent.classList.remove('show');
	};
	// add show class to show content
	content.nextElementSibling.classList.add('show');
}
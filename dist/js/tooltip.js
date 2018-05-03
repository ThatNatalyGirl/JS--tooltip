'use strict';

var tooltip = function tooltip(selector, text, color) {
	var $triggerElement = document.querySelector(selector);
	if (!$triggerElement) {
		console.error('Could not find trigger element for tooltip', selector);
		return false;
	}

	var $tooltip = document.createElement('div');
	$tooltip.innerHTML = text; //from the parameter
	//styling it
	$tooltip.style.position = 'absolute';
	$tooltip.style.background = color;
	$tooltip.style.borderRadius = '5px';
	$tooltip.style.padding = '20px';

	var showTooltip = function showTooltip() {
		document.body.appendChild($tooltip);
		console.log('show');
		//we put this here so if the page resizes
		$tooltip.style.left = $triggerElement.getBoundingClientRect().right + 'px';
		$tooltip.style.top = $triggerElement.getBoundingClientRect().top + 'px';
	};

	var hideTooltip = function hideTooltip() {
		document.body.removeChild($tooltip);
		console.log('hide');
	};

	$triggerElement.addEventListener('mouseover', showTooltip);
	$triggerElement.addEventListener('mouseout', hideTooltip);

	var destroy = function destroy() {
		$triggerElement.removeEventListener('mouseover', showTooltip);
		$triggerElement.removeEventListener('mouseout', hideTooltip);
		$triggerElement = null;
		$tooltip = null;
		// ^ this is us cleaning up after ourselves so it is truly destroying the elemenets and not using up the ram anymore - garbage collection
	};

	return {
		destroy: destroy
	};
};

//popper.js
//# sourceMappingURL=tooltip.js.map

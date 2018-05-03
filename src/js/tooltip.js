let tooltip = function(selector, text, color) {
	let $triggerElement = document.querySelector(selector);
	if(!$triggerElement){
		console.error('Could not find trigger element for tooltip', selector);
		return false;
	}

	let $tooltip =  document.createElement('div');
	$tooltip.innerHTML = text; //from the parameter
	//styling it
	$tooltip.style.position = 'absolute';
	$tooltip.style.background = color;
	$tooltip.style.borderRadius = '5px';
	$tooltip.style.padding = '20px';

	let showTooltip = function(){
		document.body.appendChild($tooltip);
		console.log('show');
		//we put this here so if the page resizes
		$tooltip.style.left = $triggerElement.getBoundingClientRect().right + 'px';
		$tooltip.style.top = $triggerElement.getBoundingClientRect().top + 'px';
	}

	let hideTooltip = function(){
		document.body.removeChild($tooltip);
		console.log('hide');
	}

	$triggerElement.addEventListener('mouseover', showTooltip);
	$triggerElement.addEventListener('mouseout', hideTooltip);

	let destroy = function(){
		$triggerElement.removeEventListener('mouseover', showTooltip);
		$triggerElement.removeEventListener('mouseout', hideTooltip);
		$triggerElement = null;
		$tooltip = null;
		// ^ this is us cleaning up after ourselves so it is truly destroying the elemenets and not using up the ram anymore - garbage collection
	}

	return{
		destroy:destroy
	}
}



//popper.js
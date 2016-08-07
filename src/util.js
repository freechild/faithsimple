var _util = (function(){
	var module = {};

	// Private
	var refreshStatusBar = function(){
		$("#status_bar #age").text(_character.age);
		$("#status_bar #cash").text(_character.cash);
		$("#status_bar #zealots").text(_religion.zealots);
	};

	var refreshNavi = function(navigation){
		// Default value
		if (!navigation) navigation = [];

		// Set location
		if (_character.location)
			$("#location").text("[ " + _character.location + " ]");

		// Clear navigation
		$("#navi").html("");
		// Set Navigation
		navigation.forEach(function(action){
			$("#navi").append("<li id='" + action.id + "'>" + action.text + "</li>");
			$("#" + action.id).click(function(){
				var navigation = _event[action.id](); // Execute current event
				refresh(navigation); // Refresh navigation and view
			});
		});
	};

	var refresh = function(navigation){
		refreshNavi(navigation);
		refreshStatusBar();
	};

	// Public
	module.init = function(){
		refreshNavi([_nav.start,_nav.load]);
		refreshStatusBar();
	};

	module.printText = function(text){
		$("#text").html(text);
	};

	return module;
})();

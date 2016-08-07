// Event Object
// eventId : eventFunction 형식
var _event = {

	start: function(){
		// event...
		return [_nav.move_downtown,_nav.sleep];
	},

	load: function(){
		// event...
		return [_nav.move_downtown,_nav.sleep];
	},

	move_home: function(){
		// event...
		_character.location = "집";
		return [_nav.move_downtown,_nav.sleep];
	},

	move_downtown: function(){
		// event...
		_character.location = "번화가";
		return [_nav.move_home,_nav.speech];
	},

	speech: function(){
		var text = "";
		if (Math.random() < 0.5) {
			text = "아무도 관심을 주지 않았다.";
		} else {
			var newZealots = Math.floor(Math.random() * 10);
			text = newZealots + " 명이 관심을 가졌다!";
			_religion.zealots += newZealots;
		}
		text += "<br />";
		text += "집으로 돌아갔다."
		_util.printText(text);
		_character.location = "집";
		return [_nav.move_downtown,_nav.sleep];
	},

	sleep: function(){
		// event...
		return [_nav.move_downtown,_nav.sleep];
	}

};

// Global variables
var _character = {
	location: "",	// 위치
	age: 20,		// 나이
	cash: 100,		// 보유 자산
	charisma: 0,	// 카리스마
	charm: 0,		// 매력
	confidence: 0	// 자신감
};

var _religion = {
	zealots: 0,			// 신도 수
	recognizability: 0,	// 인지도
	virtue: 0,			// 선
	vice: 0,			// 악
	order: 0,			// 질서
	chaos: 0			// 혼돈
};

// Global functions

// Main
$(document).ready(function(){
	_util.init();
});

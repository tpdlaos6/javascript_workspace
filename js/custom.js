$(document).ready(function(){
	//왼쪽 상단 메뉴버튼을 누르면
	$(".btnMenu").click(function(){
		//오른쪽 전체화면 기울어지게
		$("section").addClass("on");
		//왼쪽 navigation 기울어지게
		$("nav").addClass("on");
	})
	//네비게이션에서 homme,girl,kids메뉴를 누르면
	$("#gnb li").click(function(){
		//오른쪽 전체화면 원위치
		$("section").removeClass("on");
		//왼쪽 navigation 원위치
		$("nav").removeClass("on");
		//오른쪽 전체화면 변경
		$("section>div").removeClass("on"); // on클래스 먼저 제거
		console.log($(this).index());
		$("section>div").eq($(this).index()).addClass("on"); // 같은 index를 갖는 div에 on추가
	})
})
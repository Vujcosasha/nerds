



	var link = document.querySelector(".pop-ap_btn_js");
	var popup = document.querySelector(".pop-ap");
	var close = popup.querySelector(".close-cross-btn");
	
	link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("pop-ap-show");

	close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("pop-ap-show");
	});
	
	//window.addEventListener("keydown", function (evt) {
	//if (evt.keyCode === 27) {
	//evt.preventDefault();
	//if (popup.classList.contains("pop-ap-show")) {
	//popup.classList.remove("pop-ap-show");
	//}
	//}
	//});


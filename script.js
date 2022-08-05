
var loadBox = document.querySelector('#load');

setTimeout(function(){
	loadBox.style.opacity = "0";
	loadBox.style.transition = "1s";
	setTimeout(function(){loadBox.style.display = "none"},6000)
},6000)


//=-----------------------------------------------------------------------------------------//

var btt = document.querySelector('#btt');

		window.onscroll = function() {showBtt()};

		function showBtt(){
			if (document.documentElement.scrollTop > 400) {
				btt.style.display = "block";
				btt.style.transition = "all 1s";
			}
			else{
				btt.style.display = "none";
			}
		};
		function goToTop(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		};

		// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		window.addEventListener('scroll',function(){
			var col = document.querySelector('#col');
			var col2 = document.querySelector('#col2');
			var col3 = document.querySelector('#col3');
			var col4 = document.querySelector('#col4');
			var col5 = document.querySelector('#col5');
			var col6 = document.querySelector('#col6');
			var col7 = document.querySelector('#col7');
			var value = window.scrollY;
			col.style.left = -740 + value+'px';
			col2.style.left = 1100 - value+'px';
			col3.style.left = -1560 + value+'px';
			col4.style.left = 2020 - value+'px';
			col5.style.left = -2400 + value+'px';
			col6.style.left = 2800 - value+'px';
			col7.style.left = -3200 + value+'px';
		});
		if (col.style.left <= -286) {
			col.style.opacity = "0";
		} else {}
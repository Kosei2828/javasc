let a = document.getElementById("p");
let b = 0;
setInterval(() => {
	a.textContent = "残り時間..." + b;
	b++
},1000);
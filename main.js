$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
  // add active to btn
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
      
//Metodo de compartilhar
// function share(){
// 	if (navigator.share !== undefined) {
// 		navigator.share({
// 			title: 'O título da sua página',
// 			text: 'Um texto de resumo',
// 			url: 'https://seusite.com/sua_url',
// 		})
// 		.then(() => console.log('Successful share'))
// 		.catch((error) => console.log('Error sharing', error));
// 	}
// }

// <a href="javascript:void(0)" onclick="share()">
// 	<img width="25" height="25" src="https://ayltoninacio.com.br/img/s/21w50.jpg" alt="">
// </a>

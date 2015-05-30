$(document).ready(function(event){

	$("#second-page").hide();

	for(var i = 1; i <=6; i++){
		var $photoContainer = $("#"+i);
		$photoContainer.html("<img class='img-responsive' id=album-"+i+" src=css/images/album-covers/"+i+".jpg>");
	}

	var $target = $("section div");
	var $button = $("button");
	var $backToMain = $("#back-to-main");


	$target.on("click",showAlbumDetailView);
	$button.on("click",showAlbumDetailView);
	$backToMain.on("click", goBackToMain);

	function showAlbumDetailView(event){
		var $albumDetailView = $(event.target);
		var getAlbum = $albumDetailView.attr("id");

		$("#main-page").hide();
		$("#second-page").show();

		if(getAlbum !== undefined && getAlbum !== "back-to-main"){
			var idNum = getAlbum.slice(-1);
			var j = 14;

			for(var i = 1; i <=14; i++){
				var $photoContainer = $("#photo-"+i);
				$photoContainer.html("<img class='img-responsive' src=css/images/album-"+idNum+"/"+j+".jpg>");
				j--;
			}
		}
	}

	function goBackToMain(){

		$("#second-page").hide();
		$("#main-page").show();
	}

});
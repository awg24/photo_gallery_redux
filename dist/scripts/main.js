$(document).ready(function(event){

	$("#second-page").hide();
	$("#photo-detail-page").hide();

	for(var i = 1; i <=6; i++){
		var $photoContainer = $("#"+i);
		$photoContainer.html("<img class='img-responsive' id=album-"+i+" src=css/images/album-covers/"+i+".jpg>");
	}

	var $target = $("section div");
	var $button = $("button");
	var $backToMain = $("#back-to-main");
	var $backToAlbum = $("back-to-album");
	var $title = $("#album-title");
	var $bannerTitle = $("#banner-title");
	var $photoTitle = $("#photo-num");


	$target.on("click",showAlbumDetailView);
	$button.on("click",showAlbumDetailView);
	$backToMain.on("click", goBackToMain);
	$backToAlbum.on("click", goBackToAlbum);

	function showAlbumDetailView(event){
		var $albumDetailView = $(event.target);
		var getAlbum = $albumDetailView.attr("id");
		var idNum = getAlbum.slice(-1);

		$("#main-page").hide();
		$("#photo-detail-page").hide();
		$("#second-page").show();

		$button.removeClass("active")
		$("#button-"+idNum).addClass("active");

		if(getAlbum !== undefined && getAlbum !== "back-to-main" && getAlbum.substring(0,5) !== "photo" && getAlbum !== "back-to-album"){

			$("#"+getAlbum).addClass("active");
			$title.html("Album "+idNum);
			$bannerTitle.html("My Photos");
			for(var i = 1; i <=14; i++){
				var $photoContainer = $("#photo-"+i);
				$photoContainer.html("<img class='img-responsive' id='photo-detail-"+i+"'' src=css/images/album-"+idNum+"/"+i+".jpg>");

			}
			
		} else if(getAlbum.substring(0,12) === "photo-detail"){
			var srcFile = event.target.src.toString();
			var srcSplited = srcFile.split("-");
			var albumNum = srcSplited[1].charAt(0);
			showPhotoDetail(getAlbum,albumNum);
		}
	}

	function goBackToMain(){
		$bannerTitle.html("My Albums");
		$("#second-page").hide();
		$("#main-page").show();
	}
	function goBackToAlbum(){

		$("#second-page").show();
		$("#main-page").hide();
		$("#photo-detail-page").hide();
	}

	function showPhotoDetail(idString,albumNum){
		var photoToShow = idString.substring(13,idString.length);
		$("#second-page").hide();
		$("#main-page").hide();
		$("#photo-detail-page").show();

		var $photoContainer = $("#photo-detail");
		$photoTitle.html("Photo "+photoToShow);
		
		$photoContainer.html("<img class='img-responsive center-block' src=css/images/album-"+albumNum+"/"+photoToShow+".jpg>");
	}
});
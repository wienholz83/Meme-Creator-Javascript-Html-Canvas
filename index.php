<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Sample For Marc</title>
	<link rel="stylesheet" href="style.css" type="text/css" />	

	<!-- link fonts -->
	<!-- <link async href="http://fonts.googleapis.com/css?family=Creepster" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
	<link async href="http://fonts.googleapis.com/css?family=Monoton" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
	<link async href="http://fonts.googleapis.com/css?family=Warnes" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/> -->


	<!-- jQuery -->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<!-- bxSlider Javascript file -->
	<script src="lib/jquery.bxslider.min.js"></script>
	<!-- bxSlider CSS file -->
	<link href="lib/jquery.bxslider.css" rel="stylesheet" />
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css">
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>

  	<!-- Le styles -->
    <link type="text/css" rel="stylesheet" href="css/jquery.miniColors.css" />

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">

	<script src="js/canvas2image.js"></script>
	<script type="text/javascript" src="js/editor.js"></script>
	<script type="text/javascript" src="js/jquery.miniColors.min.js"></script>
	<script type="text/javascript" src="js/html2canvas.js"></script>
	
    <script>
		$( function() {
		    // $( "#output" ).draggable();
		    // $( "#output" ).resizable();
		    selStyle(6);
		    $( "#output1" ).draggable({
		    	drag: function( event, ui ) {
		    		$("#output").css('top',ui.position.top);
		    		$("#output").css('left',ui.position.left);
		    	}
		    });
		} );
	</script>
</head>
<body>
	<div class="container">
		
		<!-- Output Image Div -->
		<div class="maincontainer">
	        <div id="shirtDiv" class="page">
	            <img id="imgFacing" src="photos/photo1.jpg"></img>
	        	<div id="drawingArea">          
	            	<canvas id="tcanvas" width="390px" height="300px" class="hover" style="-webkit-user-select: none;"></canvas>
	          	</div>
        	</div>
        	<div id="output" class="output">

			</div>
			<div id="output1" class="output1">

			</div>
      	</div>
      	<!-- Style Setting Div -->
		<div class="setting">
			<table class="tblsetting">
				<tr>
					<td width="25%">
						<div style="text-align: center;"><span>Font Size(px) : </span><input type="text" id="amount" readonly></div>
				
	  					<div id="slider-range"></div>
					</td>
					<td width="60%">
						<div style="text-align: left;"><span>Text : </span><input name="myInput" id="sampletext" type="text" value="Sample Text" style="width:80%"></input></div>
					</td>
					<td width="13%">
						<label class="btn btn-primary">
			                Download as png<input onchange="imageSelected()" type="button" id="btnDownload" style="display: none;">
			            </label>
					</td>
				</tr>
			</table>

			<!--<div class="col-lg-6 col-sm-6 col-12">
	            <h4>Select Image</h4>
	            <label class="btn btn-primary">
	                Browse&hellip; <input onchange="imageSelected()" type="file" name="fileupload" value="fileupload" id="fileupload" style="display: none;">
	            </label>
	        </div>
			<hr>-->
			
			<!-- <button id="btnDownload">Download as png</button> -->
		</div>
		
		<?php
    		$html = '<div class="slider1">';
			$files = array();
			foreach (glob("photos/*.jpg") as $file) {
			  $html .= "<div class='slide' onclick='onThumbnail(\"{$file}\");''><img class='imgthumb' src='".$file."'></div>";
			}
			$html .= '</div>';
			echo $html;
		?>
       	<div id="img-out"></div>
		<!-- List of styles -->
		<div class="stylegallery">
			<table class="tblgallery" width="100%" height="350px">
				<tr>
					<td width="20%">
						<img onclick="selStyle(1);" src="img/textstyle1.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(2);" src="img/textstyle2.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(3);" src="img/textstyle3.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(4);" src="img/textstyle4.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(5);" src="img/textstyle5.png"/>
					</td>
				</tr>
				<tr>
					<td width="20%">
						<img onclick="selStyle(6);" src="img/textstyle6.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(7);" src="img/textstyle7.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(8);" src="img/textstyle8.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(9);" src="img/textstyle9.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(10);" src="img/textstyle10.png"/>
					</td>
				</tr>
				<tr>
					<td width="20%">
						<img onclick="selStyle(11);" src="img/textstyle11.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(12);" src="img/textstyle12.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(13);" src="img/textstyle13.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(14);" src="img/textstyle14.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(15);" src="img/textstyle15.png"/>
					</td>
				</tr>
				<tr>
					<td width="20%">
						<img onclick="selStyle(16);" src="img/textstyle16.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(17);" src="img/textstyle17.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(18);" src="img/textstyle18.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(19);" src="img/textstyle19.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(20);" src="img/textstyle20.png"/>
					</td>
				</tr>
				<tr>
					<td width="20%">
						<img onclick="selStyle(21);" src="img/textstyle21.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(22);" src="img/textstyle22.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(23);" src="img/textstyle23.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(24);" src="img/textstyle24.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(25);" src="img/textstyle25.png"/>
					</td>
				</tr>
				<tr>
					<td width="20%">
						<img onclick="selStyle(26);" src="img/textstyle26.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(27);" src="img/textstyle27.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(28);" src="img/textstyle28.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(29);" src="img/textstyle29.png"/>
					</td>
					<td width="20%">
						<img onclick="selStyle(30);" src="img/textstyle30.png"/>
					</td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex" />
<meta name="referrer" content="no-referrer">
<style type="text/css">

body {
   margin: 0;
   padding: 0;
}
</style>
<script src="https://github.io/z-shakaplayer.js"></script>
<link href="https://github.io/z-controls.css" rel="stylesheet" type="text/css"/>
<script defer src="dist/cast_sender.js"></script>
<script src="https://github.com/videojs/mux.js/releases/download/v5.0.0/mux.js"></script>
<script src="dist/app.js?v=1.1.31"></script>
</head>
  
<body style="background-color: black; margin: 0 !important;">
<style>
        .shaka-spinner-svg > circle {
          stroke: orange;
        }
        .custom-title {
            //background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: clamp(14px, 3vw, 30px);
            font-weight: bold;
            position: absolute;
            display: none;
            margin-left: 10px;
            left: 0;
            line-height: 100px;
        }
        .title-image {
            margin-right: 10px;  /* Espacio entre la imagen y el texto del título */
            border-radius: 10px;
            width: 0;        /* Ancho de la imagen */
            height: 0;        /* Altura de la imagen */
        }
        .shaka-controls-container[shown="true"] .custom-title {
            display: block;  /* Muestra el título cuando los controles están visibles */
        }
</style>
<div data-shaka-player-cast-receiver-id="8D8C71A7" data-shaka-player-container="" style="max-width: 100%;">
<video autoplay="" data-shaka-player="" id="video" style="height: 100vh !important; margin: auto; width: 100%;"></video> 
</div>
</body>
</html>

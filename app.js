function getParameterByName(name){name=name.replace(/[\[]/,"\[").replace(/[\]]/,"\]");var regex=new RegExp("[\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);return results===null?"":decodeURIComponent(results[1].replace(/\+/g," "));}
var getURL=getParameterByName('get');var getIMG=getParameterByName('img');var getKEY=getParameterByName('key');var getKEY2=getParameterByName('key2');var getTitle=getParameterByName('title');function initApp(){shaka.polyfill.installAll();if(shaka.Player.isBrowserSupported()){initPlayer();}else{console.error('Browser not supported...!');}}
async function initPlayer(){const video=document.getElementById('video');const ui=video['ui'];const controls=ui.getControls();const player=controls.getPlayer();const config={'overflowMenuButtons':['quality','cast','language'],'seekBarColors':{base:'rgba(255, 255, 255, 0.3)',buffered:'rgba(255, 255, 255, 0.54)',played:'rgb(255, 165, 0)',}}
ui.configure(config);window.player=player
window.ui=ui;const controlsContainer=document.querySelector('.shaka-controls-container');const bottomControls=controlsContainer.querySelector('.shaka-bottom-controls');if(controlsContainer){const height=bottomControls.offsetHeight*1.30;const titleElement=document.createElement('div');titleElement.classList.add('custom-title');titleElement.style.bottom=`${height}px`;if(getIMG!==null&&getIMG!==undefined&&getIMG!==''){const imgElement=document.createElement('img');imgElement.src=getIMG;imgElement.classList.add('title-image');titleElement.appendChild(imgElement);}
const textElement=document.createElement('span');textElement.innerHTML=getTitle;titleElement.appendChild(textElement);controlsContainer.insertBefore(titleElement,bottomControls);}
player.addEventListener('error',onErrorEvent);controls.addEventListener('error',onUIErrorEvent);try{player.configure({drm:{clearKeys:{[getKEY]:getKEY2}},streaming:{lowLatencyMode:true,inaccurateManifestTolerance:0,rebufferingGoal:1,}});player.getNetworkingEngine().registerRequestFilter(function(e,r){return r.headers.Referer=null,Promise.resolve(r);});await player.load(getURL);console.log('The video has now been loaded!');}catch(e){onError(e);}
video.addEventListener("play",()=>{player.configure({streaming:{rebufferingGoal:5,bufferingGoal:10}});});}
function onErrorEvent(event){onError(event.detail);}
function onError(error){console.error('Error code',error.code,'object',error);}
function onUIErrorEvent(errorEvent){onPlayerError(event.detail);}
function initFailed(errorEvent){console.error('Unable to load the UI library!');}
function JSONify(obj){var o={};for(var i in obj){o["'"+i+"'"]=obj[i];}
return o;}
document.addEventListener('shaka-ui-loaded',initApp);document.addEventListener('shaka-ui-load-failed',initFailed);

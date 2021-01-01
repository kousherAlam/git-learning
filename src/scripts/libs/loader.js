"use strict";

function _addCrutialEvent(element, callback){
    element.addEventListener('error',  (event)=>{
        callback(event, null);
    });
    element.addEventListener('load', (event)=>{
        callback(null, event);
    });
}

function generateID(){
    return `script-${Date.now()}`
}

function _setPathAndId(element, path, id){
    element.src = path;
    element.id = id;
}

function loadScript(path, callback){
    const scriptElement = document.createElement('script');
    _setPathAndId(scriptElement, path, generateID());
    _addCrutialEvent(scriptElement, callback);
    document.body.appendChild(scriptElement);
    return scriptElement;
}

function loadImage(path, callback){
    const imgElement = document.createElement('img');
    _setPathAndId(scriptElement, path, generateID());
    _addCrutialEvent(scriptElement, callback);
    document.body.appendChild(imgElement);
    return imgElement;
}

function removeLoadedScript(script){
    script.parentElement.removeChild(script);
}

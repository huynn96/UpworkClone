﻿/*!
 * WalkMe
 * http://www.walkme.com/
 *
 * Copyright 2012, WalkMe ltd
 */
function WalkmeSnippet(){window._walkmeInternals=window._walkmeInternals||{},Z("snippetStartInit");var e,t,n,r,i,a,o,s=this,u=!1,l="38",c={publish:0,preview:1},d=c.publish;try{o=window.localStorage}catch(w){}function g(){window._walkmeConfig=window._walkmeConfig||{},a=_walkmeInternals,a.snippetLog=[],a.addTimeStamp=Z,v("ish");var e="false";a.isSelfHosted="true"===e,v("ssm"),T(),n=new x,v("lsu");var t,o="https://cdn.walkme.com/users/c0b053739f5b4828beee401206a0f930/settings.txt",s="###GET_MOBILE_SETTINGS_URL###",u=false,l=false,c=1==l||u&&f();if(c?(v("lsm"),t=s,_walkmeConfig.platform=3):(v("lsw"),t=o),n.cdnServerName.indexOf("###AUTO_DETECT###")>-1&&(v("lad"),i=z(n.cdnServerName.replace("###AUTO_DETECT###",""),c),n=U(n)),r=D(t),n=F(n),v("cli"),_walkmeConfig.smartLoad){if(top!=window&&!_()&&m())return}else if(1!=window.walkme_load_in_iframe&&top!=window)return;if(v("cuc"),!c&&!N()){try{v("bns"),walkme_browser_not_supported()}catch(d){}return}v("exl");var w=window[A()],g=a.blocked;if(v("lsl"),p(),v("ipm"),!C()&&(v("clt"),window.document.dontLoadTriangle))return v("bsl"),window.walkme_snippet_blocked=!0,a.blocked=!0,void(a.continueLoad=h);v("slb"),w&&!g&&ee("slt","WalkMe Snippet was loaded twice"),v("lss"),h(),v("eok")}function f(){return G()}function m(){try{var e=window;do if(e=e.parent.window,e._walkmeConfig)return!0;while(e!=top)}catch(t){}return!1}function _(){try{if(parent.location.href)return!1}catch(e){}return!0}function v(e){a.snippetLog.push(e)}function p(){var e=A();window[e]=s}function h(){window.walkme_custom_settings_data?(v("lso"),S(walkme_custom_settings_data)):(v("lsp"),Z("settingsFileStartLoad"),$(r,null,a.isSelfHosted,"fixedCallback",S))}function S(e){if(Z("settingsFileEndLoad"),!C()&&window.document.dontLoadTriangle)return a.blocked=!0,void(a.continueLoad=function(){b(e)});v("cls"),b(e)}function b(e){t=U(e);var n=window.walkme_settings_callback;n&&n(t);var r=X("walkme_is_enabled_override");if(void 0!==r){if("0"===r)return}else if(!e.IsEnabled)return;k(e.jQueryFile)}function k(e){if(window.walkme_custom_jquery)window.mtjQuery=walkme_custom_jquery,y();else{var t=j("walkmeCustomjQueryUrl");if(0!=t&&(e=t),a.localJQuery){var n=e.lastIndexOf("/"),r=e.substring(n+1);e="https://localhost/mt/resources/"+r}$(e,y)}}function y(){if(Z("jQueryScriptLoaded"),void 0==window.mtjQuery)return;if(u)return;u=!0,window.walkme_custom_jquery||mtjQuery.noConflict(),t.WaitDocumentReady?(v("wdr"),mtjQuery(document).ready(function(){E(t)})):(v("ndr"),E(t))}function E(e){Z("jQueryDocumentReady");try{O(e)}catch(t){}}function L(){var e;a.localLib&&(e="https://localhost/mt/lib/maketutorial_lib.js");var t=j("walkmeCustomeLibUrl");if(0!=t)return t;return e}function O(e){var t=j("wm-prelibjs");t&&(e.PreLibJsFile=t),e.PreLibJsFile&&""!=e.PreLibJsFile?(window.walkme_pre_lib_loaded=function(){window.walkme_pre_lib_loaded=function(){try{console.log("walkme_pre_lib_loaded was called twice.")}catch(e){}},I(e)},Z("preLibStartLoad"),$(e.PreLibJsFile)):I(e)}function I(e){var t=L()||e.LibFile;$(t)}function A(){return C()?"wmPreviewSnippet":"wmSnippet"}function T(){var e="###IS_PREVIEW_MODE###";"true"===e&&(d=c.preview)}function C(){return d==c.preview}function x(){this.recorderServer="###RECORDER_SERVER_NAME###",this.cdnServerName="https://cdn.walkme.com",this.storage="jstorage",this.userGuids=["c0b053739f5b4828beee401206a0f930"],window.walkme_custom_cdn_server&&(this.cdnServerName=walkme_custom_cdn_server),window.walkme_custom_app_server&&(this.recorderServer=walkme_custom_app_server),window.walkme_custom_data_url?this.triangleUrl=walkme_custom_data_url:this.triangleUrl=this.cdnServerName+"###SPECIAL_TRIANGLE_FILE###",window.walkme_custom_datafile_url?this.datafilesArray=walkme_custom_datafile_url:this.datafilesArray="###SPECIAL_DATA_FILE###",window.walkme_custom_widget_url?this.widgetUrl=walkme_custom_widget_url:this.widgetUrl="###SPECIAL_WIDGET_FILE###"}function D(e){var t="walkme_custom_user_settings_",n=X(t+"url",!0),r=X(t+"guid",!0),i=X(t+"env",!0),o=R();return n&&(e=n),r&&(e=e.replace(/(users\/)([^\/]*)(\/)/,"$1"+r+"$3")),(i||""===i)&&(i&&(i+="/"),e=e.replace(/(users\/[^\/]*\/)(.*)(sett)/,"$1"+i+"$3")),e=U(e),a.settingsUrl=e,v(o?"cb":"ncb"),o&&(e+="?forceUpdate="+(new Date).getTime()),e}function R(){var e=j("walkMe_wm-settings-cache-bust");if(e){var t=/{"val":"(true|false)","exp":(\d+)}/,n=t.exec(e);if(n&&"true"==n[1]&&(new Date).getTime()<parseInt(n[2]))return!0}return!1}function U(e){if(void 0==i)return e;return Y(e,function(e){return e.replace("###AUTO_DETECT###",i)})}function M(e){var t,n,r,i=document.cookie.split(";");for(t=0;t<i.length;t++)if(n=i[t].substr(0,i[t].indexOf("=")),r=i[t].substr(i[t].indexOf("=")+1),n=n.replace(/^\s+|\s+$/g,""),n==e)return r;return!1}function j(e){try{if(o){var t=o.getItem(e);if(null!=t)return t}}catch(n){}return!1}function F(e){return e}function N(){var e=X("walkme_dont_check_browser");if("1"===e||C())return!0;var t=Q(),n=P();return t&&n}function P(){return!W()&&!B()}function W(){var e="android.+mobile|blackberry|iemobile|ip(hone|od)|phone|symbian|windows (ce|phone)";return V(e)}function G(){var e="android|blackberry|iemobile|ip(ad|hone|od)|phone|symbian|windows (ce|phone)";return V(e)}function V(e){var t=new RegExp(e,"i").test(navigator.userAgent||navigator.vendor||window.opera);return t}function B(){var e=Math.max(screen.width,screen.height),t=Math.min(screen.width,screen.height),n=e<800||t<600;return n}function Q(){var e={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var t=0;t<e.length;t++){var n=e[t].string,r=e[t].prop;if(this.versionSearchString=e[t].versionSearch||e[t].identity,n){if(n.indexOf(e[t].subString)!=-1)return e[t].identity}else if(r)return e[t].identity}},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(t==-1)return;return parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer",versionSearch:" rv"},{string:navigator.userAgent,subString:"Edge",identity:"Edge"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};if(e.init(),"Chrome"==e.browser||"Firefox"==e.browser||"Safari"==e.browser&&"Windows"!=e.OS)return!0;if("Explorer"==e.browser&&e.version>=7)return!0;return ee("icb","WalkMe: Incompatible browser."),!1}function $(e,t,n,r,i){var a=document.createElement("script");a.async=!0,n&&(e+=(e.indexOf("?")==-1?"?":"&")+"_wmts="+H()),a.src=e,a.id="mt_script",t&&(a.onload=t,a.onreadystatechange=t),q(r,i),J().appendChild(a)}function J(){return e||(e=document.getElementsByTagName("head")[0]),e}function q(e,t){if(e&&t){var n=window[e];window[e]=function(r){window[e]=n,t(r)}}}function H(){return(new Date).getTime()}function z(e,t){for(var n=document.getElementsByTagName("script"),r="###MOBILE_WEB_USER_GUID###",i="c0b053739f5b4828beee401206a0f930",o=0;o<n.length;o++){var s=n[o],u=s.src;if(u&&u.indexOf("walkme_")>0){if(e){var o=u.indexOf(e),l=K(u.substr(0,o));v("dst")}else{var o=u.indexOf("walkme_"),l=K(u.substr(0,o-1));v("dso")}return t&&a.isSelfHosted&&(l=l.split(i).join(r),v("dsm")),l}}return""}function K(e){return e.replace(/^\s+|\s+$/g,"")}function Y(e,t){if("string"==typeof e)return t(e);if("[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<e.length;n++)e[n]=Y(e[n],t);return e}if("object"==typeof e){for(var n in e)Object.hasOwnProperty.call(e,n)&&(e[n]=Y(e[n],t));return e}return e}function X(e,t){var n=t?j(e):M(e);if(n!==!1)return n;var r=window[e];if(void 0!=r)return r;return}function Z(e){try{var t,n,r=(new Date).getTime();_walkmeInternals.timing?(t=_walkmeInternals.timing,n=r-t.list[t.list.length-1].time):(t=_walkmeInternals.timing={},t.map={},t.list=[],t.delta=[],n=0),t.map[e]=r,t.list.push({name:e,time:r}),t.delta.push({name:e,delta:n})}catch(i){}}function ee(e,t){try{v(e),console.log(t)}catch(n){}}this.getSnippetVersion=function(){return l},this.getSettingsFile=function(){return t},this.getServerSettings=function(){return n},this.fixAutoDetectPaths=U,setTimeout(g,0)}new WalkmeSnippet;
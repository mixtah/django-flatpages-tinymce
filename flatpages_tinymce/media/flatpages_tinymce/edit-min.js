window.$_STATICPAGES_INIT=function(e){var c=function(){var g,f=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];if(window.ActiveXObject){for(g=0;g<f.length;g++){try{return new window.ActiveXObject(f[g])}catch(h){}}}else{if(window.XMLHttpRequest){return new XMLHttpRequest()}}return false};var a=false;var d=function(){if(a){return}a=true;var h;if(document.getElementsByClassName){h=function(p,o){return(o||document).getElementsByClassName(p)}}else{h=function(p,o){var r=o||document;var v=r.getElementsByTagName("*"),q=v.length,w=p.split(/\s+/),s=w.length,x=[],u,t;for(u=0;u<q;u++){for(t=0;t<s;t++){if(v[u].className.search("\\b"+w[t]+"\\b")!==-1){x.push(v[u]);break}}}return x}}var f="";var l=null;var i=document.getElementById(e.prefix+"_body");var k=h("edit",document.getElementById(e.prefix+"_header"))[0];var m=h("save",document.getElementById(e.prefix+"_header"))[0];var g=h("cancel",document.getElementById(e.prefix+"_header"))[0];var n=parseInt(document.getElementById(e.prefix+"_page_id").value,10);var j=false;m.onclick=function(){var o=new c();o.onreadystatechange=function(){if(o.readyState===4){if(o.status===200){i.innerHTML=o.responseText;tinyMCE.activeEditor.remove();i.style.display="block";k.style.display="inline";m.style.display="none";g.style.display="none"}else{window.alert(e.error_message)}}};var p=tinyMCE.activeEditor.getContent();var q=("id="+n+"&content="+encodeURIComponent(p)+"&csrfmiddlewaretoken="+encodeURIComponent(e.csrf_token));o.open("POST",e.url,true);o.setRequestHeader("Content-type","application/x-www-form-urlencoded");o.setRequestHeader("Content-length",q.length);o.setRequestHeader("Connection","close");o.send(q);return false};g.onclick=function(){tinyMCE.activeEditor.remove();i.style.display="block";k.style.display="inline";m.style.display="none";g.style.display="none";return false};k.onclick=function(){if(j){return false}f=i.innerHTML;k.style.display="none";m.style.display="inline";g.style.display="inline";l=tinyMCE.init(e.tinymce_config);return false}};var b=function(){if(document.readyState==="complete"){d()}};if(document.readyState==="complete"){setTimeout(d,1)}if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false);window.addEventListener("load",d,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",b);window.attachEvent("onload",d)}}};
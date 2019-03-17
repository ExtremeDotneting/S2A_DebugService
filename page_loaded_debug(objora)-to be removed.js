// ==UserScript==
// @name         ObjorCom
// @version      0.1
// @include      *objor.com*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant unsafeWindow
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_notification
// @grant GM_xmlhttpRequest
// @grant GM_deleteValue
// ==/UserScript==

function injectJs_Func(func){
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('('+ func +')();'));
    (document.body || document.head || document.documentElement).appendChild(script);
}

function injectJs_Text(text){
    var script = document.createElement('script');
    script.text = text;
    (document.body || document.head || document.documentElement).appendChild(script);
}

function injectJs_Src(src){
    GM_xmlhttpRequest({
        method: "GET",
        url: src,
        onload: function(response){
            injectJs_Text(response.responseText);
        }
    });
}
injectJs_Src('https://code.jquery.com/jquery-3.3.1.min.js');

function hideElement(el){
    try{
      if(el){
        el.style.display="none";
        var msg="'"+el.className+"' was hidden.";
          console.log(msg);
      }
    }
    catch(ex)
    {
      console.log(ex);
    }
}

console.log("Script started!");

var header=$(".tooppppp")[0];
hideElement(header);

var city=$(".tabs-new")[0];
hideElement(city);

var gd=$(".gdf63636gdfd")[0];
hideElement(gd);

var dle=$("#dle-speedbar")[0];
hideElement(dle);

var dopin=$(".doppiin")[0];
hideElement(dopin);

var izzzbbrrran=$(".izzzbbrrran")[0];
hideElement(izzzbbrrran);

var bnmeaaera=$(".bnmeaaera")[0];
hideElement(bnmeaaera);

var glllapp=$(".glllapp")[0];
hideElement(glllapp);

var hgretteccc=$(".hgretteccc")[0];
hideElement(hgretteccc);

var socialLikes=$(".social-likes")[0];
hideElement(socialLikes);

var fooooter=$(".fooooter")[0];
hideElement(fooooter);

var announcementBlockPost=$(".announcement-block-post")[0];
hideElement(announcementBlockPost);

//$(".rest_mobile_header.active:before").each(function(i, el){el.style.display="none";});
$(".page_col1").each(function(i, el){el.style.display="none";});

console.log("Script finished!");

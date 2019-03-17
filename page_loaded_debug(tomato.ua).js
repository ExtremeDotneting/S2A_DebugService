try {

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

    function tomatoUA_Hidder(){
        var header=$("header")[0];
        hideElement(header);

        var belowHeader=$(".breadcrambs")[0];
        hideElement(belowHeader);

        var closeWrap=$(".close-wrap")[0];
        hideElement(closeWrap);

        var smarerbanner=$("#smartbanner")[0];
        hideElement(smarerbanner);

        var googleAutoPlaced=$(".google-auto-placed")[0];
        hideElement(googleAutoPlaced);

        var mobileShow=$(".mobile_show")[0];
        hideElement(mobileShow);

        var section_similar_restaurants=$(".section-similar_restaurants")[0];
        hideElement(section_similar_restaurants);

        var footer=$("footer")[0];
        hideElement(footer);

        var seoBlock=$(".seo-block")[0];
        hideElement(seoBlock);

        var restMobileHeaderType=$(".rest_mobile_header__type")[0];
        hideElement(restMobileHeaderType);

        // document.getElementsByClassName("action_panel--item").classList.add('custom-class');
        // document.getElementsByClassName("custom-class").classList.remove('action_panel--item');
        //
        var customElem =$(".action_panel--item")[0];
        customElem.style.backgroundColor="red";
        //
        // document.body.style.backgroundColor = 'red';

        //$(".rest_mobile_header.active:before").each(function(i, el){el.style.display="none";});
        $(".page_col1").each(function(i, el){el.style.display="none";});

    }

    var url=window.location.href;
    if(url.indexOf("//tomato.ua") !== -1){
        tomatoUA_Hidder();
    }
    if(url.indexOf("//tomato.ua") !== -1){

    }

    console.log("Script finished!");

}catch(ex){
    Native.ShowMsg(ex);
    throw ex;
}

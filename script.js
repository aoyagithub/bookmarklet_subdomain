javascript:(
    function(){
        currentURL = location.href
        if ( currentURL.indexOf('www') != -1) {
            redirectURL = currentURL.replace('www', 'www.dev');
            location.href = redirectURL;
        } 
    }
  )();
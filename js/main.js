(function(window, document) {

    var Snap = require('vendor/snap.svg');


    /**
     *
     *  Check the page had loaded and is ready to run javascript stuffs
     *
     */
    if(document.readyState == 'complete' || document.readyState == 'interactive')
        init();
    else
        document.addEventListener("DOMContentLoaded", init);



    function init()
    {
        console.log('init():');
    } 
    
})(window, document);

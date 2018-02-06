onmessage = function(e) {
    console.log('Message received from main script ' + e);
    var interval = setInterval(
        function(){ 
            setTimeout(function(){ console.log('we pretended we waited') }, 3000);
            fetch('beyonce-a.jpg')
            .then(function(response) {
                return response.blob();
              }).then(function(myBlob) {
                  console.log(URL.createObjectURL(myBlob));
                var objectURL = URL.createObjectURL(myBlob);
                postMessage(objectURL); 
              });
            
        }, 
        9000
    );

    function myStopFunction() {
        clearInterval(interval);
    }
}
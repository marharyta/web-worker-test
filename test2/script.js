if (window.Worker) {
    const worker = new Worker('worker.js');
    worker.postMessage("get me images"); // Sending message as an array to the worker
    console.log('Message posted to worker');

    // worker.postMessage([first.value,second.value]);
    var result;
    var myImage = document.querySelector('img');
    worker.onmessage = function(e) {
      console.log('Message received from worker' + e.data);
      myImage.src = e.data;
    }; 
}
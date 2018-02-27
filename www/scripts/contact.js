(function() {

    var message = document.getElementById('message');


    // Change text inside send button on submit
    var send = document.getElementById('contact-submit');
    if(send) {
      send.onclick = function() {
        this.innerHTML = '...Sending';
        alert(`sending email: ${message.value}`)
      }
    }

})();

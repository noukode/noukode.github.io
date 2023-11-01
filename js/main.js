AOS.init();
function sendMessage() {
    let chat_id = 832974752;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let text =
        'Name : ' + name + '\nEmail : ' + email + '\nMessage:\n' + message;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.location.href = document.URL;
        }
    };
    xhttp.open(
        'POST',
        'https://api.telegram.org/bot1831433851:AAHyI_o4WNHY-Ljy5evW_Z-oM88Wvh1lXAQ/sendMessage',
        true
    );
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(
        JSON.stringify({
            chat_id: chat_id,
            text: text,
        })
    );
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        // center: true,
        items:5,
        loop:true,
        margin:10,
        nav:true,
        stagePadding:200,
        autoplay:true,
        responsive:{
            600:{
                items:2
            }
        }
    });
})

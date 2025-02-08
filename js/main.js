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

let project;

$(document).ready(function(){
    $.ajax({ 
        type: 'GET', 
        url: '/js/skill.json',
        dataType: 'json',
        success: function (data) { 
            console.log(data);
            let html = ``;
            let i = 100;
            data.forEach(item => {
                html += `
                <div
                    class="col-3 col-lg-1 mb-3"
                    data-aos="fade-down"
                    data-aos-offset="20"
                    data-aos-delay="${i}"
                >
                    <div class="card">
                        <img
                            src="img/${item.image}"
                            class="card-img-top text-center"
                            alt="${item.name}"
                        />
                        <div class="card-body text-center p-0">
                            <span class="mx-auto" style="font-size: 12px;white-space:nowrap;">${item.name}</span>
                        </div>
                    </div>
                </div>
                `
                i += 100;
            })
            $('#tools').html(html);
        }
    });
    $.ajax({ 
        type: 'GET', 
        url: '/js/learning.json',
        dataType: 'json',
        success: function (data) { 
            console.log(data);
            let html = ``;
            let i = 100;
            data.forEach(item => {
                html += `
                <div
                    class="col-3 col-lg-1 mb-3"
                    data-aos="fade-down"
                    data-aos-offset="20"
                    data-aos-delay="${i}"
                >
                    <div class="card">
                        <img
                            src="img/${item.image}"
                            class="card-img-top"
                            alt="${item.name}"
                        />
                        <div class="card-body text-center p-0">
                            <span class="mx-auto" style="font-size:12px;white-space:normal;">${item.name}</span>
                        </div>
                    </div>
                </div>
                `
                i += 100;
            })
            $('#learning').html(html);
        }
    });
    $.ajax({ 
        type: 'GET', 
        url: '/js/education.json',
        dataType: 'json',
        success: function (data) { 
            let html = ``;
            data.forEach(item => {
                html += `
                <li>
                    <div class="icon">
                        <i class="text-dark bi bi-mortarboard-fill"></i>
                    </div>
                    <span class="time">${item.start} - ${item.end}</span>
                    <h5>${item.name} - ${item.major}</h5>
                    <p>${item.detail}</p>
                </li>
                `
            })
            $('#education').html(html);
        }
    });
    $.ajax({ 
        type: 'GET', 
        url: '/js/job.json',
        dataType: 'json',
        success: function (data) { 
            let html = ``;
            data.forEach(item => {
                html += `
                <li>
                    <div class="icon">
                        <i class="text-dark bi bi-briefcase-fill"></i>
                    </div>
                    <span class="time">${item.start} - ${item.end}</span>
                    <h5>${item.major} - ${item.name}</h5>
                    <p>${item.detail}</p>
                </li>
                `
            })
            $('#job').html(html);
        }
    });
    $.ajax({ 
        type: 'GET', 
        url: '/js/project.json',
        dataType: 'json',
        success: function (data) { 
            project = data;
            let html = ``;
            data.sort((a, b) => b.id - a.id).forEach(item => {
                html += `<div
                class="card card-project bg-dark"
                data-bs-toggle="modal"
                data-bs-target="#projectModal"
                data-id="${item.id}"
                >
                    <img
                        src="img/${item.cover}"
                        class="card-img"
                        alt="${item.name}"
                    />
                    <div class="card-img-overlay">
                        <div class="card-text">${item.category}</div>
                        <div class="card-title h4 mt-4">
                            ${item.name}
                        </div>
                    </div>
                </div>`
            })
            $('#project').html(html);
            $('.owl-carousel').owlCarousel({
                // center: true,
                items:5,
                loop:true,
                margin:10,
                nav:true,
                stagePadding:0,
                autoplay:true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2,
                    },
                    768:{
                        items:2,
                    },
                    992:{
                        items:3,
                    },

                }
            });
        }
    });

    $('#project').on('click', '.card-project', function(e){
        console.log($('#projectModalLabel'));
        let data = project.find(item => item.id === $(this).data('id'));
        $('#projectModalLabel').html(data.name);

        let body = `
            <p class="fw-bold">Description :</p>
                <p>${data.desc}</p>
                <p class="fw-bold">Type :</p>
                <p>${data.type}</p>
                <p class="fw-bold">${data.subTitle} :</p>
                <ul>
                    ${data.detailsSubTitle.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p class="fw-bold">Technology :</p>
                <ul>
                ${data.techStack.map(item => `<li>${item}</li>`).join('')}
                </ul>
        `;
        $('#projectModalBody').html(body);
    })
})

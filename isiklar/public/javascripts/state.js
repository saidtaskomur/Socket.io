function doldur(){
    var button;
    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=UTF-8",
        url: window.location + 'findAll',
        method: "GET",
        async: false,
        success: function (data) {
            for(var i=1; i<= data.length;i++){
                button =  "<button onclick='yaksondur(" +data[i-1]['light_id'] + ");' id='l" + i  + "' class='card card - 1'><p class='light-text'>Light" + i  + "</p > <img class='icon' src='images/bulb.png' alt='' srcset=''></button>";
                document.getElementById('container').innerHTML += button;
            }
            for(var i=1; i<= data.length;i++)
            {
                if (data[i-1]['state'] == false) {
                    $('#l' + data[i - 1]['light_id']).css('background', '#231F20');
                }
                else {
                    $('#l' + data[i - 1]['light_id']).css('background', 'yellow');
                }
            }
        },
        error: function (e) {
            console.log(e);
        }

    });
}
doldur();
//Make Connection
var socket = io.connect('http://localhost:8080');

//Query Dom

function yaksondur(id){
    console.log("tiklanan buton l"+ id);
    
    var data = {
        id : id,
    }
    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=UTF-8",
        url: window.location+'users/lambayak',
        method: "POST",
        async: false,
        data : JSON.stringify(data),
        success: function (data) {
            socket.emit('state', {
                id: id,
                state : data.value
            });
            
        },
        error: function (e) {
            console.log(e);
        }

    });
}
//Listen for evens

socket.on('state', function (data) {
    if (data.state == false) {
        $('#l' + data.id).css('background', '#231F20');
    }
    else {
        $('#l' + data.id).css('background', 'yellow');
    }
});


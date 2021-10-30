function setlinks() {
    var vlinkp2 = document.getElementById("vlink2").value;

    var vlinkp1 = document.getElementById("vlink1").value;

    var OutputValue1 = document.getElementById("OutputValue1");
    while(OutputValue1.firstChild)OutputValue1.removeChild(OutputValue1.firstChild)
    var vlinkpp1 = document.createTextNode(vlinkp1);
    OutputValue1.appendChild(vlinkpp1);

    var OutputValue2 = document.getElementById("OutputValue2");
    while(OutputValue2.firstChild)OutputValue2.removeChild(OutputValue2.firstChild)
    var vlinkpp2 = document.createTextNode(vlinkp2);
    OutputValue2.appendChild(vlinkpp2);

    var OutputValue22 = document.getElementById('OutputValue22'); // grabs #my-div
    var vliframe2 = document.createElement('iframe'); // creates a new img element
    vliframe2.setAttribute('src', vlinkp2); // adds a src attribute (with the value myPath) to myImg
    vliframe2.setAttribute('width',"100%"); // adds a src attribute (with the value myPath) to myImg
    vliframe2.setAttribute('height',"560"); // adds a src attribute (with the value myPath) to myImg

    OutputValue22.appendChild(vliframe2);

    var OutputValue11 = document.getElementById('OutputValue11'); // grabs #my-div
    var vliframe1 = document.createElement('iframe'); // creates a new img element
    vliframe1.setAttribute('src', vlinkp1); // adds a src attribute (with the value myPath) to myImg
    vliframe1.setAttribute('width',"100%"); // adds a src attribute (with the value myPath) to myImg
    vliframe1.setAttribute('height',"560"); // adds a src attribute (with the value myPath) to myImg
    vliframe1.setAttribute('float',"left"); // adds a src attribute (with the value myPath) to myImg

    OutputValue11.appendChild(vliframe1);
    }
    function openTheWindow() {
        var myWindow = window.open("https://diycharles.github.io/webplayer/MultiMedia.html?","_blank",
    "toolbar,scrollbars,resizable,top=500,left=500");
    }
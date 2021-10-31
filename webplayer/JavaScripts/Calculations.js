function setlinks() {
    let sourcenump = document.getElementById("sourcenum").value;

    if ( sourcenump == 2) {
        var screensizep = "width: 50%; float: left;";
    }
    else if (sourcenump == 3){
        var screensizep = "width: 33%; float: left;";
    }
    else if (sourcenump == 4){
        var screensizep = "width: 50%; height: 400; float: left;";
    }
    else {
        var screensizep = "width: 20%; float: left;";
    };

     var cont1 = document.getElementById("cont1");
     cont1.setAttribute("style", screensizep);
     var cont2 = document.getElementById("cont2");
     cont2.setAttribute("style", screensizep);
     var cont3 = document.getElementById("cont3");
     cont3.setAttribute("style", screensizep);
     var cont4 = document.getElementById("cont4");
     cont4.setAttribute("style", screensizep);
    // document.getElementById("cont1")[0].setAttribute("style", screensizep);
    
    // document.getElementById("cont1").style = screensizep;
    // document.getElementById("cont2").style = screensizep;

    // document.getElementById("cont3").style = screensizep;

    var OutputValues = document.getElementById("OutputValues");
    while(OutputValues.firstChild)OutputValues.removeChild(OutputValues.firstChild)
    var screensizepp = document.createTextNode(screensizep);
    OutputValues.appendChild(screensizepp);

    var OutputValuep = document.getElementById("OutputValuep");
    while(OutputValuep.firstChild)OutputValuep.removeChild(OutputValuep.firstChild)
    var sourcenumpp = document.createTextNode(sourcenump);
    OutputValuep.appendChild(sourcenumpp);

    var vlinkp2 = document.getElementById("vlink2").value;

    var vlinkp1 = document.getElementById("vlink1").value;

    var vlinkp3 = document.getElementById("vlink3").value;

    var vlinkp4 = document.getElementById("vlink4").value;

    var OutputValue1 = document.getElementById("OutputValue1");
    while(OutputValue1.firstChild)OutputValue1.removeChild(OutputValue1.firstChild)
    var vlinkpp1 = document.createTextNode(vlinkp1);
    OutputValue1.appendChild(vlinkpp1);

    var OutputValue2 = document.getElementById("OutputValue2");
    while(OutputValue2.firstChild)OutputValue2.removeChild(OutputValue2.firstChild)
    var vlinkpp2 = document.createTextNode(vlinkp2);
    OutputValue2.appendChild(vlinkpp2);
    
    var OutputValue3 = document.getElementById("OutputValue3");
    while(OutputValue3.firstChild)OutputValue3.removeChild(OutputValue3.firstChild)
    var vlinkpp3 = document.createTextNode(vlinkp3);
    OutputValue3.appendChild(vlinkpp3);

    var OutputValue4 = document.getElementById("OutputValue4");
    while(OutputValue4.firstChild)OutputValue4.removeChild(OutputValue4.firstChild)
    var vlinkpp4 = document.createTextNode(vlinkp4);
    OutputValue4.appendChild(vlinkpp4);

    var OutputValue44 = document.getElementById('OutputValue44'); // grabs #my-div
    var vliframe4 = document.createElement('iframe'); // creates a new img element
    vliframe4.setAttribute('src', vlinkp4); // adds a src attribute (with the value myPath) to myImg
    vliframe4.setAttribute('width',"100%"); // adds a src attribute (with the value myPath) to myImg
    vliframe4.setAttribute('height',"450"); // adds a src attribute (with the value myPath) to myImg

    OutputValue44.appendChild(vliframe4);

    var OutputValue33 = document.getElementById('OutputValue33'); // grabs #my-div
    var vliframe3 = document.createElement('iframe'); // creates a new img element
    vliframe3.setAttribute('src', vlinkp3); // adds a src attribute (with the value myPath) to myImg
    vliframe3.setAttribute('width',"100%"); // adds a src attribute (with the value myPath) to myImg
    vliframe3.setAttribute('height',"450"); // adds a src attribute (with the value myPath) to myImg

    OutputValue33.appendChild(vliframe3);

    var OutputValue22 = document.getElementById('OutputValue22'); // grabs #my-div
    var vliframe2 = document.createElement('iframe'); // creates a new img element
    vliframe2.setAttribute('src', vlinkp2); // adds a src attribute (with the value myPath) to myImg
    vliframe2.setAttribute('width',"100%"); // adds a src attribute (with the value myPath) to myImg
    vliframe2.setAttribute('height',"450"); // adds a src attribute (with the value myPath) to myImg

    OutputValue22.appendChild(vliframe2);

    var OutputValue11 = document.getElementById('OutputValue11'); // grabs #my-div
    var vliframe1 = document.createElement('iframe'); // creates a new img element
    vliframe1.setAttribute('src', vlinkp1); // adds a src attribute (with the value myPath) to myImg
    vliframe1.setAttribute('width',"100%"); // adds a src attribute (with the value myPath) to myImg
    vliframe1.setAttribute('height',"450"); // adds a src attribute (with the value myPath) to myImg

    OutputValue11.appendChild(vliframe1);
    }
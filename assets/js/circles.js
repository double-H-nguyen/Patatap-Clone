var circles = []; //create empty array

//create an object where each key is a property of keyData, but is also an object that contains sound and color properties
//this is more efficient that switch statements
var keyData = {
    q: {
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
    t: {
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
    d: {
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            src: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            src: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            src: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}

// When a key is pressed, a circle is created at a random point
function onKeyDown(event) {
    //check if key exist in keyData object
    if (keyData[event.key]) {
        //gather maximum width and height using paper.js properties
        var maxPoint = new Point(view.size.width, view.size.height);
        //generate random point
        var randomPoint = Point.random();
        //assign a random point within maxPoint
        var point = maxPoint * randomPoint;
        //create circle
        var newCircle = new Path.Circle(point, 300);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        //add circle to array
        circles.push(newCircle);
    }
    
    /*remove overlay*/
    $("#overlay").hide("fade", 500, function(){
        $("#overlay").removeClass("overlayBackground");
        $("#overlay_text").removeClass("overlayText");
    });
}

//update properties every new frame
function onFrame(event) {
    for(var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1; //add 1 to rgb color
        circles[i].scale(.9); //multiply current size by .9; this will make the circles progressively smaller
        if (circles[i].area < 1) {
            circles[i].remove(); //remove from canvas
            circles.splice(i, 1); //removes circle from array
            i--; //decremet i so that the loop doesn't skip a circle due to .splice()
            //console.log(circles.length);
        }
    }
}

/*Show overlay at beginning*/
$("#overlay").show("fade", 1000, function(){
    $("#overlay").toggleClass("overlayBackground");
    $("#overlay_text").toggleClass("overlayText");
});




var index = 0;
onload = imageFlow();

function imageFlow() {
    var sum = 3;
    var images = document.getElementsByClassName("img");
    var points = document.getElementsByClassName("point");

    for(var loop=0; loop<images.length; loop++) {
        images[loop].style.display="none";
        points[loop].style.color="gray";
    }

    images[index++%3].style.display="block";
    points[index%3].style.color="red";

    return setTimeout(imageFlow, 2000);
}
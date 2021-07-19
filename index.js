//Images

var img = ["2.webp", "3.webp", "4.webp", "5.webp", "6.webp"];

function displayImg() {
    var num = Math.floor(Math.random() * (img.length));
    document.pics.src = "images/" + img[num];
}

//Background Color

var background_color = ["#71EFA3", "#ECEFA4", "#D54C4C", "#9B72AA", "#C1AC95"]

function color() {
    var num = Math.floor(Math.random() * (background_color.length));
    document.body.style.backgroundColor = background_color[num];
}

//Font Size

var size = ["1rem", "1.8rem", "2rem"]

function text_size() {
    var num = Math.floor(Math.random() * (size.length));
    document.getElementById("text").style.fontSize = size[num];
}

//Font Style

var family = ["Courier", "Comic Sans MS", "Luminari", "American Typewriter", "Verdana"]

function text_style() {
    var num = Math.floor(Math.random() * (family.length));
    document.getElementById("text").style.fontFamily = family[num];
}

//Adding Text

function add_text() {
    var text = document.getElementById("input").value;

    var para = document.createElement("p");
    para.id = "text";

    var node = document.createTextNode(text);
    para.appendChild(node);
    
    var her = document.getElementById("paragraph");
    her.appendChild(para);
}
function TSwitch(){
    document.getElementById("child2").style.display = "none";
    document.getElementById("child3").style.display = "none";
    document.getElementById("child1").style.display = "none";
    document.getElementById("TrevorImgOpenTab").style.display = "block";
    document.getElementById("TrevorTBox1").style.display = "block"
    document.getElementById("TrevorTBox2").style.display = "block"
    document.getElementById("TrevorTBox3").style.display = "block"
    document.getElementById("child1").style.marginTop = "0px"
    document.getElementById("child1").style.justifyContent = "space-evenly"
}
function TCloseTab(){
    document.getElementById("child2").style.display = "block";
    document.getElementById("child3").style.display = "block";
    document.getElementById("child1").style.display = "block";
    document.getElementById("TrevorImgOpenTab").style.display = "none";
    document.getElementById("TrevorTBox1").style.display = "none"
    document.getElementById("TrevorTBox2").style.display = "none"
    document.getElementById("TrevorTBox3").style.display = "none"
    alert("AHH")
}
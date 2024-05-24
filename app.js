let text = document.getElementById("text-box");

text.addEventListener('input', function(){
    let data = this.value;
    document.getElementById("char").innerHTML = data.length;
    
    let finalData = data.trim().split(" ").filter(function(ele){
        return ele != "";
    });
    document.getElementById("word").innerHTML = finalData.length;
});

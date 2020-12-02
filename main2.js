var N ='';
//var name_list = [];

function addText(){
    var div = document.getElementById("content");
    div.innerHTML += "<br>"+ text
}
eel.expose(addText);

function getTime(){
    const re =/[0-5][0-9]:[0-5][0-9]/;
    x = document.getElementById("theTime").value;
    if (!re.exec(String(x))) {
        alert("Please enter a valid duration");
    }
    else {
        window.location.href = "add_werewolf.html";
    }
}
    
function getNumber(){
    N = document.getElementById("theNumber").value;
    var name_list = [];
    if (isNaN(parseInt(N)) || N<6 || N>30) {
        alert("Please enter a number between 6 and 30");
    }
    else {
        sessionStorage.setItem("N", N);
        sessionStorage.setItem("name_list", name_list);
        window.location.href = "add_player.html";
    }
}

function addPlayers(){
    N = sessionStorage.getItem("N");
    //alert(N);
    //alert("function started");
    var i;
    var players = document.getElementById("playerNames");
    //var player = document.getElementById("firstplayer");
    //var test = Object.assign({}, player);
    //alert(typeof(players));
    var para = document.createElement("INPUT");
    //para.setAttribute("type", "text");
    //para.id = "test";
    //document.getElementById("test").placeholder = "Player";
    //var node = document.createTextNode("This is a new paragraph.");
    //para.appendChild(node);
    //players.appendChild(para);
        for (i = N; i >= 1; i--) {
            //alert(i);
            //id = "Player " + String(i)
            para.placeholder = "Enter name";
            //players.appendChild(para);
            //players.appendChild(test);
            players.insertBefore(para.cloneNode(true), players.childNodes[0]);
        }
    //sessionStorage.setItem("names", names);
    //alert(names[0].value);
    }
   
function checkPlayers(){
    var players = document.getElementById("playerNames");
    names = players.children;
    //var name_list = sessionStorage.getItem("name_list");
    var name_list = [];
    //alert(name_list[1]);
    var i;
    var test = 0;
    for (i = 0; i < names.length; i++) {
        //names_list.push(names[i].value)
        name_list.push(names[i].value);
        if (names[i].value ==''){
            test = 1;
        }
    }
    if (test){
        alert("please write all names")
    }
    else{
        //alert(names[1].value);
        //name_list.join(',');
        sessionStorage.setItem("name_list", name_list);
        window.location.href = "discussion_duration.html";
    }
}

function writePlayers1(){
    window.location.href = "add_player.html";
    writePlayers();
    }

function writePlayers(){
    //window.location.href = "add_player.html";
    N = sessionStorage.getItem("N");
    names = sessionStorage.getItem("names");
    name_list = sessionStorage.getItem("name_list");
    name_list2 = name_list.join(',');
    //alert(name_list);
    //window.location.href = "add_player.html";
    var players = document.getElementById("playerNames");
    //names = sessionStorage.getItem("names");
    var i;
    var j = 0;
    var s = '';
    var test = 0;
    if(name_list.length){
    for (i = 0; i < N; i++) {
        players.children[i].value = name_list2[2*i];
    }
    }

}

function checkWerewolves(){
    N = sessionStorage.getItem("N");
    w = document.getElementById("wereNumber").value;
    if (isNaN(parseInt(N)) || w < 0.35*N) {
        alert("The number of werewolves should be at least 35% of the total number of players");
    }
    else {
        window.location.href = "game_page.html";
    }
}


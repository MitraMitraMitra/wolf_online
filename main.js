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
    //var name_list = [];
    if (isNaN(parseInt(N)) || N<6 || N>30) {
        alert("Please enter a number between 6 and 30");
    }
    else {
        sessionStorage.setItem("N", N);
        //sessionStorage.setItem("name_list", name_list);
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
    var s = '';
    var i;
    var j;
    var test = 0;
    for (i = 0; i < names.length; i++) {
        //names_list.push(names[i].value)
        name_list.push(names[i].value);
        if (names[i].value ==''){
            test = 1;
        }
    }

    for (i = 0; i < names.length; i++) {
        s = names[i].value;
        while (s[s.length-1] == ' '){
            s = s.substr(0,s.length-1);
            //alert(s.length);
        names[i].value = s;
        }
    }

    for (i = 0; i < names.length; i++) {
        for (j = 0; j < names.length; j++) {
            if (i!=j && names[i].value == names[j].value){
                test = 2;
            }
        }
    }
    //alert(name_list[3]);
    if (test == 1){
        alert("please write all names")
    }

    else if (test == 2){
        alert("please keep the names unique")
    }

    else{
        //alert(names[1].value);
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
    //names = sessionStorage.getItem("names");
    name_list = sessionStorage.getItem("name_list");
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
            //alert(names[i].value);
            if(i<N-1){
               s = '';
               while (name_list[j]!=','){
                      s = s + name_list[j];
                      j++;
               }
               players.children[i].value = s;
               j++;
            }
            else{
                s = '';
                while (j < name_list.length){
                    s = s + name_list[j];
                    j++;
                }
                players.children[i].value = s;
            }
            
        }
    }
    

}

function checkWerewolves(){
    N = sessionStorage.getItem("N");
    w = document.getElementById("wereNumber").value;
    if (isNaN(parseInt(N)) || w < 0.35*N) {
        alert("The number of werewolves should be an integer larger or equal to 35% of the total number of players");
    }
    else if (N-w < 3){
        var x = N-3;
        var s = 'Too many werewolves! For '+N+' players, the maximum number is '+x+'.';
        alert(s);
    }
    else{
        sessionStorage.setItem("w", w);
        window.location.href = "game_page.html";
    }
}

function revealPlayers(){
    N = sessionStorage.getItem("N");
    name_list = sessionStorage.getItem("name_list");
    var grid = document.getElementById("theGrid");
    var grid2 = document.getElementById("theGrid2");
    var cards = grid.children;
    var cards2 = grid2.children;
    var i;
    var j = 0;
    var s = '';
    var test = 0;
    if(name_list.length){
    for (i = 0; i < N; i++) {
            //alert(names[i].value);
            if(i<N-1){
               s = '';
               while (name_list[j]!=','){
                      s = s + name_list[j];
                      j++;
               }
               cards[i].innerHTML = s;
               j++;
            }
            else{
                s = '';
                while (j < name_list.length){
                    s = s + name_list[j];
                    j++;
                }
                cards[i].innerHTML = s;
            }
            
        }
    }

    var players = [];
    //var i;
    for (i = 0; i < N; i++) {
        players.push('v');
    }

    sessionStorage.setItem("players", players);

    //var grid = document.getElementById("theGrid");
    //var grid2 = document.getElementById("theGrid2");
    //var cards = grid.children;
    //var cards2 = grid2.children;
    setTimeout(function(){fadeIn(cards,N,0.1)},100);
    setTimeout(function(){fadeIn(cards2,4,0.1)},100);
    //cards.style.backgroundColor = "white";
    setTimeout(function(){fadeIn(cards,N,0.3)},250);
    setTimeout(function(){fadeIn(cards2,5,0.3)},250);
    //setTimeout(function(){fadeIn(cards,5,0.8)},500);
    setTimeout(function(){fadeIn(cards,N,0.5)},300);
    setTimeout(function(){fadeIn(cards2,5,0.5)},300);
    setTimeout(function(){fadeIn(cards,N,0.7)},350);
    setTimeout(function(){fadeIn(cards2,5,0.7)},350);
    setTimeout(function(){fadeIn(cards,N,1)},450);
    //setTimeout(function(){fadeIn(cards2,1,1)},450);

    var validClick = 0;
    sessionStorage.setItem("c", validClick);
}

function fadeIn(x,y,z){
    for (i = 0; i < y; i++){
        x[i].style.opacity = z;
    }
}

function click1(x){
    check();
    //var players = sessionStorage.getItem("players");
    var y = document.getElementById(String(x));
    var i;
    var cards = document.getElementById("theGrid");
    var cards2 = document.getElementById("theGrid2");
    if (y.style.opacity > 0){
        y.style.opacity = 1;
        for (i = 0; i < N; i++){
            if (i+1 != x){
                cards.children[i].style.opacity = 0.65;
            }
        }
        available();
        sessionStorage.setItem("lastClicked",x);
    }
    //alert(players[1]);
    //validClick = sessionStorage.getItem("c");
    var validClick = 1;
    sessionStorage.setItem("validClick",validClick);
}

function available(){
    var players = sessionStorage.getItem("players");
    N = sessionStorage.getItem("N");
    w = sessionStorage.getItem("w");
    var i;
    var werewolf_count = 0;
    var witch_count = 0;
    var hunter_count = 0;
    var seer_count = 0;
    //test_list = [];
    //alert(players);
    for (i = 0; i < 2*N; i++){
        //test_list.push(players[i]);
        if (players[i] == 'f'){
            werewolf_count++;
        }

        if (players[i] == 'w'){
            //alert("Found witch!");
            witch_count++;
        }

        if (players[i] == 'h'){
            hunter_count++;
        }

        if (players[i] == 's'){
            seer_count++;
        }
    }
    //alert(test_list);
    //alert(w_count);
    card = document.getElementById(31);
    card.style.opacity = 1;
    if (w > werewolf_count){
        card = document.getElementById(32);
        card.style.opacity = 1;
    }

    if (1 > hunter_count){
        card = document.getElementById(33);
        card.style.opacity = 1;
    }

    if (1 > witch_count){
        card = document.getElementById(34);
        card.style.opacity = 1;
    }

    if (1 > seer_count){
        card = document.getElementById(35);
        card.style.opacity = 1;
    }
}

function click2(x){
    N = sessionStorage.getItem("N");
    var y = document.getElementById(String(x));
    var cards = document.getElementById("theGrid");
    var cards2 = document.getElementById("theGrid2");
    //if (y.style.backgroundImage == 'url("witch-card.png")'){
    //    alert("Yaay!");
    //alert(y.style.backgroundImage);
    //}
    if (y.style.opacity == 1){
        lastClicked = sessionStorage.getItem("lastClicked");
        var player_card = document.getElementById(String(lastClicked));
        //alert("checking the ifs");
        //alert(layer.style.backgroundImage);
        if (x == 31){
            player_card.style.backgroundImage = 'url("user.png")';
            fadeIn(cards.children,N,1);
            fadeIn(cards2.children,5,0.7);
        }

        if (x == 32){
            player_card.style.backgroundImage = 'url("werewolf-card.png")';
            fadeIn(cards.children,N,1);
            fadeIn(cards2.children,5,0.7);
        }

        if (x == 33){
            player_card.style.backgroundImage = 'url("hunter-card.png")';
            fadeIn(cards.children,N,1);
            fadeIn(cards2.children,5,0.7);
        }
        if (x == 34){
            player_card.style.backgroundImage = 'url("witch-card.png")';
            fadeIn(cards.children,N,1);
            fadeIn(cards2.children,5,0.7);
        }

        if (x == 35){
            player_card.style.backgroundImage = 'url("seer-card.png")';
            fadeIn(cards.children,N,1);
            fadeIn(cards2.children,5,0.7);
        }

        N = sessionStorage.getItem("N");
        validClick = sessionStorage.getItem("validClick");
        var players = sessionStorage.getItem("players");
        var y = document.getElementById(x);
        //alert(y.textContent);
        var i;
    }
}

function check(){
    var players = sessionStorage.getItem("players");
    var N = sessionStorage.getItem("N");
    //w = sessionStorage.getItem("w");
    var grid = document.getElementById("theGrid");
    var cards = grid.children;
    var i;
    var werewolf_count = 0;
    var witch_count = 0;
    var hunter_count = 0;
    var seer_count = 0;
    for (i = 0; i < N; i++){
        //test_list.push(players[i]);
        if (cards[i].style.backgroundImage == 'url("werewolf-card.png")'){
            werewolf_count++;
        }

        if (cards[i].style.backgroundImage == 'url("witch-card.png")'){
            //alert("Found witch!");
            witch_count++;
        }

        if (cards[i].style.backgroundImage == 'url("hunter-card.png")'){
            hunter_count++;
        }

        if (cards[i].style.backgroundImage == 'url("seer-card.png")'){
            seer_count++;
        }
    }
        players = [];
        while (werewolf_count){
            werewolf_count--;
            players.push('f');
        }

        while (witch_count){
            witch_count--;
            players.push('w');
        }

        while (hunter_count){
            hunter_count--;
            players.push('h');
        }

        while (seer_count){
            seer_count--;
            players.push('s');
        }
    //alert(players);
    sessionStorage.setItem("players",players);
}


var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var start = false;
var commands = [];

setTimeout(function () {
    loopLines(home, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);


//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine("c:\\user\\guest> " + command.innerHTML, "no-animation command2", 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
    }
    if (e.key === "/") {
        // Set the focus on the textarea element
        textarea.focus();
    }
}



function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "list":
            loopLines(list, "color2 margin", 150);
            break;
        case "about":
            loopLines(about, "color2 margin", 80);
            break;
        case "sudo":
            addLine("Oh no, you're not admin...", "color2", 80);
            setTimeout(function () {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            }, 1000);
            break;
        case "social":
            loopLines(social, "command2 margin", 80);
            break;
        case "secret":
            loopLines(secret, "color2 margin", 80);
            break;
        case "uses":
            addLine(`<br> I frequently gets questions about different tect stuffs that I use,`, "color2", 80);
            addLine("Actually no one cares enough to ask me what I use 😓", "color2", 80);
            addLine(`Anyways, here's a list of stuffs that fits my daily routine and requirments <br>`, "color2", 80);
            loopLines(uses, "color2 margin", 200);
            break;
        case "credits":
            loopLines(credits, "color 2", 100);
            break;

        case "projects":
            loopLines(projects, "color2 margin", 80);
            break;
        case "password":
            addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
            break;
        case "history":
            addLine("<br>", "", 0);
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;
        case "email":
            addLine('Opening mailto:<a href="mailto:heetjpande@gmail.com">heetjpande@gmail.com</a>...', "color2", 80);
            newTab(email);
            break;
        case "cls":
        case "clear":
            setTimeout(function () {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "home":
            loopLines(home, "", 80);
            break;
        case "shutdown":
        case "quit":
            addLine('closing window in...3', "color2", 1000);
            addLine('closing window in...2', "color2", 1100);
            addLine('closing window in...1', "color2", 1200);
            addLine('Bye...', "color2", 1300);
            shutdown();
            // window.close();
            break;
        // socials
        case "twitter":
            addLine("Opening Twitter...", "color2", 0);
            newTab(twitter);
            break;
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            newTab(linkedin);
            break;
        case "instagram":
            addLine("Opening Instagram...", "color2", 0);
            newTab(instagram);
            break;
        case "github":
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
            break;
        // case "":
        //     addLine(" is not recognized as an internal or external command. <br> For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
        //     break;
        default:
            addLine('"' + cmd + `" is not recognized as an internal or external command. <br> For a list of commands, type <span class=\"command\">'help'</span>.</span>`, "error", 100);
            // addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}



function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}

function shutdown(){
    setTimeout(function () {
        window.close();
    }, 2500);
}
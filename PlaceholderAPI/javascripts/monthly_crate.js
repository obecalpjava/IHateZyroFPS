var placeholder = "%ecfree_halloween_left%";

function tag() {
    if(placeholder == "1") {
        return "Next open will give";
    } 
    return placeholder+" opens left till";
}
tag();
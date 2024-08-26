var placeholder = "%ecfree_rival_left%";

function tag() {
    if(placeholder == "1") {
        return "Next open will give";
    } 
    return placeholder+" opens left till";
}
tag();
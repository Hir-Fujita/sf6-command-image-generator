
import data from "./character.json" with { type: "json" }
const character_data = data

const submit_butoon = document.getElementById("submit_button")
const input_command = document.getElementById("input_command")
const character_name = document.getElementById("character_select_box")

submit_butoon.addEventListener("click", click_button)

function click_button () {
    var json = {}
    json["command"] = input_command.value
    json["name"] = character_name.value
    json["type"] = get_control_type()
    json["move_name_flag"] = document.getElementById("move_name_flag").checked
    json["command_flag"] = document.getElementById("command_flag").checked
    console.log(json)
}

function append_character_list () {
    var select = document.getElementById("character_select_box")
    var key = Object.keys(character_data)
    for (let i=0; i < key.length; i++){
        var option = document.createElement("option")
        option.text = key[i]
        option.value = key[i]
        select.appendChild(option)
    }
}

function get_control_type () {
    let value = ""
    let elements = document.getElementsByName("control_type")
    for (let i=0; i < elements.length; i++){
        if (elements.item(i).checked){
            value = elements.item(i).value
        }
    }
    return value
}

append_character_list()
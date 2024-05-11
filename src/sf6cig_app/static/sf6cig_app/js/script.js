
import data from "/static/sf6cig_app/character.json" with { type: "json" }
const character_data = data

const submit_butoon = document.getElementById("submit_button")
const input_command = document.getElementById("input_command")
const character_name = document.getElementById("character_select_box")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const test_imgage = document.getElementById("test_image_file")
var num = 1

image_changed("/static/sf6cig_app/images/" + num + ".png")

submit_butoon.addEventListener("click", click_button)

function click_button () {
    var json = {}
    json["command"] = input_command.value
    json["name"] = character_name.value
    json["type"] = get_control_type()
    json["move_name_flag"] = document.getElementById("move_name_flag").checked
    json["command_flag"] = document.getElementById("command_flag").checked
    console.log(json)
    num += 1
    if (num > 9) {
        num = 1
    }
    image_changed("/static/sf6cig_app/images/" + num + ".png")
}

function image_changed(image_path) {
    let image = new Image()
    image.src = image_path
    console.log(image)
    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    image.onload = () => {
        canvas.width = image.width
        canvas.height = image.height
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
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
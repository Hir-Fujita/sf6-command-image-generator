import json
from PIL import Image

def command_image_create(j_data: json):
    data = json.load(j_data)
    print(data)
    command = str(data["command"])
    command = command.replace("しゃがみ", "2")
    print(command)


with open("test_command.json", "r", encoding="utf-8") as f:
    command_image_create(f)


import os
import base64
files = os.listdir("image")
print(files)
for file in files:
    with open(f"image/{file}", "rb") as f:
        data = base64.b64encode(f.read())
    
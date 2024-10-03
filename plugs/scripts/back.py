#python script for generating background image


from PIL import Image,ImageDraw

png = Image.new("RGBA",(1920,1080),(0,0,0,0))

draw = ImageDraw.Draw(png)
offset = 1
for i in range(0,900):
    draw.line((0,1080+offset,1920,540+offset),(127,127,127,255))
    draw.line((0,540-offset,1920,0),(0,0,0,255))
    offset+=1



png.save("back.png")

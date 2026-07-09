import qrcode

url = "https://santyamaya98.github.io/my-portfolio/"

img = qrcode.make(url)

img.save("SantiCVQR.png")

print("QR code created!")
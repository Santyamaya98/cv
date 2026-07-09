import qrcode

url = "https://santyamaya98.github.io/cv/complements.html"

img = qrcode.make(url)

img.save("SantiCVQRDocuments.png")

print("QR code created!")
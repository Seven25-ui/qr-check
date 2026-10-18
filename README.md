# QR Check

A small web tool that does two things:

- **Scan** a QR code with your camera and see where the link goes before you open it. It flags warning signs like shortened links, raw IP addresses, look-alike domains, and unencrypted links.
- **Make QR** codes from an image (uploaded to Cloudinary), a link, or any text, and download them as PNG.

Live demo: https://seven25-ui.github.io/qr-check/

## How to use

1. Open the live demo (camera scanning needs https).
2. Scan tab: press Start camera, or use Scan from image.
3. Make QR tab: for image QR codes, add your free Cloudinary cloud name and an Unsigned upload preset once. They are saved only in your browser.

## Privacy

- Nothing is sent to a server of mine. Scan history and settings stay in your browser's local storage.
- Images uploaded through Make QR are public to anyone with the link.
- On a shared computer, use a private window.

## Built with

HTML, CSS, JavaScript, jsQR, qrcode-generator, Cloudinary.

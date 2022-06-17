# ParseGPS
Small script to parse location coordinates from images in folder and combine data in json file.

>$ node parseGPS.js &lt;`./path/to/images`&gt; &lt;`outputFile.json`&gt;

Example usage:

    $ node parseGPS.js ./images/ output.json

It will take all of the photos from the `images` folder and create file in format:
```
[
  {
    "src": "path/to/image.jpg",
    "latitude": 50.000000,
    "longitude": 30.000000
  },
  {
    "src": "path/to/image.heic",
    "latitude": 50.000000,
    "longitude": 30.000000
  },
]
``` 
> ## ⚠️ Files without location will be <span style='color:tomato'>ignored</span>

|Image format supports||
|-|-|
| JPEG | ✔ 
| TIFF/IIQ | ✔ 
| HEIF (HEIC, AVIF) | ✔ 
| PNG | ✔ 
| JPG/JPEG | ✔ 
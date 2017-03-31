# Überblick

## Kontakt

Golo Roden

- [golo.roden@thenativeweb.io](mailto:golo.roden@thenativeweb.io)
- [@goloroden](https://twitter.com/goloroden)
- [@thenativeweb](https://twitter.com/thenativeweb)

## Termine

- 18.03.2017
- 31.03.2017
- 21.04.2017
- 12.05.2017 (nur Praxis)
- 26.05.2017
- 02.06.2017
- 16.06.2017
- 23.06.2017 (halber Tag)

## npm-Aufrufe

```bash
# Install latest version of Express
$ npm install express

# Install specific version of Express
$ npm install express@x.y.z

# Install and save to package.json
$ npm install <module> --save --save-exact

# Install everything registered in package.json
$ npm install
```

## OpenSSL-Aufrufe

```bash
# Create a private key
$ openssl genrsa -out privateKey.pem 4096

# Create a certificate signing request (CSR)
$ openssl req -new -key privateKey.pem -out csr.pem

# Create the certificate
$ openssl x509 -in csr.pem -out certificate.pem -req -signkey privateKey.pem -days 365
```

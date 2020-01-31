# Stakenet (XSN) Lightning Network Explorer


[![Build Status](https://travis-ci.org/cwntr/recksplorer.svg?branch=master)](https://travis-ci.org/cwntr/recksplorer)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0fa383aa05e4837a40176d27032baf7)](https://www.codacy.com/manual/cwntr/recksplorer?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cwntr/recksplorer&amp;utm_campaign=Badge_Grade)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)


This is a simple lightning network explorer that uses [LND](https://github.com/X9Developers/DexAPI/releases) or [c-lightning](https://github.com/cwntr/lightning) as a source of network graph. You can see it live on [http://ln.stakenet.info](https://lightning.stakenet.info) 


## Installation

Clone repository:

```
git clone https://github.com/cwntr/recksplorer.git
```

Install npm dependencies (inside project folder):

```
npm install
```

## Running

### Requirements

If connecting to a remote LND, you need to set `lndHost` and `lndDir` params. `lndDir` must have `admin.macaroon` and `tls.cert` files.

For `c-lightning` set `--daemon clightning` and specify `clightningDir` if not using default location. Note that c-lightning supplies less data about channels than LND.

For full configuration options use `node server.js --help` or see `options.js` file.

### Start the server

```
node server.js
```

### Running in production mode (faster, without hot module reload)

```
npm run build
NODE_ENV=production node server.js
```

## Credits


Thanks to https://github.com/mably/lncli-web for `lightning.js` grpc wrapper.

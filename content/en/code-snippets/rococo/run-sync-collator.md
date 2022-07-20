---
title: Run and sync collator
---

```
#Rococo’s chainspec can be found here: https://paritytech.github.io/chainspecs/
./target/release/parachain-collator \
--[your authority] \
--collator \
--force-authoring \
--[your chainspec] \
--base-path /tmp/parachain/alice \
--port 40333 \
--ws-port 8844 \
-- \
--execution wasm \
--chain <relay chain raw chain spec> \
--port 30343 \
--ws-port 9977
```

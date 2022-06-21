---
title: Build parachain using para ID
---

```
# You will need to generate a chainspec with the correct paraID from the previous step
# Assumes that `rococo-local` is in `node/chan_spec.rs` as the relay you registered with
./target/release/parachain-collator build-spec --disable-default-bootnode > rococo-local-parachain-plain.json
```

---
title: Register Wasm and chain spec
---

```
#Obtain Wasm runtime validation function
./target/release/parachain-collator export-genesis-wasm --chain [your_chainspec] > [your_wasm_file_name]

#Generate a parachain genesis state
./target/release/parachain-collator export-genesis-state --chain [your_chainspect]> [your_genesis_file_name]

# Extrinsic to be called on chain
Registrar.register(paraID, genesisHead, validationCode)
```

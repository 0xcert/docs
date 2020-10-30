# Atomic operations

Atomic operations are the corner store that allowed us to create 0xcert API and perform decentralized transaction through a centralized API. Atomic operation is a set of instructions for what you will execute in a single transaction and with only two possible results. Either the transaction will succeed and all participants will receive their assets, or the transaction will fail and the operation will return to its starting point. You can read more about atomic transactions [here](https://0xcert.org/news/dex-series-7-atomic-swaps).

## How 0xcert API leverages atomic operations

The 0xcert protocol which is permanently deployed on the Ethereum blockchain makes atomic operations extreamly powerful. It allows us to perform a blockchain transaction that results in multiple actions between multiple parties. All we need for this is a signature from all the parties that they allow us to perform a transaction with those specific actions.

0xcert API leverages this functionality so that users are always the owners of all the blockchains ledger and assets without needing to create a single blockchain transaction or own any Eth. They only need a private key to sign actions they want to perform and 0xcert API handles all the rest.

## NO ETH transaction

Since the user does not actually perform a transaction on the blockchain but only signs it with their wallet they do not need any ETH. 0xcert API handles all the transaction payments and everything around it to make sure it completes successfully. 0xcert API however does charge for transactions. You can read more about this in the [Get credits]() section.

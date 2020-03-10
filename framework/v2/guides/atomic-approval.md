# Atomic approval

The main purpose of atomic approval is to delegate ETH execution to a third party enabling ETH-less transactions.

There are two different atomic approvals. One is approving usage of assets on an `AssetLedger` to a third party. The second is approving value transfer of Dapp token - DZXC (classic ERC20 contracts do not have this capability) to a third party. Learn more about Dapp tokens [here](https://0xcert.org/news/dapp-token-zxc-economy).

The difference with doing a normal approval is that in an atomic action you specify: who you are approving (same as doing a normal approval), the receiver of a value transaction (fee), and the executor of the order (can be set to a direct address or anyone). This enables approval in a fashion that the user defines an order and value transfer of some token, and anyone, willing to execute the approval for the value fee, can do it.

Atomic approval, like atomic order, is created through the `Gateway`, which, as its name suggests, is the gateway to the 0xcert protocol smart contract, deployed on the network and enabling atomic operations.

Let's check out an example for atomic approval.

## Prerequisites

In this guide, we will assume you have gone through the [Value Management](/framework/v2/api/value-management.html) guide and have a `ValueLedger` deployed as well as a deployed `AssetLedger` through the [Asset Management](/framework/v2/api/asset-management.html) guide. You will also need two MetaMask accounts (create them through your MetaMask plug-in) with some ETH available.

In case of Dapp token approval you will only need a deployed Dapp token address and ownership of some Dapp tokens.

## Installation

We recommend you employ the package as an NPM package in your application.

```ell
$ npm i --save @0xcert/ethereum-gateway
```

In our official [GitHub repository](https://github.com/0xcert/framework), we also host a compiled and minimized JavaScript file that can be directly implemented in your website. Please refer to the [API](/api/core.html) section to learn more about the gateway.

## Initialization

As usual, we first import a module into the application. This time, we import the `Gateway` class, which represents a wrapper around a specific pre-deployed structure on the Ethereum network.

```ts
import { Gateway } from '@0xcert/ethereum-gateway';
```

Then, we create a new instance of the `Gateway` class with an ID that points to a pre-deployed gateway on the Ethereum Ropsten network (this option can also be configured in the provider).

```ts
const gateway = Gateway.getInstance(provider, buildGatewayConfig(NetworkKind.ROPSTEN));
```

`buildGatewayConfig` will always return the latest contract versions for a specific package version. If you want to configure gateway config on your own, you can find our already deployed addresses [here](/framework/v2/api/ethereum-connectors.html#public-addresses).

## AssetSetOperatorOrder

::: card Live example
Click [here](https://codesandbox.io/s/github/0xcert/example-asset-set-operator-order?module=%2FREADME.md) to check the live example for the asset set operator order.
:::

In an asset set operator order we are always the ones that are the owner of the asset and are allowing someone else to be an operator. We are the only participant in this order since the operator usually is not another person but a smart contract. The main purpose is that we don't need to perform this operation ourselves but someone else will do it for us in exchange for value transfer.

```ts
const order = {
  kind: OrderKind.ASSET_SET_OPERATOR_ORDER,
  ledgerId: '0x...', // Asset ledger address for which we will be granting approval.
  owner: '0x...', // account1 defining the order and the one who is granting permission.
  operator: '0x...', // account2 the one that operator permission will be granted to.
  isOperator: true, // True or false depending if we are granting or revoking operator permission.
  tokenTransferData: {
    ledgerId: '0x..', // valueLedgerId that we created in the previous guide
    value: "100000000000000000000" // 100 tokens
  },
  seed: Date.now(), // unique order identification
  expiration: Date.now() + 86400000, // 1 day
} as AssetSetOperatorOrder;
```

Since we are transferring some value, we also have to approve the `ledgerId` for transferring it. We do this by calling approveValue upon the `ValueLedger` instance of the ledger we are transferring tokens from. We also need to specify the amount of value we are approving for transfer.

::: tip
If we approve a huge amount of value (max is 2^256-1), we only need to approve it once per ledger, otherwise we would run out of allowance.
:::

```ts
const mutation = await valueLedger.approveValue("100000000000000000000", order.ledgerId);
await mutation.complete();
```

Now we can sign the order, and then send the signature, as well as the order definition, through arbitrary channels to the account that will execute it.

```ts
const signature = await gateway.sign(order); 
```

In this guide, we will switch to another MetaMask account to execute the order.

```ts
const mutation = await gateway.perform(order, signature);
await mutation.complete();
```

If we did everything correctly, the atomic swap would perform successfully; otherwise, an error will be thrown, specifying what went wrong.

## DappValueApproveOrder

In an dapp value approve order we are always the ones that are the owner of the value and are approving someone else. We are the only participant in this order since the spender usually is not another person but a smart contract. The main purpose is that we don't need to perform this operation ourselves but someone else will do it for us in exchange for some of the dapp tokens.

```ts
const order = {
  kind: OrderKind.DAPP_VALUE_APPROVE_ORDER,
  ledgerId: '0x...', // Address of the Dapp token.
  approver: '0x...', // Address approving the third party.
  spender: '0x...', // Address that is getting approved.
  value: '100000000000000000000', // The amount for which approver is approving the spender.
  feeRecipient: '0x...', // Address that will receive the fee for performing this transaction. Can be null meaning anyone can perform this transaction an automatically become the fee recipient.
  feeValue: '10000', // Amount of dapp tokens that the fee recipient will get.
  seed: Date.now(), // unique order identification
  expiration: Date.now() + 86400000, // 1 day
} as DappValueApproveOrder;
```

Now we can sign the order, and then send the signature, as well as the order definition, through arbitrary channels to the account that will execute it.

```ts
const signature = await gateway.sign(order); 
```

Now the `feeRecipient` address can perform the order.

```ts
const mutation = await gateway.perform(order, signature);
await mutation.complete();
```

If we did everything correctly, the atomic swap would perform successfully; otherwise, an error will be thrown, specifying what went wrong.

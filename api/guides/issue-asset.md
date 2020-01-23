# Issue asset

It this guide we we will issue a new asset (to ourselfs) on an existing asset ledger.

::: card Live example
Click [here](https://codesandbox.io/s/github/0xcert/api-example-order?module=%2FREADME.md) to check the live example for this section. There are multiple actions in this example.
:::

## Prerequisites

In this guide, we will assume you have gone through the [Asset ledger deployment](asset-ledger-deployment.html#asset-ledger-deployment) guide and have deployed an asset ledger. You will also need a MetaMask/Bitski account with some credits.

## Usage overview

We begin by importing the client modules.

```ts
import { ActionCreateAsset, ActionKind, Client, Priority } from "@0xcert/client";
```

Before we can start issuing assets we must initialize our client first.

```ts
const client = new Client({
  provider,
  apiUrl: 'https://api.0xcert.org',
});
await client.init();
```
::: warning
For successful client initialization you need connected 0xcert framework provider instance. See [Using providers](providers.html#providers) chapter for detailed instructions. Your provider must be connected to `Rinkeby` Ethereum test network.
:::

Once client is initialized, we define our create asset action.

```ts
const actionCreateAsset: ActionCreateAsset = {
  kind: ActionKind.CREATE_ASSET,
  assetLedgerId: ledger.id,
  senderId: provider.accountId,
  receiverId: provider.accountId,
  id: '100',
  imprint: 'd747e6ffd1aa3f83efef2931e3cc22c653ea97a32c1ee7289e4966b6964ecdfb',
};
```
To create a new asset we need to generate its imprint. You can learn more about generating imprints in the [Certification](certification.html#certification) guide. As `assetLedgerId` we must provide the ID of our newly deployed asset ledger from guide [Asset ledger deployment](asset-ledger-deployment.html#asset-ledger-deployment) or any other deployed ledger. As `senderId` we set `provider.accountId`, which means that we will be signing asset creation order. We set the asset's id to `100`, and for the `receiverId`, we set `provider.accountId`, which means we are creating asset for ourselves.

::: tip
The `provider.accountId` is your currently selected provider account. If you want someone else to be the receiver, enter their account address instead.
:::

::: tip
The account address set as `senderId` must have the ability to sign an asset creation order.
:::

After we defined our create asset action, it's time to define our order which will perform the defined action.

```ts
const order = {
  signersIds: [
    provider.accountId
  ],
  actions: [
    actionCreateAsset,
  ],
  wildcardSigner: false,
  automatedPerform: true,
  payerId: provider.accountId,
};
```

Order must be signed by all of the accounts specified in `signersIds` array. In our case, we are creating asset for ourself, so we are the only signer of the order. We add our defined crete asset action in `actions` array. There can be multiple different actions present in one order and they will be atomically performed. If `wildcardSigner` is set to `true` order can be signed by any account. In our case we need only our signature for the order to be successfully performed, so we set `wildcardSigner` to `false`. We want our order to be performed as soon as it can be, so we enable automated performance of the order by setting `automatedPerform` to `true`. Order will be automatically performed after all of the requirements of the order are fulfilled. If `automatedPerform` was set to `false` we would need to call `performOrder(orderRef)` function after the order creation. As `payerId` we set `provider.accountId`, so we will be paying for the execution of the order.

::: warning
If payer is not specified `wildcardSigner` field must be set to `true` and order's payer will be set automatically. If payer is specified it must be listed as order signer in `signersIds` array.
:::

After our actions order is defined we can finally create it.

```ts
const actionsOrder = await client.createOrder(order, Priority.HIGH).then((data) => data.data);
```

::: warning
Make sure you have enough credits to perform this action.
:::

Since actions order performance might take some time, we can check the order's status by requesting its data.

```ts
const status = await client.getOrder(actionsOrder.ref).then((data) => data.data.status);
```

If the status of the action order equals to `7`, we know that our order was performed successfully and asset was issued. Now we can request our newly created asset.

```ts
const asset = await client.getLedgerAsset(ledger.ref, '100').then((data) => data.data);
```
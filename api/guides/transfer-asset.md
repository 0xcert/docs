# Transfer asset

## Prerequisites

In this guide, we will assume you have gone through the [Asset ledger deployment](asset-ledger-deployment.html#asset-ledger-deployment) guide and have deployed an asset ledger and that you have gone trough [Issue asset](asset-ledger-deployment.html#asset-ledger-deployment) guide and created asset. You will also need a MetaMask/Bitski account with some credits.

## Usage overview

We begin by importing the client modules.

```ts
import { ActionTransferAsset, ActionKind, Client, Priority } from "@0xcert/client";
```

Before we can start transferring assets we must initialize our client first.

```ts
const client = new Client({
  provider,
  apiUrl: 'https://api.0xcert.org',
});
await client.init();
```
::: warning
For successful client initialization you need connected 0xcert framework provider instance. See [Using providers]() chapter for detailed instructions. Your provider must be connected to `Rinkeby` Ethereum test network.
:::

Once client is initialized, we define our create asset action.

```ts
const actionTransferAsset: ActionTransferAsset = {
  kind: ActionKind.TRANSFER_ASSET,
  assetLedgerId: ledger.id,
  senderId: provider.accountId,
  receiverId: '0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa',
  id: asset.id,
};
```
As `assetLedgerId` we must provide the ID of our newly deployed asset ledger from guide [Asset ledger deployment](asset-ledger-deployment.html#asset-ledger-deployment) or any other deployed ledger. We specify which issued asset we want to transfer by setting `id` to the ID of the asset. We can use asset we created in guide [Issue asset]() or any other created asset that we own.

::: warning
Asset with the provided ID must exists on the provided asset ledger.
:::

As `senderId` we set `provider.accountId`, which means that we will be sending the asset to the receiver. We must specify the receiver of the asset by setting `receiverId` to receiver's address.

::: tip
Account address specified as `senderId` can only transfer asset if they are either the asset's owner or if they have been authorized by the asset's owner and have the ability to operate with it on their behalf.
:::

After we defined our transfer asset action, it's time to define our order which will perform the defined action.

```ts
const order = {
  signersIds: [
    provider.accountId
  ],
  actions: [
    actionTransferAsset,
  ],
  wildcardSigner: false,
  automatedPerform: true,
  payerId: provider.accountId,
};
```

Order must be signed by all of the accounts specified in `signersIds` array. In our case, we are transferring our asset, so we are the only signer of the order. We add our defined transfer asset action in `actions` array. There can be multiple different actions present in one order and they will be atomically performed. If `wildcardSigner` is set to `true` order can be signed by any account. In our case we need only our signature for the order to be successfully performed, so we set `wildcardSigner` to `false`. We want our order to be performed as soon as it can be, so we enable automated perform of the order by setting `automatedPerform` to `true`. Order will be automatically performed, after all of the requirements of the order are fulfilled. If `automatedPerform` was set to `false` we would need to call `performOrder(orderRef)` function after the order creation. As `payerId` we set `provider.accountId`, so we will be paying for the execution of the order.

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

If the status of the action order equals to `7`, we know that our order was performed successfully and asset was transferred.
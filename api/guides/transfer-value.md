# Transfer value

In this guide we will transfer value to a specific receiver. For simplicity we will be transfering credits since you already obtained them. But credits can only transfered to one specific address. This is because credits are made to be used only for a specific purpose. When you want to transfer some other ERC20 token you can transfer to anyone.

::: card Live example
Click [here](https://codesandbox.io/s/github/0xcert/api-example-order?module=%2FREADME.md) to check the live example for this section. There are multiple actions in this example.
:::

## Prerequisites

You will need a MetaMask/Bitski account with some credits.

## Usage overview

We begin by importing the client modules.

```ts
import { ActionTransferValue, ActionKind, Client, Priority } from "@0xcert/client";
```

Before we can start transferring `ERC20` assets we must initialize our client first.

```ts
const client = new Client({
  provider,
  apiUrl: 'https://api-rinkeby.0xcert.org',
});
await client.init();
```
::: warning
For successful client initialization you need connected 0xcert framework provider instance. See [Using providers](providers.html#providers) chapter for detailed instructions. Your provider must be connected to `Rinkeby` Ethereum test network.
:::

Once client is initialized, we define our transfer value action.

```ts
const actionTransferValue: ActionTransferValue = {
  kind: ActionKind.TRANSFER_VALUE,
  valueLedgerId: '0xDaD2363a110309a294973da86c9C3681154394Ff',
  senderId: provider.accountId,
  receiverId: '0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa',
  value: 100
};
```
As `valueLedgerId` we must provide the ID representing Ethereum `ERC20` smart contract address on which the value will be transferred. As `senderId` we set `provider.accountId`, which means that we will be sending the asset to the receiver. We must specify the receiver of `ERC20` assets by setting `receiverId` to receiver's address.

::: warning
Make sure you have enough `ERC20` assets of the provided `valueLedgerId` smart contract to perform this action.
:::

After we defined our transfer tokens action, it's time to define our order which will perform the defined action.

```ts
const order = {
  signersIds: [
    provider.accountId
  ],
  actions: [
    actionTransferValue,
  ],
  wildcardSigner: false,
  automatedPerform: true,
  payerId: provider.accountId,
};
```

Order must be signed by all of the accounts specified in `signersIds` array. In our case, we are transferring our assets, so we are the only signer of the order. We add our defined transfer value action in `actions` array. There can be multiple different actions present in one order and they will be atomically performed. If `wildcardSigner` is set to `true` order can be signed by any account. In our case we need only our signature for the order to be successfully performed, so we set `wildcardSigner` to `false`. We want our order to be performed as soon as it can be, so we enable automated performance of the order by setting `automatedPerform` to `true`. Order will be automatically performed after all of the requirements of the order are fulfilled. If `automatedPerform` was set to `false` we would need to call `performOrder(orderRef)` function after the order creation. As `payerId` we set `provider.accountId`, so we will be paying for the execution of the order. To learn more about different scenarios check out the [Additional scenarios](additional-scenarios.html) section.

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

If the status of the action order equals to `7`, we know that our order was performed successfully a `ERC20` assets were transferred.
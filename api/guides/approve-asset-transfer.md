# Approve asset transfer

As we mentioned before 0xcert API is fully decentralized and you are always in control of your assets. Because of that if you transfer an asset to a new owner and he would try to transfer if again that transfer would fail. Why is that? That is because he needs to first allow 0xcert API to transfer assets in his name (with the help of his signature). This is why he needs to do two steps before transferring the asset. 

1. He needs to approve value transfer for specific `assetLedger` of which he wants to transfer assets.
2. He approves 0xcert API for asset transfer.
3. Now he can [normally](transfer-asset.html) transfer the asset.

To explain the steps. First, he needs to approve value transfer so that we can take fee payment for execution. Second, he creates approval for transfer for which we take the fee. Finally, he transfers the asset. Note that each user only needs to do this once, after that he can transfer any amount of assets from this asset ledger. 

::: card Live example
Click [here](https://codesandbox.io/s/github/0xcert/api-example-approval?module=%2FREADME.md) to check the live example for this section.
:::

## Prerequisites

In this guide, we will assume you have gone through the [Asset ledger deployment](asset-ledger-deployment.html#asset-ledger-deployment) guide and have deployed an asset ledger.

## Usage overview

We begin by importing the client modules.

```ts
import { Client, Priority } from "@0xcert/client";
```

Before we can start transferring assets we must initialize our client first.

```ts
const client = new Client({
  provider,
  apiUrl: 'https://api-rinkeby.0xcert.org',
});
await client.init();
```
::: warning
For successful client initialization, you need connected 0xcert framework provider instance. See [Using providers](providers.html#providers) chapter for detailed instructions. Your provider must be connected to `Rinkeby` Ethereum test network.
:::

Once client is initialized, we define our value approve order.

```ts
const order =  {
  spender: '0x...', // Asset ledger Id.
  value: 100 // Amount for which we want to approve.
};
```

After our approve order is defined we can create it.

```ts
const valueApproveOrder = await client.createApproval(order, Priority.HIGH).then((data) => data.data);
```

::: warning
Make sure you have enough credits to perform this action.
:::

Since actions order performance might take some time, we can check the order's status by requesting its data.

```ts
const status = await client.getApproval(valueApproveOrder.ref).then((data) => data.data.status);
```

If the status of the order equals to `7`, we know that our order was performed successfully and value was approved.

Now we can approve asset for transfer. First lets create approve order:

```ts
const assetApproveOrder =  {
  ledgerId: '0x...', // Asset ledger Id.
  receiverId: '0x...', // Address to whom we are approving. 
  approve: true // Grant or remove approval.
};
```

To approve 0xcert API we set `receiverId` as transfer proxy which we can get like this:

```ts
import { Gateway } from '@0xcert/ethereum-gateway';
const gateway = Gateway.getInstance(provider, buildGatewayConfig(NetworkKind.RINKEBY));
const transferProxy = await gateway.getProxyAccountId(ProxyKind.TRANSFER_ASSET);
```

After we build out asset approve order we can create it like so:


```ts
const assetApproveOrder = await client.createApproval(assetApproveOrder, Priority.HIGH).then((data) => data.data);
```

And like with value approve order we can check upon its status like so:

```ts
const assetApproveOrderStatus = await client.getApproval(assetApproveOrder.ref).then((data) => data.data.status);
```

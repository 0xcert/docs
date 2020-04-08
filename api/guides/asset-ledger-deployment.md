# Asset ledger deployment

Asset ledger represents a non-fungible smart contract on the Ethereum blockchain. It represents a container holding assets of a specific type and format. In this guide we deploy a new asset ledger to the blockchain for our imaginary educational math course.

::: card Live example
Click [here](https://codesandbox.io/s/github/0xcert/api-example-deployment?module=%2FREADME.md) to check the live example for this section.
:::

## Prerequisites

In this guide, we will assume you have gone through the [Installation](installation.html#installation) guide and have installed the client npm package.

## Usage overview

We begin by importing the client modules.

```ts
import { AssetLedgerCapability, Priority, Client } from '@0xcert/client';
```

Before we can start with asset ledger deployment we must initialize our client first.

```ts
const client = new Client({
  provider,
  apiUrl: 'https://api-rinkeby.0xcert.org',
});
await client.init();
```
::: warning
For successful client initialization you need connected 0xcert framework provider instance. See [Providers](providers.html#providers) chapter for detailed instructions. Your provider must be connected to `Rinkeby` Ethereum test network.
:::

Once client is initialized, we define our asset ledger that we want to deploy.

```ts
const assetLedgerDeployment = {
  name: 'Math Course Certificate',
  symbol: 'MCC',
  uriPrefix: 'http://example-domain.com',
  uriPostfix: '.json',
  schemaId: '44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a',
  capabilities: [
    AssetLedgerCapability.TOGGLE_TRANSFERS,
    AssetLedgerCapability.DESTROY_ASSET,
    AssetLedgerCapability.REVOKE_ASSET,
    AssetLedgerCapability.UPDATE_ASSET
  ],
  ownerId: provider.accountId,
};
```

We describe our asset ledger by setting a `name` and a `symbol`. We decide where the asset metadata will live by defining the `uriPrefix` and `uriPostfix`. Asset's metadata is off-chain descriptive data about each asset. Combining the `uriPrefix` with asset ID and `uriPostfix`, we get the URI of each asset's metadata location. Through the [Certification](certification.html#certification), we define the schemaId, and through capabilities, we decide what additional functionalities the asset ledger will possess. We select the owner of the asset ledger by setting `ownerId` to owner's Ethereum account address. Owner will receive abilities of the deployed asset ledger. 

::: warning
Asset ledger's capabilities cannot be changed once a ledger is deployed.
:::

Finally, we create a deployment, that will deploy our new asset ledger to the Ethereum blockchain.

```ts
const deployment = await client.createDeployment(assetLedgerDeployment, Priority.HIGH).then((data) => data.data);
```

::: warning
Make sure you have enough credits to perform this action.
:::

Since deployment might take some time, we can check the deployment's status by requesting its data.

```ts
const status = await client.getDeployment(deployment.ref).then((data) => data.data.status);
```

If the status of the deployment equals to `7`, we know that our asset ledger was successfully deployed. Now we can request our deployed asset ledger data.

```ts
const ledger = await client.getLedger(deployment.ledgerRef).then((data) => data.data);
```

::: tip
You can also set up and receive webhooks. In this scenario you will receive webhooks when our deployment changes (updated or successful) or if it fails. You can learn more about webhooks in chapter [Webhooks](api/api/client.html#webhooks). 
:::

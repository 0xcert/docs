# Asset ledger deployment

Asset ledger represents a non-fungible smart contract on the Ethereum blockchain. It represents a container holding assets of a specific type and format. In this guide we deploy a new asset ledger to the blockchain for our imaginary educational math course.

We begin by importing the modules.

```ts
import { AssetLedgerCapability, Priority, Client } from '@0xcert/client';
```

Before we can start with asset ledger deployment we must initialize our client first.

```ts
const client = new Client({
  provider,
  apiUrl: 'https://api.0xcert.org',
});
await client.init();
```

Once client is initialized, we define our asset ledger that we want to deploy.

```ts
const assetLedgerDeployment = {
  name: 'Math Course Certificate',
  symbol: 'MCC',
  uriPrefix: 'http://example-domain.com',
  uriPostfix: '.json',
  schemaId: '0x3f4a0870cd6039e6c987b067b0d28de54efea17449175d7a8cd6ec10ab23cc5d',
  capabilities: [AssetLedgerCapability.TOGGLE_TRANSFERS],
  ownerId: '0xcc567f78e8821fb8d19f7e6240f44553ce3dbfce',
};
```

We describe our asset ledger by setting a `name` and a `symbol`. We decide where the asset metadata will live by defining the `uriPrefix` and `uriPostfix`. Asset's metadata is off-chain descriptive data about each asset. Combining the `uriPrefix` with asset ID and `uriPostfix`, we get the URI of each asset's metadata location. Through the [Certification guide](), we define the schemaId, and through [capabilities](), we decide what additional functionalities the asset ledger will possess. We select the owner of the asset ledger by setting `ownerId` to owner's Ethereum account address. Owner will receive abilities of the deployed asset ledger. 

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

Since deployment might take some time, we can check the deployment's status by requesting its data again.

```ts
const status = await client.getDeployment(deployment.data.ref).then((data) => data.data.status);
```

If the status of the deployment equals `7`, we know that our asset ledger was successfully deployed. Now we can request our deployed asset ledger data.

```ts
const ledger = await client.getLedger(deployment.ledgerRef);
```


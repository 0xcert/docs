# Set asset ledger abilities

Asset ledgers have an integrated permission system. Account that deploys a new asset ledger gets all permissions but other accounts are not able to create a new asset or update it etc. In this guide we will show how to set another accounts abilities.

::: card Live example
Click [here](https://codesandbox.io/s/github/0xcert/api-example-order?module=%2FREADME.md) to check the live example for this section. There are multiple actions in this example.
:::

## Prerequisites

In this guide, we will assume you have gone through the [Asset ledger deployment](asset-ledger-deployment.html#asset-ledger-deployment) guide and have deployed an asset ledger. You will also need a MetaMask/Bitski account with some credits.

## Usage overview

We begin by importing the client modules.

```ts
import { 
  ActionSetAbilities,
  ActionKind,
  Client,
  Priority,
  GeneralAssetLedgerAbility
} from "@0xcert/client";
```

Before we can start setting asset ledger abilities we must initialize our client first.

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

Once client is initialized, we define our set asset ledger abilities action.

```ts
const actionSetAbilities: ActionSetAbilities = {
  kind: ActionKind.SET_ABILITIES,
  assetLedgerId: ledger.id,
  senderId: provider.accountId,
  receiverId: '0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa',
  abilities: [
    GeneralAssetLedgerAbility.ALLOW_CREATE_ASSET,
    GeneralAssetLedgerAbility.ALLOW_UPDATE_ASSET
  ]
};
```

As `assetLedgerId` we must provide the ID of our newly deployed asset ledger from guide [Asset ledger deployment](asset-ledger-deployment.html#asset-ledger-deployment) or any other deployed ledger. As `senderId` we set `provider.accountId`, which means that we will be signing set asset ledger abilities order. We set the asset's id to `100`, and for the `receiverId`, we set `provider.accountId`, which means we are creating asset for ourselves. As `receiverId` we set the account address on which we want the ledger abilities to be set. You can choose the abilities that you want to set to the receiver from the list of possible [asset ledger abilities](https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html#ledger-abilities) .

::: tip
The account address set as `senderId` must have the ability to sign set asset ledger abilities order - `MANAGE_ABILITIES`.
:::

After we defined our set asset ledger abilities action, it's time to define our order which will perform the defined action.

```ts
const order = {
  signersIds: [
    provider.accountId
  ],
  actions: [
    actionSetAbilities,
  ],
  wildcardSigner: false,
  automatedPerform: true,
  payerId: provider.accountId,
};
```

Order must be signed by all of the accounts specified in `signersIds` array. In our case, we are the only signer of the order. We add our defined set asset ledger abilities action in `actions` array. There can be multiple different actions present in one order and they will be atomically performed. If `wildcardSigner` is set to `true` order can be signed by any account. In our case we need only our signature for the order to be successfully performed, so we set `wildcardSigner` to `false`. We want our order to be performed as soon as it can be, so we enable automated performance of the order by setting `automatedPerform` to `true`. Order will be automatically performed after all of the requirements of the order are fulfilled. If `automatedPerform` was set to `false` we would need to call `performOrder(orderRef)` function after the order creation. As `payerId` we set `provider.accountId`, so we will be paying for the execution of the order. To learn more about different scenarios check out the [Additional scenarios](additional-scenarios.html) section.

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

If the status of the action order equals to `7`, we know that our order was performed successfully and asset ledger abilities were set to the receiver. Now we can request a list of accounts that have abilities on our asset ledger, and receiver's address should be present.

```ts
const ledgerAccounts = await client.getLedgerAccounts(ledger.ref).then((data) => data.data);
```

::: tip
You can also set up and receive webhooks. In this scenario you will receive webhooks when our order changes (updated or successful) or if it fails. You can learn more about webhooks in chapter [Webhooks](api/api/client.html#webhooks). 
:::

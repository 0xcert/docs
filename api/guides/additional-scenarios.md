# Additional scenarios

In the guides we go trough all the actions that we can perform trough the 0xcert API. But all the scenarios are quite simple. You only have one signer (yourself), there is no wildcard signer and perform is automated. In this section we will go through other options and show you examples of how to do them.

## Prerequisites

In this guide, we will assume you have gone through the [Issue asset](issue-asset.html#issue-asset) guide. We will use this guide as the base and only show the differences for different scenarios.

## Multiple signers

In the Issue asset guide our order was defined as:

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

We will now change the order and give it some more signers. This means that to perform this order signatures from all listed accounts will be needed.
When we are only creating an asset this is an unnecessary step but if we look at a real world example where we would like to exchange multiple assets between multiple participants each of the participants signature would be required.

```ts
const order = {
  signersIds: [
    provider.accountId,
    "0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa",
    "0x44e44897FC076Bc46AaE6b06b917D0dfD8B2dae9",
  ],
  actions: [
    actionCreateAsset,
  ],
  wildcardSigner: false,
  automatedPerform: true,
  payerId: provider.accountId,
};
```

Now it the Issue asset guide we just needed to call:

```ts
const actionsOrder = await client.createOrder(order, Priority.HIGH).then((data) => data.data);
```

In the case of multiple signers we will also need to provide signatures from other participants for the order to perform.
From the call above we get an `orderRef` which we can now send through arbitrary channels to other participants.

Each of the participants will then need to sign it using `orderRef` like so:

```ts
await client.signOrder(orderRef);
```

When all participants signatures for this order will be provided the order will perform.

## Automated perform

In all the guide the orders `automatedPerform` parameter was set to `true`. Meaning the order will automatically perform when all the conditions are met. Lets see what the differences are when `automatedPerform` is set to `false`. 

First lets change the order Issue assets guide to reflect this:

```ts
const order = {
  signersIds: [
    provider.accountId
  ],
  actions: [
    actionCreateAsset,
  ],
  wildcardSigner: false,
  automatedPerform: false,
  payerId: provider.accountId,
};
```

In Issue asset guide we called:

```ts
const actionsOrder = await client.createOrder(order, Priority.HIGH).then((data) => data.data);
```

Then the order was created and since all conditions met it also performed. Now because the `automatedPerform` is set to `false` nothing happens. We can control when we want to perform this order or even cancel it like this:

```ts
await client.cancelOrder(orderRef);
```

When we decide we actually want to perform it we call:

```ts
await client.performOrder(orderRef);
```

## Wildcard signer

In all the scenarios and guide we always had to know beforehand who the participants in the order are. What about a case where we want to issue an asset to anyone who wants it? Or sell it to anyone willing to pay a certain amount? Well this is where the `wildcardSigner` comes into play.

First lets change the order Issue assets guide to reflect this:

```ts
const order = {
  signersIds: [
    provider.accountId
  ],
  actions: [
    actionCreateAsset,
  ],
  wildcardSigner: true,
  automatedPerform: true,
  payerId: provider.accountId,
};
```

By setting `wildcardSigner` to `true` we say that we need an additional signature for this order to perform and that signature can come from anyone. Now we need to actually change our order actions to take advantage of this.

This is the definition of out action from Issue asset guide.

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

Here we specified that we are the receiver of the asset. What we can do now is remove the `receiverId` or set it to `null` and the last signer will automatically be assigned as the receiver.

```ts
const actionCreateAsset: ActionCreateAsset = {
  kind: ActionKind.CREATE_ASSET,
  assetLedgerId: ledger.id,
  senderId: provider.accountId,
  id: '100',
  imprint: 'd747e6ffd1aa3f83efef2931e3cc22c653ea97a32c1ee7289e4966b6964ecdfb',
};
```

Now we can publically post `orderRef` and anyone willing to sign it will automatically become the receiver.

```ts
await client.signOrder(orderRef);
```

Another thing to note here is that for each action you can remove either `senderId` or `recieverId`. This makes it possible to create an order where you would create an asset to the unknown participant and he would need to transfer some tokens to you in return.
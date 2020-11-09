# Providers

As explained previously, the 0xcert Framework tends to be platform-agnostic, thus it is not created for merely one blockchain or one specific platform. It aims to provide a consistently optimal developing experience, regardless of the platform you employ. To achieve this, the 0xcert Framework consists of several modules, and each module needs a provider object to tell the module how to operate. 

Each provider operates on the same principles, but can also have its own distinctive characteristics. The current version of the Framework supports the Ethereum and the Wanchain blockchains. Soon, more platforms will be added.

Even within the same blockchain, you can use multiple providers depending on your needs. If you would like to communicate with the blockchain on the front-end, you could use [MetamaskProvider](/api/ethereum.html#metamask-provider), while for communication on the back-end you could use [HttpProvider](/api/ethereum.html#http-provider). For more information about other providers for Ethereum, please click [here](/api/ethereum.html#api-ethereum), and to learn more about providers for Wanchain, please click [here](/api/wanchain.html#api-wanchain).

In this guide, we will be using the MetaMask provider for the Ethereum blockchain. [MetaMask](https://metamask.io/) is a popular plug-in that allows you to create and store the private keys for your Ethereum account inside your browser or mobile device. It works as a bridge between your browser and the Ethereum blockchain through its own infrastructure. MetaMask can also be paired with hardware wallets such as [Ledger](https://www.ledger.com/) or [Trezor](https://trezor.io/).

::: card Live example
Click [here](https://codesandbox.io/s/github/0xcert/example-using-providers?module=%2FREADME.md) to check the live example for this section.
:::

## Installation process

We recommend you employ the provider module as an NPM package in your application.

```ell
$ npm i --save @0xcert/ethereum-metamask-provider
```

On our official [GitHub repository](https://github.com/0xcert/framework), we also host a compiled and minimized JavaScript file that can be directly implemented into your website. Please refer to the [API](/framework/v2/api/ethereum-connectors.html) section to learn more about other providers.

## Usage overview

To start developing the application, we have to first instantiate the [MetamaskProvider](/framework/v2/api/ethereum-connectors.html#metamask-provider) provider class. This is usually only needed once within the application.

```ts
import { MetamaskProvider } from '@0xcert/ethereum-metamask-provider';

const provider = new MetamaskProvider();
```

MetaMask needs to be authorized and unlocked to be used on the website. This is specific to this provider. Therefore, before you start interacting with the Ethereum node, you should check whether the MetaMask account has been enabled. If not, you have to enable it, as shown in the example below.

```ts
if (!await provider.isEnabled()) {
  await provider.enable();
}
```

Now that we're connected to the Ethereum blockchain, we can begin performing `query` and `mutation` requests.

::: tip
When you connect to MetaMask, `provider.accountId` represents your selected account.
:::

::: tip
Make sure your MetaMask account is connected to the Ethereum Ropsten network.
:::

::: tip
To perform this deployment step, you'll need to pay some gas on the Ethereum network. You can get free Ether in your wallet on the Ropsten network via [this link](https://faucet.ropsten.be/).
:::

## Error handling

If any error happens on the blockchain, providers are able to handle it and throw a meaningful error, so you know exactly what went wrong.

Error example: 

```ts
{
  name: 'ProviderError',
  issue: '001001',
  original: '', // optional
  message: 'Sender does not have sufficient balance.'
}
```

## Create your own provider

We have some predefined providers you can use out of the box, but if you have an alternative way you want to connect to the blockchain (e.g. you want to do raw transaction) you can write your own provider. This will show you the basic principles of creating your own provider.

All providers have the same structure which is provided by `GenericProvider`. Generic provider has a `client` which is the main part that we need to override to achieve custom functionality.

Client needs to have send function defined as this: 

```ts
public send(data: any, callback: (err, data) => any) { }
```

The `data` input is a JSON rpc call to an ethereum function. The callback data needs to be an object, consisting of `result` which is the rpc response, and `id` which needs to be the same as `data.id`. The rpc call and responses need to have the same `id`.

Input data example: 
```ts
{
  jsonrpc: '2.0',
  method: 'eth_sendTransaction',
  params: [{
    from: '0x...',
    to: '0x...',
    data: '0x...',
    gasPrice: '0x...',
    gas: '0x...'
  }],
  id: 12
}
```

Callback data example:
```ts
{
  result: '0x...', // transaction hash in case of eth_sendTransaction
  id: 12 // id of json rpc request
}
```


### Example 1 (using generic provider): 

```ts
import { GenericProvider } from '@0xcert/ethereum-generic-provider';

export class CustomClient {

  /**
   * Sends the RPC call.
   */
  public send(data: any, callback: (err, data) => any) {
    // 
  }
}

const provider = new GenericProvider({
  client = new CustomClient(),
});

```

### Example 2 (extending generic provider): 

```ts

import { GenericProvider } from '@0xcert/ethereum-generic-provider';

export class CustomProvider extends GenericProvider {

    /**
   * Class constructor.
   */
  public constructor(options: GenericProviderOptions) {
    super(options);

    this._options = options;
    this._client = this;
  }

  /**
   * Sends the RPC call.
   */
  public send(data: any, callback: (err, data) => any) {
    // 
  }

}

```
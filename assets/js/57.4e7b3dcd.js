(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{331:function(t,e,a){"use strict";a.r(e);var s=a(32),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"asset-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset-management"}},[t._v("#")]),t._v(" Asset management")]),t._v(" "),a("p",[t._v("When discussing assets, we think of different things of value. The simplest examples are the items you keep in your physical wallet, like cash in banknotes and coins, ID cards, a driver's license, credit cards, etc. While these items can all be classified as assets, when talking about an asset in the context of the 0xcert Framework, "),a("strong",[t._v("an asset represents something unique")]),t._v(".")]),t._v(" "),a("p",[t._v("So if we reconsider the items described above, some of them no longer fall into the category of an asset - namely banknotes and coins. Why is that? That is because if you exchange a $10 bill with Sara's $10 bill, you both will retain the same value. But if you exchange your ID card with Sara's, that ceases to be true. If you would like to know how to work with the kind of items holding the same value, such as banknotes and coins, check out the "),a("a",{attrs:{href:""}},[t._v("Value management guide")]),t._v(".")]),t._v(" "),a("p",[t._v("Another thing to consider is that the example above illustrated the use of physical items, whereas the 0xcert Framework allows for operations with digital unique (non-fungible) assets. Luckily, most physical items can be simply represented in a digital format using IDs and meta descriptions.")]),t._v(" "),a("p",[t._v("Unique digital assets are represented on the Ethereum blockchain following the "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("ERC-721")]),t._v(" standard. This standard defines how the basic smart contract looks like and how every non-fungible token is defined. To incorporate full-range functionalities, the 0xcert Framework enhanced the base ERC-721 code with additional functionalities to create what we now call an Xcert. Xcert is a fully ERC-721-compatible non-fungible token format with added "),a("a",{attrs:{href:""}},[t._v("certification")]),t._v(" and other useful functionalities.")]),t._v(" "),a("p",[t._v("Xcert is a smart contract that contains assets of a specific kind. When creating an Xcert, you define what properties the assets created within it will have. For example, let's say you are a KYC provider. You define what properties a KYC asset needs, and you create an Xcert with these properties defined. Now each KYC asset you issue on this smart contract needs to follow its rules. To learn more about this, check the "),a("a",{attrs:{href:""}},[t._v("certification")]),t._v(" section.")]),t._v(" "),a("p",[t._v("An asset ledger connects directly to an Xcert smart contract on the blockchain. Thus, the things you do with an asset ledger are directly reflected on the blockchain. An asset you create on an "),a("code",[t._v("AssetLedger")]),t._v(" directly translates to an asset created on the underlying "),a("code",[t._v("Xcert")]),t._v(" smart contract.")]),t._v(" "),a("p",[t._v("TLDR: An asset ledger is a container defining how assets in it look like. An asset, however, is a unique digital representation of an item that is created on an asset ledger and follows its definition.")]),t._v(" "),a("div",{staticClass:"card custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Live example")]),t._v(" "),a("p",[t._v("Click "),a("a",{attrs:{href:"https://codesandbox.io/s/github/0xcert/example-asset-management?module=%2FREADME.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("here")]),t._v(" to check the live example for this section.")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("We recommend you employ the asset ledger module as an NPM package in your application.")]),t._v(" "),a("div",{staticClass:"language-ell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm i --save @0xcert/ethereum-asset-ledger\n")])])]),a("p",[t._v("On our official "),a("a",{attrs:{href:"https://github.com/0xcert/framework",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("GitHub repository")]),t._v(", we also host a compiled and minimized JavaScript file that you can directly include in your website. Please refer to the "),a("RouterLink",{attrs:{to:"/api/core.html"}},[t._v("API")]),t._v(" section to learn more about asset ledger.")],1),t._v(" "),a("h2",{attrs:{id:"creating-a-new-assetledger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-assetledger"}},[t._v("#")]),t._v(" Creating a new AssetLedger")]),t._v(" "),a("p",[t._v("We begin by importing the modules.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AssetLedger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AssetLedgerCapability "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@0xcert/ethereum-asset-ledger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Now let's define the AssetLedger that we want to deploy.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assetLedgerDefinition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Math Course Certificate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("symbol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MCC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  uriPrefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://0xcert.org/assets/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  uriPostfix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  schemaId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3f4a0870cd6039e6c987b067b0d28de54efea17449175d7a8cd6ec10ab23cc5d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// base asset schemaId")]),t._v("\n  capabilities"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    AssetLedgerCapability"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REVOKE_ASSET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Here, we name and set a symbol to our asset ledger. We decide where the asset metadata will live (off-chain descriptive data about each asset) by defining the "),a("code",[t._v("uriPrefix")]),t._v(" and "),a("code",[t._v("uriPostfix")]),t._v(". Combining the "),a("code",[t._v("uriPrefix")]),t._v(" with asset ID and "),a("code",[t._v("uriPostfix")]),t._v(", we get the URI of each asset's metadata location. Through the "),a("a",{attrs:{href:""}},[t._v("Certification guide")]),t._v(", we define the schemaId, and through "),a("a",{attrs:{href:""}},[t._v("capabilities")]),t._v(", we decide what additional functionalities the asset ledger will possess (this cannot be changed once a ledger is deployed).")]),t._v(" "),a("p",[t._v("Finally, we deploy the asset ledger.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" AssetLedger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" assetLedgerDefinition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Deployment is an asynchronous action that is performed on the blockchain. Deployment thus returns a "),a("a",{attrs:{href:""}},[t._v("Mutation")]),t._v(" object, which allows us to properly react to this in a way that is most beneficial to the application and the user experience we want to create.")]),t._v(" "),a("p",[t._v("For this example, let's first show our user a transaction hash so they can see that something is happening and can check it in a block explorer.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transactionHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Now, since we cannot do anything until the asset ledger is deployed, we can wait for the transaction to be accepted onto the blockchain and then get the smart contract address of the newly created asset ledger.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" mutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assetLedgerId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("receiverId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Now that a new asset ledger has been deployed on the network, you can create a new instance of it.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assetLedger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AssetLedger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" assetLedgerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("To check if everything has been deployed as we wanted it, let's read the asset ledger information.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assetLedgerInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> { name: 'Math Course Certificate', symbol: 'MCC', uriPrefix: 'https://0xcert.org/assets/', uriPostfix: '.json', schemaId: '3f4a0870cd6039e6c987b067b0d28de54efea17449175d7a8cd6ec10ab23cc5d', supply: '0' }")]),t._v("\n")])])]),a("h2",{attrs:{id:"creating-a-new-asset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-asset"}},[t._v("#")]),t._v(" Creating a new asset")]),t._v(" "),a("p",[t._v("To create a new asset, let's first go through the "),a("a",{attrs:{href:""}},[t._v("Certification guide")]),t._v(" and generate an imprint. Now, we can create a new asset.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAsset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imprint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aa431acea5ded5d83ea45f1caf39da9783775c8c8c65d30795f41ed6eff45e1b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  receiverId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("We set the asset's "),a("code",[t._v("id")]),t._v(" to "),a("code",[t._v("100")]),t._v(", and for the "),a("code",[t._v("receiverId")]),t._v(", we set "),a("code",[t._v("provider.accountId")]),t._v(", which means we are creating it for ourselves. We are also waiting for the transaction to complete before we move onto the next stage.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("provider.accountId")]),t._v(" is your currently selected MetaMask account. If you want someone else to be the receiver, enter their address instead.")])]),t._v(" "),a("p",[t._v("Now that the asset is created, let's check who its owner is.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ownerId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAssetAccount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 0x...")]),t._v("\n")])])]),a("h2",{attrs:{id:"transfer-an-asset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-an-asset"}},[t._v("#")]),t._v(" Transfer an asset")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can only transfer an asset if you are either the asset owner or if you have been authorized by the asset owner to operate with it on their behalf.")])]),t._v(" "),a("p",[t._v("To transfer an asset, you only need to know the "),a("code",[t._v("id")]),t._v(" of the asset you want to transfer and who you want to transfer it to.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferAsset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    receiverId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Here, we specified "),a("code",[t._v("receiverId")]),t._v(" as "),a("code",[t._v("provider.accountId")]),t._v(", which means we are transferring this asset to ourselves. Change the receiverId to another address so that the asset will change ownership.")]),t._v(" "),a("p",[t._v("Verify that the asset has been successfully transferred by checking who its new owner is.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ownerId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAssetAccount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 0x...")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
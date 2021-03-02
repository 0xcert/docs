/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0xcert-framework.svg",
    "revision": "82d69102af8178f89d620d53a8dd46e1"
  },
  {
    "url": "0xcert-logo.svg",
    "revision": "780242d9a166ea4703aa89253b275583"
  },
  {
    "url": "api-icon.svg",
    "revision": "df67661118113e7c8d05ffbb9cd882e1"
  },
  {
    "url": "api/api/certification.html",
    "revision": "e86238e3169cd7220ca1c440af825ec9"
  },
  {
    "url": "api/api/client.html",
    "revision": "64ac69ae35d66578dfa64a955935b86c"
  },
  {
    "url": "api/api/rest.html",
    "revision": "fda19273204aec4aab43cc4a874b266c"
  },
  {
    "url": "api/guides/additional-scenarios.html",
    "revision": "074ac5ca3ea218cf3bf8d9f08c098fa5"
  },
  {
    "url": "api/guides/approve-asset-transfer.html",
    "revision": "f84fd3078a68850cbc68ce203a9c663f"
  },
  {
    "url": "api/guides/asset-ledger-deployment.html",
    "revision": "f86909d96cab9ae284c5128526f4e0e1"
  },
  {
    "url": "api/guides/atomic-operations.html",
    "revision": "3c65444ac85aa1272f435586cf7b6e28"
  },
  {
    "url": "api/guides/certification.html",
    "revision": "feab1e9e8920cb6da61c64c0fd4155ad"
  },
  {
    "url": "api/guides/dashboard.html",
    "revision": "b1c2456edede28c29f928f4f33d09844"
  },
  {
    "url": "api/guides/destroy-asset.html",
    "revision": "49513e5d95b52c5cad4c0b22619782a1"
  },
  {
    "url": "api/guides/fungible-values.html",
    "revision": "a521ba75d6cd0e7d5dc387ef230957b3"
  },
  {
    "url": "api/guides/get-credits.html",
    "revision": "258da80a6e1b5ab8c07dfc6b278ad952"
  },
  {
    "url": "api/guides/installation.html",
    "revision": "78a52acf6911c0312686ddbd445c4b19"
  },
  {
    "url": "api/guides/issue-asset.html",
    "revision": "82df613c46db9b3ec263d5e6638fa6c6"
  },
  {
    "url": "api/guides/non-fungible-assets.html",
    "revision": "0c1e31642d4ffda9bc4ba394c23dc172"
  },
  {
    "url": "api/guides/providers.html",
    "revision": "33d149f95874b2aa120e839841834fdf"
  },
  {
    "url": "api/guides/set-asset-ledger-abilities.html",
    "revision": "595747c01223fb05482fb8d35be9f40d"
  },
  {
    "url": "api/guides/transfer-asset.html",
    "revision": "a9fa0b684ac25633591b19a8724ffe49"
  },
  {
    "url": "api/guides/transfer-value.html",
    "revision": "c0d675e0b4d8ca6b9ad4870124b1e212"
  },
  {
    "url": "api/guides/update-asset-imprint.html",
    "revision": "a13bc954883a46a2c4b877bd8ca41077"
  },
  {
    "url": "api/guides/use-cases.html",
    "revision": "804fe00ec63bd8d2728676a3d2ad3474"
  },
  {
    "url": "api/index.html",
    "revision": "76c4ceb89c2f6d25b43871feddb7f8b7"
  },
  {
    "url": "api/schemas/86-base-asset-schema.html",
    "revision": "df199c49d194d9b7f0c744eecfea3940"
  },
  {
    "url": "api/schemas/87-asset-evidence-schema.html",
    "revision": "2e294f021909c08cb16b168b62a4637f"
  },
  {
    "url": "api/schemas/88-crypto-collectible-schema.html",
    "revision": "617bb1b856f1b31f5371a58da60ec070"
  },
  {
    "url": "api/schemas/xcert-schema.html",
    "revision": "c410e2e40017f1915335ccb6007db51c"
  },
  {
    "url": "assets/css/0.styles.d7956b4c.css",
    "revision": "71002a256a855627eae711e3964bf41c"
  },
  {
    "url": "assets/img/atomic-swap.33e9e009.svg",
    "revision": "33e9e009fd08bc8d33037e7612c718bf"
  },
  {
    "url": "assets/img/block_balance.76df9697.svg",
    "revision": "76df969771b008e4c91ecba8efc7c865"
  },
  {
    "url": "assets/img/certification.31c7b71d.svg",
    "revision": "31c7b71d4c8fd6a766c108d2ff494226"
  },
  {
    "url": "assets/img/conflicts-explained.c37f02a2.svg",
    "revision": "c37f02a29cb1699937146a8acb6fdce4"
  },
  {
    "url": "assets/img/dashboard.16371e3e.svg",
    "revision": "16371e3ebd00b65330840c8ac581ed64"
  },
  {
    "url": "assets/img/deposit-options.5d6d1f98.png",
    "revision": "5d6d1f98ad1757646a2d42b0db7cdbbf"
  },
  {
    "url": "assets/img/exposed-part.5e486307.svg",
    "revision": "5e48630774daf3592db57d1454aa3b08"
  },
  {
    "url": "assets/img/login.4079c082.svg",
    "revision": "4079c08226ab1fce2cdfb44c124eab35"
  },
  {
    "url": "assets/img/no-conflicting-proogs.a3213736.svg",
    "revision": "a32137363710f3ee693cbd9c072ae3a4"
  },
  {
    "url": "assets/img/notarized.e62f8d82.svg",
    "revision": "e62f8d828e030c82db405054e14d705f"
  },
  {
    "url": "assets/img/part-proved.c1187f5f.svg",
    "revision": "c1187f5f1951d21e14a64ee515e22217"
  },
  {
    "url": "assets/img/request-details.cabc2414.svg",
    "revision": "cabc24145895fe13025c229bddea9cca"
  },
  {
    "url": "assets/img/scheme_1.4b756bc1.svg",
    "revision": "4b756bc1575b7bdb18b62f706659a2a9"
  },
  {
    "url": "assets/img/scheme_1.4e83c37f.svg",
    "revision": "4e83c37fa32170bfa902024b974ce4a4"
  },
  {
    "url": "assets/img/scheme_2.1806743d.svg",
    "revision": "1806743d3971430f0c0c5bd6b2641fd2"
  },
  {
    "url": "assets/img/scheme_3.6fecffe4.svg",
    "revision": "6fecffe4ee3161e49c44902379f6691f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zero-info.eab30f82.svg",
    "revision": "eab30f82996642dc34cfefcc90e61222"
  },
  {
    "url": "assets/js/10.e7ed92ac.js",
    "revision": "b77f7cdeff42663d6e7a8cd008ffab6a"
  },
  {
    "url": "assets/js/11.fac430a0.js",
    "revision": "a7104d5281486109a9135ff16bf15604"
  },
  {
    "url": "assets/js/12.71c9362a.js",
    "revision": "bbdfcac0d70d50b719ca9841e8c61855"
  },
  {
    "url": "assets/js/13.d8765d49.js",
    "revision": "9f32e09ee004c89abb1e81c645d0b01a"
  },
  {
    "url": "assets/js/14.75e0fe85.js",
    "revision": "5e590c3d076fcedd755acc0afad39736"
  },
  {
    "url": "assets/js/15.4bc74da7.js",
    "revision": "53519878781aeee8db2d73ee068df0dc"
  },
  {
    "url": "assets/js/16.9c798157.js",
    "revision": "97f678d095c0aac74cafb82c10c452cc"
  },
  {
    "url": "assets/js/17.4a78e468.js",
    "revision": "00e66b1336c2cfecdc89c81039d974da"
  },
  {
    "url": "assets/js/18.14896ffc.js",
    "revision": "62d6b9d5197d07442bc2aa56005e1bda"
  },
  {
    "url": "assets/js/19.9285fb66.js",
    "revision": "0d43ff03774b73997288518579e2be57"
  },
  {
    "url": "assets/js/2.cf0f4b8b.js",
    "revision": "f460a2af23f1cfbbd52e0bf9967e82b4"
  },
  {
    "url": "assets/js/20.42a0dfb1.js",
    "revision": "8805e4bd44a22dcdf4d11487c5595e94"
  },
  {
    "url": "assets/js/21.8aac9804.js",
    "revision": "244b70fd38686cc39c8357127a42ecee"
  },
  {
    "url": "assets/js/22.675d5f47.js",
    "revision": "e863c8d66167f5ad0616e61cdda72c9e"
  },
  {
    "url": "assets/js/23.8350d6c9.js",
    "revision": "bd73036c23b5735bd2c45d982b8d4d7c"
  },
  {
    "url": "assets/js/24.52dcdd59.js",
    "revision": "863028814f07fef43c784a203364f16b"
  },
  {
    "url": "assets/js/25.d97e6db2.js",
    "revision": "97c24a624fbd5389a2ebae3978194ba9"
  },
  {
    "url": "assets/js/26.463cad68.js",
    "revision": "e7e55c5becca7a2834e7670a57eebfd4"
  },
  {
    "url": "assets/js/27.7cfd04ad.js",
    "revision": "26b7d478ecbf4e732b70a91e1f6196dc"
  },
  {
    "url": "assets/js/28.24fd8c3c.js",
    "revision": "9fd6eccf6b92b7cd23de07dcc7fa2e19"
  },
  {
    "url": "assets/js/29.17a1b291.js",
    "revision": "984c61881ff8d423795ff46b2aecc947"
  },
  {
    "url": "assets/js/3.37314c6a.js",
    "revision": "024a9019a6bb3d015a1fcaaefc1ebefc"
  },
  {
    "url": "assets/js/30.469d73f3.js",
    "revision": "9128180f625826c43ed5159978932f49"
  },
  {
    "url": "assets/js/31.adbdf89f.js",
    "revision": "0763162837a58d3d53e0dcd79fffe6c4"
  },
  {
    "url": "assets/js/32.53fc4bcd.js",
    "revision": "887ffa8990bf0583012dc8efe831b83c"
  },
  {
    "url": "assets/js/33.7f609e16.js",
    "revision": "ad7bb2a760f278f063256c48f7a8bbdd"
  },
  {
    "url": "assets/js/34.ebb8cde7.js",
    "revision": "5d1467b925ffe7afb713a3ab9ead54fe"
  },
  {
    "url": "assets/js/35.99edb43a.js",
    "revision": "60f97f116db18d8a29c26785e91c57b9"
  },
  {
    "url": "assets/js/36.ffcf569c.js",
    "revision": "d39d05df9e567f0cea2d2d18fe47a80c"
  },
  {
    "url": "assets/js/37.7c03262f.js",
    "revision": "6736a824760cd8bb757a34b0b4610120"
  },
  {
    "url": "assets/js/38.5412cda6.js",
    "revision": "db7476f139a559ad50af912ab7379560"
  },
  {
    "url": "assets/js/39.44f02f60.js",
    "revision": "af3c38be72ca8394d7fcd4a7ec482c78"
  },
  {
    "url": "assets/js/4.35ee9bae.js",
    "revision": "466a21769ac6530976388472e4923961"
  },
  {
    "url": "assets/js/40.6974f065.js",
    "revision": "a2ba7f71332169534bef7c61821d19e9"
  },
  {
    "url": "assets/js/41.8cff6157.js",
    "revision": "cce7f35f006c0e72ae9faf6639c237e9"
  },
  {
    "url": "assets/js/42.b5440491.js",
    "revision": "1db624879fc3038686a4caa4415a70e3"
  },
  {
    "url": "assets/js/43.40c15aba.js",
    "revision": "b480465d658b6ae25ccdd1b48e8b5d5d"
  },
  {
    "url": "assets/js/44.90af89a4.js",
    "revision": "11627ad16f56b552f5b98a09151d6a11"
  },
  {
    "url": "assets/js/45.579e2fc1.js",
    "revision": "6250165154bb90e48710baf708cb2eda"
  },
  {
    "url": "assets/js/46.ee61bd52.js",
    "revision": "2341f3f70ffaabecc7bb568ba1c2d220"
  },
  {
    "url": "assets/js/47.3f4507a4.js",
    "revision": "3b334898d6432c94b22f52831956526f"
  },
  {
    "url": "assets/js/48.3de4abbf.js",
    "revision": "78598459ee9c76b1bb16b7a52b6232b3"
  },
  {
    "url": "assets/js/49.c2384c9a.js",
    "revision": "cd83ed11a45ea0e5c439b4af1462551e"
  },
  {
    "url": "assets/js/5.36f6fd2c.js",
    "revision": "417868d46de9b7ff9fda1f28e4e344e3"
  },
  {
    "url": "assets/js/50.f815f323.js",
    "revision": "caa341beaf9dd491d948c7873c8b78d8"
  },
  {
    "url": "assets/js/51.af4f4b7e.js",
    "revision": "ab499c4685976ce9f529bffe6f8121e3"
  },
  {
    "url": "assets/js/52.0b178490.js",
    "revision": "fa8fde5d0c5bb430a44c21ae0ca139bb"
  },
  {
    "url": "assets/js/53.71a80a08.js",
    "revision": "b59ec144c6ef4ee842ea8ede7ec5b51e"
  },
  {
    "url": "assets/js/54.6a3cfdd5.js",
    "revision": "305f1311f72fc6d86ff5569b66c6e796"
  },
  {
    "url": "assets/js/55.f4b3158c.js",
    "revision": "ff44e7f97f30ab141ccea3afc0949086"
  },
  {
    "url": "assets/js/56.31ec0698.js",
    "revision": "8dd6c0086f3aaeb3a137691939e7d9f0"
  },
  {
    "url": "assets/js/57.4e7b3dcd.js",
    "revision": "3dab2e4305e052e92788dc42464515db"
  },
  {
    "url": "assets/js/58.76a67bcd.js",
    "revision": "e64dcb122e48fe3ea6a21f1e6d0071ea"
  },
  {
    "url": "assets/js/59.2b98be64.js",
    "revision": "65389cb73809993ff5d8971035d1acf5"
  },
  {
    "url": "assets/js/6.edff4e68.js",
    "revision": "9f35b2d4227378c457a6629dfabd644b"
  },
  {
    "url": "assets/js/60.a8446153.js",
    "revision": "8fe169cf1a77ae23bef023c72a9a4f30"
  },
  {
    "url": "assets/js/61.0dfd2655.js",
    "revision": "817d65f0c39ccf86f2a349dae95208dc"
  },
  {
    "url": "assets/js/62.7c4cbd13.js",
    "revision": "c67f2dffc2785fca3768208fdb48506d"
  },
  {
    "url": "assets/js/63.38ff9f26.js",
    "revision": "f06787b064eddbdb56ee7804fbe0fe4f"
  },
  {
    "url": "assets/js/64.5d48ddd1.js",
    "revision": "b9e377ef43352f1408cf31f86674860a"
  },
  {
    "url": "assets/js/65.6ded12c1.js",
    "revision": "8d153460e58c81aba91b77970a447ff2"
  },
  {
    "url": "assets/js/66.6b197e15.js",
    "revision": "318ca0ac8089089561774de42b12570f"
  },
  {
    "url": "assets/js/67.f03aa1ac.js",
    "revision": "52ca24aaee52b0646fccdaaa897a629b"
  },
  {
    "url": "assets/js/68.52df27ae.js",
    "revision": "c417db96e0f8ed509a5630731e209070"
  },
  {
    "url": "assets/js/69.57495c1d.js",
    "revision": "8bb0d31b0fca0206a4f4e4110a5541ec"
  },
  {
    "url": "assets/js/7.ac8cad6a.js",
    "revision": "55514baaebb9cbe4924fc46edebf2fef"
  },
  {
    "url": "assets/js/70.4151b728.js",
    "revision": "07f8afc72ac88991ba8f2649c53bab62"
  },
  {
    "url": "assets/js/71.1c359036.js",
    "revision": "506bd37f2e09787e01ae3e6b5fc5e196"
  },
  {
    "url": "assets/js/72.011ef3b9.js",
    "revision": "5a459e812eef706ceff34156d45e3f97"
  },
  {
    "url": "assets/js/73.0b6e28d1.js",
    "revision": "4f2b3fa755ab09538dad690f25002479"
  },
  {
    "url": "assets/js/74.ff30fe84.js",
    "revision": "26ecc1da821cf81ac0a20f222df131cd"
  },
  {
    "url": "assets/js/75.ec562c5a.js",
    "revision": "928af3a2e4238a3c424f6cb14fa76572"
  },
  {
    "url": "assets/js/76.988f6962.js",
    "revision": "abb001c64e2f40116c37b99817795c62"
  },
  {
    "url": "assets/js/77.a983caf5.js",
    "revision": "9e4f214507c7284d4cf1c25ade06eb19"
  },
  {
    "url": "assets/js/78.637f7e9a.js",
    "revision": "d2b7c7fda6fe8ef1806e3973e5a66323"
  },
  {
    "url": "assets/js/8.2fdc7666.js",
    "revision": "d2bff37153a9a3575b9543f2e3b75012"
  },
  {
    "url": "assets/js/9.a88f7f98.js",
    "revision": "4dfecb490d6f7d3d35b64fc64a9c3c4d"
  },
  {
    "url": "assets/js/app.f85dbd4e.js",
    "revision": "324bec459f0c94c55f5a894efec36dd5"
  },
  {
    "url": "background.svg",
    "revision": "5dfa0b3c79465dfa2a64827a18d32db0"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "2e3f7c027d0d1082886529767436b865"
  },
  {
    "url": "ethereum.png",
    "revision": "e87ef377b6298693af14e868e7bd9d54"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "framework-icon.svg",
    "revision": "238a8eda04c75c7ca680da3cfacbb6b8"
  },
  {
    "url": "framework/v1/api/core.html",
    "revision": "feec838d241b507d5f8d994def300bf2"
  },
  {
    "url": "framework/v1/api/ethereum.html",
    "revision": "21d6bfdbbf64d8a8c3c282357a9cb91a"
  },
  {
    "url": "framework/v1/api/wanchain.html",
    "revision": "209a866b97de0b00886b69a7e7399575"
  },
  {
    "url": "framework/v1/guide/about-assets.html",
    "revision": "c451f5346af53b24fb4e61028198b281"
  },
  {
    "url": "framework/v1/guide/about-cryptocurrency.html",
    "revision": "72776395da15552e5d62c5a73862e55d"
  },
  {
    "url": "framework/v1/guide/asset-management.html",
    "revision": "9fadf157ba69a3065405d7be4152cec2"
  },
  {
    "url": "framework/v1/guide/atomic-orders.html",
    "revision": "7e21f5c27d6a5a5b88bd4b78f3ec5c7c"
  },
  {
    "url": "framework/v1/guide/certification.html",
    "revision": "be0e074f3182727c32dc7c54803b91a4"
  },
  {
    "url": "framework/v1/guide/communication.html",
    "revision": "d5bcad330bf3853f84e3b36607561451"
  },
  {
    "url": "framework/v1/guide/getting-started.html",
    "revision": "b061524fbacd4da0dce6422e99df29e0"
  },
  {
    "url": "framework/v1/guide/introduction.html",
    "revision": "c17f390e5e55e3f71c7da3ea4a95f03b"
  },
  {
    "url": "framework/v1/guide/threat-models.html",
    "revision": "52ea143983e6cc3258657fdddfbaafdf"
  },
  {
    "url": "framework/v1/guide/using-providers.html",
    "revision": "5695ea12ef9668ac33a1df1eb3a39361"
  },
  {
    "url": "framework/v1/guide/value-management.html",
    "revision": "49bf19ca67b151b364e2a6729ffa2b13"
  },
  {
    "url": "framework/v1/index.html",
    "revision": "40d013b1b6d5eda68d8fa3a90b25fe5a"
  },
  {
    "url": "framework/v1/plugins/vuejs.html",
    "revision": "0b88bbfcb6464d45ac09a72393b01f45"
  },
  {
    "url": "framework/v2/api/0xcertapi-client.html",
    "revision": "541dae8c6ac1b90016ed7b27645527f5"
  },
  {
    "url": "framework/v2/api/certification.html",
    "revision": "cf05cfa4caef03e146c9ad0ab5df49a5"
  },
  {
    "url": "framework/v2/api/ethereum-connectors.html",
    "revision": "05b8b6e11e59b5c55530306f720b0e58"
  },
  {
    "url": "framework/v2/api/vuejs-plugin.html",
    "revision": "04335dafe91ac8477a1ae336a77cd5ae"
  },
  {
    "url": "framework/v2/api/wanchain-connectors.html",
    "revision": "b15c88c3517abc36c7ec0abe033cd0b4"
  },
  {
    "url": "framework/v2/guides/asset-management.html",
    "revision": "583763a4c0a7731f60fe812b752286df"
  },
  {
    "url": "framework/v2/guides/atomic-actions.html",
    "revision": "16676ea098d228d8158644bde2ebf9b1"
  },
  {
    "url": "framework/v2/guides/atomic-approval.html",
    "revision": "b4c6540a0425c10abcd7f495922d3d27"
  },
  {
    "url": "framework/v2/guides/atomic-deployments.html",
    "revision": "2daad3d86aa627e92b94792889bd3868"
  },
  {
    "url": "framework/v2/guides/certification.html",
    "revision": "05f84c7fa36aa9a45af779d6e752c04b"
  },
  {
    "url": "framework/v2/guides/communication.html",
    "revision": "e73c11dfe0fa41dfbb88122582db3596"
  },
  {
    "url": "framework/v2/guides/providers.html",
    "revision": "a7c5aa560c65ec46214d61b2af9d81b1"
  },
  {
    "url": "framework/v2/guides/value-management.html",
    "revision": "96a42a1081c3d95a9c381e5ec09a1f75"
  },
  {
    "url": "framework/v2/index.html",
    "revision": "923346d2e092e0e6ce54396bee5faf3d"
  },
  {
    "url": "framework/v2/introduction/0xcert-tokens.html",
    "revision": "8a9062d86116043d3100dc831573c611"
  },
  {
    "url": "framework/v2/introduction/atomic-transactions.html",
    "revision": "9ef97418e71fd18e09e874d4337c1d4b"
  },
  {
    "url": "framework/v2/introduction/authenticity.html",
    "revision": "788dbb6981730497c905ccbabc480c23"
  },
  {
    "url": "framework/v2/introduction/fungible-values.html",
    "revision": "55ed3d08c77a37c455551383519b573a"
  },
  {
    "url": "framework/v2/introduction/getting-started.html",
    "revision": "bd12c960b7d027006792ebe18f386b87"
  },
  {
    "url": "framework/v2/introduction/interoperability.html",
    "revision": "0d06acd014ccadf4f6bc4e1f4f4969e3"
  },
  {
    "url": "framework/v2/introduction/non-fungible-assets.html",
    "revision": "b8623f93ef623c8be0c8e9b5df2978eb"
  },
  {
    "url": "framework/v2/introduction/threat-models.html",
    "revision": "af1523fe2bcb359cf0bb66721c1465c0"
  },
  {
    "url": "framework/v2/schemas/86-base-asset-schema.html",
    "revision": "167eb8ade899fca404483e5ee5c9b205"
  },
  {
    "url": "framework/v2/schemas/87-asset-evidence-schema.html",
    "revision": "5acc4e80a10a1f6c1f2aeefa83d1c8db"
  },
  {
    "url": "framework/v2/schemas/88-crypto-collectible-schema.html",
    "revision": "5a42fe772ea70905696169f7f937b051"
  },
  {
    "url": "framework/v2/schemas/xcert-schema.html",
    "revision": "e2856b36047e93e47060f2d8b6754f60"
  },
  {
    "url": "hero-image.svg",
    "revision": "7a23f7cc21f915a46ce92c59b8984d3b"
  },
  {
    "url": "index.html",
    "revision": "8e1c25237ec10b910f8b0ccea522a0c5"
  },
  {
    "url": "logo_0xcert.svg",
    "revision": "1b51dc3973753349a7c9c72a4c37fb3a"
  },
  {
    "url": "logo_alliance.svg",
    "revision": "077c3f0fc6e4955815f8e9d7d4d53e61"
  },
  {
    "url": "logo_swapmarket.svg",
    "revision": "c14ff3d5b6d2ccb8bbcbcb63dbed8d15"
  },
  {
    "url": "logo_validator.svg",
    "revision": "f6b907c537d8075d30fc24a49d9dcf66"
  },
  {
    "url": "logo-bitski.svg",
    "revision": "6bf34f5872caea823c755a950675ccb1"
  },
  {
    "url": "logo-metamask.svg",
    "revision": "fa7b829817860f80d7733f08efd3e4fe"
  },
  {
    "url": "wanchain.png",
    "revision": "c3256bc210ca559021a431d950d3fb3b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

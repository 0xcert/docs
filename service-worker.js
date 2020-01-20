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
    "url": "404.html",
    "revision": "9ad2eaef58eb4bf533878201597b9a8d"
  },
  {
    "url": "api/0xcertapi-client.html",
    "revision": "c136683b4d81332aa3217a094e1479b6"
  },
  {
    "url": "api/0xcertapi-rest.html",
    "revision": "cdc267b8c23830268e2a66d17d9a18b0"
  },
  {
    "url": "api/certification.html",
    "revision": "fe719ff44eb58066a8e77f6575bf7f7f"
  },
  {
    "url": "api/ethereum-connectors.html",
    "revision": "6a8ec452485407e7d37ed5b6d5c5ba09"
  },
  {
    "url": "api/vuejs-plugin.html",
    "revision": "377da5b8735173725e79cfa1aa834f33"
  },
  {
    "url": "api/wanchain-connectors.html",
    "revision": "c9a0e558142aee710ccbf11f5f0afcb1"
  },
  {
    "url": "assets/css/0.styles.da95f995.css",
    "revision": "0bc7a9e0b142a3fbc2998f25883ba2c9"
  },
  {
    "url": "assets/img/conflicts-explained.c37f02a2.svg",
    "revision": "c37f02a29cb1699937146a8acb6fdce4"
  },
  {
    "url": "assets/img/exposed-part.5e486307.svg",
    "revision": "5e48630774daf3592db57d1454aa3b08"
  },
  {
    "url": "assets/img/hero-image.7a23f7cc.svg",
    "revision": "7a23f7cc21f915a46ce92c59b8984d3b"
  },
  {
    "url": "assets/img/logo_0xcert.1b51dc39.svg",
    "revision": "1b51dc3973753349a7c9c72a4c37fb3a"
  },
  {
    "url": "assets/img/logo_alliance.077c3f0f.svg",
    "revision": "077c3f0fc6e4955815f8e9d7d4d53e61"
  },
  {
    "url": "assets/img/logo_swapmarket.c14ff3d5.svg",
    "revision": "c14ff3d5b6d2ccb8bbcbcb63dbed8d15"
  },
  {
    "url": "assets/img/logo_validator.f6b907c5.svg",
    "revision": "f6b907c537d8075d30fc24a49d9dcf66"
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
    "url": "assets/img/scheme_1.4e83c37f.svg",
    "revision": "4e83c37fa32170bfa902024b974ce4a4"
  },
  {
    "url": "assets/img/scheme_2.1806743d.svg",
    "revision": "1806743d3971430f0c0c5bd6b2641fd2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wanchain.c3256bc2.png",
    "revision": "c3256bc210ca559021a431d950d3fb3b"
  },
  {
    "url": "assets/img/zero-info.eab30f82.svg",
    "revision": "eab30f82996642dc34cfefcc90e61222"
  },
  {
    "url": "assets/js/10.03c3773a.js",
    "revision": "8cb7e73d746f86f132d4226f84e70653"
  },
  {
    "url": "assets/js/11.ded165b2.js",
    "revision": "a1206f16b27f649fd7e059b5a92e7833"
  },
  {
    "url": "assets/js/12.3552db5e.js",
    "revision": "b5bad226c9410fa3571c550a35f4f8bd"
  },
  {
    "url": "assets/js/13.b5257690.js",
    "revision": "b08a56849d73f32d07553d82857fdfb9"
  },
  {
    "url": "assets/js/14.af0ecaf3.js",
    "revision": "c71ac3e1696ca87ca38b2790fbc3e4bf"
  },
  {
    "url": "assets/js/15.a977a377.js",
    "revision": "0e53394210142ea1f51895758d0000a4"
  },
  {
    "url": "assets/js/16.d47194af.js",
    "revision": "bdbfa7fe3c4f31b13ebe0a0f401cf626"
  },
  {
    "url": "assets/js/17.ca0e3fbc.js",
    "revision": "36d5ec0976490df75ef153dc52b2d105"
  },
  {
    "url": "assets/js/18.976311a7.js",
    "revision": "ec8de0128352520973002778d587bc18"
  },
  {
    "url": "assets/js/19.55e8121b.js",
    "revision": "59a4e25ff7c0c7b9d02c2492ebc9ea49"
  },
  {
    "url": "assets/js/2.f20c3283.js",
    "revision": "bc197b11d7d0fbf041a02ed553a0913e"
  },
  {
    "url": "assets/js/20.634eaf34.js",
    "revision": "c4a392f77245e4538a91e4ce186183e0"
  },
  {
    "url": "assets/js/21.592baaa6.js",
    "revision": "1f64f9860efaaf1bfde60775afd50e66"
  },
  {
    "url": "assets/js/22.242f2c10.js",
    "revision": "1bbde111237471ebe808b30ab668524e"
  },
  {
    "url": "assets/js/23.ef79e661.js",
    "revision": "073a4b54bed831df4cfafff8ea83c3d2"
  },
  {
    "url": "assets/js/24.bce06c48.js",
    "revision": "3e41d4adefe6229fb1913563373e781a"
  },
  {
    "url": "assets/js/25.0842674a.js",
    "revision": "4e6c4822cae6d06d9433b979a827b4cd"
  },
  {
    "url": "assets/js/26.ca986deb.js",
    "revision": "1f69f98a4f9e3941ff453528998b80d0"
  },
  {
    "url": "assets/js/27.77eac601.js",
    "revision": "973e709a46efd31355c606c1c67e63cf"
  },
  {
    "url": "assets/js/28.31b3e84a.js",
    "revision": "23dec96ac2f67162fe21b3e0f6307095"
  },
  {
    "url": "assets/js/29.2008f371.js",
    "revision": "e20700fc26d7a6a013d39a17fb44c5f5"
  },
  {
    "url": "assets/js/3.e085c15b.js",
    "revision": "90178caf53436b9284984499feb38539"
  },
  {
    "url": "assets/js/30.2dc44648.js",
    "revision": "01a1f5f6ebf030f10954e0dfec908e2c"
  },
  {
    "url": "assets/js/31.462d57ea.js",
    "revision": "f4ef1c54543543d86ce3d75fe39d275f"
  },
  {
    "url": "assets/js/32.c009a518.js",
    "revision": "a91c8a4129f576bd314b6c149145d637"
  },
  {
    "url": "assets/js/33.ac729c23.js",
    "revision": "3d1a5cee88afdb01bb3fa30f07522d31"
  },
  {
    "url": "assets/js/34.b44bc98e.js",
    "revision": "c6515d1064b8c6adb07a8c1fc1c20c78"
  },
  {
    "url": "assets/js/4.cbce8c58.js",
    "revision": "095b11958ce9a16a285f063d167ad4dd"
  },
  {
    "url": "assets/js/5.8bbd2355.js",
    "revision": "fa1929d369f7836738f7327c7d4128a1"
  },
  {
    "url": "assets/js/6.cd9bf40f.js",
    "revision": "81e2ac0152ed0aac9acd07c181a3d713"
  },
  {
    "url": "assets/js/7.75831217.js",
    "revision": "37bafbb35a404328aa6b0fb30fee72ba"
  },
  {
    "url": "assets/js/8.9091d9b3.js",
    "revision": "f94903114a092166da87afa7f20d1dd0"
  },
  {
    "url": "assets/js/9.b9dedc79.js",
    "revision": "32f051474d5ebbbf80f2d15fe48beca6"
  },
  {
    "url": "assets/js/app.f6c584b2.js",
    "revision": "1498f9f831ed99fc633782aa27e8c388"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "guides/asset-management.html",
    "revision": "bc2ead60e114f4c7db5d1bcd3c2c6705"
  },
  {
    "url": "guides/atomic-actions.html",
    "revision": "136190515c467e040a5a677031ff93fa"
  },
  {
    "url": "guides/atomic-deployments.html",
    "revision": "39bac3a6bd2d7fca689e8efdc2812089"
  },
  {
    "url": "guides/certification.html",
    "revision": "407bdb508ef5e24841e48b8be44e74ef"
  },
  {
    "url": "guides/communication.html",
    "revision": "b79113481e1ab081e0b8c84ebfc672c2"
  },
  {
    "url": "guides/providers.html",
    "revision": "b8e314da43b8f817471c23fd7abe3027"
  },
  {
    "url": "guides/value-management.html",
    "revision": "30b40595ff763a730a0db4f2ddbe647d"
  },
  {
    "url": "index.html",
    "revision": "b48c98cd9a9f9d8bab5fb1f642d0266f"
  },
  {
    "url": "introduction/0xcert-tokens.html",
    "revision": "6e1aff2ed3075549f7e21419856dd693"
  },
  {
    "url": "introduction/atomic-transactions.html",
    "revision": "da24eb05e9fb8bc0d33975646fd10e67"
  },
  {
    "url": "introduction/authenticity.html",
    "revision": "dd7bda5d01e8a4db52ce0efdea7fe2d3"
  },
  {
    "url": "introduction/fungible-values.html",
    "revision": "4502f96e74c5628696c8da16978f55f6"
  },
  {
    "url": "introduction/getting-started.html",
    "revision": "99b7baa059593ec8a34dda859aebb725"
  },
  {
    "url": "introduction/interoperability.html",
    "revision": "878908d14c76d6d3300163679d990ccd"
  },
  {
    "url": "introduction/non-fungible-assets.html",
    "revision": "4c06222c8fd28c3e2b4832f539545d87"
  },
  {
    "url": "introduction/overview.html",
    "revision": "aa47f332cba31ea02a13d9b95a537e74"
  },
  {
    "url": "introduction/threat-models.html",
    "revision": "2e460e67852e2cdda2c7aa13a9769965"
  },
  {
    "url": "schemas/86-base-asset-schema.html",
    "revision": "4876645d1a6e205ebda6cf0f21519e70"
  },
  {
    "url": "schemas/87-asset-evidence-schema.html",
    "revision": "2abc083c5cc17cd2b09670c8f9652c7e"
  },
  {
    "url": "schemas/88-crypto-collectible-schema.html",
    "revision": "03eabab6774d866a7200fa4158adf66e"
  },
  {
    "url": "schemas/xcert-schema.html",
    "revision": "b510954a5990fc7f9be4f6ec9f0da76d"
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

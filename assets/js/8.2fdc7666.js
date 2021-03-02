(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{264:function(t,e,a){t.exports=a.p+"assets/img/scheme_3.6fecffe4.svg"},265:function(t,e,a){t.exports=a.p+"assets/img/certification.31c7b71d.svg"},316:function(t,e,a){"use strict";a.r(e);var s=a(32),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"certification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#certification"}},[t._v("#")]),t._v(" Certification")]),t._v(" "),s("p",[t._v("Various industries follow different standards. A standard reflects a need for defining a certain best practice and for establishing rules in a particular process or for a specific product. Today, companies and institutions mostly define their own rules of communication, operation, processes, and the format of stored and managed data. To establish more effective communication among them, the concept of system interoperability becomes increasingly valuable. As this idea develops over time, we will see companies and organizations choose interoperable systems more often.")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("ERC-721")]),t._v(" has given us a powerful standard. The 0xcert Framework is an opinionated framework that apart from the general development guidelines of the standard also provides a scaffold for defining conventions above the data objects. Each asset within the 0xcert Framework represents a JSON data object, structured on the definitions in a data scheme based on a "),s("a",{attrs:{href:"https://json-schema.org/",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("JSON-schema")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:a(264),alt:"0xcert framework"}})]),t._v(" "),s("p",[t._v("0xcert provides an interface for the application layer where developers need to act in a fast and agile way. To ensure interoperability among applications in the future, assets follow specific conventions. These will prevent incompatibility on a higher level, which might happen when every NFT issuer deploys their own version of an industry standard. Having this level of standardization built on top of the ERC-721 standard prevents high-level fragmentation and safeguards the long-term sustainability.")]),t._v(" "),s("h2",{attrs:{id:"explaining-the-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explaining-the-process"}},[t._v("#")]),t._v(" Explaining the process")]),t._v(" "),s("p",[t._v("The result of the certification process are objects that allow third-party to verify the proof of existence, authenticity, and ownership of these digital assets without a middleman's involvement.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(265),alt:"0xcert framework"}})]),t._v(" "),s("p",[t._v("When creating an asset, we start to prepare a digital structure of data represented by the asset. During this process, we first create a cryptographic "),s("code",[t._v("imprint")]),t._v(" based on the asset data. Such imprint constitutes a cryptographic proof of the asset data and should be stored on a public blockchain or similar distributed systems, so that third parties are able to use it as a public asset proof.")]),t._v(" "),s("p",[t._v("The original data of an asset is usually known only to the issuer and the owner of the asset. Both can reveal a specific part of the data to a third person anytime, while a third party can verify such data based on a publicly available "),s("code",[t._v("imprint")]),t._v(". For this purpose, the issuer or the owner creates an "),s("code",[t._v("evidence")]),t._v(" file that contains the revealed data and proofs needed for a third party to calculate the "),s("code",[t._v("imprint")]),t._v(" once more. If the calculated imprint matches the publicly available imprint, it means that the revealed data indeed exists in the original data object.")]),t._v(" "),s("p",[t._v("The process of certification is based on the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Binary_tree",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("Binary Tree")]),t._v(" concept, a well-known mechanism in the world of cryptography. To create a cryptographic hash string, the 0xcert Framework employs the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/SHA-2",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("sha256")]),t._v(" algorithm. Within the Framework, this complexity is hidden from the developer's interaction but available via simple functions provided by the API. See the "),s("a",{attrs:{href:"https://github.com/0xcert/framework/tree/master/packages/0xcert-merkle",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("@0xcert/merkle")]),t._v(" and "),s("a",{attrs:{href:"https://github.com/0xcert/framework/tree/master/packages/0xcert-cert",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("@0xcert/cert")]),t._v(" modules for the in-depth information about this algorithm.")]),t._v(" "),s("p",[t._v("According to the "),s("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("ERC-721 Metadata")]),t._v(" standard, a token includes a URI which points to the public token metadata JSON file. This JSON provides additional asset metadata information. The 0xcert Protocol makes this mandatory and expects every token to provide that. The metadata file must include information about the schema convention and should also point to the evidence file which allows a third-party to prove the values in the public metadata. We explain this further later in the chapter.")]),t._v(" "),s("h2",{attrs:{id:"conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conventions"}},[t._v("#")]),t._v(" Conventions")]),t._v(" "),s("p",[t._v("As explained earlier, the 0xcert Framework provides data models that allow your application to interoperate with other applications using the 0xcert Framework. Additionally, conventions enable imprints, a tamper-evident system, for assuring data consistency in which some of the data can be public while others can be private.")]),t._v(" "),s("p",[t._v("Conventions that are approved, representing best practices in the industry, can be found in "),s("a",{attrs:{href:"https://github.com/0xcert/framework/tree/master/conventions",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("this package")]),t._v(" on GitHub. These conventions are public. You can use these as-is or derive your own specific version of them or create your own conventions from scratch.")]),t._v(" "),s("p",[t._v("Please see the "),s("a",{attrs:{href:"https://github.com/0xcert/framework/blob/master/conventions/86-base-asset-schema.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("base asset schema")]),t._v(" as an example of the convention format. Also, every convention must adopt this base asset schema.")]),t._v(" "),s("div",{staticClass:"card custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Learn by example")]),t._v(" "),s("p",[t._v("Click "),s("a",{attrs:{href:"https://stackblitz.com/edit/certification-example",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("here")]),t._v(" to check the live example for this section.")])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("We recommend you employ the certification module as an NPM package in your application.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save @0xcert/cert\n")])])]),s("p",[t._v("On our official "),s("a",{attrs:{href:"https://github.com/0xcert/framework",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("GitHub repository")]),t._v(", we also host a compiled and minimized JavaScript file that can be directly implemented in your website. Please refer to the "),s("RouterLink",{attrs:{to:"/api/core.html"}},[t._v("API")]),t._v(" section to learn more about certification.")],1),t._v(" "),s("h2",{attrs:{id:"usage-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[t._v("#")]),t._v(" Usage overview")]),t._v(" "),s("p",[t._v("In the following guide, we will create a simple asset that represents a crypto collectible. We will define a JSON data object of the asset, create its cryptographic imprint, and show how to reveal data to a third party.")]),t._v(" "),s("p",[t._v("To start, we create a simple JSON object that represents our crypto collectible item. We will define the data object based on the "),s("a",{attrs:{href:"https://conventions.0xcert.org/88-crypto-collectible-schema.html",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("#88")]),t._v(" convention which describes crypto collectible items. It's advised to store this data into a local database to keep its original structure and have it at our disposal in the future.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Object88"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema88 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@0xcert/conventions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A weapon for the Troopers game which can severely injure the enemy.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://troopersgame.com/dog.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Magic Sword'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Object88"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In the 0xcert Framework, the whole complexity of certification is packed into the "),s("code",[t._v("Cert")]),t._v(" class. Therefore, we create a new instance of that class with the appropriate JSON Schema definition for our data object.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Cert "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@0xcert/cert'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" schema88 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@0xcert/conventions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cert "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" schema88"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("We can now create a cryptographic imprint for our crypto collectible that we will need in the following sections of this guide.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imprint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imprint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 642c19d1a7f27bbe601defe6d730ea321d60b156d73fc814bd62ce8ed8640b5d")]),t._v("\n")])])]),s("p",[t._v("This long string returned by the "),s("code",[t._v("imprint")]),t._v(" method represents a cryptographic proof of the original asset data object. We will store this string on the Ethereum blockchain in one of the following sections, where we'll show how to handle asset ledgers.")]),t._v(" "),s("p",[t._v("In the previous "),s("RouterLink",{attrs:{to:"/guide/about-assets.html#explaining-the-concept"}},[t._v("section")]),t._v(", we mentioned that each asset also holds its URI, pointing to the asset's publicly available metadata. We should put metadata and other public files to a publicly available HTTP location. We can either establish an HTTP server ourselves, or we can host the file through services like Amazon and Google.")],1),t._v(" "),s("p",[t._v("At this point, we have to decide which data we want to expose publicly and which we want to store internally. For the purpose of this guide, we choose to publicly disclose "),s("code",[t._v("description")]),t._v(" and "),s("code",[t._v("image")]),t._v("; while we retain the "),s("code",[t._v("name")]),t._v(" privately for us as the issuers.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" metadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { description: ..., image: ... }")]),t._v("\n")])])]),s("p",[t._v("We also need to create evidence data. These recipes will enable third parties to recalculate asset imprint to verify and prove the validity of the public metadata above.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" evidence "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("disclose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [{ path, nodes, values }, ...]")]),t._v("\n")])])]),s("p",[t._v("The content obtained with the functions above can now be published on the public HTTP location. Let's assume that the public metadata file will be available at "),s("code",[t._v("https://troopersgame.com/sword/100.json")]),t._v(" and its evidence file is available at "),s("code",[t._v("https://troopersgame.com/sword/100-evidence.json")])]),t._v(" "),s("p",[t._v("The metadata URL should respond with the "),s("code",[t._v("metadata")]),t._v(" object that looks like the one below:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$evidence"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://troopersgame.com/sword/100-evidence.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://json-schema.org/draft-07/schema"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A weapon for the Troopers game which can severely injure the enemy."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"image"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://troopersgame.com/sword/100.jpg"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The evidence URL should respond with the "),s("code",[t._v("evidence")]),t._v(" object like these:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://json-schema.org/draft-07/schema"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9b61df344ebc1740d60333efc401150f756c3e3bc13f9ca31ddd96b8fc7180fe"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d95a266f24ca0ca79539cb3620832d9d37b415023002e8748458d34da53ccc1b"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3ef34334173d794cfc862c2f05580975ba10bea41e7ff2c60164a8288dee0cc6"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"values"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A weapon for the Troopers game which can severely injure the enemy."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nonce"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://troopersgame.com/dog.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nonce"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Finally, let's discuss the concept of revealing data to third parties. This works in the same way as we created the evidence file for the published metadata JSON file. When we want to reveal a private "),s("code",[t._v("name")]),t._v(" data to a third person, we would also employ the "),s("code",[t._v("disclose")]),t._v(" function to create the evidence data, and then send it via arbitrary communication channel which would allow them to calculate the "),s("code",[t._v("imprint")]),t._v(" of the original data object based on the revealed data and the received evidence data. If the calculated imprint matches the one that is publicly available on the blockchain, the data will count as valid.")]),t._v(" "),s("p",[t._v("Certification offers other additional possibilities. For more details, please refer to the "),s("RouterLink",{attrs:{to:"/api/core.html"}},[t._v("API")]),t._v(" section.")],1),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("Next, we proceed to "),s("RouterLink",{attrs:{to:"/guide/asset-management.html#installation"}},[t._v("creating our assets")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);
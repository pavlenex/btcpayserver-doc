(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{444:function(e,t,a){e.exports=a.p+"assets/img/ImportWallet.c61d1458.png"},689:function(e,t,a){"use strict";a.r(t);var l=a(35),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h2",{attrs:{id:"connect-an-existing-wallet"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#connect-an-existing-wallet"}},[e._v("#")]),e._v(" Connect an existing wallet")]),e._v(" "),l("figure",[l("img",{attrs:{src:a(444),alt:"Import Existing Wallet"}})]),e._v(" "),l("p",[e._v("By using an existing wallet, you can receive payments to the external wallet, without BTCPay Server knowing the wallet's private key. If a malicious attacker hacked your server and obtained the xpub, they could observe your transaction history, but cannot access the funds.")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"#connect-hardware-wallet"}},[e._v("Connect hardware wallet (Recommended)")])]),e._v(" "),l("li",[l("a",{attrs:{href:"#import-wallet-file"}},[e._v("Import Wallet file (Recommended)")])]),e._v(" "),l("li",[l("a",{attrs:{href:"#enter-extended-public-key"}},[e._v("Enter extended public key")])]),e._v(" "),l("li",[l("a",{attrs:{href:"#scan-wallet-qr-code"}},[e._v("Scan wallet QR code")])]),e._v(" "),l("li",[l("a",{attrs:{href:"#enter-wallet-seed"}},[e._v("Enter wallet seed (Not Recommended)")])])]),e._v(" "),l("h3",{attrs:{id:"connect-hardware-wallet"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#connect-hardware-wallet"}},[e._v("#")]),e._v(" Connect hardware wallet")]),e._v(" "),l("p",[e._v("Hardware wallets provide a good balance between security and ease of use. If you already have a hardware wallet set up, you can easily use it with your BTCPay Server. Thanks to built-in "),l("RouterLink",{attrs:{to:"/HardwareWalletIntegration/"}},[e._v("hardware wallet integration")]),e._v(" the xpub key from the hardware wallet is automatically added to your BTCPay Server. The integration further allows you to spend funds received to your store within BTCPay's "),l("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("internal wallet")]),e._v(".")],1),e._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),l("p",[e._v("If you own a hardware wallet, follow the instructions on how to "),l("RouterLink",{attrs:{to:"/HardwareWalletIntegration/"}},[e._v("use a an existing hardware wallet with your BTCPay Server")])],1)]),e._v(" "),l("h3",{attrs:{id:"import-wallet-file"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#import-wallet-file"}},[e._v("#")]),e._v(" Import Wallet file")]),e._v(" "),l("p",[e._v("Using an existing software wallet assumes that you already have an external wallet created and backed up. In theory, any mobile/desktop wallet that provides an extended public key should work, however, most wallets have technical limitations "),l("RouterLink",{attrs:{to:"/FAQ/Wallet/#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("(gap-limit)")]),e._v(" that may cause serious user-experience problems for you later on.")],1),e._v(" "),l("p",[e._v("For that reason, we recommend that you only use software wallets listed below.")]),e._v(" "),l("ul",[l("li",[l("RouterLink",{attrs:{to:"/ElectrumWallet/"}},[e._v("Electrum Wallet")])],1),e._v(" "),l("li",[l("RouterLink",{attrs:{to:"/WasabiWallet/"}},[e._v("Wasabi Wallet")])],1)]),e._v(" "),l("p",[e._v("Click on the links above and you will be redirected to a step by step tutorial on how to set up each particular software wallet with BTCPay Server.")]),e._v(" "),l("p",[e._v("To spend and manage the funds received to your external software wallet, you can use the "),l("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("internal BTCPay Wallet")]),e._v(" and sign a transaction with your private key or simply manage the funds in that external wallet itself.")],1),e._v(" "),l("h3",{attrs:{id:"enter-extended-public-key"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#enter-extended-public-key"}},[e._v("#")]),e._v(" Enter extended public key")]),e._v(" "),l("p",[e._v("This option can be useful if you want to modify "),l("RouterLink",{attrs:{to:"/FAQ/General/#what-if-i-have-a-problem-paying-an-invoice"}},[e._v("legacy wallet addresses")]),e._v(" or if your wallet type is not compatible with the Hardware Wallet Integration (Vault).")],1),e._v(" "),l("p",[e._v("This method requires you to configure your wallet connection manually and should only be used if you have a good understanding of wallet extended public keys, account key paths and master fingerprints.")]),e._v(" "),l("h3",{attrs:{id:"scan-wallet-qr-code"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#scan-wallet-qr-code"}},[e._v("#")]),e._v(" Scan wallet QR code")]),e._v(" "),l("p",[e._v("Some wallets allow you to create a wallet and export the extended public key (xPub) using a QR Code. You can easily connect your BTCPay Server to these types of wallets with the scan QR code option. The common "),l("RouterLink",{attrs:{to:"/FAQ/Wallet/#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("(gap-limit)")]),e._v(" issue is likely to occur using any xPub, unless the wallet provider has a way to adjust it.")],1),e._v(" "),l("p",[e._v("To spend and manage the funds in your "),l("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("internal BTCPay Wallet")]),e._v(" you will need to provide the private key (used to generate the xpub QR Code) during transaction signing or simply receive funds through your BTCPay and manage the funds in the external wallet.")],1),e._v(" "),l("h3",{attrs:{id:"enter-wallet-seed"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#enter-wallet-seed"}},[e._v("#")]),e._v(" Enter wallet seed")]),e._v(" "),l("p",[e._v("This option is useful if you have "),l("strong",[e._v("no other way")]),e._v(" of spending funds in a certain wallet. Such as an altcoin wallet that was previously compatible with the hardware wallet integration but no longer is. In general you should never type wallet seed words on any internet connected device.")]),e._v(" "),l("p",[e._v("This method requires you to configure your wallet connection manually and should only be used if you have a good understanding of wallet formats, extended public keys, account key paths and master fingerprints.")])])}),[],!1,null,null,null);t.default=r.exports}}]);
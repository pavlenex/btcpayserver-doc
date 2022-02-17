# BTCPay Server Documentation

## Introduction

BTCPay Server is a free, open-source & self-hosted Bitcoin payment processor for self-sovereign individuals and businesses. Think of BTCPay Server as your Bitcoin payment infrastructure.

## Features

* Direct, peer-to-peer Bitcoin payments
* No transaction fees (other than the [network fee](https://en.bitcoin.it/wiki/Miner_fees))
* No processing fees
* No middleman
* No KYC
* Non-custodial (complete control over the private key)
* Enhanced privacy
* Enhanced security
* Self-hosted
* SegWit support
* Lightning Network support (LND, c-lightning, Eclair and Ptarmigan)
* Tor support
* Opt-in [altcoin](./Development/Altcoins.md) integrations
* Full compatibility with BitPay API (easy migration)
* Process payments for others
* Easy-embeddable Payment buttons
* Point of sale app
* Crowdfunding app
* Payment Requests
* Internal, full-node reliant wallet with [hardware wallet integration](./HardwareWalletIntegration.md)
* [Payjoin Support](./Payjoin.md)

[![How BTCPay Server Features Overview](https://img.youtube.com/vi/R-yaXk4NvEs/mqdefault.jpg)](https://www.youtube.com/watch?v=R-yaXk4NvEs)

## How it works

[![How BTCPay Works](https://img.youtube.com/vi/nr0UNbz3AoQ/mqdefault.jpg)](https://www.youtube.com/watch?v=nr0UNbz3AoQ "How BTCPay Server Works")

### In a nutshell

In layman's terms, BTCPay Server is a self-hosted and automated invoicing system. At checkout, the customer is presented with an invoice. Each time, a different address is tied to a particular invoice, so there is no address re-use. BTCPay Server follows the status of the invoice through the blockchain and informs a merchant when he can fulfill the order safely.

### How is it different
BTCPay Server is free, open-source, self-hostable software.
BTCPay Server is not a company. To use BTCPay Server, [deploy](/Deployment/README.md) your own instance, or use a [third-party host](/Deployment/ThirdPartyHosting.md).

To explore what BTCPay Server has to offer, head over to the [official demo](https://mainnet.demo.btcpayserver.org/login).

While using BTCPay Server, there is no payment processing intermediary. Accept payments directly and stay in full control of received funds. There are no processing or subscription fees. BTCPay Server is free to use and completely open-source, so developers or security auditors can always inspect the quality of the code.

[![BTCPay Server Simply Explained](https://img.youtube.com/vi/dbX6qWZlxOw/mqdefault.jpg)](https://www.youtube.com/watch?v=dbX6qWZlxOw "BTCPay Server Simply Explained")

### How it keeps funds secure

Payments via BTCPay Server are direct, peer to peer. The merchant receives the coins directly to their wallet, with no intermediary. Securing funds comes down to the merchant securing their own private keys, which is standard for most cryptocurrency wallets.

BTCPay Server has an [internal wallet](./Wallet.md) that merchants can use to view and spend funds they have received from their customers. The funds from that wallet can only be spent, if a transaction is signed with the merchant's compatible hardware wallet or a private key. This allows merchants to have complete control of funds received.

### How it keeps data private

The data is shared only between two parties - the buyer and a seller. Other payment processors collect and share user data with other parties, making it very hard to comply with privacy law regulations like GDPR. Each invoice in BTCPay Server has a different receiving address, so there is no [address re-use](https://en.bitcoin.it/wiki/Address_reuse) which improves privacy significantly.

### How it resists censorship

* Self-hosted
* Can be run everywhere, from a low-powered device like Raspberry Pi at home to enterprise-grade servers
* No third-party
* Can easily be re-deployed

BTCPay Server does not have a central point of failure since nobody is controlling it except for the user running it. If run on the cloud server, the hosting providers can potentially censor users by suspending hosting accounts or disabling access to virtual machines. This is always a risk for anyone using a hosting provider. Since no private keys are stored on the server, a censored individual can easily re-deploy the server with another host. Your coins are always inside your wallet.

If an invoice is paid while your BTCPay Server is down, the software will automatically determine and notify the merchant of offline invoice payments when your server is back up. If a hosting provider suspends the server, and there was no proper backup, server settings and invoice data may be lost, but on-chain payments are always in your wallet. For ultimate censorship-resistance, users should run [BTCPay on their own hardware](/Deployment/Hardware.md). The software can even be run on a single-board computer, like [Raspberry Pi](/Deployment/RaspberryPi.md) from the comfort of your home.

### Beyond payment processing

BTCPay Server is often misconceived as a payment processor used by merchants only. In reality, the [use-cases](./UseCase.md) are limitless.

BTCPay is a tech-stack that glues a lot of complex components into an easy-to-use and coherent interface. The software can be used by self-sovereign individuals as a way to run a full node at home with a full-node reliant wallet.

Developers can build entire businesses and projects on top of the stack.

Enterprises can use it as a scalable and secure back-end of their infrastructure without ever having to put trust in a third-party. BTCPay Server is a [toolbox](https://www.facebook.com/kriptomedia/videos/vl.418099655731067/2898112140218815) with many useful tools, it's up to you how to use it.

## Support

If you have trouble using BTCPay Server, consider joining the [communities listed on the official website](https://btcpayserver.org/#communityCTA) to get help from BTCPay community members.

Only file a [Github issue](https://github.com/btcpayserver/btcpayserver/issues) for technical issues you can't resolve through other channels or feature requests you've validated with other members of the community.

Please check out our [official website](https://btcpayserver.org/), our [complete documentation](https://github.com/btcpayserver/btcpayserver-doc) and [FAQ](./FAQ/README.md#btcpay-frequently-asked-questions-and-common-issues) for more details.

![BTCPay Server](./img/BTCPayServerScreenshot.png "BTCPay Server")

### Contributing

Pull requests are welcome and appreciated.

If you're a beginner, take a look at the step by step guide on how to contribute to BTCPay Server documentation below.

[![Contributing to Documentation](https://img.youtube.com/vi/bSDROcdSSWw/mqdefault.jpg)](https://www.youtube.com/watch?v=bSDROcdSSWw "How BTCPay Server Works")

!!!include(supporters.html)!!!

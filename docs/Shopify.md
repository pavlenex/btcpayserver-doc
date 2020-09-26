# BTCPay Server and Shopify Integration

The following documents guides you through setting up BTCPay Server with Shopify.

## Prerequisites:

- [BTCPay Server](Deployment.md) self-hosted or run by a [third-party host](ThirdPartyHosting.md) v1.0.5.5 or later.
- [Created BTCPay Server store](CreateStore.md) with [wallet set up](WalletSetup.md)

## Setting up BTCPay Server with Shopify

* In your Shopify, go to Apps > Manage Private apps (at the bottom of the page) and `Create a private app`
If private apps are disabled, enable private apps development.
* Fill in required app details (name and email) and click on the `Show inactive Admin API permissions`
* Enable  `Script tags - Read and write"` and `Orders - Read and write` and `Save`
* Copy the `Example URL` from the Admin API section.

* In your BTCPay Server go to > Store > `Integrations`
* Paste the `Example URL` from Shopify and click `Connect to Shopify`
* If you get the following error `Scripts could not automatically be added`, copy the script from the Integration page of your BTCPay Server.
* In Shopify Settings > Checkout > Order processing > `Additional Scripts` and paste the script.
* In Shopify Settings > Payment Providers > Manual Payment Methods add a `Custom payment methods` named  `Bitcoin with BTCPay Server` and `Activate` it.

![Shopify Setup 1](./img/Shopify/Shopify1.png)
![Shopify Setup 2](./img/Shopify/Shopify2.png)
![Shopify Setup 3](./img/Shopify/Shopify3.png)
![Shopify Setup 4](./img/Shopify/Shopify4.png)
![Shopify Setup 5](./img/Shopify/Shopify5.png)
![Shopify Setup 6](./img/Shopify/Shopify6.png)
![Shopify Setup 7](./img/Shopify/Shopify7.png)
![Shopify Setup 8](./img/Shopify/Shopify8.png)
![Shopify Setup 9](./img/Shopify/Shopify9.png)
![Shopify Setup 10](./img/Shopify/Shopify10.png)

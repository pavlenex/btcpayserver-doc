(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{651:function(e,t,o){e.exports=o.p+"assets/img/BTCPayInfographic.93db91b4.png"},652:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--01-plugin-search.d542b753.png"},653:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--02-activated-configure.3054c6da.png"},654:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--03-settings--api-key-redirect.dee3eb63.png"},655:function(e,t,o){e.exports=o.p+"assets/img/btcpayWooLmode1.30c2a467.jpg"},656:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--05-api-auth-select-store.8765a27a.png"},657:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--06-api-auth-authorize-button.7ba04186.png"},658:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--07-api-auth-after-redirect-prefilled.70d8472c.png"},659:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--08-api-auth-save-webhook-created.53d476f0.png"},660:function(e,t,o){e.exports=o.p+"assets/img/btcpayWooLmode2.6ceb841e.jpg"},661:function(e,t,o){e.exports=o.p+"assets/img/btcpayWooLmode3.967e4347.jpg"},662:function(e,t,o){e.exports=o.p+"assets/img/btcpayWooLmode4.4cb74b80.jpg"},663:function(e,t,o){e.exports=o.p+"assets/img/btcpayWooLmode5.a35ab95d.jpg"},664:function(e,t,o){e.exports=o.p+"assets/img/btcpayWooLmode6.fa94aa2e.jpg"},665:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--7-man-api--copy-store-id.6c1943ea.png"},666:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--15-man-api--btcpay-settings-fill.298e9de1.png"},667:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--15-man-api--btcpay-settings-save.1f329e19.png"},668:function(e,t,o){e.exports=o.p+"assets/img/btcpay-wc-2--reqbin-403-test.62547f5f.png"},811:function(e,t,o){"use strict";o.r(t);var a=o(10),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"woocommerce-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#woocommerce-integration"}},[e._v("#")]),e._v(" WooCommerce integration")]),e._v(" "),t("p",[e._v("This document explains how to "),t("strong",[e._v("integrate BTCPay Server into your WooCommerce store")]),e._v(".\nIf you do not have a store yet, follow "),t("a",{attrs:{href:"https://web.archive.org/web/20221003083329/https://bitcoinshirt.co/how-to-create-store-accept-bitcoin/5/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this step by step article"),t("OutboundLink")],1),e._v(" to create one from scratch.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("This guide refers to the BTCPay for WooCommerce V2 plugin. You can find instructions for the now unmaintained legacy plugin (based on BitPay API) "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-doc/blob/cba96292ceea9483711ab53c479a98357383f857/docs/WooCommerce.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#requirements"}},[e._v("Requirements")])]),t("li",[t("a",{attrs:{href:"#1-install-btcpay-plugin"}},[e._v("1. Install BTCPay Plugin")]),t("ul",[t("li",[t("a",{attrs:{href:"#11-install-plugin-from-wordpress-admin-dashboard-recommended"}},[e._v("1.1 Install plugin from WordPress Admin Dashboard (recommended)")])]),t("li",[t("a",{attrs:{href:"#12-download-and-install-plugin-from-github"}},[e._v("1.2 Download and install plugin from GitHub")])])])]),t("li",[t("a",{attrs:{href:"#2-connecting-woocommerce-and-btcpay-server"}},[e._v("2. Connecting WooCommerce and BTCPay Server")]),t("ul",[t("li",[t("a",{attrs:{href:"#21-connect-using-the-api-key-wizard-recommended"}},[e._v("2.1 Connect using the API key wizard (recommended)")])]),t("li",[t("a",{attrs:{href:"#22-connect-by-manually-creating-the-api-key-and-permissions"}},[e._v("2.2 Connect by manually creating the API key and permissions")])])])]),t("li",[t("a",{attrs:{href:"#3-testing-the-checkout"}},[e._v("3. Testing the checkout")])]),t("li",[t("a",{attrs:{href:"#4-customizing-btcpay-woocommerce-v2"}},[e._v("4. Customizing BTCPay WooCommerce V2")]),t("ul",[t("li",[t("a",{attrs:{href:"#41-global-settings"}},[e._v("4.1 Global Settings")])]),t("li",[t("a",{attrs:{href:"#42-payment-gateway-specific"}},[e._v("4.2 Payment Gateway specific")])])])]),t("li",[t("a",{attrs:{href:"#troubleshooting"}},[e._v("Troubleshooting")]),t("ul",[t("li",[t("a",{attrs:{href:"#error-call-to-undefined-function-btcpayserver-http-curl-init"}},[e._v("Error: Call to undefined function BTCPayServer\\Http\\curl_init()")])]),t("li",[t("a",{attrs:{href:"#the-order-states-do-not-update-although-the-invoice-has-been-paid"}},[e._v("The order states do not update although the invoice has been paid")])]),t("li",[t("a",{attrs:{href:"#i-get-an-error-during-checkout-but-not-sure-what-the-problem-is"}},[e._v("I get an error during checkout but not sure what the problem is.")])]),t("li",[t("a",{attrs:{href:"#i-have-troubles-with-using-the-plugin-or-some-other-related-questions"}},[e._v("I have troubles with using the plugin or some other related questions")])]),t("li",[t("a",{attrs:{href:"#create-a-new-api-key"}},[e._v("Create a new API key")])]),t("li",[t("a",{attrs:{href:"#i-messed-around-with-the-webhook-how-to-fix"}},[e._v("I messed around with the webhook, how to fix")])])])]),t("li",[t("a",{attrs:{href:"#deploying-woocommerce-from-btcpay-server"}},[e._v("Deploying WooCommerce from BTCPay Server")])])])]),t("p"),e._v(" "),t("figure",[t("img",{attrs:{src:o(651),alt:"BTCPay - WooCommerce Infographic",title:"BTCPay - WooCommerce Infographic"}})]),e._v(" "),t("p",[e._v("To integrate BTCPay Server into an existing WooCommerce store, follow the steps below and/or watch this video:")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/ULcocDKZ1Mw/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=ULcocDKZ1Mw",title:"BTCPay - WooCommerce","data-id":"ULcocDKZ1Mw"}},[t("iframe",{attrs:{title:"BTCPay - WooCommerce","data-src":"https://www.youtube-nocookie.com/embed/ULcocDKZ1Mw?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("Please ensure that you meet the following requirements before installing this plugin.")]),e._v(" "),t("ul",[t("li",[e._v("PHP version 8.0 or newer")]),e._v(" "),t("li",[e._v("The cURL, gd, intl, json, and mbstring PHP extensions are available")]),e._v(" "),t("li",[e._v("A WooCommerce website ("),t("a",{attrs:{href:"https://woocommerce.com/document/installing-uninstalling-woocommerce/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installation instructions"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"#deploying-woocommerce-from-btcpay-server"}},[e._v("directly on BTCPay Server")]),e._v(")")]),e._v(" "),t("li",[e._v("You have a BTCPay Server version 1.3.0 or later, either "),t("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self-hosted")]),e._v(" or "),t("RouterLink",{attrs:{to:"/Deployment/ThirdPartyHosting/"}},[e._v("hosted by a third-party")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("You've a registered account on the instance")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("You've a BTCPay store on the instance")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("You've a wallet connected to your store")])],1)]),e._v(" "),t("h2",{attrs:{id:"1-install-btcpay-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-install-btcpay-plugin"}},[e._v("#")]),e._v(" 1. Install BTCPay Plugin")]),e._v(" "),t("p",[e._v("There are three ways to "),t("strong",[e._v("download BTCPay for WooCommerce V2 plugin")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("From within WordPress via the Admin Dashboard (recommended, see below)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://wordpress.org/plugins/btcpay-greenfield-for-woocommerce/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WordPress Repository"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/btcpayserver/woocommerce-greenfield-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"11-install-plugin-from-wordpress-admin-dashboard-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#11-install-plugin-from-wordpress-admin-dashboard-recommended"}},[e._v("#")]),e._v(" 1.1 Install plugin from WordPress Admin Dashboard (recommended)")]),e._v(" "),t("ol",[t("li",[e._v("WordPress > Plugins > Add New.")]),e._v(" "),t("li",[e._v('In Search, type "BTCPay V2".')]),e._v(" "),t("li",[e._v("Install and activate.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(652),alt:"BTCPay WordPress V2: Plugin installation",title:"BTCPay WordPress V2: Plugin installation"}})]),e._v(" "),t("h3",{attrs:{id:"12-download-and-install-plugin-from-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#12-download-and-install-plugin-from-github"}},[e._v("#")]),e._v(" 1.2 Download and install plugin from GitHub")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/btcpayserver/woocommerce-greenfield-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download the latest BTCPay plugin"),t("OutboundLink")],1),e._v(", upload it in .zip format to your WordPress site and activate it.")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/6QcTWHRKZag/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=6QcTWHRKZag",title:"BTCPay Server Woo Plugin","data-id":"6QcTWHRKZag"}},[t("iframe",{attrs:{title:"BTCPay Server Woo Plugin","data-src":"https://www.youtube-nocookie.com/embed/6QcTWHRKZag?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h2",{attrs:{id:"2-connecting-woocommerce-and-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-connecting-woocommerce-and-btcpay-server"}},[e._v("#")]),e._v(" 2. Connecting WooCommerce and BTCPay Server")]),e._v(" "),t("p",[e._v("BTCPay for WooCommerce V2 plugin is a "),t("strong",[e._v("bridge between your BTCPay Server (payment processor) and your e-commerce store")]),e._v(".\nNo matter if you're using a self-hosted or third-party solution, the connection process is identical.")]),e._v(" "),t("p",[e._v('You can either click on the notifications link saying "'),t("strong",[e._v("please configure the plugin here")]),e._v('" (see screenshot below), or:')]),e._v(" "),t("ul",[t("li",[e._v("Go to your store dashboard.")]),e._v(" "),t("li",[e._v("WooCommerce > Settings.")]),e._v(" "),t("li",[e._v("Click [BTCPay Settings] tab.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(653),alt:"BTCPay WordPress V2: Link to BTCPay Settings",title:"BTCPay WordPress V2: Link to BTCPay Settings"}})]),e._v(" "),t("h3",{attrs:{id:"21-connect-using-the-api-key-wizard-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#21-connect-using-the-api-key-wizard-recommended"}},[e._v("#")]),e._v(" 2.1 Connect using the API key wizard (recommended)")]),e._v(" "),t("ol",[t("li",[t("p",[e._v('In the field "'),t("strong",[e._v("BTCPay Server URL")]),e._v('", enter the full URL of your host (including the https) – https://btcpay.mydomain.com')])]),e._v(" "),t("li",[t("p",[e._v('Click on the button [Generate API key] (you will be redirected to BTCPay Server "Authorization request" page.\n'),t("img",{attrs:{src:o(654),alt:"BTCPay WordPress V2: Link to BTCPay Settings",title:"BTCPay WordPress V2: Link to BTCPay Settings"}})])]),e._v(" "),t("li",[t("p",[e._v("If you are not logged in to your BTCPay Server instance, do so now. (optional)\n"),t("img",{attrs:{src:o(655),alt:"BTCPay WordPress V2: Login to BTCPay Server",title:"BTCPay WordPress V2: Login to BTCPay Server"}})])]),e._v(" "),t("li",[t("p",[e._v("Select the store you want to connect to (if you only have one store it will get autoselected).\n"),t("img",{attrs:{src:o(656),alt:"BTCPay WordPress V2: Select store",title:"BTCPay WordPress V2: Select store"}})])]),e._v(" "),t("li",[t("p",[e._v("All required permissions are prefilled already, you just need to click [Authorize app]\n"),t("img",{attrs:{src:o(657),alt:"BTCPay WordPress V2: Click on authorize app",title:"BTCPay WordPress V2: Click on authorize app"}})])]),e._v(" "),t("li",[t("p",[e._v('You will get redirected back to your WooCommerce store and the API key and Store ID will be prefilled. Additionally, the webhook will have been created automatically for you. Check the "Webhook status" field to show "Webhook setup automatically." followed by an ID.\n'),t("img",{attrs:{src:o(658),alt:"BTCPay WordPress V2: Redirected back to plugin settings",title:"BTCPay WordPress V2: Redirected back to plugin settings"}})])]),e._v(" "),t("li",[t("p",[e._v("Before doing any further configuration click on "),t("strong",[e._v("[Save]")]),e._v(" to be sure all is set.\n"),t("img",{attrs:{src:o(659),alt:"BTCPay WordPress V2: Webhook created",title:"BTCPay WordPress V2: Webhook created"}})])])]),e._v(" "),t("p",[e._v('Congratulations, you are almost set. To make the Bitcoin payment gateway show up on your checkout. In the sidebar go to "WooCommerce" -> "Settings", click on the "Payments" tab and enable the "BTCPay (default)" payment gateway.')]),e._v(" "),t("p",[e._v('Continue with "3. Testing the checkout" below to make sure all works as expected.')]),e._v(" "),t("h3",{attrs:{id:"22-connect-by-manually-creating-the-api-key-and-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#22-connect-by-manually-creating-the-api-key-and-permissions"}},[e._v("#")]),e._v(" 2.2 Connect by manually creating the API key and permissions")]),e._v(" "),t("p",[e._v("If you can't use the wizard mentioned in the previous section you can also generate the API key manually.")]),e._v(" "),t("ol",[t("li",[e._v("Click on "),t("em",[e._v("[Account]")]),e._v(" -> "),t("em",[e._v("Manage Account")]),e._v(" on the bottom left\n"),t("img",{attrs:{src:o(660),alt:"BTCPay WordPress V2: Manage Account",title:"BTCPay WordPress V2: Manage Account"}})]),e._v(" "),t("li",[e._v("Go to the tab "),t("em",[e._v('"API Keys"')])]),e._v(" "),t("li",[e._v("Click "),t("em",[e._v("[Generate Key]")]),e._v(" to select permissions.\n"),t("img",{attrs:{src:o(661),alt:"BTCPay WordPress V2: API Keys overview",title:"BTCPay WordPress V2: API Keys overview"}})]),e._v(" "),t("li",[e._v("Click on the "),t("em",[e._v('"Select specific stores"')]),e._v(" link for the following permissions: "),t("code",[e._v("View invoices")]),e._v(", "),t("code",[e._v("Create invoice")]),e._v(", "),t("code",[e._v("Modify invoices")]),e._v(", "),t("code",[e._v("Modify stores webhooks")]),e._v(", "),t("code",[e._v("View your stores")]),e._v(", "),t("code",[e._v("Create non-approved pull payments")]),e._v(" (used for refunds)\n"),t("img",{attrs:{src:o(662),alt:"BTCPay WordPress V2: API Keys Permissions",title:"BTCPay WordPress V2: API Keys Permissions"}})]),e._v(" "),t("li",[e._v("Click on "),t("em",[e._v("[Generate API Key]")]),e._v(" "),t("img",{attrs:{src:o(663),alt:"BTCPay WordPress V2: API Keys Save",title:"BTCPay WordPress V2: API Keys Save"}})]),e._v(" "),t("li",[e._v("Copy the generated API Key to your WordPress "),t("em",[e._v("BTCPay Settings")]),e._v(" form (Advanced settings)\n"),t("img",{attrs:{src:o(664),alt:"BTCPay WordPress V2: Copy API Key",title:"BTCPay WordPress V2: Copy API Key"}})]),e._v(" "),t("li",[e._v("Copy the store ID to your WordPress "),t("em",[e._v("BTCPay Settings")]),e._v(" form (Advanced settings)\n"),t("img",{attrs:{src:o(665),alt:"BTCPay WordPress V2: Copy Store ID",title:"BTCPay WordPress V2: Copy Store ID"}})]),e._v(" "),t("li",[e._v("On the BTCPay Settings form:")])]),e._v(" "),t("ul",[t("li",[e._v("Enter "),t("em",[e._v("BTCPay Server URL")]),e._v(" (URL of your BTCPay Server instance, where you just created the API key)")]),e._v(" "),t("li",[e._v('Click the "Advanced settings" checkbox to enter '),t("em",[e._v("BTCPay Server API Key")]),e._v(" and "),t("em",[e._v("Store ID")]),e._v(" (leave "),t("em",[e._v("Webhook secret")]),e._v(" empty)")]),e._v(" "),t("li",[e._v("Click on "),t("em",[e._v("[Save]")]),e._v(" at the bottom of the page\n"),t("img",{attrs:{src:o(666),alt:"BTCPay WordPress V2: Save BTCPay Settings form",title:"BTCPay WordPress V2: Save BTCPay Settings form"}})])]),e._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[e._v('Make sure you see the notification "'),t("em",[e._v("BTCPay Server: Successfully registered a new webhook on BTCPay Server")]),e._v('" and '),t("em",[e._v("Setup status")]),e._v(" and "),t("em",[e._v("Webhook status")]),e._v(" are green.\n"),t("img",{attrs:{src:o(667),alt:"BTCPay WordPress V2: Save BTCPay Settings form saved",title:"BTCPay WordPress V2: Save BTCPay Settings form saved"}})])]),e._v(" "),t("p",[e._v('Congratulations, you are almost set. To make the Bitcoin payment gateway show up on your checkout. In the sidebar go to "WooCommerce" -> "Settings", click on the "Payments" tab and enable the "BTCPay (default)" payment gateway.')]),e._v(" "),t("p",[e._v('Continue with "3. Testing the checkout" below to make sure all works as expected.')]),e._v(" "),t("h2",{attrs:{id:"3-testing-the-checkout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-testing-the-checkout"}},[e._v("#")]),e._v(" 3. Testing the checkout")]),e._v(" "),t("p",[e._v("Making a small test-purchase from your store will give you peace of mind.\nAlways make sure that everything is set up correctly before going live.\nThe final video guides you through the steps of setting a gap limit in your Electrum wallet and testing the checkout process.")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/Fi3pYpzGmmo/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=Fi3pYpzGmmo",title:"BTCPay Server Checkout","data-id":"Fi3pYpzGmmo"}},[t("iframe",{attrs:{title:"BTCPay Server Checkout","data-src":"https://www.youtube-nocookie.com/embed/Fi3pYpzGmmo?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h2",{attrs:{id:"4-customizing-btcpay-woocommerce-v2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#4-customizing-btcpay-woocommerce-v2"}},[e._v("#")]),e._v(" 4. Customizing BTCPay WooCommerce V2")]),e._v(" "),t("h3",{attrs:{id:"41-global-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#41-global-settings"}},[e._v("#")]),e._v(" 4.1 Global Settings")]),e._v(" "),t("p",[e._v("Can be found at "),t("em",[e._v("WooCommerce -> Settings -> Tab [BTCPay Settings]")])]),e._v(" "),t("p",[t("strong",[e._v("BTCPay Server URL")])]),e._v(" "),t("p",[e._v("URL to your BTCPay Server instance, including protocol e.g. "),t("code",[e._v("https://btcpay.yourdomain.com")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("BTCPay API Key")])]),e._v(" "),t("p",[e._v("Your API Key. (Was auto-generated in the steps before).")]),e._v(" "),t("p",[t("strong",[e._v("Store ID")])]),e._v(" "),t("p",[e._v("The store ID of your BTCPay Server store. Can be found on the store settings page.")]),e._v(" "),t("p",[t("strong",[e._v("Default Customer Message")])]),e._v(" "),t("p",[e._v('Here you can customize the customer message shown after selecting BTCPay payment gateway on checkout. This can be overwritten on the payment gateway settings for each gateway if you use the "Separate payment gateways" option.')]),e._v(" "),t("p",[t("strong",[e._v('Invoice pass to "Settled" state after')])]),e._v(" "),t("p",[e._v("Set after how many confirmations a payment is considered fully paid and settled. Defaults to what is configured on BTCPay store settings.")]),e._v(" "),t("p",[t("strong",[e._v("BTCPay Order Statuses")])]),e._v(" "),t("p",[e._v("Depending on your business model and store settings, you may want to configure your order statuses.\nYou can set BTCPay to trigger certain order status in WooCommerce automatically.")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("New")]),e._v(" - order placed, not paid yet.")]),e._v(" "),t("li",[t("em",[e._v("Paid")]),e._v(" - order paid, not enough confirmations on the blockchain, yet.")]),e._v(" "),t("li",[t("em",[e._v("Settled")]),e._v(" - order paid, confirmed on the blockchain.")]),e._v(" "),t("li",[t("em",[e._v("Settled (paid over)")]),e._v(" - order paid, confirmed on the blockchain but paid over.")]),e._v(" "),t("li",[t("em",[e._v("Invalid")]),e._v(" - order paid, did not get a sufficient number of confirmations in a pre-defined time-frame set in BTCPay store settings, or manually marked invalid.")]),e._v(" "),t("li",[t("em",[e._v("Expired")]),e._v(" - invoice expired, order not paid.")]),e._v(" "),t("li",[t("em",[e._v("Expired with partial payment")]),e._v(" - invoice expired and paid partially")])]),e._v(" "),t("p",[e._v('Take time to think about how you wish to automate these statuses.\nIf you do not wish certain BTCPay status to trigger WooCommerce order status, you can leave it as default "- no mapping / defaults -".')]),e._v(" "),t("p",[e._v('Note: you should keep the "Settled" order status to "- no mapping / defaults-" if you sell digital and physical products. For digital products WooCommerce will automatically skip the "Processing" status and go directly to "Completed" for those orders only containing digital products.')]),e._v(" "),t("p",[e._v('Another example, if a merchant wants to send an email notifying the customer that the payment has been received, but the order will be processed upon confirmation, the merchant would have to set order status for "Paid" to "On hold". Then, the merchant would have to customize and trigger email for "On hold" status of the order in WooCommerce.')]),e._v(" "),t("p",[e._v("It takes some time to find a perfect formula, so users should test things out before going live.")]),e._v(" "),t("p",[t("strong",[e._v("Modal checkout")])]),e._v(" "),t("p",[e._v("Enable this option if you want the BTCPay Server invoice to be shown directly on the checkout page (and do not redirect customers to your BTCPay Server instance).")]),e._v(" "),t("p",[t("strong",[e._v("Separate Payment Gateways")])]),e._v(" "),t("p",[e._v("If this option is enabled the plugin will generate one separate payment gateway per supported payment method on BTCPay Server. E.g. if you have BTC, LightningNetwork and maybe Liquid Assets enabled on your BTCPay Server store, then you will have a separate gateway available for each. This allows many new use cases like discount per gateway or country based restrictions. More details "),t("RouterLink",{attrs:{to:"/FAQ/Integrations/#how-to-configure-additional-token-support"}},[e._v("here")]),e._v(".")],1),e._v(" "),t("p",[t("strong",[e._v("Send customer data to BTCPayServer")])]),e._v(" "),t("p",[e._v("By default "),t("em",[e._v("no")]),e._v(" customer data beside email is sent to BTCPay Server. If you want to send customer address data to BTCPay Server you can enable it here.")]),e._v(" "),t("p",[t("strong",[e._v("Debug Log")])]),e._v(" "),t("p",[e._v("This option is helpful in case you have a problem and need more information on what is going on. The logs can be then found under WooCommerce -> Status -> Log. Make sure you disable this again after debugging as it will fill up your filesystem with logs.")]),e._v(" "),t("h3",{attrs:{id:"42-payment-gateway-specific"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#42-payment-gateway-specific"}},[e._v("#")]),e._v(" 4.2 Payment Gateway specific")]),e._v(" "),t("p",[e._v('Depending on wheter you have above mentioned "Separate Payment Gateways" enabled you will have one or more Payment Gateways available to configure in the payment gateway settings via '),t("em",[e._v("WooCommerce -> Settings -> Tab [Payments]")])]),e._v(" "),t("p",[e._v("On all payment gateways you can set the following options:")]),e._v(" "),t("p",[t("strong",[e._v("Title")]),e._v('\nThe shown payment gateway text on the checkout page. Defaults to "BTCPay (Bitcoin, Lightning Network, ...)".')]),e._v(" "),t("p",[t("strong",[e._v("Customer Message")])]),e._v(" "),t("p",[e._v("Here you can customize message shown after selecting BTCPay payment gateway.")]),e._v(" "),t("p",[t("strong",[e._v("Gateway Icon")])]),e._v(" "),t("p",[e._v("Upload or select a custom icon to be shown next to the payment gateway during checkout. Defaults to BTCPay logo.")]),e._v(" "),t("h4",{attrs:{id:"421-btcpay-default"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#421-btcpay-default"}},[e._v("#")]),e._v(" 4.2.1 BTCPay (default)")]),e._v(" "),t("p",[e._v("Additional options only available for the default payment gateway:")]),e._v(" "),t("p",[t("strong",[e._v("Enforce payment tokens")])]),e._v(" "),t("p",[e._v('With "Separate Payment Gateways" feature enabled in BTCPay Settings you can use this option to enforce only payment tokens. This means that the created invoice will '),t("em",[e._v("only")]),e._v(' include tokens of type "payment" and '),t("em",[e._v("not any")]),e._v(' of type "promotion". See difference of token types '),t("RouterLink",{attrs:{to:"/FAQ/Integrations/#how-to-configure-additional-token-support#token-types"}},[e._v("here")])],1),e._v(" "),t("h4",{attrs:{id:"422-separate-payment-gateways"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#422-separate-payment-gateways"}},[e._v("#")]),e._v(" 4.2.2 Separate Payment Gateways")]),e._v(" "),t("p",[e._v("Additional options only available for the separate payment gateways (if that feature is enabled):")]),e._v(" "),t("p",[t("strong",[e._v("Token Type")])]),e._v(" "),t("p",[e._v('By default type "payment" is selected. But if you have Liquid Assets with your own issued asset/token (e.g. used as voucher) you can select "promotion" here. Those are processed differently than normal payment tokens. Details can be found '),t("RouterLink",{attrs:{to:"/FAQ/Integrations/#how-to-configure-additional-token-support#promotional-tokens-100-discount"}},[e._v("here")])],1),e._v(" "),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("h3",{attrs:{id:"error-call-to-undefined-function-btcpayserver-http-curl-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-call-to-undefined-function-btcpayserver-http-curl-init"}},[e._v("#")]),e._v(" Error: Call to undefined function BTCPayServer\\Http\\curl_init()")]),e._v(" "),t("p",[e._v("Please make sure your PHP version supports the cURL extension (as written in the requirements above). You can install it on Debian/Ubuntu by running the command "),t("code",[e._v("sudo apt install php-curl")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"the-order-states-do-not-update-although-the-invoice-has-been-paid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-order-states-do-not-update-although-the-invoice-has-been-paid"}},[e._v("#")]),e._v(" The order states do not update although the invoice has been paid")]),e._v(" "),t("p",[e._v("Please check first if the webhook is created under the BTCPay Server store settings. If there is no webhook created you can visit on your WooCommerce store BTCPay Settings tab under WooCommerce settings and hit the save button. This will create the webhook.")]),e._v(" "),t("p",[e._v('You may also check the details of your invoice if there were any errors on sending the webhook request. Some hosting providers, firewall setups or WordPress security plugins (like Wordfence) block POST requests to your WordPress site which lead to a http status of "403 Forbidden" or "503 Service Unavailable".')]),e._v(" "),t("p",[e._v("You can check and verify yourself if there is something blocking requests to your site in one of these two ways:")]),e._v(" "),t("p",[t("strong",[e._v("Check using a command line (Linux or MacOS):")]),e._v("\n(replace EXAMPLE.COM with your WordPress site URL)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl -vX POST -H "Content-Type: application/json" \\\n    -d \'{"data": "test"}\' https://EXAMPLE.COM/?wc-api=btcpaygf_default\n')])])]),t("p",[e._v('On the response, if you see that line "HTTP/1.1 500" or "HTTP/2 500" and the message "Webhook request validation failed" that means that your site is not blocking the request with a "403 Forbidden".')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('.... snip ....\n* We are completely uploaded and fine\n< HTTP/2 500\n< server: nginx\n< date: Sun, 05 Jun 2022 16:55:08 GMT\n< content-type: application/json; charset=UTF-8\n< x-powered-by: PHP/8.1.6\n< expires: Wed, 11 Jan 1984 05:00:00 GMT\n< cache-control: no-cache, must-revalidate, max-age=0\n<\n* Connection #0 to host example.com left intact\n{"code":"wp_die","message":"Webhook request validation failed.","data":{"status":500},"additional_errors":[]}\n')])])]),t("p",[e._v('On the other side, if you see that line "HTTP/1.1 403 Forbidden" or "HTTP/2 403" then something is blocking data sent to your WordPress site. You should ask your hosting provider or make sure no firewall or plugin is blocking the requests.')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".... snip ....\n* upload completely sent off: 16 out of 16 bytes\n< HTTP/1.1 403 Forbidden\n< access-control-allow-origin: *\n< Content-Type: application/json; charset=UTF-8\n< X-Cloud-Trace-Context: 4f07d5b2e5c2f05949d04421a8e2dd6a\n< Date: Thu, 17 Feb 2022 10:06:50 GMT\n< Server: Google Frontend\n< Content-Length: 26\n")])])]),t("p",[t("strong",[e._v("Check using an online service (if you do not have a command line available:")])]),e._v(" "),t("ul",[t("li",[e._v("Go to "),t("a",{attrs:{href:"https://reqbin.com/post-online",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://reqbin.com/post-online"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Enter your domain: "),t("code",[e._v("https://EXAMPLE.COM/?wc-api=btcpaygf_default")]),e._v("\n(replace EXAMPLE.COM with your WordPress site URL)")]),e._v(" "),t("li",[e._v('Make sure "POST" is selected')]),e._v(" "),t("li",[e._v("Click [Send]")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(668),alt:"BTCPay WordPress V2: Debug 403 error with reqbin.com",title:"BTCPay WordPress V2: Debug 403 error with reqbin.com"}})]),e._v(" "),t("p",[e._v('If you see "Status 403 (Forbidden)" then POST requests to your site are blocked for some reason. You should ask your hosting provider or make sure no firewall or plugin is blocking the requests.')]),e._v(" "),t("h3",{attrs:{id:"i-get-an-error-during-checkout-but-not-sure-what-the-problem-is"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-get-an-error-during-checkout-but-not-sure-what-the-problem-is"}},[e._v("#")]),e._v(" I get an error during checkout but not sure what the problem is.")]),e._v(" "),t("p",[e._v("In your BTCPay Settings in your admin dashboard: "),t("em",[e._v("WooCommerce -> Settings: Tab [BTCPay Settings]")]),e._v(" you can enable debug mode by setting the checkbox on that option.")]),e._v(" "),t("p",[e._v("You can now find more detailed Logs when you click the [View Logs] button or you go to "),t("em",[e._v("WooCommerce -> Status: Tab [Logs]")]),e._v(" and select the most recent btcpay logs.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),t("p",[e._v("Please make sure that you disable the debugging mode again after you finished investigating, otherwise your site performance may be impacted and also write lots of logging data in your filesystem for no reason.")])]),e._v(" "),t("p",[e._v("Additionally you can also look into your webservers error logs if you find any error that is related to BTCPay plugin.")]),e._v(" "),t("h3",{attrs:{id:"i-have-troubles-with-using-the-plugin-or-some-other-related-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-have-troubles-with-using-the-plugin-or-some-other-related-questions"}},[e._v("#")]),e._v(" I have troubles with using the plugin or some other related questions")]),e._v(" "),t("p",[e._v("Feel free to join our support channel over at "),t("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://chat.btcpayserver.org/"),t("OutboundLink")],1),e._v(" if you need help or have any further questions.")]),e._v(" "),t("h3",{attrs:{id:"create-a-new-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-api-key"}},[e._v("#")]),e._v(" Create a new API key")]),e._v(" "),t("p",[e._v("If you have been using the WooCommerce V2 plugin prior to version 2.0.0, your API key won't have the required permissions to issue refunds via pull-payments. If you want to use that feature, you can create a new API key (editing an API key is not currently supported). You can use the above described "),t("a",{attrs:{href:"#21-connect-using-the-api-key-wizard--recommended-"}},[e._v("2.1 Connect using API key wizard")]),e._v(" or the "),t("a",{attrs:{href:"#22-connect-by-manually-creating-the-api-key-and-permissions"}},[e._v("manual API key generation")]),e._v(". The configured webhook will continue to work, and no change is needed.")]),e._v(" "),t("h3",{attrs:{id:"i-messed-around-with-the-webhook-how-to-fix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-messed-around-with-the-webhook-how-to-fix"}},[e._v("#")]),e._v(" I messed around with the webhook, how to fix")]),e._v(" "),t("p",[e._v("Suppose you accidentally changed the WooCommerce webhook, and it is not working anymore. In that case, you can quickly force a re-creation of it when you delete the API key on BTCPay Server and then go to the BTCPay Server Settings (on your WordPress site) and hit save again. You should see a message that the webhook was successfully created.")]),e._v(" "),t("h2",{attrs:{id:"deploying-woocommerce-from-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-woocommerce-from-btcpay-server"}},[e._v("#")]),e._v(" Deploying WooCommerce from BTCPay Server")]),e._v(" "),t("p",[e._v("If you already have BTCPay Server, you can very easily start WooCommerce from your existing environment.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Point the external IP of the virtual machine where your BTCPay is hosted to your store domain, for example store.yourdomain.com.")])]),e._v(" "),t("li",[t("p",[e._v("Log into your BTCPay server as root.")])])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Set up WooCommerce variables. You can add "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/docker-fragments/opt-add-woocommerce.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("optional variables"),t("OutboundLink")],1),e._v(" as well.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),e._v(';opt-add-woocommerce"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WOOCOMMERCE_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yourstoredomain.com"')]),e._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Lastly, just run BTCPay Setup script which will add the set up variables.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./btcpay-setup.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Go to your store's domain name, in our example that's store.yourdomain.com and follow the WordPress installation wizard.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
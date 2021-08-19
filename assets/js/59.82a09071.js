(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{635:function(t,e,s){"use strict";s.r(e);var n=s(25),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tooling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tooling"}},[t._v("#")]),t._v(" Tooling")]),t._v(" "),s("p",[t._v("This README describe some useful tooling that you may need during development and testing.\nTo learn how to get started with your local development environment, read "),s("RouterLink",{attrs:{to:"/LocalDevelopment/"}},[t._v("our documentation")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"how-to-manually-test-payments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-manually-test-payments"}},[t._v("#")]),t._v(" How to manually test payments")]),t._v(" "),s("h3",{attrs:{id:"using-the-test-bitcoin-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-bitcoin-cli"}},[t._v("#")]),t._v(" Using the test bitcoin-cli")]),t._v(" "),s("p",[t._v("You can call bitcoin-cli inside the container with "),s("code",[t._v("docker exec")]),t._v(".\nFor example, if you want to send "),s("code",[t._v("0.23111090")]),t._v(" to "),s("code",[t._v("mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./docker-bitcoin-cli.sh sendtoaddress "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.23111090")]),t._v("\n")])])]),s("p",[t._v("If you are using Powershell:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bitcoin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cli")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ps1 sendtoaddress "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf"')]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("23111090\n")])])]),s("p",[t._v("You can also generate blocks:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bitcoin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("generate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ps1 3\n")])])]),s("h3",{attrs:{id:"using-polar-to-test-lightning-payments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-polar-to-test-lightning-payments"}},[t._v("#")]),t._v(" Using Polar to test Lightning payments")]),t._v(" "),s("ul",[s("li",[t._v("Install and run "),s("a",{attrs:{href:"https://lightningpolar.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polar"),s("OutboundLink")],1),t._v(". Setup a small network of nodes.")]),t._v(" "),s("li",[t._v("Go to your store's General Settings and enable Lightning.")]),t._v(" "),s("li",[t._v("Build your connection string using the Connect infomation in the Polar app.")])]),t._v(" "),s("p",[t._v('LND Connection string example:\ntype=lnd-rest;server=https://127.0.0.1:8084/;macaroonfilepath="local path to admin.macaroon on your computer, without these quotes";allowinsecure=true')]),t._v(" "),s("p",[t._v("Now you can create a Lightning invoice on BTCPay Server regtest and make a payment through Polar.")]),t._v(" "),s("p",[t._v('PLEASE NOTE: You may get an exception break in Visual Studio. You must quickly click "Continue" in VS so the invoice is generated.\nOr, uncheck the box that says, "Break when this exceptiontype is thrown".')]),t._v(" "),s("h3",{attrs:{id:"using-the-test-litecoin-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-litecoin-cli"}},[t._v("#")]),t._v(" Using the test litecoin-cli")]),t._v(" "),s("p",[t._v("Same as bitcoin-cli, but with "),s("code",[t._v(".\\docker-litecoin-cli.ps1")]),t._v(" and "),s("code",[t._v(".\\docker-litecoin-cli.sh")]),t._v(" instead.")]),t._v(" "),s("h3",{attrs:{id:"using-the-test-lightning-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-lightning-cli"}},[t._v("#")]),t._v(" Using the test lightning-cli")]),t._v(" "),s("p",[t._v("If you are using Linux:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./docker-customer-lightning-cli.sh pay lnbcrt100u1pd2e6uspp5ajnadvhazjrz55twd5k6yeg9u87wpw0q2fdr7g960yl5asv5fmnqdq9d3hkccqpxmedyrk0ehw5ueqx5e0r4qrrv74cewddfcvsxaawqz7634cmjj39sqwy5tvhz0hasktkk6t9pqfdh3edmf3z09zst5y7khv3rvxh8ctqqw6mwhh\n")])])]),s("p",[t._v("If you are using Powershell:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("customer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lightning"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cli")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ps1 pay lnbcrt100u1pd2e6uspp5ajnadvhazjrz55twd5k6yeg9u87wpw0q2fdr7g960yl5asv5fmnqdq9d3hkccqpxmedyrk0ehw5ueqx5e0r4qrrv74cewddfcvsxaawqz7634cmjj39sqwy5tvhz0hasktkk6t9pqfdh3edmf3z09zst5y7khv3rvxh8ctqqw6mwhh\n")])])]),s("p",[t._v("If you get this message:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Could not find a route"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"getroute_tries"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sendpay_tries"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Please, run the test "),s("code",[t._v("CanSetLightningServer")]),t._v(", this will establish a channel between the customer and the merchant, then, retry.")]),t._v(" "),s("p",[t._v("Alternatively you can run the "),s("code",[t._v("./docker-lightning-channel-setup.sh")]),t._v(" script to establish the channel connection.\nThe "),s("code",[t._v("./docker-lightning-channel-teardown.sh")]),t._v(" script closes any existing lightning channels.")]),t._v(" "),s("h3",{attrs:{id:"alternative-lightning-testing-using-polar-to-test-lightning-payments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alternative-lightning-testing-using-polar-to-test-lightning-payments"}},[t._v("#")]),t._v(" Alternative Lightning testing: Using Polar to test Lightning payments")]),t._v(" "),s("ul",[s("li",[t._v("Install and run "),s("a",{attrs:{href:"https://lightningpolar.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polar"),s("OutboundLink")],1),t._v(". Setup a small network of nodes.")]),t._v(" "),s("li",[t._v("Go to your store's General Settings and enable Lightning.")]),t._v(" "),s("li",[t._v("Build your connection string using the Connect information in the Polar app.")])]),t._v(" "),s("p",[t._v('LND Connection string example:\ntype=lnd-rest;server=https://127.0.0.1:8084/;macaroonfilepath="local path to admin.macaroon on your computer, without these quotes";allowinsecure=true')]),t._v(" "),s("p",[t._v("Now you can create a lightning invoice on BTCPay Server regtest and make a payment through Polar.")]),t._v(" "),s("p",[t._v('PLEASE NOTE: You may get an exception break in Visual Studio. You must quickly click "Continue" in VS so the invoice is generated.\nOr, uncheck the box that says, "Break when this exception type is thrown".')]),t._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("h3",{attrs:{id:"docker-compose-up-dev-failed-or-tests-are-not-passing-what-should-i-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-up-dev-failed-or-tests-are-not-passing-what-should-i-do"}},[t._v("#")]),t._v(" "),s("code",[t._v("docker-compose up dev")]),t._v(" failed or tests are not passing, what should I do?")]),t._v(" "),s("ol",[s("li",[t._v("Run "),s("code",[t._v("docker-compose down --v")]),t._v(" (this will reset your test environment)")]),t._v(" "),s("li",[t._v("Run "),s("code",[t._v("docker-compose pull")]),t._v(" (this will ensure you have the lastest images)")]),t._v(" "),s("li",[t._v("Run again with "),s("code",[t._v("docker-compose up dev")])])]),t._v(" "),s("h3",{attrs:{id:"how-to-run-the-altcoin-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-the-altcoin-environment"}},[t._v("#")]),t._v(" How to run the Altcoin environment?")]),t._v(" "),s("p",[s("code",[t._v("docker-compose -f docker-compose.altcoins.yml up dev")])]),t._v(" "),s("p",[t._v("If you still have issues, try to restart docker.")]),t._v(" "),s("h3",{attrs:{id:"how-to-run-the-selenium-test-with-a-browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-the-selenium-test-with-a-browser"}},[t._v("#")]),t._v(" How to run the Selenium test with a browser?")]),t._v(" "),s("p",[t._v("Run "),s("code",[t._v("dotnet user-secrets set RunSeleniumInBrowser true")]),t._v(" to run tests in browser.")]),t._v(" "),s("p",[t._v("To switch back to headless mode (recommended) you can run "),s("code",[t._v("dotnet user-secrets remove RunSeleniumInBrowser")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"session-not-created-this-version-of-chromedriver-only-supports-chrome-version-88"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-not-created-this-version-of-chromedriver-only-supports-chrome-version-88"}},[t._v("#")]),t._v(" Session not created: This version of ChromeDriver only supports Chrome version 88")]),t._v(" "),s("p",[t._v("When you run tests for selenium, you may end up with this error.\nThis happen when we update the selenium packages on BTCPay Server while you did not update your chrome version.")]),t._v(" "),s("p",[t._v("If you want to use a older chrome driver on "),s("a",{attrs:{href:"https://chromedriver.chromium.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("this page"),s("OutboundLink")],1),t._v(" then point to it with")]),t._v(" "),s("p",[s("code",[t._v('dotnet user-secrets set ChromeDriverDirectory "path/to/the/driver/directory"')])])])}),[],!1,null,null,null);e.default=a.exports}}]);
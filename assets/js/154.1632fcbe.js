(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{799:function(e,t,r){"use strict";r.r(t);var o=r(10),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting-an-issue-in-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-an-issue-in-btcpay-server"}},[e._v("#")]),e._v(" Troubleshooting an issue in BTCPay Server")]),e._v(" "),t("p",[e._v("Facing a problem is never fun. This document explains the most common workflow and steps you should take to "),t("strong",[e._v("identify the issue")]),e._v(" you're having more easily and hopefully solve it yourself or with community help.")]),e._v(" "),t("p",[e._v("Identifying the problem is crucial.")]),e._v(" "),t("h2",{attrs:{id:"1-replicating-the-issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-replicating-the-issue"}},[e._v("#")]),e._v(" 1. Replicating the issue")]),e._v(" "),t("p",[e._v("First and foremost, try to determine when the issue happens.\nTry to replicate the problem.\nTry to update and restart your server to verify you can reproduce your issue.\nIf you think it will describe your issue better, take a screenshot.")]),e._v(" "),t("h3",{attrs:{id:"11-updating-the-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#11-updating-the-server"}},[e._v("#")]),e._v(" 1.1 Updating the server")]),e._v(" "),t("p",[e._v("Check "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-can-i-see-my-btcpay-version"}},[e._v("your version of BTCPay")]),e._v(".\nIf it is much older than the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest version"),t("OutboundLink")],1),e._v(" of BTCPay, "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-update-btcpay-server"}},[e._v("updating your server")]),e._v(" may resolve the issue.")],1),e._v(" "),t("h3",{attrs:{id:"12-restarting-the-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#12-restarting-the-server"}},[e._v("#")]),e._v(" 1.2 Restarting the server")]),e._v(" "),t("p",[e._v("Restarting your server is an easy way to solve many of the most common BTCPay Server issues.\nYou may need to "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-ssh-into-my-btcpay-running-on-vps"}},[e._v("SSH into your server")]),e._v(" to restart it.")],1),e._v(" "),t("h3",{attrs:{id:"13-restarting-a-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#13-restarting-a-service"}},[e._v("#")]),e._v(" 1.3 Restarting a service")]),e._v(" "),t("p",[e._v("Some issues you may only need to restart a particular service in your BTCPay Server deployment.\nSuch as restarting the letsencrypt container to renew the SSL certificate.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" restart letsencrypt-nginx-proxy-companion\n")])])]),t("p",[e._v("Use "),t("code",[e._v("docker ps")]),e._v(" to find the name of a different service you would like to restart.")]),e._v(" "),t("h2",{attrs:{id:"2-looking-through-the-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-looking-through-the-logs"}},[e._v("#")]),e._v(" 2. Looking through the logs")]),e._v(" "),t("p",[e._v("Logs can provide an essential piece of information.\nIn the next few paragraphs, we will describe how to get the "),t("strong",[e._v("log information for various parts of BTCPay")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"21-btcpay-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#21-btcpay-logs"}},[e._v("#")]),e._v(" 2.1 BTCPay Logs")]),e._v(" "),t("p",[e._v("Since the v1.0.3.8, you can easily access BTCPay Server logs from the front-end.\nIf you are a server admin, go to "),t("strong",[e._v("Server Settings > Logs")]),e._v(" and open the logs file.\nIf you don't know what a particular error in the logs means, make sure to mention it when troubleshooting.")]),e._v(" "),t("p",[e._v("If you would like more detailed logs and you're using a Docker deployment, you can view logs of specific Docker containers using the command line.\nSee these "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-ssh-into-my-btcpay-running-on-vps"}},[e._v("instructions to ssh")]),e._v(" into an instance of BTCPay running on a VPS.")],1),e._v(" "),t("p",[e._v("Below is a general list of the container names used for BTCPay.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("LOGS FOR")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("CONTAINER NAME")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("BTCPayServer")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("generated_btcpayserver_1")])]),e._v(" "),t("tr",[t("td",[e._v("NBXplorer")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("generated_nbxplorer_1")])]),e._v(" "),t("tr",[t("td",[e._v("Bitcoind")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("btcpayserver_bitcoind")])]),e._v(" "),t("tr",[t("td",[e._v("Postgres")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("generated_postgres_1")])]),e._v(" "),t("tr",[t("td",[e._v("proxy")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("letsencrypt-nginx-proxy-companion")])]),e._v(" "),t("tr",[t("td",[e._v("Nginx")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("nginx-gen")])]),e._v(" "),t("tr",[t("td",[e._v("Nginx")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("nginx")])]),e._v(" "),t("tr",[t("td",[e._v("Core Lightning (CLN)")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("btcpayserver_clightning_bitcoin")])]),e._v(" "),t("tr",[t("td",[e._v("LND")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("btcpayserver_lnd_bitcoin")])]),e._v(" "),t("tr",[t("td",[e._v("RTL")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("generated_lnd_bitcoin_rtl_1")])]),e._v(" "),t("tr",[t("td",[e._v("Thunderhub")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("generated_bitcoin_thub_1")])]),e._v(" "),t("tr",[t("td",[e._v("LibrePatron")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("librepatron")])]),e._v(" "),t("tr",[t("td",[e._v("Tor")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("tor-gen")])]),e._v(" "),t("tr",[t("td",[e._v("Tor")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("tor")])])])]),e._v(" "),t("p",[e._v("Run the commands below to print logs by container name.\nReplace the container name to view other container logs.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--tail")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" generated_btcpayserver_1\n")])])]),t("h3",{attrs:{id:"22-lightning-network-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#22-lightning-network-logs"}},[e._v("#")]),e._v(" 2.2 Lightning Network Logs")]),e._v(" "),t("p",[e._v("Use the following if you're having a problem with the Lightning Network.")]),e._v(" "),t("h3",{attrs:{id:"221-lightning-network-lnd-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#221-lightning-network-lnd-docker"}},[e._v("#")]),e._v(" 2.2.1 - Lightning Network LND - Docker")]),e._v(" "),t("p",[e._v("There are a few ways to access your LND logs when using Docker.\nFirst log in as root:")]),e._v(" "),t("p",[t("code",[e._v("sudo su -")])]),e._v(" "),t("p",[e._v("Navigate to the correct directory:")]),e._v(" "),t("p",[t("code",[e._v("cd btcpayserver-docker")])]),e._v(" "),t("p",[e._v("Find container name:")]),e._v(" "),t("p",[t("code",[e._v("docker ps")])]),e._v(" "),t("p",[e._v("Print logs by container name:")]),e._v(" "),t("p",[t("code",[e._v("docker logs --tail 100 btcpayserver_lnd_bitcoin")])]),e._v(" "),t("p",[e._v("Alternatively, you can quickly print logs by using container ID (only the first unique ID characters are needed, such as the two furthest left characters):")]),e._v(" "),t("p",[t("code",[e._v("docker logs 'add your container ID '")])]),e._v(" "),t("p",[e._v("If for any reason you need more logs")]),e._v(" "),t("p",[t("code",[e._v("sudo su -")])]),e._v(" "),t("p",[t("code",[e._v("cd /var/lib/docker/volumes/generated_lnd_bitcoin_datadir/_data/logs/bitcoin/mainnet/")])]),e._v(" "),t("p",[e._v("inside that directory do "),t("code",[e._v("ls")])]),e._v(" "),t("p",[e._v("You will see something like "),t("code",[e._v("lnd.log lnd.log.13 lnd.log.15 lnd.log.16.gz lnd.log.17.gz")])]),e._v(" "),t("p",[e._v("To access uncompressed logs of those logs do "),t("code",[e._v("cat lnd.log")]),e._v(" or if you want another one, use "),t("code",[e._v("cat lnd.log.15")])]),e._v(" "),t("p",[e._v("To access compressed logs in .gzip use "),t("code",[e._v("gzip -d lnd.log.16.gz")]),e._v(" (in this case we're accessing lnd.log.16.gz)")]),e._v(" "),t("p",[e._v("This should give you a new file, where you can do "),t("code",[e._v("cat lnd.log.16")])]),e._v(" "),t("p",[e._v("In case the above does not work, you may need to use install gzip first "),t("code",[e._v("sudo apt-get install gzip")])]),e._v(" "),t("h3",{attrs:{id:"222-lightning-network-core-lightning-cln-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#222-lightning-network-core-lightning-cln-docker"}},[e._v("#")]),e._v(" 2.2.2 - Lightning Network Core Lightning (CLN) - Docker")]),e._v(" "),t("p",[t("code",[e._v("sudo su -")])]),e._v(" "),t("p",[t("code",[e._v("docker ps")])]),e._v(" "),t("p",[e._v("Find the Core Lightning (CLN) container ID.")]),e._v(" "),t("p",[e._v("docker logs 'add your container ID here'")]),e._v(" "),t("p",[e._v("alternatively, use this")]),e._v(" "),t("p",[t("code",[e._v("docker logs --tail 100 btcpayserver_clightning_bitcoin")])]),e._v(" "),t("p",[e._v("You can also get log information with Core Lightning (CLN) cli command.")]),e._v(" "),t("p",[t("code",[e._v("bitcoin-lightning-cli.sh getlog")])]),e._v(" "),t("h2",{attrs:{id:"23-bitcoin-node-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#23-bitcoin-node-logs"}},[e._v("#")]),e._v(" 2.3 - Bitcoin Node Logs")]),e._v(" "),t("p",[e._v("In addition to "),t("a",{attrs:{href:"#2-looking-through-the-logs"}},[e._v("looking at logs")]),e._v(" of your Bitcoind container, you can also use any of the "),t("a",{attrs:{href:"https://developer.bitcoin.org/reference/rpc/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin-cli commands"),t("OutboundLink")],1),e._v(" to obtain information from your bitcoin node.\nBTCPay includes a script to allow you to communicate with your Bitcoin node easily.")]),e._v(" "),t("p",[e._v("Inside the "),t("code",[e._v("btcpayserver-docker")]),e._v(" folder, get the blockchain information using your node:")]),e._v(" "),t("p",[t("code",[e._v("bitcoin-cli.sh getblockchaininfo")])]),e._v(" "),t("h2",{attrs:{id:"3-finding-a-solution-yourself-google-faq-github-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-finding-a-solution-yourself-google-faq-github-issues"}},[e._v("#")]),e._v(" 3. Finding a solution yourself (Google, FAQ, GitHub issues)")]),e._v(" "),t("p",[e._v("Even though setups differ, the chances that someone else experienced the same issue as yours are pretty high.\nTake a few moments, Google around and see if you can solve it yourself.")]),e._v(" "),t("h3",{attrs:{id:"31-btcpay-faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#31-btcpay-faq"}},[e._v("#")]),e._v(" 3.1 BTCPay FAQ")]),e._v(" "),t("p",[e._v("We try to document the most common issues on the "),t("RouterLink",{attrs:{to:"/FAQ/"}},[e._v("Frequently Asked Questions page")]),e._v(".\nTake a look there and see if your question is recorded.")],1),e._v(" "),t("h3",{attrs:{id:"32-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#32-github"}},[e._v("#")]),e._v(" 3.2 GitHub")]),e._v(" "),t("p",[e._v("When there's an advanced technical issue, users usually open an issue on GitHub.\nTake a look at the BTCPay GitHub repository and browse "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[e._v("search the closed issues"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"33-mattermost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#33-mattermost"}},[e._v("#")]),e._v(" 3.3 Mattermost")]),e._v(" "),t("p",[e._v("Mattermost chat platform is great for similar issues, other users experienced before you.\nOn the top right-hand corner, click on the search and enter your query.")]),e._v(" "),t("h2",{attrs:{id:"4-asking-for-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#4-asking-for-help"}},[e._v("#")]),e._v(" 4. Asking for help")]),e._v(" "),t("p",[e._v("If you're unable to solve the problem yourself, do not worry.\nThere's an amid community ready to help you.")]),e._v(" "),t("p",[e._v("The better you describe the problem, the higher are the chances of getting a timely fix.\nBe concise and provide as much relevant information as possible.\nBe sure to include the "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-can-i-see-my-btcpay-version"}},[e._v("version you're using")]),e._v(" and describe your BTCPay Deployment Setup.\nTry to explain what you're trying to do and what's the issue.\nIf you can provide the logs.\nIf you think it's relevant, feel free to include a screenshot.")],1),e._v(" "),t("p",[e._v("Here's a good example of how to ask a question.")]),e._v(" "),t("blockquote",[t("p",[e._v("I'm having a problem with XYZ. I can replicate the problem. My BTCPay version is 0.100.31, and I deployed my server on Digital Ocean by following Docker deployment guide. I've searched through the FAQ and closed GitHub issues, but there's no solution to my problem. My BTCPay Setup is XYZ, and the issue is occurring when I do XYZ. Here are the logs I was able to get from my BTCPay instance. You can see the error in the image I attached.")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Please note:")]),e._v(" "),t("p",[e._v("The community will not provide extensive support for custom deployments.\nI.e. variations of "),t("RouterLink",{attrs:{to:"/Deployment/ManualDeployment/"}},[e._v("Manual Deployments")]),e._v(" are expected to be used only for development purposes and by users with technical literacy with the ability to "),t("strong",[e._v("resolve deployment and maintenance issues on their own")]),e._v(". This includes "),t("RouterLink",{attrs:{to:"/Deployment/HardwareAsAService/"}},[e._v("Hardware-As-A-Service")]),e._v(" products (Nodl, RaspiBlitz, Umbrel, etc ...)")],1)]),e._v(" "),t("h3",{attrs:{id:"41-asking-the-community-general-problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#41-asking-the-community-general-problems"}},[e._v("#")]),e._v(" 4.1 Asking the community (general problems)")]),e._v(" "),t("p",[e._v("For quick answers to fundamental problems, it's best to post a question in #support channel on "),t("a",{attrs:{href:"https://chat.btcpayserver.org/btcpayserver/channels/support",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Mattermost"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"42-opening-an-issue-on-github-advanced-problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#42-opening-an-issue-on-github-advanced-problems"}},[e._v("#")]),e._v(" 4.2 Opening an Issue on GitHub (advanced problems)")]),e._v(" "),t("p",[e._v("If you have a custom build setup and are facing a complex problem, "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on GitHub"),t("OutboundLink")],1),e._v(" so that developers can help you out.")]),e._v(" "),t("h3",{attrs:{id:"43-premium-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#43-premium-support"}},[e._v("#")]),e._v(" 4.3 Premium Support")]),e._v(" "),t("p",[e._v("Some community members provide paid support.\nIf you want a quicker help, check out the list of "),t("RouterLink",{attrs:{to:"/Support/"}},[e._v("members providing premium support")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"44-lightning-network-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#44-lightning-network-support"}},[e._v("#")]),e._v(" 4.4 Lightning Network Support")]),e._v(" "),t("p",[e._v("If you're facing a technical problem with your Lightning Network implementation, you may want to ask questions in their respective communities.")]),e._v(" "),t("h4",{attrs:{id:"441-lnd-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#441-lnd-support"}},[e._v("#")]),e._v(" 4.4.1 LND Support")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/lightningnetwork/lnd/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("LND GitHub"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://lightningcommunity.slack.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightning Community on Slack"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"442-core-lightning-cln-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#442-core-lightning-cln-support"}},[e._v("#")]),e._v(" 4.4.2 Core Lightning (CLN) Support")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ElementsProject/lightning/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLN GitHub"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://t.me/lightningd",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLN Telegram Group"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://lightning.readthedocs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLN docs"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);
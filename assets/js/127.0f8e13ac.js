(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{743:function(a,e,t){"use strict";t.r(e);var s=t(10),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"joinmarket-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#joinmarket-support"}},[a._v("#")]),a._v(" Joinmarket support")]),a._v(" "),e("p",[a._v("JoinMarket is software to create a special kind of bitcoin transaction called a CoinJoin transaction. Its aim is to improve the confidentiality and privacy of bitcoin transactions.")]),a._v(" "),e("p",[a._v("You will be able to use your bitcoin to help other protect their privacy, while earning a yield for this service.")]),a._v(" "),e("p",[a._v("See "),e("a",{attrs:{href:"https://github.com/JoinMarket-Org/JoinMarket-Docs/blob/master/High-level-design.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("the documentation of the joinmarket project"),e("OutboundLink")],1),a._v(" for more details.")]),a._v(" "),e("p",[a._v("This is a very advanced functionality, and there is no easy way to recover if something goes wrong.")]),a._v(" "),e("p",[a._v("For hardcore bitcoiners only.")]),a._v(" "),e("h2",{attrs:{id:"how-to-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[a._v("#")]),a._v(" How to use")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a._v(';opt-add-joinmarket"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" btcpay-setup.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v("\n")])])]),e("p",[a._v("Then you need to setup your default joinmarket wallet:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jm.sh wallet-tool-generate\njm.sh set-wallet "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("wallet_file_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Once done, you will need to send some money to the joinmarket wallet:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jm.sh wallet-tool\n")])])]),e("h2",{attrs:{id:"how-to-change-joinmarket-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-joinmarket-configuration"}},[a._v("#")]),a._v(" How to change joinmarket configuration?")]),a._v(" "),e("p",[a._v("Connect to your container, and edit your configuration:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jm.sh "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CONFIG")]),a._v("\n")])])]),e("h2",{attrs:{id:"managing-your-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#managing-your-wallet"}},[a._v("#")]),a._v(" Managing your wallet")]),a._v(" "),e("p",[a._v("By running "),e("code",[a._v("jm.sh")]),a._v(" without parameter, you will get a bunch of command that you can run such as:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Usage:\n------\n\nTooling to setup your joinmarket yield generator\n\n    wallet-tool: Run wallet-tools.py on the wallet\n    wallet-tool-generate: Generate a new wallet\n    set-wallet: Set the wallet that the yield generator need to use\n    bash: Open an interactive bash session in the joinmarket container\n    receive-payjoin: Receive a payjoin payment\n    sendpayment: Send a payjoin through coinjoin (password needed)\n\nExample:\n    * jm.sh wallet-tool-generate\n    * jm.sh set-wallet wallet.jmdat mypassword\n    * jm.sh wallet-tool\n    * jm.sh receive-payjoin <amount>\n    * jm.sh sendpayment <amount> <address>\n    * jm.sh wallet-tool history\n    * jm.sh bash\n")])])]),e("p",[a._v("Note "),e("code",[a._v("jm.sh")]),a._v(" commands are wrapper around joinmarket scripts. Those are just convenience command, you can always directly connect to the container via "),e("code",[a._v("jm.sh bash")]),a._v(" and achieve the same result with the joinmarket python scripts.")]),a._v(" "),e("h2",{attrs:{id:"getting-command-prompt-into-the-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-command-prompt-into-the-container"}},[a._v("#")]),a._v(" Getting command prompt into the container")]),a._v(" "),e("p",[a._v("You can connect to the container and have direct access to joinmarket scripts such as:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jm.sh "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\nsendpayment.py wallet.jmdat "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),e("h2",{attrs:{id:"managing-the-services-such-as-yield-generators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#managing-the-services-such-as-yield-generators"}},[a._v("#")]),a._v(" Managing the services such as yield generators")]),a._v(" "),e("p",[a._v("First connect to the container's bash")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jm.sh "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),e("p",[a._v("You can list available services to run:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("supervisorctl status\n")])])]),e("p",[a._v("Which might show you")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("root"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" supervisorctl status\nob-watcher                       STOPPED   Not started\nyg-privacyenhanced               STOPPED   Not started\nyield-generator-basic            STOPPED   Not started\n")])])]),e("p",[a._v("You can start a yield generator with:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("supervisorctl start yg-privacyenhanced\n")])])]),e("p",[a._v("*** Note that services will NOT be restarted automatically if the container restart. ***")]),a._v(" "),e("p",[a._v("If you want to automatically restart the service when the container restart,")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AUTO_START")]),a._v("\n")])])]),e("p",[a._v("Then remove the comment "),e("code",[a._v("#")]),a._v(" in front of the service name you want to automatically restart.")]),a._v(" "),e("h2",{attrs:{id:"ob-watcher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ob-watcher"}},[a._v("#")]),a._v(" OB-Watcher")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("ob-watcher")]),a._v(" service allows you to "),e("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/orderbook.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("see an order book"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("You can activate it:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("supervisorctl start ob-watcher\n")])])]),e("p",[a._v("Then you can browse it by browsing "),e("code",[a._v("https://<your-server>.com/obwatch/")])]),a._v(" "),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),e("h3",{attrs:{id:"error-failed-to-load-wallet-you-need-to-remove-the-lock-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-failed-to-load-wallet-you-need-to-remove-the-lock-file"}},[a._v("#")]),a._v(" Error: Failed to load wallet, you need to remove the lock file")]),a._v(" "),e("p",[a._v("You might sometimes get the following error when running a python script for joinmarket:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Failed to load wallet, error message: RetryableStorageError('File is currently in use (locked by pid 12822). If this is a leftover from a crashed instance you need to remove the lock file `/root/.joinmarket/wallets/.wallet.jmdat.lock` manually.')\n")])])]),e("p",[a._v("This is because a service using the wallet is running, so you need to shut it down before running the command.")]),a._v(" "),e("p",[a._v("Check which service is running:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("supervisorctl status\n")])])]),e("p",[a._v("And stop it")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("supervisorctl stop yg-privacyenhanced\n")])])]),e("h3",{attrs:{id:"read-the-logs-of-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-the-logs-of-services"}},[a._v("#")]),a._v(" Read the logs of services")]),a._v(" "),e("p",[a._v("You can use the "),e("code",[a._v("supervisorctl tail")]),a._v(" command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("supervisorctl "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" yg-privacyenhanced\n")])])]),e("p",[a._v("You can also check the logs in the "),e("code",[a._v("$DATADIR/logs")]),a._v(" folder.")])])}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{746:function(a,t,e){"use strict";e.r(t);var s=e(10),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"tallycoin-connect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tallycoin-connect"}},[a._v("#")]),a._v(" Tallycoin Connect")]),a._v(" "),t("p",[a._v("Set up "),t("a",{attrs:{href:"https://github.com/djbooth007/tallycoin_connect",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tallycoin Connect"),t("OutboundLink")],1),a._v(" on your BTCPay Server instance to allow for the retrieval of Lightning invoices via "),t("a",{attrs:{href:"https://tallyco.in/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tallycoin"),t("OutboundLink")],1),a._v(".\nLND required.")]),a._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("p",[a._v("To install the Tallycoin Connect service, you need to set your Tallycoin API key and a password first.\nThe password is optional, but as the service will be publicly available, you are strongly advised to require a secure password for the login.")]),a._v(" "),t("p",[a._v("You can either set "),t("code",[a._v("TALLYCOIN_PASSWD_CLEARTEXT")]),a._v(" (plain text) or "),t("code",[a._v("TALLYCOIN_PASSWD")]),a._v(", which must be a sha256 hash of your login password.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Set API key and password")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TALLYCOIN_APIKEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-tallycoin-api-key"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TALLYCOIN_PASSWD_CLEARTEXT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"sUpErSeCuRe"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Add fragment and run setup")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a._v(';opt-add-tallycoin-connect"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" btcpay-setup.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v("\n")])])]),t("p",[a._v("Afterwards you should see Tallycoin Connect appear as a service on the Server Settings > Services page in BTCPay Server.")]),a._v(" "),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),t("p",[a._v("To see the logs of the Tallycoin Connect service, you can run this command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" generated_tallycoin_connect_1\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
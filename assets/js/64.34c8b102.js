(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{384:function(t,a,s){t.exports=s.p+"assets/img/rpi-imager.9299bfff.png"},385:function(t,a,s){t.exports=s.p+"assets/img/rpi-imager-advanced-settings.8bdd9c34.png"},719:function(t,a,s){"use strict";s.r(a);var e=s(10),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"raspberry-pi-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-deployment"}},[t._v("#")]),t._v(" Raspberry Pi Deployment")]),t._v(" "),a("p",[t._v("This document guides you step by step on "),a("strong",[t._v("how to run BTCPay Server on a Raspberry Pi 4")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("Raspberry Pi 4")]),t._v(" is currently the best low-cost single-board computer available.\nYou can "),a("strong",[t._v("use a Raspberry Pi 4 to run your BTCPay Server")]),t._v(" at home for around $150 worth of parts, described below.")]),t._v(" "),a("p",[t._v("Already have a Raspberry Pi 4 with the following specs?")]),t._v(" "),a("ul",[a("li",[t._v("4GB memory")]),t._v(" "),a("li",[t._v("1TB USB 3.0 SSD")]),t._v(" "),a("li",[t._v("16GB or greater SD card")])]),t._v(" "),a("p",[t._v("If so, you can go straight to the "),a("a",{attrs:{href:"#quickstart"}},[t._v("quickstart instructions")]),t._v(".\nOtherwise, here's what you need …")]),t._v(" "),a("h2",{attrs:{id:"required-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required-hardware"}},[t._v("#")]),t._v(" Required Hardware")]),t._v(" "),a("h3",{attrs:{id:"raspberry-pi-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-4"}},[t._v("#")]),t._v(" Raspberry Pi 4")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.canakit.com/raspberry-pi-4-4gb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi 4 with "),a("strong",[t._v("4GB RAM")]),a("OutboundLink")],1),t._v(" (~$65)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.amazon.com/dp/B073K14CVB/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sandisk 16GB SD Card"),a("OutboundLink")],1),t._v(" (~$10)")])]),t._v(" "),a("p",[t._v("Don’t settle for only 1GB or 2GB of RAM. The "),a("strong",[t._v("4GB RAM")]),t._v(" version is harder to find than the other versions, but you absolutely want that "),a("strong",[t._v("4GB of RAM")]),t._v(" for a few extra bucks, and it’s totally worth spending a few extra minutes searching on the Internet to find a vendor that has the 4GB RAM version in stock. You’ll also need an "),a("strong",[t._v("SD card reader")]),t._v(" if you don’t already have one.")]),t._v(" "),a("h3",{attrs:{id:"data-storage-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-storage-options"}},[t._v("#")]),t._v(" Data Storage options")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.amazon.com/dp/B0874XN4D8/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Samsung SSD T7 1TB"),a("OutboundLink")],1),t._v(" (~$100)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.amazon.com/dp/B071KGRXRG/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SanDisk Ultra 3D 1TB"),a("OutboundLink")],1),t._v(" (~$100)")])]),t._v(" "),a("p",[t._v("A 1TB SSD allows you to keep a full copy of the Bitcoin blockchain.\nYou can also use BTCPay Server without a full copy of the Bitcoin blockchain by using the "),a("RouterLink",{attrs:{to:"/Docker/#how-i-can-prune-my-nodes"}},[t._v("pruning option")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"power-adapter-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-adapter-options"}},[t._v("#")]),t._v(" Power Adapter options")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://shop.pimoroni.com/products/raspberry-pi-official-usb-c-power-supply-us?variant=29391144648787",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Raspberry Pi 4 USB-C Power Adapter 5.1V/3A for US"),a("OutboundLink")],1),t._v(" ($10)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://shop.pimoroni.com/products/raspberry-pi-official-usb-c-power-supply-eu?variant=29391130624083",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Raspberry Pi 4 USB-C Power Adapter 5.1V/3A for EU"),a("OutboundLink")],1),t._v(" ($10)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://shop.pimoroni.com/products/raspberry-pi-official-usb-c-power-supply-au?variant=29391160737875",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Raspberry Pi 4 USB-C Power Adapter 5.1V/3A for AU"),a("OutboundLink")],1),t._v(" ($10)")])]),t._v(" "),a("p",[t._v("Don’t waste your time with random cheap power adapters from Amazon, or expect that the existing ones you have at home are going to work fine. The Raspberry Pi 4 has issues with unofficial adapters, and for only $10 it’s better to just "),a("strong",[t._v("get an official adapter")]),t._v(" instead of learning this the hard way.")]),t._v(" "),a("h3",{attrs:{id:"case-and-cooling-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-and-cooling-options"}},[t._v("#")]),t._v(" Case and Cooling options")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.amazon.com/dp/B07WG4DW52/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flirc Heatsink Case"),a("OutboundLink")],1),t._v(" (~$15)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.amazon.com/dp/B07VQRYTPR/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Passive cooling aluminum case"),a("OutboundLink")],1),t._v(" (~$15)")])]),t._v(" "),a("p",[t._v("Of course, using a case is totally optional, but we recommend one to protect your Raspberry Pi over the long-term.\nStrictly speaking, you don’t actually need a cooling solution, but you certainly "),a("strong",[t._v("want")]),t._v(" at least passive cooling.\nOnce the Raspberry PI core temperature reaches 70°C, it will throttle down the CPU.")]),t._v(" "),a("h2",{attrs:{id:"quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[t._v("#")]),t._v(" Quickstart")]),t._v(" "),a("p",[t._v("Download and open the latest "),a("a",{attrs:{href:"https://www.raspberrypi.com/software/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi Imager"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("figure",[a("img",{attrs:{src:s(384),alt:"Raspberry Pi Imager",title:"Raspberry Pi Imager"}})]),t._v(" "),a("p",[t._v("Choose the following options:")]),t._v(" "),a("ul",[a("li",[t._v("Operating System: Raspberry Pi OS Lite (64-bit)\n"),a("ul",[a("li",[t._v('Find it via "Raspberry Pi OS (Other)"')])])]),t._v(" "),a("li",[t._v("Storage: Select your SD card")])]),t._v(" "),a("p",[t._v("Open the Advanced Settings via the button in the bottom right corner.")]),t._v(" "),a("figure",[a("img",{attrs:{src:s(385),alt:"Raspberry Pi Imager Advanced Settings",title:"Raspberry Pi Imager Advanced Settings"}})]),t._v(" "),a("p",[t._v("Advanced Settings:")]),t._v(" "),a("ul",[a("li",[t._v("Set the hostname to what you like, this guide assumes "),a("code",[t._v("btcpay.local")]),t._v(".")]),t._v(" "),a("li",[t._v("Enabled SSH")]),t._v(" "),a("li",[t._v("Set username and password, this guide assumes "),a("code",[t._v("btcpay")]),t._v(" as username.")])]),t._v(" "),a("p",[t._v("Other settings are optional, you do not need to configure wireless LAN.")]),t._v(" "),a("p",[t._v('Close the Advanced Settings and click the "Write" button.')]),t._v(" "),a("h3",{attrs:{id:"setting-up-the-raspberry-pi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-raspberry-pi"}},[t._v("#")]),t._v(" Setting up the Raspberry Pi")]),t._v(" "),a("p",[t._v("Once the image is written to the SD card, you can eject it and insert it into the Raspberry Pi.\nConnect the SSD and network cable to the Raspberry Pi.\nAt last, connect the power cable ­— this starts the boot process.\nIt should boot up and get an IP address using DHCP.")]),t._v(" "),a("p",[t._v("Login to the Raspberry Pi using the credentials you configured in the Raspberry Pi Imager:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" btcpay@btcpay.local\n")])])]),a("p",[t._v("Confirm the "),a("code",[t._v("Are you sure you want to continue connecting?")]),t._v(" question with "),a("code",[t._v("yes")])]),t._v(" "),a("p",[t._v("If your Raspberry Pi cannot be found by the "),a("code",[t._v("btcpay.local")]),t._v(" address, you will need to login to your router to find its IP address.\nThe IP address that my Raspberry Pi got was "),a("code",[t._v("192.168.1.5")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" btcpay@192.168.1.5\n")])])]),a("p",[t._v("Switch to the "),a("code",[t._v("root")]),t._v(" user:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n")])])]),a("p",[t._v("Afterwards, you can choose between "),a("a",{attrs:{href:"https://github.com/lightningnetwork/lnd",target:"_blank",rel:"noopener noreferrer"}},[t._v("LND"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/ElementsProject/lightning",target:"_blank",rel:"noopener noreferrer"}},[t._v("Core Lightning"),a("OutboundLink")],1),t._v(" for your Lightning node.")]),t._v(" "),a("p",[a("strong",[t._v("Required:")]),t._v(" Choose one of the following …")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Core Lightning")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_LIGHTNING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clightning"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# LND")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_LIGHTNING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lnd"')]),t._v("\n")])])]),a("p",[a("strong",[t._v("Optional:")]),t._v(" You can also configure "),a("RouterLink",{attrs:{to:"/Docker/#environment-variables"}},[t._v("additional settings")]),t._v(" …")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# optional, this is just an example for runing a pruned node on a public domain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"opt-save-storage"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAY_ADDITIONAL_HOSTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcpay.YourDomain.com"')]),t._v("\n")])])]),a("p",[t._v("Download and run the install script:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" btcpayserver-install.sh https://raw.githubusercontent.com/btcpayserver/btcpayserver-doc/master/scripts/btcpayserver-rpi4-install.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x btcpayserver-install.sh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" btcpayserver-install.sh\n")])])]),a("p",[t._v("After the initial setup is complete open a browser on another computer and go to "),a("code",[t._v("btcpay.local")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Your installation is done and your node should have started synching.\nFor a Bitcoin full node the initial block download takes approximately 40 hours after install.")])]),t._v(" "),a("p",[t._v("If you are curious, here are the details of what the installation scripts above do …")]),t._v(" "),a("h2",{attrs:{id:"detailed-step-by-step-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-step-by-step-instructions"}},[t._v("#")]),t._v(" Detailed Step by Step Instructions")]),t._v(" "),a("p",[t._v("These are the steps that follow after the general setup process outlined in the "),a("a",{attrs:{href:"#quickstart"}},[t._v("quickstart instructions")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("The following steps require you to be the root user.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n")])])])]),t._v(" "),a("h3",{attrs:{id:"upgrade-the-os-packages-to-latest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-the-os-packages-to-latest"}},[t._v("#")]),t._v(" Upgrade the OS packages to latest")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" autoremove\n")])])]),a("h3",{attrs:{id:"configuring-the-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-storage"}},[t._v("#")]),t._v(" Configuring the storage")]),t._v(" "),a("p",[t._v("We recommend to disable swap to prevent burning out your SD card:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("dphys-swapfile swapoff\ndphys-swapfile uninstall\nupdate-rc.d dphys-swapfile remove\nsystemctl disable dphys-swapfile\n")])])]),a("p",[t._v("Partition your SSD:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" /dev/sda\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type 'p' to list existing partitions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type 'd' to delete currently selected partitions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type 'n' to create a new partition")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type 'w' to write the new partition table and exit fdisk")]),t._v("\n")])])]),a("p",[t._v("Format the new partition on your SSD:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mkfs.ext4 /dev/sda1\n")])])]),a("p",[t._v("Configure the SSD partition to auto-mount at bootup:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mkfs.ext4 /dev/sda1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /mnt/usb\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" blkid "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" UUID "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" value /dev/sda1"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UUID='),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UUID")]),t._v(' /mnt/usb ext4 defaults,noatime,nofail 0 0"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v(" /etc/fstab\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v("\n")])])]),a("p",[t._v("While you’re editing "),a("code",[t._v("/etc/fstab")]),t._v(" add a RAM filesystem for logs (optional).\nThis is also to prevent burning out your SD card too quickly:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none /var/log tmpfs size=10M,noatime 0 0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/fstab\n")])])]),a("h3",{attrs:{id:"install-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-docker"}},[t._v("#")]),t._v(" Install Docker")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apt-transport-https ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" gnupg lsb-release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-fsSL")]),t._v(" https://download.docker.com/linux/debian/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" gpg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dearmor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" /usr/share/keyrings/docker-archive-keyring.gpg\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch='),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("dpkg --print-architecture"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \\\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-cs")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' stable"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/docker.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce docker-ce-cli containerd.io\n")])])]),a("h3",{attrs:{id:"create-mount-for-docker-volumes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-mount-for-docker-volumes"}},[t._v("#")]),t._v(" Create mount for Docker volumes")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" /var/lib/docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /var/lib/docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--bind")]),t._v(" /mnt/usb /var/lib/docker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/mnt/usb /var/lib/docker none bind,nobootwait 0 2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/fstab\nsystemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),a("h3",{attrs:{id:"configuring-the-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-firewall"}},[t._v("#")]),t._v(" Configuring the firewall")]),t._v(" "),a("p",[t._v("Install a firewall and allow SSH, HTTP, HTTPS, Bitcoin, and Lightning:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" ufw\nufw default deny incoming\nufw default allow outgoing\n")])])]),a("p",[t._v("This command allows SSH connections from internal networks only:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ufw allow from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.0/8 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\nufw allow from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".0.0/12 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\nufw allow from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/16 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\nufw allow from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".0.0/16 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\nufw allow from fc00::/7 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\nufw allow from fe80::/10 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\nufw allow from ff00::/8 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\n")])])]),a("p",[t._v("These ports need to be accessible from anywhere (The default subnet is 'any' unless you specify one):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v("/tcp\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8333")]),t._v("/tcp\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9735")]),t._v("/tcp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Enable the firewall")]),t._v("\nufw "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Verify the configuration")]),t._v("\nufw status\n")])])]),a("h3",{attrs:{id:"setup-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-btcpay-server"}},[t._v("#")]),t._v(" Setup BTCPay Server")]),t._v(" "),a("p",[t._v("Download BTCPay Server from GitHub:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ensure we are in root home")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" fail2ban "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/btcpayserver/btcpayserver-docker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n")])])]),a("p",[t._v("Configure BTCPay by setting some "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker#environment-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("environment variables"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAY_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcpay.local"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("REVERSEPROXY_DEFAULT_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BTCPAY_HOST")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NBITCOIN_NETWORK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mainnet"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_CRYPTO1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btc"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_LIGHTNING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clightning"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_REVERSEPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"opt-more-memory"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAY_ENABLE_SSH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),a("p",[t._v("If you want to use multiple hostnames, add them via the optional "),a("code",[t._v("BTCPAY_ADDITIONAL_HOSTS")]),t._v(" variable:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAY_ADDITIONAL_HOSTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcpay.YourDomain.com"')]),t._v("\n")])])]),a("p",[t._v("In case you want to restrict access to your local network only, please note that you need to use a "),a("code",[t._v(".local")]),t._v(" domain.")]),t._v(" "),a("p",[t._v("Run the BTCPay installation:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ./btcpay-setup.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v("\n")])])]),a("p",[t._v("It should be up and running within a few minutes. Try opening http://btcpay.local in your web browser. If everything is correct, you will see BTCPay Server front page.")]),t._v(" "),a("p",[t._v("Now, you just need to wait a day or so for the Bitcoin blockchain to "),a("RouterLink",{attrs:{to:"/FAQ/Synchronization/"}},[t._v("sync and full verify")]),t._v(". The bottom of the BTCPay Server web GUI will show a pop-up dialog box to monitor the progress.")],1),t._v(" "),a("h3",{attrs:{id:"fastsync-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastsync-optional"}},[t._v("#")]),t._v(" FastSync (optional)")]),t._v(" "),a("p",[t._v("Please read very carefully to understand what "),a("RouterLink",{attrs:{to:"/Docker/fastsync/"}},[t._v("FastSync")]),t._v(" is and why it is important to verify the UTXO set yourself.")],1),t._v(" "),a("p",[t._v("By using FastSync, you are exposing yourself to attacks if a "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/README.md#what-are-the-downsides-of-fast-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("malicious UTXO set snapshot"),a("OutboundLink")],1),t._v(" is sent to you.\nIf you have another trusted node somewhere else, you can check the validity of the UTXO set gathered by FastSync by following "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/README.md#dont-trust-verify",target:"_blank",rel:"noopener noreferrer"}},[t._v("these instructions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Stop BTCPay Server")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /root/btcpayserver/btcpayserver-docker\n./btcpay-down.sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import FastSync UTXO set")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" contrib/FastSync\n./load-utxo-set.sh\n")])])]),a("p",[t._v("FastSync currently takes about 30 minutes on a high-speed internet connection.\nAfter FastSync finishes, run the following command to restart BTCPay Server:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n./btcpay-up.sh\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
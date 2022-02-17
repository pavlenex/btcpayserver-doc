(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{721:function(e,t,n){"use strict";n.r(t);var a=n(35),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("#!/bin/bash")]),e._v(" "),n("h1",{attrs:{id:"set-btcpayserver-environment-variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-btcpayserver-environment-variables"}},[e._v("#")]),e._v(" Set BTCPayServer Environment Variables")]),e._v(" "),n("p",[e._v('export BTCPAY_HOST="btcpay.local"\nexport REVERSEPROXY_DEFAULT_HOST="$BTCPAY_HOST"\nexport NBITCOIN_NETWORK="mainnet"\nexport BTCPAYGEN_CRYPTO1="btc"\nexport BTCPAYGEN_LIGHTNING="clightning"\nexport BTCPAYGEN_REVERSEPROXY="nginx"\nexport BTCPAYGEN_ADDITIONAL_FRAGMENTS=""\nexport BTCPAY_ENABLE_SSH=true')]),e._v(" "),n("h1",{attrs:{id:"install-docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-docker"}},[e._v("#")]),e._v(" Install Docker")]),e._v(" "),n("p",[e._v('apt install apt-transport-https ca-certificates curl gnupg lsb-release -y\ncurl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian '),n("br"),e._v('\n$(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null\napt update\napt -y install docker-ce docker-ce-cli containerd.io')]),e._v(" "),n("h1",{attrs:{id:"configure-external-storage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-external-storage"}},[e._v("#")]),e._v(" Configure External Storage")]),e._v(" "),n("p",[e._v('DEVICE_NAME=""\nPARTITION_NAME=""\nMOUNT_DIR="/mnt/external"\nDOCKER="/var/lib/docker"')]),e._v(" "),n("p",[e._v('isSD=$(fdisk -l | grep -c "/dev/mmcblk0:")\nisNVMe=$(fdisk -l | grep -c "/dev/nvme0n1:")\nisUSB=$(fdisk -l | grep -c "/dev/sda:")')]),e._v(" "),n("h1",{attrs:{id:"if-booting-from-sd-with-external-storage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if-booting-from-sd-with-external-storage"}},[e._v("#")]),e._v(" If booting from SD with external storage")]),e._v(" "),n("p",[e._v('if [ ${isSD} -eq 1 ] && [ ${isUSB} -eq 1 ]; then\nDEVICE_NAME="sda"\nPARTITION_NAME="sda1"\numount /dev/sda1\nelif [ ${isSD} -eq 1 ] && [ ${isNVMe} -eq 1 ]; then\nDEVICE_NAME="nvme0n1"\nPARTITION_NAME="nvme0n1p1"\numount /dev/nvme0n1p1\nfi')]),e._v(" "),n("p",[e._v('if [ -n "${DEVICE_NAME}" ]; then\nmkdir -p ${MOUNT_DIR}\nsfdisk --delete /dev/${DEVICE_NAME}\nsync\nsleep 4\nsudo wipefs -a /dev/${DEVICE_NAME}\nsync\nsleep 4\npartitions=$(lsblk | grep -c "─${DEVICE_NAME}")\nif [ ${partitions} -gt 0 ]; then\ndd if=/dev/zero of=/dev/${DEVICE_NAME} bs=512 count=1\nsync\nfi\npartitions=$(lsblk | grep -c "─${DEVICE_NAME}")\nif [ ${partitions} -gt 0 ]; then\nexit 1\nfi')]),e._v(" "),n("p",[e._v("(\necho o # Create a new empty DOS partition table\necho n # Add a new partition\necho p # Primary partition\necho 1 # Partition number\necho   # First sector (Accept default: 1)\necho   # Last sector (Accept default: varies)\necho w # Write changes\n) | fdisk /dev/${DEVICE_NAME}\nsync")]),e._v(" "),n("h1",{attrs:{id:"loop-until-the-partition-gets-available"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loop-until-the-partition-gets-available"}},[e._v("#")]),e._v(" loop until the partition gets available")]),e._v(" "),n("p",[e._v("loopdone=0\nloopcount=0\nwhile [ ${loopdone} -eq 0 ]\ndo\nsleep 2\nsync\nloopdone=$(lsblk -o NAME | grep -c ${PARTITION_NAME})\nloopcount=$(($loopcount +1))\nif [ ${loopcount} -gt 10 ]; then\nexit 1\nfi\ndone")]),e._v(" "),n("p",[e._v("mkfs.ext4 -F -L external /dev/${PARTITION_NAME}\nloopdone=0\nloopcount=0\nwhile [ ${loopdone} -eq 0 ]\ndo\nsleep 2\nsync\nloopdone=$(lsblk -o NAME,LABEL | grep -c external)\nloopcount=$(($loopcount +1))\nif [ ${loopcount} -gt 10 ]; then\nexit 1\nfi\ndone")]),e._v(" "),n("p",[e._v('UUID="$(sudo blkid -s UUID -o value /dev/${PARTITION_NAME})"\necho "UUID=$UUID ${MOUNT_DIR} ext4 defaults,noatime,nofail 0 0" | tee -a /etc/fstab\nmount /dev/${PARTITION_NAME} ${MOUNT_DIR}\nsleep 5\nrm -rf "$DOCKER"\nmkdir -p "$DOCKER"\nmount --bind "$MOUNT_DIR" "$DOCKER"\necho "$MOUNT_DIR $DOCKER none bind,nobootwait 0 2" >> /etc/fstab\nsystemctl restart docker\nfi')]),e._v(" "),n("h1",{attrs:{id:"configure-firewall"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-firewall"}},[e._v("#")]),e._v(" Configure Firewall")]),e._v(" "),n("p",[e._v("apt install -y ufw fail2ban\nufw default deny incoming\nufw default allow outgoing\nufw allow from 10.0.0.0/8 to any port 22 proto tcp\nufw allow from 172.16.0.0/12 to any port 22 proto tcp\nufw allow from 192.168.0.0/16 to any port 22 proto tcp\nufw allow from 169.254.0.0/16 to any port 22 proto tcp\nufw allow from fc00::/7 to any port 22 proto tcp\nufw allow from fe80::/10 to any port 22 proto tcp\nufw allow from ff00::/8 to any port 22 proto tcp\nufw allow 80/tcp\nufw allow 443/tcp\nufw allow 8333/tcp\nufw allow 9735/tcp\nyes | ufw enable")]),e._v(" "),n("h1",{attrs:{id:"disable-swapfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#disable-swapfile"}},[e._v("#")]),e._v(" Disable Swapfile")]),e._v(" "),n("p",[e._v("dphys-swapfile swapoff\ndphys-swapfile uninstall\nupdate-rc.d dphys-swapfile remove\nsystemctl disable dphys-swapfile")]),e._v(" "),n("h1",{attrs:{id:"change-hostname"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-hostname"}},[e._v("#")]),e._v(" Change Hostname")]),e._v(" "),n("p",[e._v("host_name='btcpay'\necho $host_name | sudo tee /etc/hostname\nsed -i -E 's/^127.0.1.1.*/127.0.1.1\\t'\"$host_name\"'/' /etc/hosts\nhostnamectl set-hostname $host_name\nsystemctl restart avahi-daemon")]),e._v(" "),n("h1",{attrs:{id:"install-btcpayserver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-btcpayserver"}},[e._v("#")]),e._v(" Install BTCPayServer")]),e._v(" "),n("p",[e._v("cd /root\ngit clone https://github.com/btcpayserver/btcpayserver-docker\ncd btcpayserver-docker\n. btcpay-setup.sh -i\nwait 10")]),e._v(" "),n("h1",{attrs:{id:"display-onion-address"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#display-onion-address"}},[e._v("#")]),e._v(" Display Onion Address")]),e._v(" "),n("p",[e._v('echo "On another computer open your browser to btcpay.local"\necho "or open the Tor Browser and copy and past the following .onion address."\ntail /var/lib/docker/volumes/generated_tor_servicesdir/_data/BTCPayServer/hostname')])])}),[],!1,null,null,null);t.default=o.exports}}]);
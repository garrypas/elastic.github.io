---
title: Elastic Compared to Other Competitors
date: 2017-04-05
author: unvoid
---

**Ethereum**

Acording to [this](https://github.com/ethereum/wiki/wiki/What-is-Ethereum) Ethereum is a “world-computer”. However the use-case of Ethereum is entirely different than the one of Elastic. Ethereum is not used to obtain a certain amount of computation power which can be directed at a complex algorithm that someone wants to have solved. It is more to be understood as a world computer with only one single processor without the support for multi-threading or parallel execution. As a matter of fact, Ethereum can be used to execute arbitrary code and the consensus algorithm ensures that the code is executed correctly. While handy to code, e.g., smart contracts which are then executed by all peers that participate in the Ethereum ecosystem, it cannot be used to bundle the computational power of the peers. The very simple reason is that every peer executes the same thing: Ethereum executes the same code at many many peers redundandly.

Elastic on the other hand has different aims: it does not want everyone to execute the same thing, but to execute something different. One could say, in Elastic your work is split into many different small parts which every peer in the Elastic network executes a subset of. This way, the computational power of all “miners” is bundled.

On the contrary, Elastic cannot be used to implement smart contracts or any other code constructs which are meant to be executed the same way on all nodes. It's just a totally different use case.

**Gridcoin**

Gridcoin uses a mechanism termed “Proof-of-Research” to measure the amount of computational contribution of the “miners”. According to [this](http://wiki.gridcoin.us/Proof-of-Research), this mechanism is premised on [BOINC](http://boinc.berkeley.edu/wiki/How_BOINC_works), a centralized third-party service. More precisely, “miners” download the BOINC software which provides idle CPU processing power to various projects which likewise are centrally hosted. The amount of computational contribution is then measured in a formula named the Recent Average Credit (RAC). The distribution of Gridcoins (GRC) is then conducted dependent on the miners' individual RAC.

The problem with this approach is the involvement of a central authority. The distribution of Gridcoins (GRC) can be tampered arbitrarily the moment an attacker gains access to the centralized service. Also, the existence of Gridcoin depends on the existence of BOINC. If the latter service dies, so does Gridcoin unless an update is rolled out which moves the Proof-of-Research mechanism to a different service.

In Elastic, we do not have such problems: we do not rely on any other third party service and neither do we depend the payout process on any kind of external (not tamper proof) factors. Instead, the measurement of the amount of computational contribution as well as the payout process is done entirely in the protocol itself.

**Zennet**

Zennet can be understood as an open market platform for computational resources. According to [this](http://zennet.sc/about/index.html), a publisher (the entity who is in demand of computational resources) negotiates a contract with a provider (the entity who provides the requested computational resources) using the blockchain. In this context, the publisher may specify special requirements, e.g., in terms of hardware capabilities that the provider has to match. After the negotiation is completed, the provider creates a virtual machine and gives the publisher SSH access to it.

The payment process is modeled as follows: the publisher allocates a certain amount of XenCoins (the underlying cryptocurrency). Then, periodically, accumulated usage measurements are read. Based on those measurements a micropayments protocol is used to periodically pay out small amounts of the allocated funds to the provider.

[Zennet](http://zennet.sc/about/index.html) identifies the problem of this “trust based system” itself: the provider may use a handcrafted VM which lies about its benchmarks score claiming to provide more resources than it actually does. It's the publishers sole responsibility to verify that the claimed amount of computational power reflects the reality. Due to the micropayments protocol, malicious behaviour (if manually detected) can be penalized by cancelling the contract and charge back the remainder of the funds. A reputation system keeps track of such malicious behavior to help publishers separating the honest providers from malicious ones.

From our perspective, this system is not ideal as it adds some overhead in terms of manual responsibility for monitoring the honesty. Also, if very large amounts of computational power are needed which can only be obtained by renting multiple providers, the publisher has to take care about parallelization and distributing his work across multiple SSH instances himself. Moreover, the provider has to verify himself that the VM is actually doing what it is supposed to do and not, e.g., performing the calculations erroneously. According to privacy, the SSH access (if not used via a [VPN](https://en.wikipedia.org/wiki/Virtual_private_network) or [TOR](https://www.torproject.org/)) may expose the IP address (and so the own identity) to the provider.

While we think that this scheme is perfectly valid and works flawlessly, Elastic tries to get rid of any trust-based factors entirely. In Elastic, the verification of correctly performed work as well as the true amount of invested computational effort is done by the protocol itself.

However, since Elastic uses the protocol to verify “work” and “computational” resources, Elastic is limited to the common denominator in terms of hardware … the CPU. That is, GPU tasks could not be verified by nodes that are equipped with CPUs only (But still, since the operations of Elastic's own programming language ElasticPL are very basic, GPU enhanced miners are of course possible). Still, especially when looking for VMs with special capabilities, Zennet is superior to Elastic.

On the contrary, Elastic in our eyes overtakes when it comes down to get computational tasks done quickly without any trust and without the requirement to manually verify anything or synchronizing tasks across multiple virtual machines: you just create a program which is then distributed to as many miners as possible, and you can be sure that the result you get back has been calculated correctly. Please refer to How Does Mining Work to learn about the advantages (and of course disadvantages) of our scheme.

**Voltcoin**

According to [this](http://www.exvolt.com/), Voltcoin works very similar to Zennet.

**Golem**

Golem also tries to bring together those who have spare computational power and those who require it. According to [this](https://github.com/imapp-pl/golem/blob/dc2093da7c6140c40e975cacc3714af64fc170b1/README.md) these entities are termed requester nodes, these nodes that announce computing tasks, and compute nodes, nodes that perform computations. As of now, the computation tasks are [limited to rendering tasks using blender](https://github.com/imapp-pl/golem/tree/dc2093da7c6140c40e975cacc3714af64fc170b1/scripts). Neverthelss, However, Golem seems to be just a “peer-to-peer market” for computational resources and not a cryptographically secure protocol to ensure the correct distribution of, and payment for computational power.

The biggest problem in our eyes, and at the same time the reason why from our perspective Golem does NOT constitute a decentralized computer, is that the submitted results are not automatically [verified for correctness](https://en.wikipedia.org/wiki/Verifiable_computing). That means, that the result someone sends may very well be garbage and so it has to be checked manually by the requester nodes before he acknowledges the release of the funds. At the same time, malicious requester nodes may claim that their work was not carried out correctly and charge back the funds even though the compute node has carried out the task correctly.

While a ranking/reputation mechanism, as implemented [here](https://github.com/imapp-pl/golem/blob/dc2093da7c6140c40e975cacc3714af64fc170b1/golem/ranking/ranking.py), helps to identify malicious users (similar to the reputation system of online auctions where you can “over time” seperate honest sellers from malicious ones) this concept differs totally from what we want to achieve in Elastic.

We do not want to build a peer-to-peer market where users may betray each other, mitigating malicious behavior only by using trust-based reputation systems! We rather want to build a system which is robust agains such kinds of attacks due to a “higher force”, i.e., the protocol, making sure that work is carried out correctly, and workers are guaranteed to be paid out for their efforts.



[https://talk.elasticexplorer.org/t/elastic-compared-to-other-competitors/30](https://talk.elasticexplorer.org/t/elastic-compared-to-other-competitors/30 "https://talk.elasticexplorer.org/t/elastic-compared-to-other-competitors/30")
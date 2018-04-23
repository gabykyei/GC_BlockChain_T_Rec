CHAINUP TReck

developer instructions
======================
1. Open up a terminal and run the following:

 % cd $HOME
 % mkdir project
 % cd project
 % git clone https://github.com/IntelLedger/sawtooth-core.git
 % cd sawtooth-core

2. In order to start the vagrant VM, change the current working directory to sawtooth-core/tools on the host and run:
 % cd sawtooth-core/tools
 % vagrant up
3. Once the ‘vagrant up’ command has finished executing, run:
 % vagrant ssh
 NB: If the VM needs to be reset for any reason, it can be returned to the default state by running the following commands from the sawtooth-core/tools directory on the host:
  % vagrant destroy
  % vagrant up
4. The vagrant environment is setup in such a way that installation of the software is not required. However, the C++/swig code must be built. To build, run the following inside vagrant:

	$ /project/sawtooth-core/bin/build_all

Sawtooth Lake
=============

The Sawtooth Lake distributed ledger is a highly modular platform for building, deploying and
running distributed ledgers.

Incubation Notice
=================

This project is a Hyperledger project in _Incubation_. It was proposed to the 
community and documented [here](http://bit.ly/1T6eVBH). Information on what 
_Incubation_ entails can be found in the [Hyperledger Project Lifecycle document](https://goo.gl/4edNRc).

Documentation
=============

Documentation is available at: http://intelledger.github.io/.

Contents
========

This repository contains many fundamental classes used in the distributed ledger system.

Security Notice
===============
This project is intended for experimental usage and is not secure.
Do not use this project for security sensitive applications.
Please see the
[Introduction](http://intelledger.github.io/introduction.html)
for more details.


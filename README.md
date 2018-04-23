<<<<<<< HEAD
=======
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
>>>>>>> 0-7

![Hyperledger Sawtooth](images/sawtooth_logo_light_blue-small.png)

Hyperledger Sawtooth
-------------

Hyperledger Sawtooth is an enterprise solution for building, deploying, and
running distributed ledgers (also called blockchains). It provides an extremely
modular and flexible platform for implementing transaction-based updates to
shared state between untrusted parties coordinated by consensus algorithms.

Documentation
-------------

Documentation for how to run and extend Sawtooth is available here:
https://sawtooth.hyperledger.org/docs/

Hyperledger Sawtooth Core Developers Setup Guide can be found here: [BUILD.md](BUILD.md)

Running examples of Sawtooth blockchains can be found here:
https://sawtooth.hyperledger.org/examples/


Project Status
-----------------

This project is an _active_ Hyperledger project. It was proposed to the
community and documented [here](https://docs.google.com/document/d/1j7YcGLJH6LkzvWdOYFIt2kpkVlLEmILErXL6t-Ky2zU/edit).
Information on what _Active_ entails can be found in the
[Hyperledger Project Lifecycle document](https://wiki.hyperledger.org/community/project-lifecycle).

License
-------

Hyperledger Sawtooth software is licensed under the [Apache License Version 2.0](LICENSE) software license.

Hyperledger Sawtooth documentation in the [docs](docs) subdirectory is licensed under
a Creative Commons Attribution 4.0 International License.  You may obtain a copy of the
license at: http://creativecommons.org/licenses/by/4.0/.

![Open Source Award Badge](images/rookies16-small.png)

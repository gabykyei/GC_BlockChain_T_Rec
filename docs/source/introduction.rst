************
Introduction
************

<<<<<<< HEAD
Hyperledger Sawtooth is an enterprise blockchain platform for building
distributed ledger applications and networks. The design philosophy targets
keeping ledgers *distributed* and making smart contracts *safe*, particularly
for enterprise use.

Sawtooth simplifies blockchain application development by separating the core
system from the application domain. Application developers can specify the
business rules appropriate for their application, using the language of their
choice, without needing to know the underlying design of the core system.

Sawtooth is also highly modular. This modularity enables enterprises and
consortia to make policy decisions that they are best equipped to make.
Sawtooth's core design allows applications to choose the transaction rules,
permissioning, and consensus algorithms that support their unique business
needs.

Sawtooth is an open source project under the Hyperledger umbrella. For
information on how to contribute, see `Join the Sawtooth Community`_.


About Distributed Ledgers
=========================

A "distributed ledger" is another term for a blockchain. It distributes a
database (a ledger) of transactions to all participants in a network (also
called "peers" or "nodes"). There is no central administrator or centralised
data storage. In essence, it is:

    * **Distributed**: The blockchain database is shared among potentially
      untrusted participants and is demonstrably identical on all nodes
      in the network. All participants have the same information.

    * **Immutable**: The blockchain database is an unalterable history of all
      transactions that uses block hashes to make it easy to detect and
      prevent attempts to alter the history.

    * **Secure**: All changes are performed by transactions that are signed by
      known identities.

These features work together, along with agreed-upon consensus mechanisms, to
provide "adversarial trust" among all participants in a blockchain network.


Distinctive Features of Sawtooth
================================

Separation Between the Application Level and the Core System
------------------------------------------------------------

Sawtooth makes it easy to develop and deploy an application by providing a
clear separation between the application level and the core system level.
Sawtooth provides smart contract abstraction that allows application
developers to write contract logic in a language of their choice.

An application can be a native business logic or a smart contract virtual
machine. In fact, both types of applications can co-exist on the same
blockchain. Sawtooth allows these design decisions to be made in the
transaction-processing layer, which allows multiple types of applications to
exist in the same instance of the blockchain network.

Each application defines the custom
:term:`transaction processors<Transaction processor>` for its unique
requirements. Sawtooth provides several example
:term:`transaction families<Transaction family>` to serve as models for
low-level functions (such as maintaining chain-wide settings and storing
on-chain permissions) and for specific applications such as performance
analysis and storing block information.

Transaction processor SDKs are available in multiple languages to streamline
creation of new contract languages, including Python, JavaScript, Go, C++,
Java, and Rust. A provided REST API simplifies client development by
adapting :term:`validator<Validator>` communication to standard HTTP/JSON.

Private Networks with the Sawtooth Permissioning Features
---------------------------------------------------------

Sawtooth is built to solve the challenges of permissioned (private) networks.
Clusters of Sawtooth nodes can be easily deployed with separate permissioning.
There is no centralized service that could potentially leak transaction
patterns or other confidential information.

The blockchain stores the settings that specify the permissions, such as roles
and identities, so that all participants in the network can access this
information.

Parallel Transaction Execution
------------------------------

Most blockchains require serial transaction execution in order to guarantee
consistent ordering at each node on the network. Sawtooth includes an advanced
parallel scheduler that splits transactions into parallel flows. Based on the
locations in state which are accessed by a transaction, Sawtooth isolates the
execution of transactions from one another while maintaining contextual
changes.

When possible, transactions are executed in parallel, while preventing
double-spending even with multiple modifications to the same state. Parallel
scheduling provides a substantial potential increase in performance over
serial execution.

Event System
------------

Hyperledger Sawtooth supports creating and broadcasting events. This allows
applications to:

    * Subscribe to events that occur related to the blockchain, such as a new
      block being committed or switching to a new fork.

    * Subscribe to application specific events defined by a transaction family.

    * Relay information about the execution of a transaction back to clients
      without storing that data in state.

Subscriptions are submitted and serviced over a ZMQ Socket.

Ethereum Contract Compatibility with Seth
-----------------------------------------

The Sawtooth-Ethereum integration project, Seth, extends the interoperability
of the Sawtooth platform to Ethereum. EVM (Ethereum Virtual Machine) smart
contracts can be deployed to Sawtooth using the Seth transaction family.

.. _dynamic-consensus-label:

Dynamic Consensus Algorithms
----------------------------

In a blockchain, consensus is the process of building agreement among a group
of mutually distrusting participants. Algorithms for achieving consensus with
arbitrary faults generally require some form of voting among a known set of
participants. General approaches include Nakamoto-style consensus, which
elects a leader through some form of lottery, and variants of the traditional
`Byzantine Fault Tolerance (BFT)
<https://en.wikipedia.org/wiki/Byzantine_fault_tolerance>`_
algorithms, which use multiple rounds of explicit votes to achieve consensus.

Sawtooth abstracts the core concepts of consensus and isolates consensus from
transaction semantics. The interface supports plugging in various consensus
implementations. More importantly, Sawtooth allows different types of
consensus on the same blockchain. The consensus is selected during the initial
network setup and can be changed on a running blockchain with a transaction.

Sawtooth currently supports these consensus implementations:

    * Proof of Elapsed Time (PoET), a Nakamoto-style consensus algorithm that is
      designed to be a production-grade protocol capable of supporting large
      network populations. PoET relies on secure instruction execution to
      achieve the scaling benefits of a Nakamoto-style consensus algorithm
      without the power consumption drawbacks of the Proof of Work algorithm.

    * PoET simulator, which provides PoET-style consensus on any type of
      hardware, including a virtualized cloud environment.

    * Dev mode, a simplified random-leader algorithm that is useful for
      development and testing.

.. _sample-transaction-families-label:

Sample Transaction Families
---------------------------

In Sawtooth, the data model and transaction language are implemented
in a :term:`transaction family<Transaction family>`. While we expect users to
build custom transaction families that reflect the unique requirements of their
ledgers, we provide several core transaction families as models\:

    * IntegerKey - Used for testing deployed ledgers.

    * Settings - Provides a reference implementation for storing
      :term:`on-chain configuration settings<On-chain setting>`.

    * Identity - Handles on-chain permissioning for transactor
      and validator keys to streamline managing identities
      for lists of public keys.

Additional transaction families provide models for specific areas\:

    * Smallbank - Handles performance analysis for benchmarking
      and performance testing when comparing the performance of
      blockchain systems.
      This transaction family is based on the H-Store Smallbank benchmark.

    * BlockInfo - Provides a methodology for storing information
      about a configurable number of historic blocks.

For more information, see :doc:`transaction_family_specifications`.


Real-world Application Examples
===============================

  * XO: Demonstrates how to construct basic transactions by playing
    `Tic-tac-toe <https://en.wikipedia.org/wiki/Tic-tac-toe>`_. The
    XO transaction family includes create and take transactions, with an ``xo``
    command that allows two participants to play the game.
    For more information, see
    :doc:`/app_developers_guide/intro_xo_transaction_family`.

  * Sawtooth Supply Chain:
    Demonstrates how to trace the provenance and other
    contextual information of any asset. Supply Chain provides an
    example application with a transaction processor, custom REST API, and web
    app. This example application also demonstrates a decentralized solution
    for in-browser transaction signing, and illustrates how to synchronize the
    blockchain state to a local database for complex queries. For more
    information, see the `sawtooth-supply-chain repository on GitHub
    <https://github.com/hyperledger/sawtooth-supply-chain>`_.

  * Sawtooth Marketplace:
    Demonstrates how to exchange specific quantities of customized assets with
    other users on the blockchain. This example application contains a number
    of components that, together with a Sawtooth validator, will run a Sawtooth
    blockchain and provide a simple RESTful API to interact with it.  For more
    information, see the `sawtooth-marketplace repository on GitHub
    <https://github.com/hyperledger/sawtooth-marketplace>`_.

  * Sawtooth Private UTXO:
    Demonstrates how assets can be created and traded.
    This example application shows how to use SGX to allow for assets to be
    transferred off ledger and privately traded, where only the trading parties
    know the details of the transaction. For more information, see the
    `sawtooth-private-utxo repository on GitHub
    <https://github.com/hyperledger/sawtooth-private-utxo>`_.


Getting Started with Application Development
============================================

Try Hyperledger Sawtooth
------------------------

The Sawtooth documentation explains how to set up a local
:term:`validator<Validator>` for demonstrating Sawtooth functionality and
testing an application. Once running, you will be able to submit new
transactions and fetch the resulting state and block data from the blockchain
using HTTP and the Sawtooth :term:`REST API`. These methods apply to the
included example :term:`transaction families<Transaction family>`, as
well as to any transaction families you might write yourself.

Sawtooth validators can be run from pre-built Docker containers, installed
natively using Ubuntu 16.04, or launched in AWS from the AWS Marketplace.

To get started, see :doc:`/app_developers_guide/installing_sawtooth`.

Develop a Custom Application
----------------------------

In Sawtooth, the data model and transaction language are implemented in a
transaction family. Transaction families codify business rules used to modify
state, while client programs typically submit transactions and view state. You
can build custom transaction families that reflect your unique requirements,
using the provided core transaction families as models.

Sawtooth provides a REST API and SDKs in several languages - including Python,
C++, Go, Java, JavaScript, and Rust - for development of applications which run
on top of the Sawtooth platform. In addition, you can write smart contracts in
Solidity for use with the Seth transaction family.

For more information, see :doc:`app_developers_guide`, :doc:`sdks`, and
:doc:`rest_api`.

Participating in Core Development
=================================

Learn about Sawtooth Architecture
---------------------------------

See :doc:`/architecture` for information on :term:`Sawtooth core` features such
as :term:`global state<Global state>`, transactions and :term:`batches<Batch>`
(the atomic unit of state change in Sawtooth), permissioning, the validator
network, the event system, and more.

Get the Sawtooth Software
-------------------------

The Sawtooth software is distributed as source code with an Apache license. You
can get the code to start building your own distributed ledger.

  * `sawtooth-core <https://github.com/hyperledger/sawtooth-core>`_: Contains
    fundamental classes used throughout the Sawtooth project, as well as the
    following items:
=======
.. note::
  
  This documentation applies to version 0.7 of Sawtooth Lake. Documentation
  for the `latest version <http://intelledger.github.io/0.8/>`_ is also
  available.

.. caution::

    This project includes a consensus algorithm, PoET (Proof of Elapsed Time),
    which is intended to run in a Trusted Execution Environment (TEE), such as
    `Intel® Software Guard Extensions (SGX)
    <https://software.intel.com/en-us/isa-extensions/intel-sgx>`_.
    This release includes software which runs outside of SGX and simulates the
    behavior of the PoET algorithm. It does **not** provide security in this
    mode. This project is intended for experimental usage and we recommend
    against using it for security sensitive applications.

This project, called "Sawtooth Lake" is a highly modular platform for
building, deploying and running distributed ledgers. Distributed ledgers
provide a digital record (such as asset ownership) that is maintained
without a central authority or implementation. Instead of a single,
centralized database, participants in the ledger contribute resources
to shared computation that ensures universal agreement on the state of
the ledger. While Bitcoin is the most popular distributed ledger, the
technology has been proposed for many different applications ranging
from international remittance, insurance claim processing, supply chain
management and the Internet of Things (IoT).

Distributed ledgers generally consist of three basic components:

    * A data model that captures the current state of the ledger

    * A language of transactions that change the ledger state

    * A protocol used to build consensus among participants around
      which transactions will be accepted by the ledger.

In Sawtooth Lake the data model and transaction language are implemented
in a “transaction family”. While we expect users to build custom transaction
families that reflect the unique requirements of their ledgers, we provide
three transaction families that are sufficient for building, testing and
deploying a marketplace for digital assets:

    * EndPointRegistry - A transaction family for registering ledger
      services.

    * IntegerKey - A transaction family used for testing deployed ledgers.

    * MarketPlace - A transaction family for buying, selling and trading
      digital assets.

This set of transaction families provides an “out of the box” ledger that
implements a fully functional marketplace for digital assets.


Consensus
=========

Consensus is the process of building agreement among a group of mutually
distrusting participants. There are many different algorithms for building
consensus based on requirements related to performance, scalability,
consistency, threat model, and failure model. While most distributed ledgers
operate with an assumption of Byzantine failures (malicious attacker),
other properties are largely determined by application requirements.
For example, ledgers used to record financial transactions often require
high transaction rates with relatively few participants and immediate
finality of commitment. Consumer markets, in contrast, require substantial
aggregate throughput across a large number of participants; however,
short-term finality is less important.

Algorithms for achieving consensus with arbitrary faults generally require
some form of voting among a known set of participants. Two general approaches
have been proposed. The first, often referred to as "Nakamoto consensus",
elects a leader through some form of “lottery”. The leader then proposes a
block that can be added to a chain of previously committed blocks. In Bitcoin,
the first participant to successfully solve a cryptographic puzzle wins
the leader-election lottery. The elected leader broadcasts the new block
to the rest of the participants who implicitly vote to accept the block by
adding the block to a chain of accepted blocks and proposing subsequent
transaction blocks that build on that chain.

The second approach is based on traditional
`Byzantine Fault Tolerance (BFT)
<https://en.wikipedia.org/wiki/Byzantine_fault_tolerance>`_
algorithms and uses multiple rounds of explicit votes to achieve consensus.
`Ripple <https://ripple.com/>`_ and `Stellar <https://www.stellar.org/>`_
developed consensus protocols that extend traditional BFT for open
participation.

Sawtooth Lake abstracts the core concepts of consensus and isolates consensus
from transaction semantics. Sawtooth Lake currently provides a single
consensus protocol called PoET, for “Proof of Elapsed Time." PoET is a lottery
protocol that builds on trusted execution environments (TEEs) provided by
Intel's SGX to address the needs of large populations of participants. The
second, Quorum Voting, is an adaptation of the Ripple and Stellar consensus
protocols and serves to address the needs of applications that require
immediate transaction finality.


Proof of Elapsed Time (PoET)
============================

For the purpose of achieving distributed consensus efficiently,
a good lottery function has several characteristics:

    * Fairness: The function should distribute leader election
      across the broadest possible population of participants.

    * Investment: The cost of controlling the leader election
      process should be proportional to the value gained from it.

    * Verification: It should be relatively simple for all participants
      to verify that the leader was legitimately selected.

Sawtooth Lake provides a Nakamoto consensus algorithm called PoET
that uses a trusted execution environment (TEE) such as
`Intel® Software Guard Extensions (SGX)
<https://software.intel.com/en-us/isa-extensions/intel-sgx>`_
to ensure the safety and randomness of the leader election process
without requiring the costly investment of power and specialized
hardware inherent in most “proof” algorithms. Our approach
is based on a guaranteed wait time provided through the TEE.

Basically, every validator requests a wait time from a trusted function.
The validator with the shortest wait time for a particular transaction
block is elected the leader. One function, say “CreateTimer” creates
a timer for a transaction block that is guaranteed to have been created
by the TEE. Another function, say “CheckTimer” verifies that the timer
was created by the TEE and, if it has expired, creates an attestation
that can be used to verify that validator did, in fact, wait the allotted
time before claiming the leadership role.

The PoET leader election algorithm meets the criteria for a good lottery
algorithm. It randomly distributes leadership election across the entire
population of validators with distribution that is similar to what is
provided by other lottery algorithms. The probability of election
is proportional to the resources contributed (in this case, resources
are general purpose processors with a trusted execution environment).
An attestation of execution provides information for verifying that the
certificate was created within the TEE (and that the validator waited
the allotted time). Further, the low cost of participation increases the
likelihood that the population of validators will be large, increasing
the robustness of the consensus algorithm.

Our “proof of processor” algorithm scales to thousands of participants
and will run efficiently on any Intel processor that supports SGX.

**As noted in the caution above, the current implementation simulates
the behavior of the PoET algorithm running in a trusted execution environment
and is not secure.** There are some benefits to using a simulator:

    * It does not require you to have a processor which supports SGX
      in order to experiment with Sawtooth Lake.

    * It allows running many validators (nodes) on a single system. An SGX
      implementation of PoET will allow only a single node per CPU socket.


Getting Sawtooth Lake
=====================

The Sawtooth Lake platform is distributed in source code form with
an Apache license. You can get the code `here
<https://github.com/hyperledger/sawtooth-core/tree/0-7>`_ and start building your own
distributed ledger.

Repositories
============

One repository contains all of the the code needed:

sawtooth-core
    Contains fundamental classes used throughout the Sawtooth Lake project, as well as:
>>>>>>> 0-7

    * The implementation of the validator process which runs on each node
    * SDKs for writing transaction processing or validation logic in a variety
      of languages
    * Dockerfiles to support development or launching a network of validators
    * Source files for this documentation

  * `Seth <https://github.com/hyperledger/sawtooth-seth>`_:
    Deploy Ethereum Virtual Machine (EVM) smart contracts to Sawtooth

  * `Sawtooth Marketplace <https://github.com/hyperledger/sawtooth-marketplace>`_:
    Exchange customized "Assets" with other users on the blockchain

  * `Sawtooth Supply Chain <https://github.com/hyperledger/sawtooth-supply-chain>`_:
    Trace the provenance and other contextual information of any asset

  * `Sawtooth Private UTXO <https://github.com/hyperledger/sawtooth-private-utxo>`_:
    Create and trade assets, using SGX to allow assets to be transferred
    off-ledger and traded privately

Join the Sawtooth Community
---------------------------

Sawtooth is an open source project under the Hyperledger umbrella. We welcome
working with individuals and companies interested in advancing distributed
ledger technology. Please see :doc:`/community` for ways to become a part of
the Sawtooth community.


Acknowledgements
================

This project uses software developed by the OpenSSL Project for use in the
OpenSSL Toolkit (http://www.openssl.org/).

This project relies on other third-party components. For details, see the
LICENSE and NOTICES files in the `sawtooth-core repository
<https://github.com/hyperledger/sawtooth-core>`_.

.. Licensed under Creative Commons Attribution 4.0 International License
.. https://creativecommons.org/licenses/by/4.0/

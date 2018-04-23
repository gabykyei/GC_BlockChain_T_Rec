# Copyright 2017 Intel Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ------------------------------------------------------------------------------

from __future__ import print_function

import argparse
import logging
import os
import traceback
import sys
import pkg_resources

from colorlog import ColoredFormatter

<<<<<<< HEAD:cli/sawtooth_cli/main.py
from sawtooth_cli.exceptions import CliException

from sawtooth_cli.keygen import add_keygen_parser
from sawtooth_cli.keygen import do_keygen
from sawtooth_cli.block import add_block_parser
from sawtooth_cli.block import do_block
from sawtooth_cli.batch import add_batch_parser
from sawtooth_cli.batch import do_batch
from sawtooth_cli.transaction import add_transaction_parser
from sawtooth_cli.transaction import do_transaction
from sawtooth_cli.state import add_state_parser
from sawtooth_cli.state import do_state
from sawtooth_cli.identity import add_identity_parser
from sawtooth_cli.identity import do_identity
from sawtooth_cli.settings import add_settings_parser
from sawtooth_cli.settings import do_settings
from sawtooth_cli.peer import add_peer_parser
from sawtooth_cli.peer import do_peer
from sawtooth_cli.status import add_status_parser
from sawtooth_cli.status import do_status

from sawtooth_cli.cli_config import load_cli_config


DISTRIBUTION_NAME = 'sawtooth-cli'
=======
from sawtooth.exceptions import ClientException
from sawtooth.exceptions import ManagementError
from sawtooth.exceptions import InvalidTransactionError

from sawtooth.cli.block import add_block_parser
from sawtooth.cli.block import do_block
from sawtooth.cli.exceptions import CliException
from sawtooth.cli.admin import add_admin_parser
from sawtooth.cli.admin import do_admin
from sawtooth.cli.keygen import add_keygen_parser
from sawtooth.cli.keygen import do_keygen
from sawtooth.cli.cluster import add_cluster_parser
from sawtooth.cli.cluster import do_cluster
from sawtooth.cli.docker import add_docker_parser
from sawtooth.cli.docker import do_docker
from sawtooth.cli.store import add_store_parser
from sawtooth.cli.store import do_store
from sawtooth.cli.stats import add_stats_parser
from sawtooth.cli.stats import do_stats
from sawtooth.cli.submit import add_submit_parser
from sawtooth.cli.submit import do_submit
from sawtooth.cli.transaction import add_transaction_parser
from sawtooth.cli.transaction import do_transaction
from sawtooth.cli.monitor import add_monitor_parser
from sawtooth.cli.monitor import do_monitor
>>>>>>> 0-7:core/sawtooth/cli/main.py


def create_console_handler(verbose_level):
    clog = logging.StreamHandler()
    formatter = ColoredFormatter(
        "%(log_color)s[%(asctime)s %(levelname)-8s%(module)s]%(reset)s "
        "%(white)s%(message)s",
        datefmt="%H:%M:%S",
        reset=True,
        log_colors={
            'DEBUG': 'cyan',
            'INFO': 'green',
            'WARNING': 'yellow',
            'ERROR': 'red',
            'CRITICAL': 'red',
        })

    clog.setFormatter(formatter)

    if verbose_level == 0:
        clog.setLevel(logging.WARN)
    elif verbose_level == 1:
        clog.setLevel(logging.INFO)
    else:
        clog.setLevel(logging.DEBUG)

    return clog


def setup_loggers(verbose_level):
    logger = logging.getLogger()
    logger.setLevel(logging.DEBUG)
    logger.addHandler(create_console_handler(verbose_level))


def create_parent_parser(prog_name):
    parent_parser = argparse.ArgumentParser(prog=prog_name, add_help=False)
    parent_parser.add_argument(
        '-v', '--verbose',
        action='count',
        help='enable more verbose output')

    try:
        version = pkg_resources.get_distribution(DISTRIBUTION_NAME).version
    except pkg_resources.DistributionNotFound:
        version = 'UNKNOWN'

    parent_parser.add_argument(
        '-V', '--version',
        action='version',
        version=(DISTRIBUTION_NAME + ' (Hyperledger Sawtooth) version {}')
        .format(version),
        help='display version information')

    return parent_parser


def create_parser(prog_name):
    parent_parser = create_parent_parser(prog_name)

    parser = argparse.ArgumentParser(
        description='Provides subcommands to configure, manage, '
        'and use Sawtooth components.',
        parents=[parent_parser],)

    subparsers = parser.add_subparsers(title='subcommands', dest='command')
    subparsers.required = True

    add_batch_parser(subparsers, parent_parser)
    add_block_parser(subparsers, parent_parser)
    add_identity_parser(subparsers, parent_parser)
    add_keygen_parser(subparsers, parent_parser)
    add_peer_parser(subparsers, parent_parser)
    add_status_parser(subparsers, parent_parser)
    add_settings_parser(subparsers, parent_parser)
    add_state_parser(subparsers, parent_parser)
    add_transaction_parser(subparsers, parent_parser)
<<<<<<< HEAD:cli/sawtooth_cli/main.py
=======
    add_store_parser(subparsers, parent_parser)
    add_admin_parser(subparsers, parent_parser)
    add_stats_parser(subparsers, parent_parser)
    add_monitor_parser(subparsers, parent_parser)
>>>>>>> 0-7:core/sawtooth/cli/main.py

    return parser


def main(prog_name=os.path.basename(sys.argv[0]), args=None,
         with_loggers=True):
    parser = create_parser(prog_name)
    if args is None:
        args = sys.argv[1:]
    args = parser.parse_args(args)

    load_cli_config(args)

    if with_loggers is True:
        if args.verbose is None:
            verbose_level = 0
        else:
            verbose_level = args.verbose
        setup_loggers(verbose_level=verbose_level)

    if args.command == 'keygen':
        do_keygen(args)
    elif args.command == 'block':
        do_block(args)
    elif args.command == 'batch':
        do_batch(args)
    elif args.command == 'transaction':
        do_transaction(args)
<<<<<<< HEAD:cli/sawtooth_cli/main.py
    elif args.command == 'state':
        do_state(args)
    elif args.command == 'identity':
        do_identity(args)
    elif args.command == 'settings':
        do_settings(args)
    elif args.command == 'peer':
        do_peer(args)
    elif args.command == 'status':
        do_status(args)
=======
    elif args.command == 'store':
        do_store(args)
    elif args.command == 'admin':
        do_admin(args)
    elif args.command == 'stats':
        do_stats(args)
    elif args.command == 'monitor':
        do_monitor(args)
>>>>>>> 0-7:core/sawtooth/cli/main.py
    else:
        raise CliException("invalid command: {}".format(args.command))


def main_wrapper():
    # pylint: disable=bare-except
    try:
        main()
    except CliException as e:
        print("Error: {}".format(e), file=sys.stderr)
<<<<<<< HEAD:cli/sawtooth_cli/main.py
=======
        sys.exit(1)
    except InvalidTransactionError as e:
        print("Error: {}".format(e), file=sys.stderr)
        sys.exit(1)
    except ClientException as e:
        print("Error: {}".format(e), file=sys.stderr)
        sys.exit(1)
    except ManagementError as e:
        print("Error: {}".format(e), file=sys.stderr)
>>>>>>> 0-7:core/sawtooth/cli/main.py
        sys.exit(1)
    except KeyboardInterrupt:
        pass
    except BrokenPipeError:
        sys.stderr.close()
    except SystemExit as e:
        raise e
    except:
        traceback.print_exc(file=sys.stderr)
        sys.exit(1)

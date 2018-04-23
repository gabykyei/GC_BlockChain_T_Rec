#!/bin/bash
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

<<<<<<< HEAD:integration/sawtooth_integration/tests/poet_liveness_data/poet-settings.sh
settings=""
settings="$settings sawtooth.poet.target_wait_time=5"
settings="$settings sawtooth.poet.initial_wait_time=25"
settings="$settings sawtooth.publisher.max_batches_per_block=100"
=======
START_DIR=`pwd`
SCRIPT_HOME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$SCRIPT_HOME/.."

./lein -o clean && ./lein -o with-profile +prod build:prod

ERR=$?

cd $START_DIR

exit $ERR
>>>>>>> 0-7:extensions/mktplace/navigator/client/scripts/build.sh

echo "$settings"

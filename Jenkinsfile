#!groovy

<<<<<<< HEAD
// Copyright 2017 Intel Corporation
=======
// Copyright (c) 2017 Intel Corporation
>>>>>>> 0-7
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------------

<<<<<<< HEAD
// Discard old builds after 31 days
properties([[$class: 'BuildDiscarderProperty', strategy:
        [$class: 'LogRotator', artifactDaysToKeepStr: '',
        artifactNumToKeepStr: '', daysToKeepStr: '31', numToKeepStr: '']]]);

node ('master') {
    // Create a unique workspace so Jenkins doesn't reuse an existing one
    ws("workspace/${env.BUILD_TAG}") {
        stage("Clone Repo") {
            checkout scm
        }

        if (!(env.BRANCH_NAME == 'master' && env.JOB_BASE_NAME == 'master')) {
            stage("Check Whitelist") {
                readTrusted 'bin/whitelist'
                sh './bin/whitelist "$CHANGE_AUTHOR" /etc/jenkins-authorized-builders'
            }
        }

        stage("Check for Signed-Off Commits") {
            sh '''#!/bin/bash -l
                if [ -v CHANGE_URL ] ;
                then
                    temp_url="$(echo $CHANGE_URL |sed s#github.com/#api.github.com/repos/#)/commits"
                    pull_url="$(echo $temp_url |sed s#pull#pulls#)"

                    IFS=$'\n'
                    for m in $(curl -s "$pull_url" | grep "message") ; do
                        if echo "$m" | grep -qi signed-off-by:
                        then
                          continue
                        else
                          echo "FAIL: Missing Signed-Off Field"
                          echo "$m"
                          exit 1
                        fi
                    done
                    unset IFS;
                fi
            '''
        }

        // Set the ISOLATION_ID environment variable for the whole pipeline
        env.ISOLATION_ID = sh(returnStdout: true, script: 'printf $BUILD_TAG | sha256sum | cut -c1-64').trim()

        // Use a docker container to build and protogen, so that the Jenkins
        // environment doesn't need all the dependencies.
        stage("Build Test Dependencies") {
            sh './bin/build_all installed'
        }

        stage("Run Lint") {
            sh 'docker run --rm -v $(pwd):/project/sawtooth-core sawtooth-dev-python:$ISOLATION_ID run_lint'
            sh 'docker run --rm -v $(pwd):/project/sawtooth-core sawtooth-dev-go:$ISOLATION_ID run_go_fmt'
            sh 'docker run --rm -v $(pwd):/project/sawtooth-core sawtooth-dev-rust:$ISOLATION_ID run_lint_rust'
            sh 'docker run --rm -v $(pwd):/project/sawtooth-core sawtooth-dev-validator:$ISOLATION_ID run_lint_validator'
        }

        stage("Run Bandit") {
            sh 'docker run --rm -v $(pwd):/project/sawtooth-core sawtooth-dev-python:$ISOLATION_ID run_bandit'
        }

        // Run the tests
        stage("Run Tests") {
            sh './bin/run_tests -i deployment'
        }

        stage("Compile coverage report") {
            sh 'docker run --rm -v $(pwd):/project/sawtooth-core sawtooth-dev-python:$ISOLATION_ID /bin/bash -c "cd coverage && coverage combine && coverage html -d html"'
        }

        stage("Create git archive") {
            sh '''
                REPO=$(git remote show -n origin | grep Fetch | awk -F'[/.]' '{print $6}')
                VERSION=`git describe --dirty`
                git archive HEAD --format=zip -9 --output=$REPO-$VERSION.zip
                git archive HEAD --format=tgz -9 --output=$REPO-$VERSION.tgz
            '''
        }

        stage ("Build documentation") {
            sh 'docker build . -f ci/sawtooth-build-docs -t sawtooth-build-docs:$ISOLATION_ID'
            sh 'docker run --rm -v $(pwd):/project/sawtooth-core sawtooth-build-docs:$ISOLATION_ID'
        }

        stage("Archive Build artifacts") {
            archiveArtifacts artifacts: '*.tgz, *.zip'
            archiveArtifacts artifacts: 'build/debs/cxx/*.deb'
            archiveArtifacts artifacts: 'build/debs/go/*.deb'
            archiveArtifacts artifacts: 'build/debs/python/*.deb'
            archiveArtifacts artifacts: 'build/debs/rust/*.deb'
            archiveArtifacts artifacts: 'build/bandit.html'
            archiveArtifacts artifacts: 'coverage/html/*'
            archiveArtifacts artifacts: 'docs/build/html/**, docs/build/latex/*.pdf'
=======
node ('master') {
    // Create a unique workspace so Jenkins doesn't reuse an existing one
    ws("workspace/${env.BUILD_TAG}_0-7") {
        stage("Clone repo") {
            checkout scm
        }

        if (!(env.BRANCH_NAME == '0-7' && env.JOB_BASE_NAME == '0-7')) {
            stage("Check Whitelist") {
                readTrusted 'bin/whitelist'
                readTrusted 'MAINTAINERS'
                sh './bin/whitelist "$CHANGE_AUTHOR" MAINTAINERS'
            }
        }

        stage("Build docker build slave") {
            docker.build('sawtooth-build:$BUILD_TAG', \
            '-f docker/sawtooth-build-ubuntu-xenial .')
        }

        stage("Run Lint"){
            docker.withServer('tcp://0.0.0.0:4243'){
                docker.image('sawtooth-build:$BUILD_TAG').inside {
                    sh './bin/build_all'
                    sh './bin/run_lint'
                }
            }
        }

        stage("Run Tests"){
            docker.withServer('tcp://0.0.0.0:4243'){
                docker.image('sawtooth-build:$BUILD_TAG').inside {
                    sh './bin/build_all'
                    sh 'ENABLE_INTEGRATION_TESTS=1 ./bin/run_tests'
                    sh './bin/build_all'
                }
            }
        }

        stage("Create git archive") {
            docker.withServer('tcp://0.0.0.0:4243'){
                docker.image('sawtooth-build:$BUILD_TAG').inside {
                    sh '''
                        REPO=$(git remote show -n origin | grep Fetch | awk -F'[/.]' '{print $6}')
                        VERSION=`git describe --dirty`
                        git archive HEAD --format=zip -9 --output=$REPO-$VERSION.zip
                        git archive HEAD --format=tgz -9 --output=$REPO-$VERSION.tgz
                    '''
                }
            }
        }

        stage("Build the packages"){
            docker.withServer('tcp://0.0.0.0:4243'){
                docker.image('sawtooth-build:$BUILD_TAG').inside {
                    sh 'VERSION=AUTO_STRICT ./bin/build_debs'
                }
            }
        }

        stage("Build docker docs build slave") {
            sh 'sed -i\'\' -e"s/@@BUILD_TAG@@/$BUILD_TAG/" ci/sawtooth-docker-test'
            docker.build('sawtooth-docs:$BUILD_TAG', '-f ci/sawtooth-docker-test .')
        }

        stage ("Build documentation") {
            docker.withServer('tcp://0.0.0.0:4243'){
                docker.image('sawtooth-docs:$BUILD_TAG').inside {
                    sh 'cd docs && make html latexpdf'
                }
            }
        }

        stage("Remove docker images") {
            sh 'docker rmi sawtooth-build:$BUILD_TAG'
            sh 'docker rmi sawtooth-docs:$BUILD_TAG'
        }

        stage("Archive Build artifacts") {

            archiveArtifacts artifacts: '''
                *.tgz, *.zip
            '''
            archiveArtifacts artifacts: '''
                core/deb_dist/*.deb,\
                signing/deb_dist/*.deb,\
                *.deb,\
                extensions/arcade/deb_dist/*.deb,\
                extensions/bond/deb_dist/*.deb,\
                extensions/mktplace/deb_dist/*.deb
            '''
            archiveArtifacts artifacts: '''
                docs/build/html/**,\
                docs/build/latex/*.pdf
            '''
        }
    }
}

node ('windows') {
    ws("workspace/${env.BUILD_TAG}_0-7") {
        stage("[Windows] Clone repo") {
            checkout scm
        }

        stage("[Windows] Verify scripts") {
            readTrusted 'bin/run_tests_windows.ps1'
            readTrusted 'core/setup.py'
            readTrusted 'extensions/arcade/setup.py'
            readTrusted 'extensions/bond/setup.py'
            readTrusted 'extensions/mktplace/setup.py'
            readTrusted 'signing/setup.py'
            readTrusted 'validator/setup.py'
            readTrusted 'validator/packaging/create_package.ps1'
            readTrusted 'validator/packaging/functions.ps1'
        }

        stage("[Windows] Run tests") {
            bat 'powershell bin\\build_all_windows.ps1'
            bat 'powershell bin\\run_tests_windows.ps1'
        }

        stage("[Windows] Build installer") {
            bat 'powershell validator\\packaging\\create_package.ps1'
        }

        stage("[Windows] Archive Build artifacts") {
            archiveArtifacts artifacts: 'build\\exe\\*.exe'
>>>>>>> 0-7
        }
    }
}

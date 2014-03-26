@echo off

REM Windows script for running unit tests
REM You have to run server and capture some browser first
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)

set BASE_DIR=%~dp0
%BASE_DIR%..\node_modules\.bin\karma.cmd start "%BASE_DIR%\..\config\karma.conf.js" %*

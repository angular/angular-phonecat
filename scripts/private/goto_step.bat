@echo off

REM Windows script for changing step
REM This script just copies content of given step into sandbox

set SB_DIR=%~dp0
set STEP=%1

xcopy "%SB_DIR%\..\step-%STEP%" "%SB_DIR%" /E /Y

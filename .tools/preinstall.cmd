@echo off
for /f "usebackq tokens=*" %%i in (`yarn global dir`) DO @set YARN_GLOBAL=%%i
cd %YARN_GLOBAL%
call yarn list | find "windows-build-tools" > NUL
if not ERRORLEVEL 0 goto DOIT
call yarn outdated | find "windows-build-tools" > NUL
if ERRORLEVEL 0 goto DOIT
exit /B 0

:DOIT
whoami /groups | find "High Mandatory Level" > NUL
if not ERRORLEVEL 1 goto RUN
powershell -Command Start-Process -Wait -Verb runas "%~0"
exit /B %ERRORLEVEL%
:RUN

where /Q yarn && call yarn global add windows-build-tools
where /Q yarn || call npm i -g windows-build-tools

@ECHO OFF
whoami /groups | Find "High Mandatory Level" > NUL
IF not ERRORLEVEL 1 GOTO RUN
powershell -Command Start-Process -Wait -Verb runas "%~0"
EXIT /b %ERRORLEVEL%
:RUN

WHERE /Q yarn && CALL yarn global add windows-build-tools
WHERE /Q yarn || CALL npm i -g windows-build-tools

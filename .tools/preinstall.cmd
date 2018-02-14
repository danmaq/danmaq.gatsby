@ECHO OFF
WHERE /Q yarn && CALL yarn global add windows-build-tools
WHERE /Q yarn || CALL npm i -g windows-build-tools

@ECHO OFF

CD /d %~dp0\..
RMDIR /S /Q .wercker >NUL 2>&1
RMDIR /S /Q node_modules >NUL 2>&1
WHERE /Q yarn && CALL yarn cache clean

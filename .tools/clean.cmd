@ECHO OFF

CD /d %~dp0\..
RMDIR /S /Q .cache >NUL 2>&1
RMDIR /S /Q node_modules >NUL 2>&1
RMDIR /S /Q public >NUL 2>&1
WHERE /Q yarn && CALL yarn cache clean

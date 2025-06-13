@echo off
echo ---------------------------------------------
echo DIGITALVISION - Instalacija sustava
echo ---------------------------------------------

:: Postavi trenutni direktorij kao korijenski
cd /d %~dp0
set ROOTDIR=%cd%\
set FRONTEND_DIR=%ROOTDIR%frontend\digital-vision-projekt
set BACKEND_DIR=%ROOTDIR%backend

:: [1/4] Backend - Instalacija i pokretanje
echo [1/4] Instalacija backend modula...
cd /d "%BACKEND_DIR%"
call npm install

echo [2/4] Pokretanje backend servera...
start "" cmd /k "cd /d %BACKEND_DIR% && node indeks.js"

:: [3/4] Frontend - Instalacija
echo [3/4] Instalacija frontend modula...
cd /d "%FRONTEND_DIR%"
call npm install

:: [4/4] Pokretanje frontend aplikacije (quasar dev)
echo [4/4] Pokretanje frontend aplikacije...
start "" cmd /k "cd /d %FRONTEND_DIR% && quasar dev"

echo ---------------------------------------------
echo Instalacija završena. Backend: http://localhost:3000 | Frontend: http://localhost:9000
echo ---------------------------------------------
pause

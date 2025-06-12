@echo off
echo ---------------------------------------------
echo DIGITALVISION - Instalacija sustava
echo ---------------------------------------------

:: trenutni direktorij kao korijenski
cd /d %~dp0

:: BACKEND - Instalacija API-a
echo [1/5] Instalacija backend modula...
cd backend
call npm install

:: FRONTEND - Instalacija Quasar aplikacije
echo [2/5] Instalacija frontend modula...
cd ../frontend/digital-vision-projekt
call npm install

:: Buildanje Quasar SPA aplikacije
echo [3/5] Buildanje frontend aplikacije...
call quasar build

:: Kopiranje buildane aplikacije (dist/spa) u ciljani folder
echo [4/5] Kopiranje builda u produkcijski direktorij...
xcopy /E /I /Y dist\spa C:\inetpub\wwwroot\DigitalVision

:: Povratak u backend i pokretanje API servera
echo [5/5] Pokretanje API servera...
cd ../../../backend
start /B node indeks.js

echo ---------------------------------------------
echo Instalacija završena. Sustav je pokrenut.
echo ---------------------------------------------
pause

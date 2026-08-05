@echo off
setlocal
cd /d "%~dp0"

rem --- fixed paths to the managed Node runtime (guaranteed to exist) ---
set "NODEEXE=C:\Users\birdy\.workbuddy\binaries\node\versions\22.22.2\node.exe"
set "NPMCMD=C:\Users\birdy\.workbuddy\binaries\node\versions\22.22.2\npm.cmd"
set "LOG=%~dp0dev-start.log"

echo ============================================ > "%LOG%"
echo [%date% %time%] ui-components launcher >> "%LOG%"
echo --- node version --- >> "%LOG%"
"%NODEEXE%" --version >> "%LOG%" 2>&1
echo --- vite.js present --- >> "%LOG%"
if exist "node_modules\vite\bin\vite.js" (echo YES >> "%LOG%") else (echo NO >> "%LOG%")

if not exist "node_modules" (
    echo [1/2] First run: installing dependencies, this may take a minute...
    call "%NPMCMD%" install >> "%LOG%" 2>&1
    if errorlevel 1 (
        echo.
        echo *** Install failed. See dev-start.log for details. ***
        pause
        exit /b 1
    )
)

echo [2/2] Starting dev server... browser should open automatically.
echo        Stop: Ctrl+C in this window. Log: dev-start.log
echo --- vite output --- >> "%LOG%"
"%NODEEXE%" node_modules\vite\bin\vite.js --open >> "%LOG%" 2>&1

echo.
echo *** Dev server stopped. ***
pause
endlocal

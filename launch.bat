@echo off

for %%I in (.) do if /I "%%~nI"=="src" (
    echo Você já está na pasta 'src'.
) else (
    :: Entra na pasta 'src'
    cd src || (echo Erro: A pasta 'src' não foi encontrada. & exit /b 1)
)

start npx vite

timeout /t 3 /nobreak >nul

start http://localhost:5173/

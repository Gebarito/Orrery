#!/bin/bash

if [ "${PWD##*/}" = "src" ]; then
    echo "Você já está na pasta 'src'."
else
    cd src/ || { echo "Erro: A pasta 'src' não foi encontrada."; exit 1; }
fi

npx vite &

sleep 3

if command -v xdg-open > /dev/null; then
    xdg-open http://localhost:5173/
elif command -v open > /dev/null; then
    open http://localhost:5173/
fi

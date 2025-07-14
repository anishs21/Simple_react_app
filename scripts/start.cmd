@echo off

echo  Pulling latest code...
cd C:\Sparkout\react-simple-frontend
git pull origin main

echo  Installing dependencies...
npm install

echo  Building React app...
npm run build

echo  Deployment finished.

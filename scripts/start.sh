#!/bin/bash

echo "📥 Pulling latest code..."
cd /absolute/path/to/REACT-SIMPLE-FRONTEND     # ← Replace this
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "⚙️ Building React app..."
npm run build

echo "🔁 Restarting web server..."
sh ./scripts/server.sh

echo "✅ Deployment done!"
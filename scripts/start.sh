#!/bin/bash
# Start or restart the web server after deployment

# Try to restart nginx, if not installed, try apache2
if systemctl is-active --quiet nginx; then
  systemctl restart nginx
elif systemctl is-active --quiet apache2; then
  systemctl restart apache2
else
  echo "No supported web server (nginx or apache2) is running."
fi

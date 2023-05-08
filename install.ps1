# Install Node.js
Write-Host "Installing Node.js..."
$nodejs = "https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi"
Invoke-WebRequest $nodejs -OutFile node.msi

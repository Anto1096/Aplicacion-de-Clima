# Script de Watch Mode para PowerShell
# Ejecuta tests automáticamente cada 5 segundos

Write-Host "🧪 INICIANDO MODO WATCH - TESTING AUTOMÁTICO" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green
Write-Host "Los tests se ejecutarán cada 5 segundos..." -ForegroundColor Yellow
Write-Host "Presiona Ctrl+C para detener" -ForegroundColor Yellow
Write-Host ""

# Función para ejecutar tests
function Run-Tests {
    Write-Host "`n🔍 Ejecutando tests... ($(Get-Date -Format 'HH:mm:ss'))" -ForegroundColor Cyan
    Write-Host "----------------------------------------" -ForegroundColor Cyan
    
    try {
        # Ejecutar suite de tests
        node scripts/test-suite.js
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Tests completados exitosamente" -ForegroundColor Green
        } else {
            Write-Host "❌ Algunos tests fallaron" -ForegroundColor Red
        }
    } catch {
        Write-Host "❌ Error ejecutando tests: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Ejecutar tests iniciales
Run-Tests

# Loop principal
while ($true) {
    Start-Sleep -Seconds 5
    
    # Verificar si hay cambios en archivos
    $files = @(
        "index.html",
        "js/*.js",
        "styles/*.css"
    )
    
    $hasChanges = $false
    foreach ($pattern in $files) {
        $recentFiles = Get-ChildItem -Path $pattern -Recurse | Where-Object { 
            $_.LastWriteTime -gt (Get-Date).AddSeconds(-10) 
        }
        if ($recentFiles) {
            $hasChanges = $true
            break
        }
    }
    
    if ($hasChanges) {
        Write-Host "`n📝 Cambios detectados en archivos" -ForegroundColor Magenta
        Run-Tests
    }
}

Write-Host "`n👋 Modo watch detenido" -ForegroundColor Yellow

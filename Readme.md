// Subir servidor

json-server server/db.json


// Disponibilizar acesso ao localhost:3000 ao emulador

adb reverse tcp:3000 tcp:3000

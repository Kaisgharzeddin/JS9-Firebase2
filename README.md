Et enkelt webprosjekt som viser hvordan man kan bruke **Firebase Realtime Database** i en JavaScript-applikasjon for å **legge til**, **oppdatere**, **slette** og **hente** data fra nettleseren.

---

## 🚀 Funksjonalitet
- Legg til persondata (ID, navn, alder)
- Oppdater eksisterende data
- Fjern registrerte personer
- Finn personer basert på ID
- Viser resultater direkte i grensesnittet

---

## 🧩 Teknologier
- **HTML**, **CSS** og **JavaScript (ES modules)**
- **Firebase Web SDK v12**
- **Firebase Realtime Database**

---

## ⚙️ Oppsett

### 1. Opprett et Firebase-prosjekt
1. Gå til [Firebase Console](https://console.firebase.google.com/)
2. Opprett et nytt prosjekt
3. Aktiver **Realtime Database**
4. Under **Project settings → General**, kopier Firebase-konfigurasjonen
5. Lim inn konfigurasjonen i `index.js` under `firebaseConfig`

---

### 2. Tillat lesing og skriving (under utvikling)
Gå til **Build → Realtime Database → Rules**, og sett følgende (midlertidig for testing):

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}

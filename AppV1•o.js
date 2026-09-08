   WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyX8ubsFSCagEtWhk68tBBLlNK6qN_7ow2qVN0eNcVTo03eYcpi3M_CYkpOMMKABuVz/exec";

async function submitToCloud(shiftData) {
  const payload = {
    technician: shiftData.technician,
    fieldLevel: shiftData.fieldLevel,
    terraceLevel: shiftData.terraceLevel,
    clubLevel: shiftData.clubLevel,
    viewLevel: shiftData.viewLevel,
    comments: shiftData.comments,
    f50Count: shiftData.f50Count,
    d50Count: shiftData.d50Count,
    f80Count: shiftData.f80Count,
    d80Count: shiftData.d80Count,
    oilUsed: shiftData.oilUsed
  };

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    
    const result = await response.json();
    if (result.status === "success") {
      alert("Data successfully logged to Google Sheet!");
    }
  } catch (error) {
    console.error("Error logging data:", error);
    alert("Failed to send data to the spreadsheet.");
  }
}

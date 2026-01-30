/**
 * Diabetes Rule-Based Evaluation Engine
 * ------------------------------------
 * This module evaluates diabetes risk using
 * standard medical thresholds (ADA / WHO).
 */

export function evaluateDiabetes({ fbs, ppbs, hba1c }) {
  let riskLevel = "Normal";
  let riskScore = 0;
  let reasons = [];

  // ------------------ HbA1c Rules ------------------
  if (hba1c !== undefined) {
    if (hba1c >= 6.5) {
      riskScore += 50;
      reasons.push("HbA1c level is in diabetic range (≥ 6.5%)");
    } else if (hba1c >= 5.7) {
      riskScore += 25;
      reasons.push("HbA1c level indicates prediabetes (5.7%–6.4%)");
    }
  }

  // ------------------ FBS Rules ------------------
  if (fbs !== undefined) {
    if (fbs >= 126) {
      riskScore += 30;
      reasons.push("Fasting Blood Sugar is high (≥ 126 mg/dL)");
    } else if (fbs >= 100) {
      riskScore += 15;
      reasons.push("Fasting Blood Sugar is borderline (100–125 mg/dL)");
    }
  }

  // ------------------ PPBS Rules ------------------
  if (ppbs !== undefined) {
    if (ppbs >= 200) {
      riskScore += 20;
      reasons.push("Postprandial Blood Sugar is high (≥ 200 mg/dL)");
    } else if (ppbs >= 140) {
      riskScore += 10;
      reasons.push("Postprandial Blood Sugar is borderline (140–199 mg/dL)");
    }
  }

  // ------------------ Final Risk Classification ------------------
  if (riskScore >= 60) {
    riskLevel = "High Risk (Diabetic)";
  } else if (riskScore >= 25) {
    riskLevel = "Prediabetic";
  } else {
    riskLevel = "Normal";
  }

  return {
    riskLevel,
    riskScore,
    reasons,
    disclaimer:
      "This result is for educational purposes only and does not replace professional medical advice."
  };
}

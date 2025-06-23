import { useState } from "react";

export default function ProfitCalculator() {
  const [reimbursement, setReimbursement] = useState(200);
  const [volume, setVolume] = useState(10000);
  const [enableSharing, setEnableSharing] = useState(true);

  const fixedRevenue = 111.5;
  const variableRevenuePercent = 0.09;
  const cogsPerVisit = 90;
  const baseFixedMonthlyCost = 200000;

  const revenuePerVisit = fixedRevenue + reimbursement * variableRevenuePercent;
  const grossProfitPerVisit = revenuePerVisit - cogsPerVisit;
  const totalRevenue = revenuePerVisit * volume;
  const totalCOGS = cogsPerVisit * volume;
  const grossProfit = totalRevenue - totalCOGS;

  const excessRevenue = Math.max(0, totalRevenue - 1000000);
  const extraFixedCost = Math.floor(excessRevenue / 250000) * 50000;
  const totalFixedMonthlyCost = baseFixedMonthlyCost + extraFixedCost;

  const netProfitBeforeSharing = grossProfit - totalFixedMonthlyCost;

  const hospitalRevenue = reimbursement * volume;
  const hospitalCostPerVisit = revenuePerVisit;
  const hospitalProfit = hospitalRevenue - hospitalCostPerVisit * volume;
  const hospitalProfitMargin = hospitalProfit / hospitalRevenue;

  const thresholdProfit = 0.25 * hospitalRevenue;
  const excessHospitalProfit = Math.max(0, hospitalProfit - thresholdProfit);
  const sharedProfit = enableSharing ? 0.5 * excessHospitalProfit : 0;

  const netProfit = netProfitBeforeSharing + sharedProfit;
  const hospitalProfitAfterSharing = hospitalProfit - sharedProfit;

  const breakevenVolume = Math.ceil(totalFixedMonthlyCost / grossProfitPerVisit);

  const annualVolume = volume * 12;
  const annualRevenue = totalRevenue * 12;
  const annualCOGS = totalCOGS * 12;
  const annualGrossProfit = grossProfit * 12;
  const annualFixedCost = totalFixedMonthlyCost * 12;
  const annualNetProfit = netProfit * 12;
  const annualHospitalRevenue = hospitalRevenue * 12;
  const annualSharedProfit = sharedProfit * 12;
  const annualHospitalProfit = hospitalProfitAfterSharing * 12;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Financial Model Calculator</h1>
      ...
    </div>
  );
}
# 🚨 Massachusetts Economic Crisis Dashboard

### A data-driven analysis of Massachusetts' affordability and employment crisis

[![Live Dashboard](https://img.shields.io/badge/🚀_Live_Dashboard-Click_Here-ff2d55?style=for-the-badge)](https://duncanburns2013-dot.github.io/Master-Massachusetts-Affordability-Employment-/dashboard.html)
[![Data](https://img.shields.io/badge/Data-January_2026-00d4ff?style=for-the-badge)](#data-sources)
[![Sources](https://img.shields.io/badge/Sources-Official_Only-32d74b?style=for-the-badge)](#data-sources)

---

## 🔴 The Crisis at a Glance

<table>
<tr>
<td align="center" width="20%">
<h3>📉 #44</h3>
<p><strong>Unemployment Rank</strong><br/>Worse than 86% of states</p>
</td>
<td align="center" width="20%">
<h3>💰 #2</h3>
<p><strong>Cost of Living</strong><br/>Most expensive state</p>
</td>
<td align="center" width="20%">
<h3>🏠 $638K</h3>
<p><strong>Median Home</strong><br/>+55% since 2019</p>
</td>
<td align="center" width="20%">
<h3>⚡ +84%</h3>
<p><strong>Electricity Rate</strong><br/>vs national average</p>
</td>
<td align="center" width="20%">
<h3>⚠️ 55%</h3>
<p><strong>Income Gap</strong><br/>Short of "comfortable"</p>
</td>
</tr>
</table>

---

## 💡 The Bottom Line

> **A family of 4 needs $313,747/year to live "comfortably" in Massachusetts.**
> 
> **The median family earns $140,309 — only 45% of what's needed.**
> 
> **That's a $173,438 annual shortfall.**

---

## 📊 Interactive Dashboard

**[👉 LAUNCH THE DASHBOARD](https://duncanburns2013-dot.github.io/Master-Massachusetts-Affordability-Employment-/dashboard.html)**

The dashboard features:
- ✨ **Animated visualizations** with real-time counters
- 📅 **Interactive timeline** — drag to explore 2019-2025 data
- 🖱️ **Mouse-tracking effects** and particle animations
- 📱 **Fully responsive** — works on mobile
- 🎯 **Click to expand** cards for more details
- 🎉 **Easter egg** — click the crisis badge!

---

## 📈 Key Findings

### 1️⃣ Employment Crisis

| Metric | Value | Context |
|--------|-------|---------|
| Unemployment Rate | **4.8%** | December 2025 |
| National Rank | **#44 of 51** | Only 7 states worse |
| Net Jobs 2025 | **-4,500** | Declining employment |
| Layoffs YTD | **323,000** | +13.7% vs 2024 |
| Benefits Extension | **30 weeks** | Only state to extend |

**Key Facts:**
- September 2025 was the **worst month since COVID** (-11,100 jobs)
- Recent college graduates: **5.76%** unemployment, **34%** underemployment
- Insured unemployment rate: **2.7%** (5th highest nationally)

---

### 2️⃣ Housing Unattainability

| Region | Median Price | Change |
|--------|-------------|--------|
| **Statewide** | $638,000 | +3.7% YoY |
| **Greater Boston** | $800,000 | +4.2% YoY |
| **Essex County** | $699,000 | +5.1% YoY |
| **Worcester** | $450,000 | +6.3% YoY |

**The Math:**
```
Median Home Price:        $638,000
Down Payment (20%):       $127,600
Monthly Payment @ 6.1%:   $3,996
Income Required (28% DTI): $171,257
Median HH Income:         $104,800
─────────────────────────────────
GAP:                      -$66,457 (39% short)
```

**Housing Deficit:** 222,000 units needed by 2030

---

### 3️⃣ Inflation Squeeze

| Metric | Northeast | National | Gap |
|--------|-----------|----------|-----|
| CPI (Dec 2025) | **3.3%** | 2.7% | +0.6% |
| Core Inflation | **3.1%** | 2.8% | +0.3% |
| Cumulative (2020-25) | **+21.6%** | +20.1% | +1.5% |
| Energy | **+5.6%** | +3.2% | +2.4% |

**Real Wage Impact:**
```
Nominal Wage Growth (2021-2025):  +21.8%
CPI Increase (2021-2025):         +22.7%
─────────────────────────────────────────
REAL WAGE CHANGE:                 -0.7%

Workers have LESS purchasing power than 4 years ago.
```

---

### 4️⃣ Utility Cost Crisis

| Utility | Massachusetts | National | Premium |
|---------|--------------|----------|---------|
| **Electricity** | 29.86¢/kWh | 16.26¢/kWh | **+84%** |
| **Natural Gas** | $2.12/therm | $1.35/therm | **+57%** |
| **Overall Utilities** | Index: 166 | Index: 100 | **+66%** |

**Annual Impact:**
- Average MA household pays **$2,400+ more per year** on utilities than national average
- Winter heating bills can exceed **$400/month**
- Electricity rates have increased **+23%** since 2020

---

### 5️⃣ Income vs. Living Costs

**Living Wage Thresholds (MIT Calculator):**

| Household Type | Annual Income Needed |
|----------------|---------------------|
| Single Adult | $60,080 |
| Couple (no children) | $80,602 |
| Single + 1 Child | $114,708 |
| Couple + 1 Child | $124,849 |
| Couple + 2 Children | $156,857 |

**Jobs Below Living Wage ($60,080):**
- ❌ Food Service: $40,280
- ❌ Healthcare Support: $42,970
- ❌ Personal Care: $44,880
- ❌ Maintenance: $46,250
- ❌ Transportation: $50,080
- ❌ Production: $51,820
- ❌ Office Admin: $55,740

**7 of 15 common occupations** pay below the living wage threshold.

---

### 6️⃣ Who Can Actually Afford Massachusetts?

| Income Percentile | Status | Reality |
|-------------------|--------|---------|
| **Top 10%** | ✅ Comfortable | Can afford housing + savings |
| **Median (50th)** | ⚠️ Treading Water | Meeting basics, no margin |
| **Bottom 60%** | ❌ Drowning | Cannot afford basic expenses |

---

## 📁 Repository Contents

```
├── dashboard.html          # 🚀 Interactive dashboard
├── README.md               # This file
├── dashboard.jsx           # React source (for reference)
├── massachusetts_economic_data.json
└── charts/
    ├── fig1_unemployment_ranking.png
    ├── fig4_income_vs_threshold.png
    └── fig6_occupation_wages.png
```

---

## 🔗 Data Sources

All data comes from **official government sources only**:

| Source | Data | Link |
|--------|------|------|
| **BLS LAUS** | Unemployment by state | [bls.gov/lau](https://www.bls.gov/lau/) |
| **BLS CES** | Employment by industry | [bls.gov/ces](https://www.bls.gov/ces/) |
| **BLS OES** | Wages by occupation | [bls.gov/oes](https://www.bls.gov/oes/) |
| **BLS CPI** | Consumer Price Index | [bls.gov/cpi](https://www.bls.gov/cpi/) |
| **BEA SAINC** | State personal income | [bea.gov](https://www.bea.gov/) |
| **BEA SAPCE** | Consumption expenditures | [bea.gov](https://www.bea.gov/) |
| **BEA RPP** | Regional Price Parities | [bea.gov](https://www.bea.gov/) |
| **FRED** | Federal Reserve data | [fred.stlouisfed.org](https://fred.stlouisfed.org/) |
| **Census ACS** | Household income | [census.gov](https://www.census.gov/) |
| **Warren Group** | MA housing sales | [thewarrengroup.com](https://www.thewarrengroup.com/) |
| **MIT Living Wage** | Living wage calculations | [livingwage.mit.edu](https://livingwage.mit.edu/) |
| **CHIA** | MA healthcare data | [chiamass.gov](https://www.chiamass.gov/) |
| **EIA** | Electricity prices | [eia.gov](https://www.eia.gov/) |

---

## 🛠️ Setup GitHub Pages

To host the interactive dashboard:

1. Upload `dashboard.html` to this repository
2. Go to **Settings** → **Pages**
3. Set Source: **Deploy from branch**
4. Select **main** branch, **/ (root)** folder
5. Click **Save**
6. Wait 2-3 minutes
7. Access at: `https://duncanburns2013-dot.github.io/Master-Massachusetts-Affordability-Employment-/dashboard.html`

---

## 📜 License

MIT License — Data sourced from official government publications.

---

<p align="center">
<strong>Last Updated:</strong> January 31, 2026
</p>

<p align="center">
<a href="https://duncanburns2013-dot.github.io/Master-Massachusetts-Affordability-Employment-/dashboard.html">
<img src="https://img.shields.io/badge/🚀_LAUNCH_DASHBOARD-ff2d55?style=for-the-badge&logoColor=white" alt="Launch Dashboard" />
</a>
</p>

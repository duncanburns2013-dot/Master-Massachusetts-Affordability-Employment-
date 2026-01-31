# Massachusetts Affordability & Employment Crisis Dashboard

> **A comprehensive, data-driven analysis of Massachusetts' economic challenges using exclusively official government data sources.**

[![Data Updated](https://img.shields.io/badge/Data%20Updated-January%202026-blue)]()
[![Sources](https://img.shields.io/badge/Sources-Official%20Only-green)]()
[![License](https://img.shields.io/badge/License-MIT-yellow)]()

## 📊 Interactive Dashboard

**[Launch the Interactive Dashboard](./dashboard.html)** - Explore all data visualizations in one elegant interface.

![Dashboard Preview](./charts/dashboard_preview.png)

---

## 🔥 The Headlines

| Metric | Massachusetts | National | Gap |
|--------|---------------|----------|-----|
| **Unemployment Rate** | 4.8% (#44 of 51) | 4.4% | +0.4% |
| **Cost of Living** | #2 Most Expensive | — | — |
| **Median Home Price** | $638,000 | $405,400 | +57% |
| **Electricity Rates** | 29.86¢/kWh | 16.26¢/kWh | +57% |
| **Family "Comfortable" Threshold** | $313,747 | — | #1 Highest |
| **Median Family Income** | $140,309 | — | **45% Short** |
| **Real Income Growth (2015-24)** | +4.1% | +5.5% | -1.4% |

---

## 📈 Key Findings

### 1. The Employment Crisis
- **MA ranks 44th** in unemployment (December 2025: 4.8%)
- Only 7 states + DC have worse unemployment
- **2025 was the worst year since COVID recovery began**
- 323,000 layoffs through August 2025 (+13.7% YoY)
- MA was the **only state** to extend unemployment benefits to 30 weeks
- Recent college graduates: 5.76% unemployment, 34% underemployment

### 2. The Affordability Disaster
- A family of 4 needs **$313,747/year** to live "comfortably"
- Median family income: **$140,309** (only 45% of what's needed)
- Massachusetts is **#1 most expensive state** for families to live comfortably
- Only 1 of 16 common occupations (Management) can afford a "comfortable" family life

### 3. Housing Unattainability
- Median home price: **$638,000** (up 55% since 2019)
- Greater Boston median: **$800,000**
- 50+ cities/towns now have **$1M+ median prices**
- Income needed to afford median home: **$171,257** (vs. $104,800 median income)
- Housing deficit: **222,000 units** needed by 2030

### 4. The Inflation Squeeze
- Northeast CPI: **3.3%** (December 2025) vs. National 2.7%
- Cumulative inflation since 2020: **+21.6%** (Boston)
- Real wages have **declined** - workers have less purchasing power than 2020

### 5. The Double Squeeze
- MA workers face **higher prices** (+8.2% cost of living)
- AND **slower real income growth** (+4.1% vs. 5.5% national)
- Consumption growth (6.1%) outpaces income growth (5.1%) = **annual 1% purchasing power loss**

---

## 📁 Repository Structure

```
Master-Massachusetts-Affordability-Employment/
├── README.md                    # This file
├── dashboard.html               # Interactive dashboard (single file)
├── data/
│   ├── massachusetts_economic_data.json    # All data in JSON format
│   ├── unemployment_timeseries.csv         # BLS unemployment data
│   ├── housing_prices_timeseries.csv       # Warren Group housing data
│   ├── inflation_timeseries.csv            # BLS CPI data
│   ├── income_by_occupation.csv            # BLS OES wage data
│   └── consumption_vs_income.csv           # BEA consumption data
├── charts/
│   ├── fig1_unemployment_ranking.png
│   ├── fig2_cost_of_living.png
│   ├── fig3_housing_affordability.png
│   ├── fig4_income_vs_threshold.png
│   ├── fig5_inflation_comparison.png
│   ├── fig6_occupation_wages.png
│   ├── fig7_double_squeeze.png
│   └── dashboard_preview.png
└── src/
    └── generate_charts.py       # Python script to regenerate charts
```

---

## 📊 Data Sources (Official Only)

| Source | Data | URL |
|--------|------|-----|
| **BLS LAUS** | Unemployment rates by state | [bls.gov/lau](https://www.bls.gov/lau/) |
| **BLS CES** | Employment by industry | [bls.gov/ces](https://www.bls.gov/ces/) |
| **BLS OES** | Wages by occupation | [bls.gov/oes](https://www.bls.gov/oes/) |
| **BLS CPI** | Consumer Price Index | [bls.gov/cpi](https://www.bls.gov/cpi/) |
| **BEA SAINC** | State personal income | [bea.gov](https://www.bea.gov/) |
| **BEA SAPCE** | State consumption expenditures | [bea.gov](https://www.bea.gov/) |
| **BEA RPP** | Regional Price Parities | [bea.gov](https://www.bea.gov/) |
| **FRED** | Federal Reserve economic data | [fred.stlouisfed.org](https://fred.stlouisfed.org/) |
| **Census ACS** | Household income data | [census.gov](https://www.census.gov/) |
| **Warren Group** | MA housing sales data | [thewarrengroup.com](https://www.thewarrengroup.com/) |
| **MIT Living Wage** | Living wage calculations | [livingwage.mit.edu](https://livingwage.mit.edu/) |
| **SmartAsset** | "Comfortable living" thresholds | [smartasset.com](https://smartasset.com/) |
| **CHIA** | MA healthcare data | [chiamass.gov](https://www.chiamass.gov/) |
| **EIA** | Electricity prices | [eia.gov](https://www.eia.gov/) |

---

## 📉 Charts & Visualizations

### Unemployment by State (December 2025)
![Unemployment Ranking](./charts/fig1_unemployment_ranking.png)

Massachusetts ranks **44th** - only California, Nevada, Michigan, Oregon, Ohio, New Jersey, and DC are worse.

### Cost of Living Index
![Cost of Living](./charts/fig2_cost_of_living.png)

Massachusetts is the **#2 most expensive state** overall. Housing costs are 30% above national average, utilities 66% above.

### Housing Affordability Gap
![Housing Affordability](./charts/fig3_housing_affordability.png)

The median MA household earns **$66,457 less** than what's needed to afford the median home.

### Income vs. Affordability Thresholds
![Income Thresholds](./charts/fig4_income_vs_threshold.png)

The median family earns only **45%** of what SmartAsset calculates is needed to live "comfortably."

### Occupation Wage Analysis
![Occupation Wages](./charts/fig6_occupation_wages.png)

Only 7 of 16 common occupations pay enough to meet basic living expenses for a single adult ($60,080).

---

## 🔗 Related Repositories

- [ma-electricity-analysis](https://github.com/duncanburns2013-dot/ma-electricity-analysis) - Electricity cost analysis
- [MA-Housing-Affordability-Issues](https://github.com/duncanburns2013-dot/MA-Housing-Affordability-Issues) - Housing deep dive
- [Massachusetts-Disaster](https://github.com/duncanburns2013-dot/Massachusetts-Disaster) - Comprehensive overview
- [Maura-Healey-Year-3-](https://github.com/duncanburns2013-dot/Maura-Healey-Year-3-) - Policy analysis
- [ma-healthcare-costs](https://github.com/duncanburns2013-dot/ma-healthcare-costs) - Healthcare burden analysis

---

## 🧮 Methodology Notes

### Affordability Calculations
- **Living Wage**: MIT Living Wage Calculator (Massachusetts-specific)
- **"Comfortable" Threshold**: 50/30/20 rule (needs are 50% of income, wants 30%, savings 20%)
- **Housing Affordability**: 28% debt-to-income ratio (conventional mortgage standard)

### Data Currency
- Unemployment: December 2025 (BLS release January 27, 2026)
- CPI/Inflation: December 2025 (BLS release January 13, 2026)
- Housing: Full Year 2025 (Warren Group release January 20, 2026)
- Income/Consumption: 2024 annual (BEA release September 2025)

---

## 📝 License

MIT License - Data sourced from official government publications.

## 🤝 Contributing

Pull requests welcome. Please ensure all data additions include:
1. Official source citation
2. Date of data
3. Methodology notes if calculations are involved

---

*Last updated: January 31, 2026*

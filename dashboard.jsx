import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend, ComposedChart, Area, ReferenceLine, RadialBarChart, RadialBar } from 'recharts';

const MassachusettsDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Color palette - editorial/financial newspaper aesthetic
  const colors = {
    primary: '#1a1a2e',
    accent: '#e63946',
    warning: '#f4a261',
    success: '#2a9d8f',
    muted: '#6c757d',
    light: '#f8f9fa',
    chart: ['#e63946', '#457b9d', '#2a9d8f', '#f4a261', '#a855f7', '#1d3557']
  };

  // Unemployment Data
  const unemploymentRanking = [
    { state: 'South Dakota', rate: 1.9, rank: 1 },
    { state: 'North Dakota', rate: 2.5, rank: 2 },
    { state: 'New Hampshire', rate: 3.0, rank: 7 },
    { state: 'US Average', rate: 4.4, rank: null },
    { state: 'Massachusetts', rate: 4.8, rank: 44 },
    { state: 'California', rate: 5.5, rank: 50 },
    { state: 'DC', rate: 6.0, rank: 51 }
  ];

  const unemploymentHistory = [
    { year: '2019', ma: 3.0, us: 3.7 },
    { year: '2020', ma: 8.9, us: 8.1 },
    { year: '2021', ma: 5.4, us: 5.4 },
    { year: '2022', ma: 3.7, us: 3.6 },
    { year: '2023', ma: 3.5, us: 3.6 },
    { year: '2024', ma: 4.1, us: 4.0 },
    { year: '2025', ma: 4.8, us: 4.4 }
  ];

  // Cost of Living Data
  const costOfLiving = [
    { category: 'Utilities', ma: 166, national: 100, diff: '+66%' },
    { category: 'Housing', ma: 130, national: 100, diff: '+30%' },
    { category: 'Healthcare', ma: 131, national: 100, diff: '+31%' },
    { category: 'Overall', ma: 108.2, national: 100, diff: '+8.2%' },
    { category: 'Food', ma: 105, national: 100, diff: '+5%' },
    { category: 'Transport', ma: 102, national: 100, diff: '+2%' }
  ];

  // Housing Data
  const housingPrices = [
    { year: '2019', price: 410000 },
    { year: '2020', price: 450000 },
    { year: '2021', price: 550000 },
    { year: '2022', price: 550000 },
    { year: '2023', price: 570000 },
    { year: '2024', price: 615000 },
    { year: '2025', price: 638000 }
  ];

  const regionalPrices = [
    { region: 'Springfield', price: 288000, color: colors.success },
    { region: 'Worcester', price: 450000, color: colors.chart[1] },
    { region: 'Statewide', price: 638000, color: colors.warning },
    { region: 'Essex County', price: 699000, color: colors.chart[4] },
    { region: 'Greater Boston', price: 800000, color: colors.accent },
    { region: 'Newburyport', price: 1327602, color: colors.primary }
  ];

  // Inflation Data
  const inflationData = [
    { year: '2020', northeast: 1.4, national: 1.2 },
    { year: '2021', northeast: 4.9, national: 4.7 },
    { year: '2022', northeast: 7.1, national: 8.0 },
    { year: '2023', northeast: 3.9, national: 4.1 },
    { year: '2024', northeast: 3.5, national: 2.9 },
    { year: '2025', northeast: 3.3, national: 2.7 }
  ];

  // Income by Occupation
  const occupationData = [
    { occupation: 'Food Service', salary: 40280, threshold: 60080, affordable: false },
    { occupation: 'Healthcare Support', salary: 42970, threshold: 60080, affordable: false },
    { occupation: 'Personal Care', salary: 44880, threshold: 60080, affordable: false },
    { occupation: 'Maintenance', salary: 46250, threshold: 60080, affordable: false },
    { occupation: 'Transportation', salary: 50080, threshold: 60080, affordable: false },
    { occupation: 'Production', salary: 51820, threshold: 60080, affordable: false },
    { occupation: 'Office Admin', salary: 55740, threshold: 60080, affordable: false },
    { occupation: 'Sales', salary: 61060, threshold: 60080, affordable: true },
    { occupation: 'Protective Svc', salary: 66780, threshold: 60080, affordable: true },
    { occupation: 'Construction', salary: 79120, threshold: 60080, affordable: true },
    { occupation: 'Education', salary: 80050, threshold: 60080, affordable: true },
    { occupation: 'Business/Finance', salary: 101770, threshold: 60080, affordable: true },
    { occupation: 'Healthcare Prac.', salary: 115850, threshold: 60080, affordable: true },
    { occupation: 'Computer/Math', salary: 126150, threshold: 60080, affordable: true },
    { occupation: 'Management', salary: 160460, threshold: 60080, affordable: true }
  ];

  // Affordability Gap
  const affordabilityGap = [
    { label: 'Family Needs', value: 313747, fill: colors.accent },
    { label: 'Median Income', value: 140309, fill: colors.success }
  ];

  // Consumption vs Income
  const consumptionData = [
    { category: 'Financial Services', growth: 12.20 },
    { category: 'Transportation', growth: 9.67 },
    { category: 'Healthcare', growth: 7.41 },
    { category: 'Housing/Utilities', growth: 6.76 },
    { category: 'Total Consumption', growth: 6.10 },
    { category: 'Income Growth', growth: 5.09 }
  ];

  const StatCard = ({ title, value, subtitle, trend, trendLabel }) => (
    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{title}</p>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      {trend && (
        <p className={`text-sm font-medium mt-2 ${trend > 0 ? 'text-red-600' : 'text-green-600'}`}>
          {trend > 0 ? '▲' : '▼'} {trendLabel}
        </p>
      )}
    </div>
  );

  const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );

  const NavButton = ({ section, label, icon }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        activeSection === section 
          ? 'bg-gray-900 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {icon} {label}
    </button>
  );

  const formatCurrency = (value) => `$${value.toLocaleString()}`;
  const formatPercent = (value) => `${value}%`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                Massachusetts Economic Dashboard
              </h1>
              <p className="text-sm text-gray-500">Affordability & Employment Crisis Analysis</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded font-medium">CRISIS</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Data: Jan 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto">
            <NavButton section="overview" label="Overview" icon="📊" />
            <NavButton section="employment" label="Employment" icon="💼" />
            <NavButton section="housing" label="Housing" icon="🏠" />
            <NavButton section="inflation" label="Inflation" icon="📈" />
            <NavButton section="income" label="Income" icon="💰" />
            <NavButton section="affordability" label="Affordability" icon="⚠️" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <SectionHeader 
              title="The Massachusetts Crisis at a Glance" 
              subtitle="Key metrics showing the state's economic challenges — all from official government data"
            />
            
            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard 
                title="Unemployment Rate" 
                value="4.8%" 
                subtitle="Rank: #44 of 51"
                trend={1}
                trendLabel="vs. 4.4% national"
              />
              <StatCard 
                title="Cost of Living Rank" 
                value="#2" 
                subtitle="Most expensive state"
              />
              <StatCard 
                title="Median Home Price" 
                value="$638K" 
                subtitle="+55% since 2019"
                trend={1}
                trendLabel="+3.7% YoY"
              />
              <StatCard 
                title="Affordability Gap" 
                value="55%" 
                subtitle="Short of 'comfortable'"
              />
            </div>

            {/* Big Number Callout */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-red-200 text-sm uppercase tracking-wider mb-2">The Bottom Line</p>
                  <p className="text-5xl font-bold mb-4">$313,747</p>
                  <p className="text-xl">Annual income needed for a family of 4 to live "comfortably" in Massachusetts</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-red-200 text-sm mb-2">Median Family Income</p>
                  <p className="text-3xl font-bold">$140,309</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-red-200 text-sm">Shortfall</p>
                    <p className="text-2xl font-bold">-$173,438 (45%)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Unemployment vs. National Average</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={unemploymentHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} domain={[0, 10]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="ma" stroke={colors.accent} strokeWidth={3} name="Massachusetts" dot={{ fill: colors.accent }} />
                    <Line type="monotone" dataKey="us" stroke={colors.muted} strokeWidth={2} strokeDasharray="5 5" name="US Average" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Cost of Living vs. National (Index: 100)</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={costOfLiving} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" domain={[0, 180]} tick={{ fontSize: 12 }} />
                    <YAxis dataKey="category" type="category" width={80} tick={{ fontSize: 11 }} />
                    <Tooltip formatter={(value) => `${value} (National: 100)`} />
                    <ReferenceLine x={100} stroke={colors.muted} strokeDasharray="3 3" />
                    <Bar dataKey="ma" fill={colors.accent} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Employment Section */}
        {activeSection === 'employment' && (
          <div className="space-y-8">
            <SectionHeader 
              title="Employment Crisis" 
              subtitle="Massachusetts ranks 44th in unemployment — only 7 states and DC are worse"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Unemployment Rate" value="4.8%" subtitle="December 2025" />
              <StatCard title="National Rank" value="#44" subtitle="of 51 (50 states + DC)" />
              <StatCard title="Jobs Lost 2025" value="-4,500" subtitle="Net change" />
              <StatCard title="Layoffs YTD" value="323K" subtitle="+13.7% vs 2024" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">State Unemployment Rankings</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={unemploymentRanking} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" domain={[0, 7]} tick={{ fontSize: 12 }} />
                    <YAxis dataKey="state" type="category" width={100} tick={{ fontSize: 11 }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <ReferenceLine x={4.4} stroke={colors.muted} strokeDasharray="3 3" label={{ value: 'US Avg', fill: colors.muted, fontSize: 10 }} />
                    <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
                      {unemploymentRanking.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.state === 'Massachusetts' ? colors.accent : entry.state === 'US Average' ? colors.muted : colors.chart[1]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Unemployment Trend: MA vs US</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={unemploymentHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="us" fill="#e5e7eb" stroke={colors.muted} name="US Average" />
                    <Line type="monotone" dataKey="ma" stroke={colors.accent} strokeWidth={3} name="Massachusetts" dot={{ fill: colors.accent, r: 5 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-800 mb-3">⚠️ Key Employment Concerns</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-amber-900">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  MA was the <strong>only state</strong> to extend unemployment benefits to 30 weeks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  September 2025 was the <strong>worst month since COVID</strong> (-11,100 jobs)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  Recent college graduates: <strong>5.76%</strong> unemployment, <strong>34%</strong> underemployment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  Insured unemployment rate: <strong>2.7%</strong> (5th highest in nation)
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Housing Section */}
        {activeSection === 'housing' && (
          <div className="space-y-8">
            <SectionHeader 
              title="Housing Unattainability" 
              subtitle="The median MA family cannot afford the median MA home"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Median Home Price" value="$638K" subtitle="Statewide 2025" trend={1} trendLabel="+3.7% YoY" />
              <StatCard title="Greater Boston" value="$800K" subtitle="Median price" />
              <StatCard title="Income Needed" value="$171K" subtitle="To afford median home" />
              <StatCard title="Housing Deficit" value="222K" subtitle="Units needed by 2030" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Median Home Price Trend (Statewide)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={housingPrices}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v/1000}K`} domain={[350000, 700000]} />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Area type="monotone" dataKey="price" fill="#fee2e2" stroke={colors.accent} strokeWidth={2} />
                    <Line type="monotone" dataKey="price" stroke={colors.accent} strokeWidth={3} dot={{ fill: colors.accent, r: 5 }} />
                  </ComposedChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-gray-500 mt-2">+55.6% increase since 2019</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Regional Price Comparison (2025)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={regionalPrices} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" tickFormatter={(v) => `$${v/1000}K`} domain={[0, 1500000]} tick={{ fontSize: 11 }} />
                    <YAxis dataKey="region" type="category" width={100} tick={{ fontSize: 11 }} />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Bar dataKey="price" radius={[0, 4, 4, 0]}>
                      {regionalPrices.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Housing Affordability Calculation</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Median Home</p>
                  <p className="text-2xl font-bold text-gray-900">$638,000</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Monthly Payment</p>
                  <p className="text-2xl font-bold text-gray-900">$3,996</p>
                  <p className="text-xs text-gray-400">@ 6.1% rate, 20% down</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Income Needed</p>
                  <p className="text-2xl font-bold text-gray-900">$171,257</p>
                  <p className="text-xs text-gray-400">28% debt-to-income</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-600 mb-1">Gap from Median</p>
                  <p className="text-2xl font-bold text-red-700">-$66,457</p>
                  <p className="text-xs text-red-500">Median HH: $104,800</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inflation Section */}
        {activeSection === 'inflation' && (
          <div className="space-y-8">
            <SectionHeader 
              title="Inflation Squeeze" 
              subtitle="Northeast inflation consistently outpaces the national average"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Northeast CPI" value="3.3%" subtitle="December 2025" trend={1} trendLabel="vs 2.7% national" />
              <StatCard title="Core Inflation" value="3.1%" subtitle="Ex food & energy" />
              <StatCard title="Cumulative" value="+21.6%" subtitle="Since Jan 2020" />
              <StatCard title="Energy" value="+5.6%" subtitle="YoY increase" />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Inflation: Northeast vs. National (Annual %)</h3>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={inflationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} domain={[0, 9]} tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="national" fill="#e5e7eb" name="National" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="northeast" fill={colors.accent} name="Northeast" radius={[4, 4, 0, 0]} />
                  <ReferenceLine y={2} stroke={colors.success} strokeDasharray="3 3" label={{ value: 'Fed Target (2%)', fill: colors.success, fontSize: 10 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">December 2025 Category Breakdown</h3>
                <div className="space-y-3">
                  {[
                    { category: 'Energy', northeast: 5.6, national: 4.1 },
                    { category: 'Food', northeast: 3.4, national: 2.5 },
                    { category: 'All Items', northeast: 3.3, national: 2.7 },
                    { category: 'Core (ex F&E)', northeast: 3.1, national: 3.2 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{item.category}</span>
                      <div className="flex gap-4">
                        <span className="text-red-600 font-bold">{item.northeast}%</span>
                        <span className="text-gray-400">vs</span>
                        <span className="text-gray-600">{item.national}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">The Real Wage Story</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Nominal Wage Growth (2021-2025)</p>
                    <p className="text-3xl font-bold text-green-400">+21.8%</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">CPI Increase (2021-2025)</p>
                    <p className="text-3xl font-bold text-red-400">+22.7%</p>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm">Real Wage Change</p>
                    <p className="text-3xl font-bold text-red-500">-0.7%</p>
                    <p className="text-sm text-gray-400 mt-1">Workers have LESS purchasing power than 4 years ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Income Section */}
        {activeSection === 'income' && (
          <div className="space-y-8">
            <SectionHeader 
              title="Income by Occupation" 
              subtitle="Only 9 of 15 common occupations pay enough to meet basic living expenses ($60,080)"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Median HH Income" value="$104,800" subtitle="Rank: #1 nationally" />
              <StatCard title="Living Wage (Single)" value="$60,080" subtitle="MIT Calculator" />
              <StatCard title="Jobs Below Threshold" value="7 of 15" subtitle="Common occupations" />
              <StatCard title="Real Income Growth" value="+4.1%" subtitle="2015-2024 (vs 5.5% US)" />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Annual Salary vs. Living Wage Threshold</h3>
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={occupationData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" tickFormatter={(v) => `$${v/1000}K`} domain={[0, 180000]} tick={{ fontSize: 11 }} />
                  <YAxis dataKey="occupation" type="category" width={110} tick={{ fontSize: 10 }} />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <ReferenceLine x={60080} stroke={colors.accent} strokeWidth={2} strokeDasharray="5 5" label={{ value: 'Living Wage: $60,080', fill: colors.accent, fontSize: 10, position: 'top' }} />
                  <Bar dataKey="salary" radius={[0, 4, 4, 0]} name="Annual Salary">
                    {occupationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.affordable ? colors.success : colors.accent} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.accent }}></div>
                  <span className="text-sm text-gray-600">Below living wage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: colors.success }}></div>
                  <span className="text-sm text-gray-600">Meets living wage</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Affordability Section */}
        {activeSection === 'affordability' && (
          <div className="space-y-8">
            <SectionHeader 
              title="The Affordability Crisis" 
              subtitle="The gap between what families need and what they earn"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Family Income vs. "Comfortable" Threshold</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={affordabilityGap}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                    <YAxis tickFormatter={(v) => `$${v/1000}K`} domain={[0, 350000]} tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {affordabilityGap.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200 text-center">
                  <p className="text-sm text-red-600">Gap</p>
                  <p className="text-2xl font-bold text-red-700">-$173,438 (55% short)</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Consumption Growth Outpacing Income (2024)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={consumptionData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" domain={[0, 14]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11 }} />
                    <YAxis dataKey="category" type="category" width={120} tick={{ fontSize: 10 }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <ReferenceLine x={5.09} stroke={colors.success} strokeWidth={2} strokeDasharray="5 5" />
                    <Bar dataKey="growth" radius={[0, 4, 4, 0]}>
                      {consumptionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.category === 'Income Growth' ? colors.success : colors.accent} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-gray-500 mt-2">Even with 5.09% income growth, consumption grew 6.10% — a 1.01% annual loss</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Living Wage Thresholds (Massachusetts-Specific)</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { type: 'Single Adult', wage: 60080 },
                  { type: 'Couple (no kids)', wage: 80602 },
                  { type: 'Single + 1 Child', wage: 114708 },
                  { type: 'Couple + 1 Child', wage: 124849 },
                  { type: 'Couple + 2 Children', wage: 156857 }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">{item.type}</p>
                    <p className="text-xl font-bold text-gray-900">{formatCurrency(item.wage)}</p>
                    <p className="text-xs text-gray-400">per year</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-4">Source: MIT Living Wage Calculator (Massachusetts, 2025)</p>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-xl mb-6">Who Can Actually Afford Massachusetts?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-red-200 text-sm">Top 10%</p>
                  <p className="text-2xl font-bold">✓ Comfortable</p>
                  <p className="text-sm text-red-200 mt-2">Can afford housing + savings + discretionary</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-red-200 text-sm">Median (50th percentile)</p>
                  <p className="text-2xl font-bold">⚠️ Treading Water</p>
                  <p className="text-sm text-red-200 mt-2">Meeting basics, no margin for error</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-red-200 text-sm">Bottom 60%</p>
                  <p className="text-2xl font-bold">✗ Drowning</p>
                  <p className="text-sm text-red-200 mt-2">Cannot afford basic living expenses</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p className="font-medium text-gray-700 mb-2">Data Sources (Official Only)</p>
            <p>BLS (LAUS, CES, OES, CPI) • BEA (SAINC, SAPCE, RPP) • FRED • Census ACS • Warren Group • MIT Living Wage • CHIA • EIA</p>
            <p className="mt-4">Last Updated: January 31, 2026</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MassachusettsDashboard;

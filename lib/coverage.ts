// Selected Coverage — placeholder Saudi/GCC equity research notes.
// These are illustrative analyst-style notes, not investment advice.

export type CoverageRating = 'BUY' | 'HOLD' | 'SELL'

export type CoverageNote = {
  slug: string
  ticker: string
  exchange: string
  company: string
  sector: string
  rating: CoverageRating
  priceTarget: string
  upside: string
  date: string
  summary: string
  thesis: string[]
  risks: string[]
  body: string
}

export const coverageNotes: CoverageNote[] = [
  {
    slug: 'aramco-2024',
    ticker: '2222.SR',
    exchange: 'Tadawul',
    company: 'Saudi Aramco',
    sector: 'Energy — Integrated Oil & Gas',
    rating: 'BUY',
    priceTarget: 'SAR 34.50',
    upside: '+15%',
    date: '2026-04-22',
    summary:
      'Free cash flow durability and the performance-linked dividend mechanism remain the core long thesis through the 2030 capex cycle.',
    thesis: [
      'Lifting cost remains the lowest in the industry at ~USD 3.0/bbl, preserving margin even at sub-USD 70 Brent.',
      'Performance-linked dividend ties payouts to FCF, smoothing through-cycle yield without compromising the base distribution.',
      'Vision 2030 downstream and gas expansion (Jafurah, Master Gas Network Phase 3) widens product mix beyond crude.',
    ],
    risks: [
      'OPEC+ quota decisions cap upstream volume optionality.',
      'Hydrogen and CCS capex execution risk through 2030.',
      'Free float remains thin; sentiment swings amplified by index flow.',
    ],
    body:
      'Saudi Aramco screens as the most defensive integrated oil major globally on a unit-economics basis. The company combines the lowest lifting cost in the industry with a sovereign-backed capital allocation framework that, since 2024, has explicitly tied incremental dividend distribution to realized free cash flow. We view this structure as a feature rather than a constraint: it removes the typical major-oil incentive to sustain headline yield through the trough of the cycle, and instead lets payout normalize with cash generation. Through the 2030 capex window — dominated by Jafurah unconventional gas, Master Gas Network Phase 3, and the downstream chemicals build-out — we expect upstream production discipline (OPEC+) to remain the binding constraint on top-line growth, while gas and chemicals provide the incremental EBITDA. Our SAR 34.50 target reflects a mid-cycle DCF with USD 75/bbl long-run Brent and a 9.0% WACC, equivalent to ~12.5x 2027E P/E. Key catalysts: Jafurah Phase 1 first gas, dividend reaffirmation post-2026 budget, and any signal on partial monopoly pricing reform for downstream products.',
  },
  {
    slug: 'al-rajhi-2026',
    ticker: '1120.SR',
    exchange: 'Tadawul',
    company: 'Al Rajhi Bank',
    sector: 'Financials — Islamic Banking',
    rating: 'HOLD',
    priceTarget: 'SAR 92.00',
    upside: '+4%',
    date: '2026-04-15',
    summary:
      'Best-in-class deposit franchise and Shariah-compliant retail dominance are increasingly priced in. We move to Hold on valuation pending Q2 NIM stabilization.',
    thesis: [
      '47% retail deposit market share among Saudi banks anchors a ~70% non-interest-bearing deposit mix — structurally low cost of funds.',
      'Mortgage origination engine retains pricing power even as REDF subsidies normalize.',
      'Capital light fee businesses (Tasdeed, Al Rajhi Capital, takaful cross-sell) lift ROE without expanding the balance sheet.',
    ],
    risks: [
      'NIM compression if SAIBOR-driven repricing outpaces deposit beta.',
      'Mortgage book concentration (~45% of gross financing) ties asset quality to KSA real estate cycle.',
      'Multiple expansion already reflects much of the ROE narrative — limits incremental upside.',
    ],
    body:
      'Al Rajhi remains the structurally highest-return franchise in the GCC banking complex on the back of an unmatched Shariah-compliant retail deposit base. Our concern is not the franchise — it is the entry point. The stock now trades at ~3.0x P/TBV against a 22% sustainable ROE, leaving thin margin of safety if NIMs compress as deposit costs catch up to the policy rate trajectory. We model a 25 bps full-year NIM contraction in 2026, partially offset by mortgage origination and Tasdeed digital wallet fee growth. Mortgage market share has plateaued at ~38% of new originations, and any further concentration adds book-quality risk in a softer real estate cycle. Our SAR 92.00 target uses a Gordon Growth model with sustainable ROE of 21.5%, COE 11.0%, and 4% long-term growth — implying a 2.95x P/TBV exit. We would re-rate to Buy on either: (i) a clean Q2 NIM print, or (ii) a 10%+ pullback toward SAR 80.',
  },
  {
    slug: 'sabic-2026',
    ticker: '2010.SR',
    exchange: 'Tadawul',
    company: 'SABIC',
    sector: 'Materials — Diversified Chemicals',
    rating: 'BUY',
    priceTarget: 'SAR 78.00',
    upside: '+18%',
    date: '2026-03-28',
    summary:
      'Cyclical petrochemical trough is closer to inflection than consensus suggests; Aramco-SABIC integration unlocks feedstock and capex synergies through 2027.',
    thesis: [
      'Polyethylene–ethane spreads have stabilized above 5-year lows; Chinese capacity additions slowing into 2027.',
      'Aramco integration delivers preferential ethane allocation and tighter capex discipline (Yanbu and Jubail debottlenecking).',
      'Specialty Chemicals (~25% of sales) provides earnings ballast through the petchem trough.',
    ],
    risks: [
      'Chinese economic stimulus disappointment delays the petchem cycle recovery.',
      'Ethane allocation pricing reform creates near-term feedstock cost headwinds.',
      'European chemicals demand remains structurally weak.',
    ],
    body:
      'SABIC enters 2026 at the back end of one of the deepest petrochemical down-cycles in a decade. We argue the cycle is closer to its turn than current consensus EBITDA estimates imply. Three forces support the call: (1) Chinese polyethylene and polypropylene capacity additions are decelerating after the 2022–2025 build-out, with effective utilization improving in second-half 2026; (2) the Aramco integration — completed for capital-allocation purposes in late 2024 — has begun to translate into harder capex discipline and preferential feedstock arrangements (notably ethane allocation through 2030); and (3) the Specialty Chemicals segment continues to grow EBITDA double-digits, providing through-cycle earnings ballast. Our SAR 78.00 PT uses a sum-of-the-parts approach: 6.5x EV/EBITDA on Petrochemicals at mid-cycle, 9.0x on Specialty, and a holding company discount of 8%. Key catalyst: Q3 2026 PE/PP spread inflection.',
  },
]

export function getCoverageNote(slug: string): CoverageNote | undefined {
  return coverageNotes.find((note) => note.slug === slug)
}

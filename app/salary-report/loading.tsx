export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tz-dark-navy to-[#0D1B2A] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-tz-bright-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/70">Loading salary reports...</p>
      </div>
    </div>
  )
}

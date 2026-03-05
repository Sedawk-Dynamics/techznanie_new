export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tz-dark-navy via-[#0D1B2A] to-tz-dark-navy flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-tz-bright-orange mb-4"></div>
        <p className="text-white/80 text-lg">Loading Terms of Service...</p>
      </div>
    </div>
  )
}

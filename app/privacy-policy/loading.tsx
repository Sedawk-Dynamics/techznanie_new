export default function PrivacyPolicyLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tz-dark-navy via-[#0D1B2A] to-tz-dark-navy">
      <div className="pt-32 pb-20">
        <div className="container-modern">
          <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
            <div className="h-16 w-16 bg-white/10 rounded-full mx-auto"></div>
            <div className="h-12 bg-white/10 rounded-xl w-3/4 mx-auto"></div>
            <div className="h-6 bg-white/10 rounded-lg w-2/3 mx-auto"></div>
            <div className="grid grid-cols-2 gap-4 mt-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-24 bg-white/10 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

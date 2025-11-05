export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl sm:text-5xl font-bold text-purple-900">
              Zodiac Fruit Finder
            </h1>
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-lg text-gray-700">
            Discover which fruit matches your cosmic energy!
          </p>
        </div>

        {!result ? (
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
            <div className="block text-xl font-semibold text-gray-800 mb-4">
              Select Your Zodiac Sign:
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign.value}
                  onClick={() => setSelectedSign(sign.value)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedSign === sign.value
                      ? 'border-purple-500 bg-purple-50 shadow-md'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                  }`}
                >
                  <div className="font-semibold text-lg text-gray-800">
                    {sign.symbol} {sign.label}
                  </div>
                  <div className="text-sm text-gray-600">{sign.dates}</div>
                </button>
              ))}
            </div>

            <button
              onClick={handleReveal}
              disabled={!selectedSign}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                selectedSign
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Reveal My Fruit!
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
            <div className="text-center">
              <div className="text-8xl mb-4">{result.fruit.split(' ')[0]}</div>
              <h2 className="text-3xl font-bold text-purple-900 mb-2">
                You are a {result.fruit.split(' ')[1]}!
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {result.description}
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
                <p className="text-sm font-semibold text-purple-800 mb-2">
                  Your Fruity Traits:
                </p>
                <p className="text-purple-900">{result.traits}</p>
              </div>
              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                Try Another Sign
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>Made with cosmic energy and a love for fruit</p>
        </div>
      </div>
    </div>
  );
}
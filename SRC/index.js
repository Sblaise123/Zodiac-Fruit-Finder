import React, { useState } from 'react';

export default function ZodiacFruitFinder() {
  const [selectedSign, setSelectedSign] = useState('');
  const [result, setResult] = useState(null);

  const zodiacSigns = [
    { value: 'aries', label: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19' },
    { value: 'taurus', label: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20' },
    { value: 'gemini', label: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20' },
    { value: 'cancer', label: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22' },
    { value: 'leo', label: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22' },
    { value: 'virgo', label: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22' },
    { value: 'libra', label: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22' },
    { value: 'scorpio', label: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21' },
    { value: 'sagittarius', label: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21' },
    { value: 'capricorn', label: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19' },
    { value: 'aquarius', label: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18' },
    { value: 'pisces', label: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20' }
  ];

  const zodiacFruits = {
    aries: 'Apple',
    taurus: 'Banana',
    gemini: 'Grapes',
    cancer: 'Cherry',
    leo: 'Mango',
    virgo: 'Pear',
    libra: 'Peach',
    scorpio: 'Pomegranate',
    sagittarius: 'Orange',
    capricorn: 'Fig',
    aquarius: 'Blueberry',
    pisces: 'Kiwi'
  };

  const handleReveal = () => {
    if (selectedSign) {
      setResult(zodiacFruits[selectedSign]);
    }
  };

  const handleReset = () => {
    setSelectedSign('');
    setResult(null);
  };

  return (
    <div>
      <label>
        Select your zodiac sign:
        <select value={selectedSign} onChange={(e) => setSelectedSign(e.target.value)}>
          <option value="">-- Select --</option>
          {zodiacSigns.map((s) => (
            <option key={s.value} value={s.value}>
              {s.symbol} {s.label} ({s.dates})
            </option>
          ))}
        </select>
      </label>
      <div>
        <button onClick={handleReveal} disabled={!selectedSign}>
          Reveal Fruit
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {result && (
        <div>
          <strong>Fruit:</strong> {result}
        </div>
      )}
    </div>
  );
}

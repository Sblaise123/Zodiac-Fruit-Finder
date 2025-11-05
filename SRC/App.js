import React, { useState } from 'react';
import { Sparkles, Leaf } from 'lucide-react';

const zodiacFruits = {
  aries: {
    fruit: '🍊 Orange',
    description: 'Bold, energetic, and bursting with zest! Like an orange, you bring vibrant energy and enthusiasm to everything you do.',
    traits: 'Confident • Adventurous • Dynamic'
  },
  taurus: {
    fruit: '🍇 Grapes',
    description: 'Luxurious and grounded, you appreciate the finer things in life. Sweet, dependable, and always a crowd favorite.',
    traits: 'Reliable • Patient • Sensual'
  },
  gemini: {
    fruit: '🍒 Cherries',
    description: 'Dual-natured and delightfully versatile! You come in pairs and bring a playful sweetness to any situation.',
    traits: 'Curious • Adaptable • Witty'
  },
  cancer: {
    fruit: '🍉 Watermelon',
    description: 'Tough exterior, incredibly sweet interior. You are nurturing, refreshing, and perfect for bringing people together.',
    traits: 'Nurturing • Intuitive • Protective'
  },
  leo: {
    fruit: '🍍 Pineapple',
    description: 'Regal and crowned with confidence! You stand tall, demand attention, and leave a lasting impression.',
    traits: 'Charismatic • Generous • Dramatic'
  },
  virgo: {
    fruit: '🍏 Green Apple',
    description: 'Crisp, clean, and perfectly balanced. You bring precision and a refreshing clarity to everything.',
    traits: 'Analytical • Practical • Health-Conscious'
  },
  libra: {
    fruit: '🍑 Peach',
    description: 'Harmonious and sweet with a soft touch. You seek balance and bring beauty wherever you go.',
    traits: 'Diplomatic • Charming • Fair-Minded'
  },
  scorpio: {
    fruit: '🫐 Blackberries',
    description: 'Mysterious and intense with hidden depths. Complex, powerful, and unforgettably bold.',
    traits: 'Passionate • Mysterious • Transformative'
  },
  sagittarius: {
    fruit: '🥭 Mango',
    description: 'Exotic, adventurous, and full of tropical optimism! You bring sunshine and excitement to life.',
    traits: 'Optimistic • Adventurous • Free-Spirited'
  },
  capricorn: {
    fruit: '🍎 Red Apple',
    description: 'Classic, timeless, and built to last. Structured and reliable, you are the foundation everyone depends on.',
    traits: 'Ambitious • Disciplined • Traditional'
  },
  aquarius: {
    fruit: '🥝 Kiwi',
    description: 'Unique and unconventional! Strange on the outside, surprisingly delightful within. You march to your own beat.',
    traits: 'Innovative • Independent • Humanitarian'
  },
  pisces: {
    fruit: '🍓 Strawberry',
    description: 'Dreamy, romantic, and impossibly sweet. You are tender-hearted and bring magic to the mundane.',
    traits: 'Compassionate • Artistic • Intuitive'
  }
};
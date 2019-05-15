import React from 'react';
import Colors from './Colors';

const colors = [
  { name: 'red', 
    hex: '#FF0000', 
    rgb: {
      red: 255,
      green: 0,
      blue: 0
    }
  },
  { name: 'blue', 
    hex: '#0000FF', 
    rgb: {
      red: 0,
      green: 0,
      blue: 255
    }
  },
  { name: 'green', 
    hex: '#00FF00', 
    rgb: {
      red: 0,
      green: 255,
      blue: 0
    }
  },
  { name: 'yellow', 
    hex: '#FFFF00', 
    rgb: {
      red: 255,
      green: 255,
      blue: 0
    }
  }
];


export default function App() {
  return <Colors colors={colors} />;
}

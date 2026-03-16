const WEATHER_MAP = {
  0: { day: 'Despejado', night: 'Despejado' },
  1: { day: 'Mayormente despejado', night: 'Mayormente despejado' },
  2: { day: 'Parcialmente nublado', night: 'Parcialmente nublado' },
  3: { day: 'Nublado', night: 'Nublado' },
  45: { day: 'Niebla', night: 'Niebla' },
  48: { day: 'Niebla helada', night: 'Niebla helada' },
  51: { day: 'Llovizna ligera', night: 'Llovizna ligera' },
  53: { day: 'Llovizna moderada', night: 'Llovizna moderada' },
  55: { day: 'Llovizna intensa', night: 'Llovizna intensa' },
  56: { day: 'Llovizna helada ligera', night: 'Llovizna helada ligera' },
  57: { day: 'Llovizna helada intensa', night: 'Llovizna helada intensa' },
  61: { day: 'Lluvia ligera', night: 'Lluvia ligera' },
  63: { day: 'Lluvia moderada', night: 'Lluvia moderada' },
  65: { day: 'Lluvia intensa', night: 'Lluvia intensa' },
  66: { day: 'Lluvia helada ligera', night: 'Lluvia helada ligera' },
  67: { day: 'Lluvia helada intensa', night: 'Lluvia helada intensa' },
  71: { day: 'Nieve ligera', night: 'Nieve ligera' },
  73: { day: 'Nieve moderada', night: 'Nieve moderada' },
  75: { day: 'Nieve intensa', night: 'Nieve intensa' },
  77: { day: 'Cristales de nieve', night: 'Cristales de nieve' },
  80: { day: 'Chubascos ligeros', night: 'Chubascos ligeros' },
  81: { day: 'Chubascos moderados', night: 'Chubascos moderados' },
  82: { day: 'Chubascos fuertes', night: 'Chubascos fuertes' },
  85: { day: 'Nevadas ligeras', night: 'Nevadas ligeras' },
  86: { day: 'Nevadas fuertes', night: 'Nevadas fuertes' },
  95: { day: 'Tormenta', night: 'Tormenta' },
  96: { day: 'Tormenta con granizo ligero', night: 'Tormenta con granizo ligero' },
  99: { day: 'Tormenta con granizo fuerte', night: 'Tormenta con granizo fuerte' }
};

function pickIcon(code, isDay) {
  if (code === 0) return isDay ? 'sun' : 'moon';
  if ([1, 2].includes(code)) return 'cloud-sun';
  if ([3, 45, 48].includes(code)) return 'cloud';
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return 'rain';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow';
  if ([95, 96, 99].includes(code)) return 'storm';
  return 'cloud';
}

export function weatherCodeToText(code, isDay = true) {
  const target = WEATHER_MAP[code];
  if (!target) {
    return { label: 'Condicion no disponible', icon: 'cloud' };
  }

  return {
    label: isDay ? target.day : target.night,
    icon: pickIcon(code, Boolean(isDay))
  };
}

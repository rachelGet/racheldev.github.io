import './styles/App.css'
import { useTheme } from '../commonSrc/ThemeContext.tsx';

const shapes = [
  // Circles
  { type: 'circle', size: 80, x: 10, y: 15, duration: 22, delay: 0 },
  { type: 'circle', size: 40, x: 75, y: 60, duration: 18, delay: 3 },
  { type: 'circle', size: 60, x: 50, y: 80, duration: 25, delay: 7 },
  // Squares
  { type: 'square', size: 50, x: 85, y: 20, duration: 20, delay: 2 },
  { type: 'square', size: 35, x: 30, y: 50, duration: 24, delay: 5 },
  // Triangles
  { type: 'triangle', size: 55, x: 65, y: 10, duration: 19, delay: 1 },
  { type: 'triangle', size: 45, x: 20, y: 70, duration: 23, delay: 4 },
  // Hexagons
  { type: 'hexagon', size: 50, x: 90, y: 75, duration: 21, delay: 6 },
  { type: 'hexagon', size: 65, x: 40, y: 25, duration: 26, delay: 8 },
  // Rings
  { type: 'ring', size: 70, x: 55, y: 45, duration: 28, delay: 2 },
  { type: 'ring', size: 45, x: 15, y: 90, duration: 17, delay: 9 },
  // Extra small accents
  { type: 'circle', size: 20, x: 45, y: 5, duration: 15, delay: 10 },
  { type: 'square', size: 25, x: 70, y: 40, duration: 16, delay: 11 },
];

function ShapeElement({ type, size, isDark }: { type: string; size: number; isDark: boolean }) {
  const stroke = isDark ? 'rgba(192, 202, 245, 0.08)' : 'rgba(44, 62, 80, 0.06)';
  const fill = 'none';

  if (type === 'circle') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke={stroke} strokeWidth="2" fill={fill} />
      </svg>
    );
  }
  if (type === 'square') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="4" stroke={stroke} strokeWidth="2" fill={fill} />
      </svg>
    );
  }
  if (type === 'triangle') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" stroke={stroke} strokeWidth="2" fill={fill} />
      </svg>
    );
  }
  if (type === 'hexagon') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" stroke={stroke} strokeWidth="2" fill={fill} />
      </svg>
    );
  }
  if (type === 'ring') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke={stroke} strokeWidth="1.5" fill={fill} />
        <circle cx="50" cy="50" r="28" stroke={stroke} strokeWidth="1.5" fill={fill} />
      </svg>
    );
  }
  return null;
}

function Background() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative">
      <div
        className="fixed inset-0 -z-50 transition-all duration-500"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0f1117 0%, #1a1b26 40%, #16213e 100%)'
            : 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 40%, #dce3ed 100%)'
        }}
      />
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        {shapes.map((shape, i) => (
          <div
            key={i}
            className="geo-shape absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              animationDuration: `${shape.duration}s`,
              animationDelay: `${shape.delay}s`,
            }}
          >
            <ShapeElement type={shape.type} size={shape.size} isDark={isDark} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Background

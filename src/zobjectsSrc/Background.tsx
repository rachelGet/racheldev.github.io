import './styles/App.css'
import { useTheme } from '../commonSrc/ThemeContext.tsx';

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
    </div>
  )
}

export default Background

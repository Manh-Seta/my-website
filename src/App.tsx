import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="stars">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="star" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}>✨</span>
          ))}
        </div>
        
        <div className="hero-content">
          <div className="greeting">
            <span className="wave">👋</span>
            <h1>Xin chào!</h1>
          </div>
          <p className="subtitle">Chào mừng bạn đến với trang web siêu đáng yêu</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3>Thiết kế đẹp</h3>
              <p>Màu sắc pastel dịu mắt</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✨</span>
              <h3>Animations mượt</h3>
              <p>Hiệu ứng chuyển động mượt mà</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💖</span>
              <h3>Tương tác vui</h3>
              <p>Click để khám phá nhiều thứ hay ho</p>
            </div>
          </div>

          <div className="cta-section">
            <button 
              className={`like-button ${isHovered ? 'hovered' : ''}`}
              onClick={() => setLikes(likes + 1)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="heart">❤️</span>
              <span>Thích ({likes})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Fun Section */}
      <section className="fun-section">
        <div className="emoji-rain">
          {likes > 0 && [...Array(Math.min(likes, 10))].map((_, i) => (
            <span key={i} className="falling-emoji" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}>
              {['💖', '⭐', '🌈', '🦄', '🍭', '🎀'][Math.floor(Math.random() * 6)]}
            </span>
          ))}
        </div>
        
        <h2 className="section-title">Một vài thứ cute 🌸</h2>
        
        <div className="cute-grid">
          <div className="cute-card">
            <div className="cute-emoji">🌺</div>
            <h3>Hoa xinh</h3>
            <p>Tươi tắn mỗi ngày</p>
          </div>
          <div className="cute-card">
            <div className="cute-emoji">🌙</div>
            <h3>Ánh trăng</h3>
            <p>Dịu dàng trong đêm</p>
          </div>
          <div className="cute-card">
            <div className="cute-emoji">🦋</div>
            <h3>Bướm xinh</h3>
            <p>Bay lượn nhẹ nhàng</p>
          </div>
          <div className="cute-card">
            <div className="cute-emoji">🌸</div>
            <h3>Hoa anh đào</h3>
            <p>Rơi đầy lãng mạn</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made with 💖 by You</p>
        <p className="footer-text">✨ Keep shining ✨</p>
      </footer>
    </div>
  )
}

export default App

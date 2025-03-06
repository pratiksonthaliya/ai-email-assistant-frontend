import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"
import "./App.css"

function Home() {
  const [emailContent, setEmailContent] = useState("")
  const [tone, setTone] = useState("")
  const [generatedReply, setGeneratedReply] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkScreenSize()
    
    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!emailContent.trim()) return

    setLoading(true)
    setError("")
    
    // On mobile, scroll to results area after submission
    if (isMobile && generatedReply) {
      window.scrollTo({
        top: document.querySelector(".results-container").offsetTop,
        behavior: "smooth"
      })
    }

    try {
      console.log(import.meta.env.REACT_APP_API_URL);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/email/generate`, {
        emailContent,
        tone,
      })

      setGeneratedReply(response.data)
    } catch (error) {
      setError("Failed to generate email reply. Please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const clearForm = () => {
    setEmailContent("")
    setGeneratedReply("")
    setError("")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReply)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toneOptions = [
    { value: "neutral", label: "Neutral" },
    { value: "professional", label: "Professional" },
    { value: "casual", label: "Casual" },
    { value: "friendly", label: "Friendly" },
    { value: "sarcastic", label: "Sarcastic" },
  ]

  return (
    <div className="app-container">
      <div className="app-header">
        <div className="header-content">
          <div className="app-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <h1>AI Email Reply Generator</h1>
          </div>
          <p className="app-pitch">Generate professional email responses with the perfect tone in seconds.</p>
        </div>
      </div>
      
      <div className={`app-content ${isMobile ? 'mobile-layout' : 'desktop-layout'}`}>
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailContent">Original Email</label>
              <textarea
                id="emailContent"
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                placeholder="Paste the email content here..."
                rows="12"
                required
              />
              <div className="character-count">
                {emailContent.length} characters
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="tone">Response Tone</label>
              <div className="tone-selector">
                {toneOptions.map(option => (
                  <motion.button
                    key={option.value}
                    type="button"
                    className={`tone-option ${tone === option.value ? 'selected' : ''}`}
                    onClick={() => setTone(option.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="button-container">
              <motion.button 
                type="button" 
                className="clear-button"
                onClick={clearForm}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Clear
              </motion.button>
              
              <motion.button 
                type="submit" 
                className="generate-button"
                disabled={loading || !emailContent.trim()} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                {loading ? (
                  <span className="loading-spinner">
                    <span className="spinner"></span>
                    Generating...
                  </span>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    Generate Reply
                  </>
                )}
              </motion.button>
            </div>
          </form>

          <AnimatePresence>
            {error && (
              <motion.div
                className="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="results-container">
          <AnimatePresence>
            {generatedReply ? (
              <motion.div
                className="generated-reply"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <label htmlFor="emailContent">Generated Reply</label>
                <textarea value={generatedReply} readOnly rows="8" />
                {generatedReply && (
                  <motion.button 
                    onClick={copyToClipboard} 
                    className="copy-button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    {copied ? (
                      <span className="copied-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Copied!
                      </span>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy to Clipboard
                      </>
                    )}
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <motion.div 
                className="placeholder-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
              >
                <div className="placeholder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <p>Your generated email reply will appear here</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Home
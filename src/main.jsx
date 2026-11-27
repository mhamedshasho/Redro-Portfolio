import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error) {
    console.error('Redro Portfolio render error:', error)
  }

  render() {
    if (this.state.failed) {
      return <main style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:24,background:'#09090c',color:'#f6f5f6',fontFamily:'Arial,sans-serif',textAlign:'center'}}><div><div style={{fontSize:42,fontWeight:900,color:'#f04452'}}>REDRO.</div><h1>حدث خطأ أثناء تشغيل الصفحة</h1><p style={{color:'#aaa7b2'}}>تم إيقاف الجزء المتعطل بدلاً من عرض صفحة فارغة. حدّث الصفحة بعد قليل.</p><button onClick={()=>window.location.reload()} style={{padding:'12px 20px',border:0,borderRadius:10,background:'#f04452',color:'#fff',fontWeight:700}}>إعادة تحميل الصفحة</button></div></main>
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
)

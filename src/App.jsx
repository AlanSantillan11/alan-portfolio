import { LanguageProvider } from './LanguageContext'


function App() {
  return (
    <LanguageProvider> 
      <div className='app-container'>
        <aside className='sidebar'>
          <p>Sidebar</p>
        </aside>
      <main className='main-content'>
        <p>Contenido principal</p>
      </main>
    </div>
  
    </LanguageProvider>
)
}

export default App
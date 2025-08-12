import N8nChat from '../components/N8nChat';

export default function HomePage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f3f4f6', 
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#2563eb',
          marginBottom: '1.5rem'
        }}>
          Welcome to Landis Ventures!
        </h1>
        
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#374151',
          marginBottom: '2rem'
        }}>
          Your trusted partner for innovative solutions and strategic growth.
        </p>
        
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            AI Chat Assistant
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            Need help? Chat with our AI assistant below.
          </p>
          <N8nChat />
        </div>
      </div>
    </main>
  );
}
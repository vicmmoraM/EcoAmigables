import React, { useState } from 'react';
import { Home, BookOpen, MapPin, Target, Leaf, Recycle, CheckCircle } from 'lucide-react';

// Tipos
type Page = 'home' | 'guides' | 'map' | 'goals';

// Componente de Navegación
const Navbar: React.FC<{ currentPage: Page; onNavigate: (page: Page) => void }> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="bg-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">EcoAmigables</span>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-1 transition-colors ${
                currentPage === 'home' ? 'text-green-200 font-bold' : 'text-white hover:text-green-200'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Inicio</span>
            </button>
            <button
              onClick={() => onNavigate('guides')}
              className={`flex items-center space-x-1 transition-colors ${
                currentPage === 'guides' ? 'text-green-200 font-bold' : 'text-white hover:text-green-200'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Guías</span>
            </button>
            <button
              onClick={() => onNavigate('map')}
              className={`flex items-center space-x-1 transition-colors ${
                currentPage === 'map' ? 'text-green-200 font-bold' : 'text-white hover:text-green-200'
              }`}
            >
              <MapPin className="w-5 h-5" />
              <span>Mapa</span>
            </button>
            <button
              onClick={() => onNavigate('goals')}
              className={`flex items-center space-x-1 transition-colors ${
                currentPage === 'goals' ? 'text-green-200 font-bold' : 'text-white hover:text-green-200'
              }`}
            >
              <Target className="w-5 h-5" />
              <span>Metas</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Componente Footer
const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg mb-2">🌍 Juntos por un Guayaquil más verde</p>
        <p className="text-sm opacity-75">© 2024 EcoAmigables - Contacto: info@ecoamigables.ec</p>
      </div>
    </footer>
  );
};

// Página de Inicio
const HomePage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500 p-6 rounded-full shadow-lg">
              <Recycle className="w-24 h-24 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-green-700 mb-4">EcoAmigables</h1>
          <p className="text-2xl text-gray-600 mb-8">Tu guía fácil para reciclar desde casa</p>
          
          <button
            onClick={() => onNavigate('guides')}
            className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg transform transition hover:scale-105"
          >
            🌱 Empezar a Reciclar
          </button>
        </header>

        {/* Descripción */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">¿Qué es EcoAmigables?</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Somos tu aliado perfecto para comenzar a reciclar en casa de manera fácil y efectiva. 
            Aprende cómo separar correctamente tus residuos, encuentra los puntos de reciclaje más cercanos 
            en Guayaquil y establece metas para crear un hábito sostenible que beneficie a tu familia y al planeta.
          </p>
        </div>

        {/* Características */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
            <BookOpen className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Guías Educativas</h3>
            <p className="text-gray-600">Aprende a separar residuos correctamente paso a paso</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
            <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Puntos de Reciclaje</h3>
            <p className="text-gray-600">Encuentra centros de acopio cerca de tu hogar en Guayaquil</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
            <Target className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Metas Personales</h3>
            <p className="text-gray-600">Crea hábitos sostenibles con objetivos claros y alcanzables</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Página de Guías
const GuidesPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-2">Guías de Reciclaje</h1>
          <p className="text-xl text-gray-600">Aprende a separar tus residuos correctamente</p>
        </header>

        {/* Info Box */}
        <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-8 rounded max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">¿Cómo separar residuos en casa?</h2>
          <p className="text-gray-700 leading-relaxed">
            La separación correcta de residuos es el primer paso para un reciclaje efectivo. 
            Utiliza contenedores diferentes y sigue estas categorías:
          </p>
        </div>

        {/* Tarjetas de Guías */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {/* Reciclables */}
          <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">Residuos Reciclables</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="mr-2">✅</span> Papel y cartón limpio</li>
              <li className="flex items-center"><span className="mr-2">✅</span> Botellas plásticas (PET)</li>
              <li className="flex items-center"><span className="mr-2">✅</span> Latas de aluminio</li>
              <li className="flex items-center"><span className="mr-2">✅</span> Vidrio limpio</li>
              <li className="flex items-center"><span className="mr-2">✅</span> Envases de tetrapack</li>
            </ul>
          </div>

          {/* Orgánicos */}
          <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-amber-500 p-3 rounded-full mr-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-800">Residuos Orgánicos</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="mr-2">✅</span> Restos de frutas y verduras</li>
              <li className="flex items-center"><span className="mr-2">✅</span> Cáscaras de huevo</li>
              <li className="flex items-center"><span className="mr-2">✅</span> Café molido y bolsitas de té</li>
              <li className="flex items-center"><span className="mr-2">✅</span> Restos de jardín</li>
              <li className="flex items-center"><span className="mr-2">✅</span> Pan y cereales sin procesar</li>
            </ul>
          </div>

          {/* No Reciclables */}
          <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 p-3 rounded-full mr-4">
                <span className="text-2xl text-white">🚫</span>
              </div>
              <h3 className="text-2xl font-bold text-red-800">No Reciclables</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="mr-2">❌</span> Papel sucio o grasoso</li>
              <li className="flex items-center"><span className="mr-2">❌</span> Plásticos no identificados</li>
              <li className="flex items-center"><span className="mr-2">❌</span> Cerámica y porcelana</li>
              <li className="flex items-center"><span className="mr-2">❌</span> Pañales y toallas sanitarias</li>
              <li className="flex items-center"><span className="mr-2">❌</span> Chicles y colillas</li>
            </ul>
          </div>

          {/* Qué NO hacer */}
          <div className="bg-purple-100 border-l-4 border-purple-500 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 p-3 rounded-full mr-4">
                <span className="text-2xl text-white">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-800">Qué NO hacer</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="mr-2">❌</span> No mezclar residuos</li>
              <li className="flex items-center"><span className="mr-2">❌</span> No reciclar envases sucios</li>
              <li className="flex items-center"><span className="mr-2">❌</span> No tirar medicamentos a la basura</li>
              <li className="flex items-center"><span className="mr-2">❌</span> No desechar pilas con residuos comunes</li>
              <li className="flex items-center"><span className="mr-2">❌</span> No comprimir botellas excesivamente</li>
            </ul>
          </div>
        </div>

        {/* Tips Rápidos */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 mr-2" />
            Tips Rápidos
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Limpia los envases antes de reciclarlos',
              'Aplasta las botellas para ahorrar espacio',
              'Separa las tapas de los envases',
              'Usa contenedores de colores diferentes',
              'Composta tus residuos orgánicos',
              'Consulta el mapa de puntos de reciclaje'
            ].map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-green-500 text-2xl font-bold">✓</span>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Botón de Acción */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('map')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105"
          >
            📍 Ver Puntos de Reciclaje
          </button>
        </div>
      </div>
    </div>
  );
};

// Página temporal para Mapa
const MapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Mapa de Reciclaje</h1>
        <p className="text-xl text-gray-600">Próximamente...</p>
      </div>
    </div>
  );
};

// Página temporal para Metas
const GoalsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Tus Metas</h1>
        <p className="text-xl text-gray-600">Próximamente...</p>
      </div>
    </div>
  );
};

// App Principal
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'guides' && <GuidesPage onNavigate={setCurrentPage} />}
        {currentPage === 'map' && <MapPage />}
        {currentPage === 'goals' && <GoalsPage />}
      </main>
      
      <Footer />
    </div>
  );
}
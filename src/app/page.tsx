export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Добро пожаловать
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Создайте что-то удивительное с нами
          </p>
          <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Начать
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Простота</h3>
            <p className="text-gray-400">Интуитивно понятный интерфейс и чистый дизайн</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Скорость</h3>
            <p className="text-gray-400">Быстрая загрузка и отзывчивый интерфейс</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Качество</h3>
            <p className="text-gray-400">Современные технологии и лучшие практики</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400">
        <p>© 2024 Мой Сайт. Все права защищены.</p>
      </footer>
    </main>
  )
} 
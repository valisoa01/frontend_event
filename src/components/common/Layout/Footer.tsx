export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} EventSync. Tous droits réservés.</p>
          <p className="text-sm text-gray-400 mt-2">
            Plateforme de gestion d'événements en temps réel
          </p>
        </div>
      </div>
    </footer>
  );
}

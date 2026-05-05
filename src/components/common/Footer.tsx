export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container-custom py-8">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EventSync. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Real-time event management platform
          </p>
        </div>
      </div>
    </footer>
  );
}
import Image from 'next/image';
import mlopsImage from '../public/mlops.svg';

export default function Home() {
    
  
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">

  
        <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
          <section className="mb-8 space-y-4 md:space-x-4 md:space-y-0 flex flex-col md:flex-row items-center">
            <img src="/path/to/hs_logo.png" alt="Hochschule Reutlingen" className="w-40 md:max-h-20 mb-4 md:mb-0 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"/>
            <img src="/path/to/firma_logo.jpeg" alt="SPRINTEINS" className="w-40 md:max-h-20 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"/>
          </section>
  
          <h1 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
            Integration of Machine Learning Models into Production Environments
          </h1>
  
          {/* Effekte und Animationen für die Textabschnitte */}
          <div className="text-left space-y-4">
            {/* Textinhalte mit sanften Übergängen für einen schöneren Effekt */}
            <p className="mb-4 hover:text-gray-600 transition-colors duration-300">
              As the field of machine learning (ML) continues to expand...
            </p>
            {/* Weitere Absätze und Inhalte hier einfügen */}
          </div>
  
          <section className="text-left mb-8">
            <h2 className="text-xl font-semibold mb-2">Key Principles of MLOps:</h2>
            <ul className="list-disc list-inside space-y-2">
              {/* Jeder Listeneintrag mit Hover-Effekten */}
              <li className="hover:text-gray-600 transition-colors duration-300">Reproducibility: Ensure that ML models...</li>
              {/* Weitere Listeneinträge */}
            </ul>
          </section>
  
          <div className="mt-8">
            {/* Bild mit Hover-Schatteneffekt für mehr Interaktivität */}
            <img src="../public/mlops.svg" alt="MLOps Lifecycle" className="max-h-96 mx-auto hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
          </div>
        </main>
      </div>
    );
  }
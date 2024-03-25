import { useState } from 'react';

export default function MLOpsTable() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const toolCategories = [
        {
            name: 'Spezialisierte Open-Source MLOps-Tools',
            advantages: 'Flexibilität, Kosteneffizienz, Community-Unterstützung',
            disadvantages: 'Komplexität der Integration, Wartungsaufwand',
        },
        {
            name: 'Open-Source End-to-End MLOps-Plattformen',
            advantages: 'Ganzheitliche Lösung, Skalierbarkeit',
            disadvantages: 'Einarbeitungszeit, mögliche Starrheit in Prozessen',
        },
        {
            name: 'Kommerzielle End-to-End MLOps-Plattformen',
            advantages: 'Umfassende Funktionalität, professionelle Unterstützung',
            disadvantages: 'Höhere Kosten, Risiko des Vendor-Lock-in',
        },
    ];

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">Kategorie</th>
                        <th scope="col" className="py-3 px-6">Vorteile</th>
                        <th scope="col" className="py-3 px-6">Nachteile</th>
                    </tr>
                </thead>
                <tbody>
                    {toolCategories.map((category, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={() => setSelectedCategory(category.name)}>
                            <td className="py-4 px-6">{category.name}</td>
                            <td className="py-4 px-6">{selectedCategory === category.name ? category.advantages : 'Klicken für Details'}</td>
                            <td className="py-4 px-6">{selectedCategory === category.name ? category.disadvantages : 'Klicken für Details'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedCategory && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Details für {selectedCategory}:</h3>
                    <p className="mt-2">Vorteile: {toolCategories.find(category => category.name === selectedCategory).advantages}</p>
                    <p className="mt-2">Nachteile: {toolCategories.find(category => category.name === selectedCategory).disadvantages}</p>
                </div>
            )}
        </div>
    );
}

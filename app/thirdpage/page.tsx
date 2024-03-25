export default function ThirdPage() {
    return (
        <>
            <h1 className="flex items-center justify-center text-[52px] font-[700] leading-[120%] lg:text-[70px] lg:font-[700] lg:leading-[120%]">
                MLOps-Tools Vergleich
            </h1>
            <div className="overflow-x-auto mt-6">
                <table className="table-auto w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">Kategorie</th>
                            <th className="px-4 py-2">Vorteile</th>
                            <th className="px-4 py-2">Nachteile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Spezialisierte Open-Source MLOps-Tools</td>
                            <td className="border px-4 py-2">Flexibilität, Kosteneffizienz, Community-Unterstützung</td>
                            <td className="border px-4 py-2">Integration und Kompatibilität, Steile Lernkurven</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Open-Source End-to-End MLOps-Plattformen</td>
                            <td className="border px-4 py-2">Ganzheitliche Lösung, Skalierbarkeit</td>
                            <td className="border px-4 py-2">Konfigurationskomplexität, Mögliche Starrheit in Prozessen</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Kommerzielle End-to-End MLOps-Plattformen</td>
                            <td className="border px-4 py-2">Umfassende Funktionalität, Professioneller Support</td>
                            <td className="border px-4 py-2">Höhere Kosten, Risiko des Vendor-Lock-ins</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

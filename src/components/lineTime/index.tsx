import './style.css';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, icone: CalendarDaysIcon, name: 'Pesquisa de mercado', value: '1° Mês' },
  { id: 2, icone: CalendarDaysIcon, name: 'Soluções de marketing', value: '2° Mês' },
  { id: 3, icone: CalendarDaysIcon, name: 'Execução de estratégias', value: '3° Mês' },
  { id: 4, icone: CalendarDaysIcon, name: 'Avaliação de resultados', value: '4° Mês' },
];

export default function LineTime() {
  return (
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-black text-white rounded-lg p-6 flex flex-col items-center w-64 h-64">
              <stat.icone className="text-purple-600 mb-2 w-15 h-15" />
              <dt className="text-base leading-7 text-gray-600" id="stat-name">{stat.name}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-aqua sm:text-5xl mt-2" id="stat-value">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

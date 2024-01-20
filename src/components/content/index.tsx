import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, Squares2X2Icon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Descrição dos Produtos',
        description:
            'Gestão de Midias Sociais, Criação de Página de Captura, Criação de Advertorial, Criação de Videos, Gestão de Tráfego',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Beneficios',
        description:
            "Portifólio: mídia kit personalizado material: 06 feed | 12 stories | 2 reels, suporte: desenvolvimento de imagem | 1x, booster | 2x proposta de evento | estratégia de divulgação, relatório: perfil, métrica, desempenho",
        icon: Squares2X2Icon,
    },

    {
        name: 'Investimento',
        description:
            ' R$2.400,00, FORMAS DE PAGAMENTO: 1 + 3X NO BOLETO OU CARTÃO',
        icon: ArrowPathIcon,
    },
    {
        name: 'Prazo de Execução',
        description:
            'Todo o programa tem duração de 4 meses,O cliente é responsável pelo fornecimento do material necessário para a execução do projeto: textos e imagens.. ',
        icon: ArrowsRightLeftIcon,
    },
]

export default function Content() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Conheça nossos Serviços
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Resultados através de ações
                        estratégias de marketing
                        para crescimento
                        exponencial
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-lg font-semibold leading-7 text-gray-900"> {/* Adicionei a classe text-lg */}
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-xl leading-7 text-gray-600">{feature.description}</dd> {/* Adicionei a classe text-xl */}
                            </div>
                        ))}
                    </dl>
                </div>

            </div>
        </div>
    )
}

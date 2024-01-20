import NavBar from '../../components/navbar/navbar';
import banner from '../../img/banner.png';
import designer from '../../img/designer.png'
import evento from '../../img/evento.png';
import estrategia from '../../img/estrategia.png';
import rede from '../../img/rede.png.jpg';
import celular from '../../img/celular.png'
import Footer from '../../components/footer/footer';
import Content from '../../components/content';
import LineTime from '../../components/lineTime';
import './style.css'


const solucoes = [
    { id: 1, titulo: 'Design Gráfico', descricao: 'Websites, landing pages, aplicativos, anúncios', imagem: designer },
    { id: 2, titulo: 'Redes Sociais', descricao: 'Produção de conteúdo, monitoramento e gerenciamento', imagem: rede },
    { id: 3, titulo: 'Estratégia', descricao: 'Equipe de pesquisa e estratégia para a sua marca', imagem: estrategia },
    { id: 4, titulo: 'Omnichannel', descricao: 'Presença em todos os canais digitais para alcance de público-alvo', imagem: celular },
    { id: 5, titulo: 'Eventos', descricao: 'Mais engajamento com a sua marca através de estratégias offline', imagem: evento },
];
export default function Home() {
    return (
        <div className="body">
            <NavBar />
            <div className="homepag limitador mt-10"> {/* Ajustei a margem superior */}
                <div className="flex flex-wrap items-start justify-center">
                    {/* Banner */}
                    <div className="w-full p-4 md:p-0"> {/* Ajustei as margens em dispositivos móveis */}
                        <div className="banner">
                            <img src={banner} alt="Banner" className="w-full h-auto" />
                        </div>
                    </div>                  
                    {/* Cards */}
                    <div className="w-full p-4 md:p-10"> {/* Ajustei as margens em dispositivos móveis */}
                        <h2 className="text-center " id="solucao">NOSSAS SOLUÇÕES</h2>
                        <div className="flex justify-center mt-8">
                            {solucoes.map((solucao) => (
                                <div key={solucao.id} className="p-4 flex flex-col items-center">
                                    <div className="circulo bg-black rounded-full p-2">
                                        <img src={solucao.imagem} alt={solucao.titulo} className="w-16 h-16 object-cover rounded-full" />
                                    </div>
                                    <h3 className="text-center font-bold text-lg mt-2">{solucao.titulo}</h3>
                                    <p className="text-center">{solucao.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Content />
            <LineTime />
        </div>
    );
}

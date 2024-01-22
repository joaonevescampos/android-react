import './styles/Home.css'

const Home = () => {
    return ( 
    <main>
        <div>
            <h1>História do Mascote do Android</h1>
            <p>Provavelmente você sabe que o sistema operacional Android, mantido pelo Google é um dos mais utilizados para dispositivos móveis em todo o mundo. Mas tavez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.</p>
            <h1>A primeira versão</h1>
            <p>A primeira tentativa de criar um mascote surgiu em 2007 e veio de um desenvolvedor chamado Dan Morrill. Ele conta que abriu o Inkscape (software livre para vetorização de imagens) e criou sua própria versão de robô. O objetivo era apenas personificar o sistema apenas para a a sua equipe, não existia nenhuma solicitação da empresa para a criação de um mascote.</p>
            <div className="img">
            <img src="https://i.kinja-img.com/gawker-media/image/upload/t_original/d1e9pne2oif9r0bzv0it.jpg" alt="android" />
            </div>
            <p>Essa primeira versão bizarra até foi batizada em homenagem ao seu criador: seriam os Dandroids.</p>
        </div>
        </main>
     );
}
 
export default Home;
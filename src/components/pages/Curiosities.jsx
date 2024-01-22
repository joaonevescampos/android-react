import './styles/Home.css'

const Curiosities = () => {
    return ( 
        <main>
            <div>
            <h1>Curiosidades</h1>
            <p>A principal inspiração para os traços do novo Bugdroid veio daqueles bonequinhos que ilustram portas de banheiro para indicar o gênero de cada porta.</p>
            <div className="img">
                <img src="https://logodownload.org/wp-content/uploads/2015/05/android-logo-0.png" alt="android" />
            </div>
            <p> Conta a lenda que a artista estava criando em sua mesa no escritório do Google e olhou para o lado dos banheiros e a identificação foi imediata: simples, limpo, objetivo.</p>
            <div className="img">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/l2UDgpLz20M?si=bwWJ0gjgWsODkWeh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
        </main>
     );
}
 
export default Curiosities;
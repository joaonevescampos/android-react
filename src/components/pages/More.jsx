import './styles/More.css'

const More = () => {
    return ( 
        <main>
            <div>
            <section>
                <article>
                    <h2>Quer saber mais?</h2>
                    <p>Outro assunto curioso em relação ao Android é que cada versão sempre foi nomeada em homenagem a um doce, em ordem alfabética a partir da versão 1.5 até a 9.0.</p>
                    <div className="lista-container">
                        <ul className="lista">
                            <div>
                                <li>Cupcake</li>
                                <li>1.5 - Cupcake</li>
                                <li>1.6 - Donut</li>
                                <li>3.0 - Eclair</li>
                                <li>2.2 - Froyo</li>
                                <li>2.3 - Gingerbread</li>
                                <li>3.0 - Honeycomb</li>
                                <li>4.0 - Ice Cream Sandwich</li>
                            </div>
                            <div>
                                <li>4.1 - Jelly Bean</li>
                                <li>4.4 - KitKat</li>
                                <li>5.0 - Lolipop</li>
                                <li>6.0 - Marshmallow</li>
                                <li>7.0 - Nougat</li>
                                <li>8.0 - Oreo</li>
                                <li>9.0 - Pie</li>
                            </div>
                        </ul>
                    </div>
                    <p>Infelizmente, o Android Q não existiu, pois o Google resolveu pôr fim a essa divertida prática e começou a usar numerações, o que deu origem ao Android 10.</p>
                    <p>Acesse aqui o site Android History para conhecer a sequência das versões "adocicadas" e o que cada uma trouxe para o sistema Android.</p>
                </article>
                <p>Então é isso! Espero que você tenha gostado do nosso artigo com essa curiosidade sobre o sistema Android e seu simpático mascote.</p>
            </section>
        </div>
        </main>
     );
}
 
export default More;
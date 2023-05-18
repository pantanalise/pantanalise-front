export function InfoCard() {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-6 text-justify font-ptmono dark:bg-grey">
      {/* info title */}
      <h2 className="mb-3 text-3xl text-black dark:text-white">Descrição</h2>
      {/* info text */}
      <p className="text-body whitespace-pre-line leading-relaxed text-black dark:text-white">
        Apresentamos esta aplicação alimentada por inteligência artificial que
        tem a capacidade de prever a quantidade de likes e retweets que um tuíte
        pode receber com base em seu conteúdo. Esta ferramenta auxilia os
        usuários a estimarem o potencial de engajamento de suas postagens sem a
        necessidade de publicá-las. Ao utilizar esta aplicação, você insere o
        texto do tuíte desejado, e a inteligência artificial realiza uma análise
        do conteúdo, identificando padrões e características que permitem fazer
        previsões acerca do engajamento esperado, tanto em termos de likes
        quanto de retweets. Além disso, a aplicação oferece uma funcionalidade
        adicional de sugestão de otimização do texto. Com base em melhores
        práticas de engajamento nas redes sociais, a inteligência artificial
        gera uma versão aprimorada do tuíte, visando maximizar a interação do
        público. Nosso objetivo com esta aplicação é ajudar você a melhorar sua
        estratégia de engajamento nas redes sociais, permitindo que tome
        decisões mais embasadas e maximize o alcance de suas mensagens. Com o
        uso da inteligência artificial, é possível aprimorar a qualidade e o
        impacto de suas postagens, aumentando as chances de obter resultados
        expressivos. Experimente esta aplicação e descubra como ela pode ser uma
        aliada valiosa para alcançar resultados mais efetivos nas redes sociais.
        Combinando sua criatividade com as orientações fornecidas pela
        inteligência artificial, você pode transformar suas postagens em
        verdadeiros sucessos de engajamento.
      </p>
    </div>
  )
}

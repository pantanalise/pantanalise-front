export function InfoCard() {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-6 text-justify font-ptmono">
      {/* info title */}
      <h2 className="mb-3 text-3xl">Descrição</h2>
      {/* info text */}
      <p className="text-body whitespace-pre-line leading-relaxed">
        O objetivo deste projeto é relacionar polaridade de sentimentos de
        tweets (positiva, negativa e neutra) com o engajamento gerado pelos
        mesmos. A aplicação acima permite que qualquer pessoa escreva um tweet e
        receba como resposta a possível quantidade de “gostei” e “retweet” que
        ele receberia baseado na análise de sentimento feita sobre o texto. Para
        isso, foram utilizadas técnicas de aprendizado de máquina para
        classificar os sentimentos de tweets automaticamente, e a partir da
        classificação é utilizada uma segunda inteligência artificial para
        predizer a quantidade de engajamento que o tweet teria.
      </p>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const basePath = process.env.BASE_PATH || ''

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden px-4 py-24 text-white md:px-8">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={`${basePath}/static/images/canada/maple.jpg`}
            alt="Financial background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#8C8988]/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Finanças em Mente</h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Transforme a sua relação com o dinheiro e alcance a liberdade financeira que sempre
              sonhou.
            </p>
            <Link
              href="/contacto"
              className="inline-block rounded-md bg-emerald-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-xl"
            >
              Comece Hoje
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Sobre Mim e a Minha Missão
          </h2>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex justify-center md:w-1/3">
              {/* Profile photo */}
              <div className="h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src={`${basePath}/static/images/avatar.png`}
                  alt="Consultor financeiro"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="mb-6 text-lg text-gray-700">
                Acredito que a liberdade financeira não é sorte, é um plano! A minha missão é
                ajudar-te a desenvolver uma relação saudável com o dinheiro, criando hábitos
                financeiros positivos que te permitam viver sem ansiedade e construir um futuro
                próspero.
              </p>
              <p className="text-lg text-gray-700">
                Através de um plano personalizado, vamos organizar as tuas finanças, definir
                objetivos claros e criar estratégias para os alcançar. Não se trata de privação, mas
                sim de escolhas conscientes que te aproximam dos teus sonhos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-gray-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-3xl font-bold text-gray-800">Os Meus Serviços</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-6 h-48 overflow-hidden rounded-md">
                <Image
                  src={`${basePath}/static/images/service1.png`}
                  alt="Planeamento Financeiro Personalizado"
                  width={544}
                  height={306}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Planeamento Financeiro Personalizado
              </h3>
              <p className="text-gray-600">
                Desenvolvo contigo um plano financeiro completo, adaptado aos teus objetivos e à tua
                situação atual, com foco em orçamento, controlo de despesas e poupanças
                estratégicas.
              </p>
            </div>

            {/* Service 2 */}
            <div className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-6 h-48 overflow-hidden rounded-md">
                <Image
                  src={`${basePath}/static/images/service2.png`}
                  alt="Criação de Fundo de Emergência"
                  width={544}
                  height={306}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Criação de Fundo de Emergência
              </h3>
              <p className="text-gray-600">
                Ajudo-te a construir um fundo de emergência sólido em 4 passos, garantindo segurança
                financeira contra imprevistos e proporcionando tranquilidade para o teu dia-a-dia.
              </p>
            </div>

            {/* Service 3 */}
            <div className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-6 h-48 overflow-hidden rounded-md">
                <Image
                  src={`${basePath}/static/images/service3.png`}
                  alt="Estratégias para Eliminar Dívidas"
                  width={544}
                  height={306}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Estratégias para Eliminar Dívidas
              </h3>
              <p className="text-gray-600">
                Desenvolvo contigo um plano de ação para eliminar créditos e dívidas com juros
                altos, utilizando estratégias como o Método Bola de Neve ou o Método Avalanche.
              </p>
            </div>

            {/* Service 4 */}
            <div className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-6 h-48 overflow-hidden rounded-md">
                <Image
                  src={`${basePath}/static/images/service4.png`}
                  alt="Desenvolvimento de Mentalidade Financeira"
                  width={544}
                  height={306}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Desenvolvimento de Mentalidade Financeira
              </h3>
              <p className="text-gray-600">
                Trabalho contigo para transformar crenças limitantes sobre dinheiro e desenvolver
                uma mentalidade de abundância que te permita tomar melhores decisões financeiras.
              </p>
            </div>

            {/* Service 5 */}
            <div className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-6 h-48 overflow-hidden rounded-md">
                <Image
                  src={`${basePath}/static/images/service5.png`}
                  alt="Definição de Metas Financeiras"
                  width={544}
                  height={306}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Definição de Metas Financeiras
              </h3>
              <p className="text-gray-600">
                Ajudo-te a definir objetivos financeiros claros e alcançáveis, criando um mapa
                detalhado com ações específicas e prazos para concretizar os teus sonhos.
              </p>
            </div>

            {/* Service 6 */}
            <div className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-6 h-48 overflow-hidden rounded-md">
                <Image
                  src={`${basePath}/static/images/service6.png`}
                  alt="Hábitos de Consumo Consciente"
                  width={544}
                  height={306}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Hábitos de Consumo Consciente
              </h3>
              <p className="text-gray-600">
                Ensino estratégias práticas para evitar compras por impulso, tomar decisões
                financeiras conscientes e alinhar os teus gastos com os teus valores e objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="w-full bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">Como Trabalho</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Conhecer o Ponto de Partida
              </h3>
              <p className="text-center text-gray-600">
                Analisamos juntos a tua situação financeira atual, sem julgamentos, identificando
                padrões de gastos, rendimentos e dívidas.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Definir Objetivos Claros
              </h3>
              <p className="text-center text-gray-600">
                Definimos juntos o que queres alcançar financeiramente, estabelecendo metas
                específicas com prazos concretos.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Criar um Plano de Ação
              </h3>
              <p className="text-center text-gray-600">
                Desenvolvemos um plano personalizado com estratégias práticas para orçamento,
                poupança e investimento alinhadas com os teus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="w-full bg-emerald-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Princípios Financeiros
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Principle 1 */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-emerald-700">Paga-te Primeiro</h3>
              <p className="text-gray-700">
                Antes de pagares contas ou gastares dinheiro, separa uma parte do teu rendimento
                para ti mesmo. Esta é a regra de ouro das finanças pessoais que te ajuda a criar um
                hábito de poupança consistente.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-emerald-700">Método 50/30/20</h3>
              <p className="text-gray-700">
                Um orçamento simples e equilibrado: 50% para necessidades essenciais, 30% para
                desejos e qualidade de vida, e 20% para poupança e investimentos. Simplicidade e
                equilíbrio são a chave.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-emerald-700">Fundo de Emergência</h3>
              <p className="text-gray-700">
                A base da segurança financeira é ter um fundo de emergência que cubra de 6 a 12
                meses de despesas essenciais, dando-te tranquilidade para enfrentar imprevistos sem
                recorrer a dívidas.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-emerald-700">Mentalidade de Abundância</h3>
              <p className="text-gray-700">
                O primeiro e mais importante investimento é em ti mesmo: desenvolver uma mentalidade
                de abundância que te permita ver possibilidades, ser criativo e confiante nas tuas
                decisões financeiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-800 px-4 py-20 text-white md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Pronto para Transformar as Tuas Finanças?</h2>
          <p className="mb-10 text-xl">
            Não esperes mais para começar a construir a tua segurança financeira e dar os primeiros
            passos em direção à liberdade que sempre sonhaste.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="rounded-md bg-emerald-500 px-8 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Marcar Consulta
            </Link>
            <Link
              href="/blog"
              className="rounded-md border border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-800"
            >
              Explorar Recursos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

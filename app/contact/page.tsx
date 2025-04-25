import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Entre em contacto connosco para qualquer questão sobre literacia financeira',
}

export default function ContactPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Contacto
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Tens perguntas sobre literacia financeira ou desejas conectar-te connosco? Não hesites em
          contactar-nos utilizando o formulário abaixo.
        </p>
      </div>
      <div className="items-start space-y-2 py-8 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
        <div className="flex flex-col items-start justify-start xl:col-span-1">
          <div className="pt-4 pb-8">
            <h2 className="text-xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Informações de Contacto
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-2 text-gray-700 dark:text-gray-300">{siteMetadata.email}</span>
              </div>
              {siteMetadata.phone && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {siteMetadata.phone}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <h2 className="text-xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Siga-nos
              </h2>
              <div className="mt-4 flex space-x-4">
                {siteMetadata.github && (
                  <a
                    href={siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-600"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.17 20.13 9.39 21.62C9.89 21.72 10.09 21.42 10.09 21.16C10.09 20.93 10.08 20.24 10.08 19.39C7.01 19.99 6.41 18.04 6.41 18.04C5.95 16.84 5.24 16.54 5.24 16.54C4.27 15.88 5.31 15.9 5.31 15.9C6.38 15.97 6.92 16.95 6.92 16.95C7.88 18.55 9.42 18.09 10.12 17.84C10.22 17.21 10.5 16.76 10.8 16.51C8.32 16.25 5.72 15.31 5.72 11.37C5.72 10.26 6.12 9.36 6.93 8.66C6.82 8.42 6.46 7.36 7.04 5.97C7.04 5.97 8.02 5.7 10.06 7.09C10.98 6.87 11.96 6.76 12.94 6.76C13.92 6.76 14.9 6.87 15.82 7.09C17.86 5.7 18.84 5.97 18.84 5.97C19.42 7.36 19.06 8.42 18.95 8.66C19.77 9.36 20.16 10.26 20.16 11.37C20.16 15.32 17.55 16.25 15.07 16.5C15.45 16.81 15.8 17.42 15.8 18.37C15.8 19.73 15.78 20.84 15.78 21.16C15.78 21.42 15.97 21.73 16.49 21.62C20.71 20.13 23.88 16.42 23.88 12C23.88 6.48 19.4 2 13.88 2H12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
                {siteMetadata.twitter && (
                  <a
                    href={siteMetadata.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-600"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.42 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
                {siteMetadata.linkedin && (
                  <a
                    href={siteMetadata.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-600"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.9 8.7 6.3 8.1 6.3 7.3C6.3 6.5 6.9 5.9 7.7 5.9C8.5 5.9 9.1 6.5 9.1 7.3C9.1 8.1 8.5 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.9 12.1 14.1 12.1C13.3 12.1 12.7 12.7 12.7 13.5V17H10.2V10H12.7V11.3C13.1 10.5 14.1 9.9 15.1 9.9C16.7 9.9 18 11.2 18 12.8V17Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

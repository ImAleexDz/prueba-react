import Link from "next/link"
import Image from "next/image"
import Layout from "../components/Layout"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  return (
    <Layout bg={"1"}>
      <div className="text-center">
        <h1 className="mt-39 mb-37">
          Bitcoin APP
        </h1>

        <Image src='/static/img/data-analytics.svg' width="283" height="203" />

        <section className="sc-h">
          <h2>
            ¿Cuál es el valor actual del BTC?
          </h2>

          <p className="mt-24 mb-37">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <button>
            <Link href="/register">
              Iniciar
              <FontAwesomeIcon icon={faArrowRight} width={24} height={24} />
            </Link>
          </button>
        </section>
      </div>
    </Layout>
  )
}

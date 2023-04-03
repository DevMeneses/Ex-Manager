import { useState, FormEvent } from "react";

import styles from "./styles.module.scss";

import Head from "next/head";
import { Header } from "../../components/Header";

import { api } from "@/services/apiClient";

import { setupAPIClient } from "@/services/api";
import { toast } from "react-toastify";

import { canSSRAuth } from "../../utils/canSSRAuth";

export default function Category() {
  const [name, setName] = useState("");

  async function handleRegister(event: FormEvent) {
    
    event.preventDefault();

    if (name === "") {
      toast.error("O nome da categoria é obrigatório!!");
      return;
    }

    const apiClient = setupAPIClient();
    await api.post("/category", {
      name: name,
    });

    toast.success("Categoria criada com sucesso!!");
    setName("");
  }

  return (
    <>
      <Head>
        <title>Nova Categoria - Ex Manager</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar Categorias</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nome da categoria"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});

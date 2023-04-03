import { useContext, FormEvent, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";

import LogoExManager from '../../public/LogoExManager.png'

import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { AuthContext } from "../contexts/AuthContext";

import { GetServerSideProps } from "next";

import { canSSRGuest } from "../utils/canSSRGuest";

import Link from "next/link";
import { toast } from "react-toastify";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.warning("Preencha todos os campos");
      return;
    }

    setLoading(true);

    let data = {
      email,
      password,
    };

    await signIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>ExManager - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={LogoExManager} alt="EX Manager"  />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Sua Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>

          <Link href="/cadastro" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // 1. Estados para guardar os dados do formulário e a mensagem
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // 2. Função que lida com o envio do formulário
  const handleSubmit = (event) => {
    // Impede o comportamento padrão do formulário, que é recarregar a página
    event.preventDefault();

    // Mostra os valores no console para podermos depurar
    console.log("Tentativa de login com:", { email, password });

    // 3. Lógica de validação pedida na atividade
    if (email === "teste@provedor.com" && password === "12345") {
      setMessage("Login válido");
      setMessageType("sucess");
    } else {
      setMessage("Login inválido");
      setMessageType("error");
    }
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ENTRAR</button>
      </form>

      {message && (
        <p className={messageType === "error" ? "popupError" : "popupSucess"}>
          {message}
        </p>
      )}
    </div>
  );
}

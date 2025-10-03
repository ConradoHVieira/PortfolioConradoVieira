function toggleTheme() {
            document.body.classList.toggle("dark-mode"); // alterna a classe darkmode no corpo do documento
            const btn = document.getElementById("toggleBtn");  // seleciona o botão


            //condicional para alterar o ícone do botão conforme o tema
            if (document.body.classList.contains("dark-mode")) { 
                btn.textContent = "☀️"; 
            } else {
                btn.textContent = "🌙";
            }
        }

        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // impede o envio padrão do formulário


            // validação simples dos campos
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();
            // verifica se os campos estão preenchidos
            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos!");
                return;
            }
           // se tudo estiver certo
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contactForm").reset();
        });
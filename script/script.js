function toggleTheme() {
            document.body.classList.toggle("dark-mode");
        }

        // Validação do formulário de contato
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            // Regex simples para validar e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Por favor, insira um e-mail válido!");
                return;
            }

            // Se tudo estiver certo
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contactForm").reset();
        });
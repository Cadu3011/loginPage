document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Cria um objeto com os dados
    const dados = {
        email: email,
        senha: senha
    };

    try {
        // Envia a requisição POST para o backend
        const response = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        // Verifica se a resposta é bem-sucedida
        if (response.ok) {
            const result = await response.json();
            console.log('Login bem-sucedido:', result);
            // Aqui você pode redirecionar ou fazer outra ação
        } else {
            const error = await response.json();
            console.error('Erro no login:', error);
            // Aqui você pode mostrar uma mensagem de erro para o usuário
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        // Aqui você pode mostrar uma mensagem de erro para o usuário
    }
});
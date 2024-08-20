function calcularEstatisticas() {
    const disciplinas = [
        { id: 'portugues', nome: 'Português' },
        { id: 'ingles', nome: 'Inglês' },
        { id: 'espanhol', nome: 'Espanhol' },
        { id: 'matematica', nome: 'Matemática' },
        { id: 'biologia', nome: 'Biologia' },
        { id: 'historia', nome: 'História' },
        { id: 'geografia', nome: 'Geografia' },
        { id: 'informatica', nome: 'Informática' },
        { id: 'filosofia', nome: 'Filosofia' },
        { id: 'sociologia', nome: 'Sociologia' },
        { id: 'fisica', nome: 'Física' },
        { id: 'quimica', nome: 'Química' },
        { id: 'geometria', nome: 'Geometria' },
        { id: 'trigonometria', nome: 'Trigonometria' }
    ];

    let totalPesquisadas = 0;
    const estatisticas = disciplinas.map(disciplina => {
        const quantidade = parseInt(document.getElementById(disciplina.id).value) || 0;
        totalPesquisadas += quantidade;
        return { ...disciplina, quantidade };
    });

    document.getElementById('total-pesquisadas').textContent = totalPesquisadas;

    const listaEstatisticas = document.getElementById('estatisticas-lista');
    listaEstatisticas.innerHTML = '';

    estatisticas.forEach(({ nome, quantidade }) => {
        const porcentagem = totalPesquisadas > 0 ? (quantidade / totalPesquisadas * 100).toFixed(2) : 0;
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${nome}:</strong> ${quantidade} pessoas (${porcentagem}%)
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${porcentagem}%;">${porcentagem}%</div>
            </div>
        `;
        listaEstatisticas.appendChild(li);
    });
}

function calcularEstatisticas() {
    const disciplinas = [
        { id: 'portugues', nome: 'Portugu�s' },
        { id: 'ingles', nome: 'Ingl�s' },
        { id: 'espanhol', nome: 'Espanhol' },
        { id: 'matematica', nome: 'Matem�tica' },
        { id: 'biologia', nome: 'Biologia' },
        { id: 'historia', nome: 'Hist�ria' },
        { id: 'geografia', nome: 'Geografia' },
        { id: 'informatica', nome: 'Inform�tica' },
        { id: 'filosofia', nome: 'Filosofia' },
        { id: 'sociologia', nome: 'Sociologia' },
        { id: 'fisica', nome: 'F�sica' },
        { id: 'quimica', nome: 'Qu�mica' },
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

const perguntas = [
    {
      pergunta: "Qual é o nome do grupo de k-pop formado pela JYP Entertainment que inclui membros como Yeji, Lia, Ryujin, Chaeryeong e Yuna?",
      respostas: [
        "BTS",
        "Blackpink",
        "ITZY",
      ],
      correta: 2
    },
    {
      pergunta: "Qual foi o single de estreia do ITZY que alcançou grande sucesso?",
      respostas: [
        "DNA",
        "Dalla Dalla",
        "Kill This Love",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da líder do ITZY?",
      respostas: [
        "Yeji",
        "Ryujin",
        "Lia",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da integrante mais nova do ITZY?",
      respostas: [
        "Yuna",
        "Chaeryeong",
        "Lia",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a nacionalidade do ITZY?",
      respostas: [
        "Japonesa",
        "Tailandesa",
        "Sul-coreana",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do primeiro álbum de estúdio do ITZY, lançado em 2021?",
      respostas: [
        "It'z Me",
        "Not Shy",
        "Crazy in Love",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome da música título do álbum 'Crazy in Love' do ITZY?",
      respostas: [
        "LOCO",
        "SWIPE",
        "Mafia in the Morning",
      ],
      correta: 0
    },
    {
      pergunta: "Qual integrante do ITZY é conhecida por seu rap?",
      respostas: [
        "Yeji",
        "Ryujin",
        "Yuna",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do fandom oficial do ITZY?",
      respostas: [
        "Buddy",
        "Once",
        "Midzy",
      ],
      correta: 2
    },
    {
      pergunta: "Qual foi o ano de estreia do ITZY?",
      respostas: [
        "2018",
        "2019",
        "2020",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
  
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
    
      quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  }
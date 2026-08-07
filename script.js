// --- CONFIGURAÇÃO DE ACESSIBILIDADE ---
function aumentarFonte() {
    let currentSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size'));
    if (currentSize < 24) {
        document.documentElement.style.setProperty('--font-size', (currentSize + 2) + 'px');
    }
}

// --- RECONHECIMENTO DE VOZ ---
function ouvirMicrofone() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Seu navegador não suporta reconhecimento de voz.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const btnAudio = document.querySelector('.btn-audio');
    btnAudio.style.backgroundColor = '#dc3545';
    btnAudio.style.color = '#fff';
    btnAudio.innerText = '🔴 Ouvindo...';

    recognition.start();

    recognition.onresult = function (event) {
        const speechResult = event.results[0][0].transcript;
        document.getElementById('textoDuvida').value = speechResult;
        resetarBotaoAudio();
    };

    recognition.onerror = function (event) {
        alert("Não foi possível entender. Tente novamente.");
        resetarBotaoAudio();
    };

    recognition.onspeechend = function () {
        recognition.stop();
        resetarBotaoAudio();
    };
}

function resetarBotaoAudio() {
    const btnAudio = document.querySelector('.btn-audio');
    btnAudio.style.backgroundColor = '#ffca2c';
    btnAudio.style.color = '#000';
    btnAudio.innerText = '🎤 Falar';
}

function formatarTextoVisual(texto) {
    return texto
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
}

// --- INTEGRAÇÃO COM A IA ---
async function enviarParaIA() {
    const texto = document.getElementById('textoDuvida').value;
    if (!texto.trim()) {
        alert("Por favor, fale ou digite sua dúvida.");
        return;
    }

    const container = document.getElementById('respostaArea');
    const textoResposta = document.getElementById('textoResposta');

    container.style.display = 'block';
    textoResposta.innerHTML = "Analisando sua mensagem com cuidado... Um momento.";

    try {
        const respostaServidor = await fetch('/.netlify/functions/perguntar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ duvida: texto })
        });

        const dados = await respostaServidor.json();
        textoResposta.innerHTML = formatarTextoVisual(dados.resposta);
        lerResposta();

    } catch (error) {
        textoResposta.innerText = "Desculpe, não consegui me conectar no momento. Verifique sua internet ou ligue para os canais oficiais de emergência.";
    }
}

function limparTextoParaVoz(texto) {
    return texto
        .replace(/<[^>]*>?/gm, '')
        .replace(/\*/g, '')
        .replace(/#/g, '')
        .replace(/_/g, '')
        .replace(/`/g, '')
        .replace(/[-+]/g, '')
        .replace(/\b([oa])\/([oa])\b/gi, 'o')
        .replace(/\([a-zA-Zá-úÁ-Ú\/]+\)/g, '')
        .replace(/\s{2,}/g, ' ');
}

function lerResposta() {
    const elementoTexto = document.getElementById('textoResposta');
    const textoPuro = elementoTexto.innerText || elementoTexto.textContent;
    const textoLimpo = limparTextoParaVoz(textoPuro);

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(textoLimpo);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.85;
        utterance.pitch = 0.75;

        const vozesDisponiveis = window.speechSynthesis.getVoices();
        const vozPreferida = vozesDisponiveis.find(voz =>
            voz.lang === 'pt-BR' &&
            (voz.name.includes('Luciana') || voz.name.includes('Maria') || voz.name.includes('Felipe') || voz.name.includes('Google'))
        );

        if (vozPreferida) {
            utterance.voice = vozPreferida;
        }

        window.speechSynthesis.speak(utterance);
    }
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

// --- QUIZ EDUCATIVO EXPANDIDO - CENÁRIO ATUAL DE GOLPES ---
const questoesQuiz = [
    {
        pergunta: "Um número desconhecido no WhatsApp manda foto de um familiar e diz: 'Mudei de número, salva aí. Preciso de um Pix urgente'. O que você faz?",
        opcoes: [
            "Faço o Pix logo para ajudar o familiar na correria.",
            "Ligo para o número antigo do familiar ou faço uma chamada de vídeo para confirmar antes de tomar qualquer atitude."
        ],
        correta: 1,
        explicacao: "Perfeito! Esse é o clássico golpe do falso familiar; criminosos usam fotos de redes sociais para simular parentes em apuros."
    },
    {
        pergunta: "Você recebeu um link de uma agência de turismo oferecendo passagens aéreas internacionais por um preço absurdo de barato. O que deve fazer?",
        opcoes: [
            "Comprar imediatamente para não perder a promoção relâmpago.",
            "Desconfiar, fechar a mensagem e digitar manualmente o endereço oficial da companhia aérea no navegador."
        ],
        correta: 1,
        explicacao: "Excelente! Promoções milagrosas e links patrocinados desconhecidos são armadilhas frequentes para roubar dados de cartões."
    },
    {
        pergunta: "Chegou uma mensagem informando que você tem valores a receber referentes ao PIS/Pasep ou Saque-Aniversário do FGTS, bastando clicar no link para resgatar. O que fazer?",
        opcoes: [
            "Clicar no link e preencher meus dados para o dinheiro cair na conta.",
            "Ignorar o link e acessar apenas os aplicativos oficiais do governo, como a Carteira de Trabalho Digital ou o FGTS."
        ],
        correta: 1,
        explicacao: "Correto! O governo não envia links de resgate por SMS ou WhatsApp; consultas oficiais devem ser feitas exclusivamente nos apps do governo."
    },
    {
        pergunta: "Uma pessoa entra em contato dizendo que você ganhou uma causa trabalhista ou uma indenização judicial antiga, mas precisa pagar uma taxa de custas antecipada para liberar o dinheiro. É verdade?",
        opcoes: [
            "Sim, tribunais exigem taxas de última hora via Pix para liberar valores.",
            "Não! Tribunais e advogados sérios nunca exigem Pix antecipado para liberar valores de ações judiciais."
        ],
        correta: 1,
        explicacao: "Exato! Essa é uma armadilha comum de falsos escritórios de advocacia que simulam processos para extorquir dinheiro."
    },
    {
        pergunta: "Você recebe uma mensagem de uma premiação em Pix que você não se inscreveu, mas dizem que para receber o prêmio você precisa fazer um Pix de 'ativação'. O que fazer?",
        opcoes: [
            "Fazer o Pix de ativação para garantir o prêmio em dinheiro.",
            "Bloquear o contato imediatamente, pois prêmios legítimos nunca exigem pagamento prévio."
        ],
        correta: 1,
        explicacao: "Muito bem! Se você precisa pagar para receber um prêmio, trata-se de um golpe."
    },
    {
        pergunta: "Alguém te mandou um Pix por engano e pede para você devolver o dinheiro fazendo uma nova transferência para outra conta. O que você deve fazer?",
        opcoes: [
            "Fazer o Pix para a conta que a pessoa indicou.",
            "Usar exclusivamente a função nativa 'devolver valor' dentro do próprio aplicativo do banco."
        ],
        correta: 1,
        explicacao: "Correto! O golpista usa essa manobra para burlar o sistema e cancelar o pagamento original depois, deixando você no prejuízo."
    },
    {
        pergunta: "Você recebeu uma oferta tentadora de contemplação imediata em um consórcio ou proposta milagrosa de resgate de previdência privada mediante pagamento de taxa. Como agir?",
        opcoes: [
            "Aceitar a proposta rápida para não perder a oportunidade.",
            "Desconfiar de promessas de contemplação garantida e verificar diretamente com a instituição financeira oficial."
        ],
        correta: 1,
        explicacao: "Perfeito! Nenhuma empresa séria garante contemplação imediata em consórcios sem lance ou sorteio regulamentado."
    },
    {
        pergunta: "Notou um desconto desconhecido no seu contracheque ou benefício vindo de uma associação sindical ou cooperativa que você nunca filiou. O que deve ser feito?",
        opcoes: [
            "Deixar para lá, deve ser um erro pequeno do sistema.",
            "Registrar reclamação no Consumidor.gov.br, abrir chamado no INSS/Empresa e solicitar o cancelamento imediato."
        ],
        correta: 1,
        explicacao: "Excelente! Descontos associativos não autorizados em folha são fraudes recorrentes que exigem contestação imediata."
    }
];

let perguntaAtual = 0;

function carregarQuiz() {
    const q = questoesQuiz[perguntaAtual];
    const elementoPergunta = document.getElementById('perguntaQuiz');

    if (!elementoPergunta) return;

    elementoPergunta.innerText = q.pergunta;

    const divOpcoes = document.getElementById('opcoesQuiz');
    divOpcoes.innerHTML = '';

    q.opcoes.forEach((opcao, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-quiz';
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(index);
        divOpcoes.appendChild(btn);
    });

    document.getElementById('feedbackQuiz').style.display = 'none';
}

function verificarResposta(escolha) {
    const q = questoesQuiz[perguntaAtual];
    const feedback = document.getElementById('feedbackQuiz');
    feedback.style.display = 'block';

    if (escolha === q.correta) {
        feedback.style.color = 'var(--success-color)';
        feedback.innerText = "✅ " + q.explicacao;
    } else {
        feedback.style.color = 'var(--danger-color)';
        feedback.innerText = "❌ Cuidado! A resposta correta era: " + q.opcoes[q.correta];
    }

    setTimeout(() => {
        perguntaAtual = (perguntaAtual + 1) % questoesQuiz.length;
        carregarQuiz();
    }, 4500);
}

// Inicializa o quiz na carga
carregarQuiz();
// --- PWA (SERVICE WORKER E INSTALAÇÃO) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .catch(err => console.log("Falha ao registrar Service Worker:", err));
    });
}

let deferredPromptGlobal;
const btnInstalar = document.getElementById('btnInstalar');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPromptGlobal = e;
    if (btnInstalar) {
        btnInstalar.style.display = 'block';
    }
});

function instalarPWA() {
    if (deferredPromptGlobal) {
        deferredPromptGlobal.prompt();
        deferredPromptGlobal.userChoice.then((choiceResult) => {
            deferredPromptGlobal = null;
            if (btnInstalar) {
                btnInstalar.style.display = 'none';
            }
        });
    }
}

// --- LÓGICA DO MODAL DO YOUTUBE ---
function abrirModalVideo(urlEmbed, titulo, descricao, linkYoutube) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalYoutubeIframe');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const modalLinkExterno = document.getElementById('modalLinkExterno');

    modalTitulo.innerText = titulo;
    modalDescricao.innerText = descricao;

    // Insere o link de embed com autoplay
    iframe.src = urlEmbed + "?autoplay=1";
    modalLinkExterno.href = linkYoutube;

    modal.style.display = 'flex';
}

function fecharModalVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalYoutubeIframe');

    // Esvazia o src para o vídeo parar imediatamente e sumir o erro de play/pause
    iframe.src = "";
    modal.style.display = 'none';
}

function ligarEmergencia() {
    const confirmar = confirm("Você será direcionado para ligar para a Polícia Militar (190). Deseja continuar?");
    if (confirmar) {
        window.location.href = "tel:190";
    }
}
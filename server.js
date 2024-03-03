const express = require('express');
const PDFDocument = require('pdfkit');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser.json());

app.post('/gerar-pdf', (req, res) => {
  const respostas = req.body;

      const doc = new PDFDocument();

  doc.fontSize(16).font('Helvetica-Bold').text('EXCELENTÍSSIMO(A) SR.(A) AUTORIDADE COMPETENTE JULGADORA DAS INFRAÇÕES DE TRÂNSITO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica-Bold').text('AUTO DE INFRAÇÃO DE TRÂNSITO:', { continued: true }).fontSize(13).font('Helvetica').text(` ${respostas.autoinfracao}`, { align: 'left' });
  doc.fontSize(14).font('Helvetica-Bold').text('AUTUADO(A):', { continued: true }).fontSize(13).font('Helvetica').text(` ${respostas.nome}`, { align: 'left' });
  doc.moveDown(); 

  doc.fontSize(15).font('Helvetica-Bold').text('I – DA QUALIFICAÇÃO', { align: 'left' });
  doc.moveDown();
    
  doc.fontSize(14).font('Helvetica').text('Eu,', { continued: true }).text(` ${respostas.nome},`, { continued: true })
  .text(' do CPF:', { continued: true }).text(` ${respostas.cpf}`, { continued: true })
  .text(', CNH:', { continued: true }).text(` ${respostas.cnh}`, { continued: true })
  .text(', E-mail:', { continued: true }).text(` ${respostas.email}`, { continued: true })
  .text(', telefone:', { continued: true }).text(` ${respostas.telefone}`, { continued: true })
  doc.fontSize(14).font('Helvetica').text(' venho através deste apresentar defesa-prévia escrita, conforme disciplina o art. 281-A do Código de Trânsito Brasileiro:', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(15).font('Helvetica-Bold').text('II – DOS FATOS E DA SUPOSTA INFRAÇÃO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('No dia', { continued: true }).text(` ${respostas.datamulta}`, { continued: true })   
  .text(',', { continued: true }).text(' o(a) autuado(a) conduzia seu veículo', { continued: true })
  .text(', placa:', { continued: true }).text(` ${respostas.placa}`, { continued: true })
  doc.fontSize(14).font('Helvetica').text('oportunidade que foi autuado pelo suposto cometimento da infração prevista no Art. 218, II do Código de Trânsito Brasileiro.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Pela autoridade de trânsito foi lavrado auto de infração de trânsito de codificação', { continued: true }).text(` (${respostas.autoinfracao})`, { continued: true })
  doc.fontSize(14).font('Helvetica').text(', ocorre que a referida lavratura do auto de infração se deu fora da legalidade, bem como das regulamentações que tratam sobre o assunto.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Diante disso, e exercendo seu direito de contraditório e ampla defesa, pelos fundamentos que fundamentam esse pedido, venho expor e requerer o que segue, por ser medida de justiça!'),{ align: 'left' }
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('III - DO RECONHECIMENTO DE OFÍCIO DA DECADÊNCIA DO DIREITO DE PUNIR O(A) CONDUTOR(A)', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Preliminarmente, importante trazer o que traz o Art. 281, §1º do CTB quanto ao instituto da decadência, que dispõe, in verbis;',{ align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('Art. 281 “A autoridade de trânsito, na esfera da competência estabelecida neste Código e dentro de sua circunscrição, julgará a consistência do auto de infração e aplicará a penalidade cabível.',{ align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('§ 1º O auto de infração será arquivado e seu registro julgado insubsistente:',{ align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('II - se, no prazo máximo de trinta dias, não for expedida a notificação da autuação.',{ align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Assim, a partir da letra da lei, faz-se imprescindível a análise pela autoridade competente quanto a consistência quando da expedição da notificação de autuação, contados da data do suposto cometimento da infração, e tendo essa extrapolado o prazo de 30 (trinta) dias deverá ser arquivado.',{ align: 'left' });
  doc.moveDown()

  doc.fontSize(15).font('Helvetica-Bold').text('IV - DA OBSERVÂNCIA À RESOLUÇÃO 798/2020 DO CONTRAN - REQUISITOS METROLÓGICOS/TÉCNICOS E DA SINALIZAÇÃO DA VIA', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Sabe-se da importância da observância dos requisitos técnicos mínimos para a fiscalização da velocidade de veículos automotores, elétricos, reboques e semirreboques previstos na Resolução 798 do CONTRAN, em especial quanto aos requisitos metrológicos e técnicos, estando estes previstos no Art. 4º, senão vejamos;', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica-Bold').text('I - Requisitos metrológicos:', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('a) ter seu modelo aprovado pelo Instituto Nacional de Metrologia, Qualidade e Tecnologia (Inmetro), atendendo à legislação metrológica em vigor e aos requisitos estabelecidos nesta Resolução; b) ser aprovado em verificação metrológica inicial pelo Inmetro ou entidade por ele delegada; e c) ser aprovado pelo Inmetro ou entidade por ele delegada, em verificação metrológica periódica, de acordo com a regulamentação técnica metrológica vigente; ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica-Bold').text('II - Requisitos técnicos:', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('a) registrar a velocidade medida do veículo em km/h; b) registrar a contagem volumétrica de tráfego; c) registrar a latitude e longitude do local de operação; e d) possuir tecnologia de Reconhecimento Óptico de Caracteres.  ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Importante ser observado também os requisitos de sinalização da via quando da fixação dos equipamentos “radares fixos”, devendo existir placas R-19, nos termos previstos no Capítulo VI da Resolução anteriormente mencionada, regra que não foi observada pelo ente estatal, posto que a sinalização da via era precária. ', { align: 'left' });
  doc.moveDown();

  oc.fontSize(14).font('Helvetica').text('Assim, de acordo com o auto de infração lavrado, verifica-se que o equipamento utilizado para a aferição da velocidade não observou a norma correspondente quanto aos requisitos técnicos e metrológicos, assim como a via também não detinha as condições de sinalização necessárias para a identificação da velocidade máxima permitida para o local, motivo pelo qual o auto de infração deve ser arquivado.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('V - DA GARANTIA DO DIREITO DA AMPLA DEFESA E DO CONTRADITÓRIO', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('Não obstante a tudo que foi exposto, é evidente que o cumprimento da legislação de trânsito é imprescindível para a garantia da segurança viária, no entanto, desde que respeitado o devido processo legal para a aplicação das penalidades previstas. ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O Art. 5º da Constituição da República Brasileira prevê como garantia fundamental o direito ao devido processo legal, senão vejamos;', { align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:', { align: 'right' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('LV - aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes;', { align: 'right' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('Assim, verifica-se que cabe à Administração Pública a aplicação/execução da Lei de transito, desde que garantido o devido processo legal, sendo então a correta tipificação e enquadramento, respeitando ainda os prazos previstos na legislação e normas correspondentes, possibilitando ainda o direito de ampla defesa e contraditório do(a) condutor(a) quanto aos fatos imputados.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Ainda neste sentido, a Administração Pública obriga-se ainda a observar os princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência (Art. 37, CRFB/88), de forma que garanta a prática de ato administrativo certo e objetivo que embase o processo ao qual resultará na aplicação da penalidade pretendida. ', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(15).font('Helvetica-Bold').text('VI – DOS PEDIDOS', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O autuado, através da respectiva peça, vem requer: ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(13).font('Helvetica').text('A) O recebimento desta defesa e dos documentos que a acompanham;', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica').text('B) A juntada da cópia do auto de infração de trânsito de lavrado sob código', { continued: true });doc.fontSize(13).font('Helvetica').text(` ${respostas.autoinfracao}`, { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica-Bold').text('C) O arquivamento do auto de infração de código', { continued: true });doc.fontSize(13).font('Helvetica-Bold').text(` ${respostas.autoinfracao}`,{ continued: true });doc.fontSize(13).font('Helvetica-Bold').text(' haja vista reconhecimento de ofício ou diante das demais fundamentações trazidas.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica').text('D) A notificação do autuado no endereço cadastrado no sistema, devidamente informado, em caso de eventual imposição de penalidade.', { align: 'left' });
  doc.moveDown();

doc.fontSize(14).font('Helvetica').text('DATA:   ', { align: 'center', continued: true }).text('             '  +  respostas.datamulta, { align: 'center' });
doc.moveDown(4);

doc.fontSize(14).font('Helvetica').text('AUTUADO(A) - ', { continued: true }).fontSize(14).font('Helvetica').text(` ${respostas.nome}`, { align: 'left' });
doc.moveDown(2);

doc.fontSize(14).font('Helvetica').text('Assinatura:________________________________________________', { align: 'left' });
doc.moveDown(3);

doc.fontSize(14).font('Helvetica').text('(Documentos em Anexo)', { align: 'left' });
doc.moveDown();

doc.fontSize(14).font('Helvetica').text('- Carteira Nacional de Habilitação (CNH) do proprietário do veículo', { align: 'left' });
doc.moveDown(); 

doc.fontSize(14).font('Helvetica').text('- Documento do veículo', { align: 'left' });
doc.moveDown(); 














  

  











//--------------------------------------------------------------------------------------------
/*
  doc.fontSize(12).text('Pergunta: Qual é o seu nome completo?');
  doc.fontSize(12).text(`Resposta: ${respostas.nome}`);
  doc.moveDown();

  doc.fontSize(12).text('Pergunta: Informe o código do auto de infração de trânsito');
  doc.fontSize(12).text(`Resposta: ${respostas.autoinfracao}`);
  doc.moveDown();

  doc.fontSize(12).text('Pergunta: Qual é o seu CPF?');
  doc.fontSize(12).text(`Resposta: ${respostas.cpf}`);
*/
//-------------------------------------------------------------------------------------------
  const pdfFilename = 'Petição Modelo Art.218.pdf';
  const pdfPath = path.join(__dirname, 'backup', pdfFilename);
  const pdfStream = fs.createWriteStream(pdfPath);
  doc.pipe(pdfStream);
  doc.end();

  pdfStream.on('finish', () => {
    res.download(pdfPath, (err) => {
      if (err) {
        console.error('Erro ao realizar o download do arquivo PDF:', err);
        res.sendStatus(500);
      }

      // Criar uma cópia do arquivo na pasta 'cofre' com a data e hora do arquivo
      const now = new Date();
      const formattedDate = format(now, 'dd-MM-yyyy_HH-mm-ss');
      const copyFilename = `${formattedDate}_${pdfFilename}`;
      const copyPath = path.join(__dirname, 'cofre', copyFilename);
      fs.copyFileSync(pdfPath, copyPath);

      fs.unlinkSync(pdfPath); // Remover o arquivo PDF da pasta 'backup' após o download
    });
  });

  pdfStream.on('error', (err) => {
    console.error('Erro ao gerar o arquivo PDF:', err);
    res.sendStatus(500);
  });
});

app.listen(3000, () => {
  console.log('\x1b[34m%s\x1b[0m', 'Senhor TIAGO seu servidor foi iniciado na porta 3000');
});


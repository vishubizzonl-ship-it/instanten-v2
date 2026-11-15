/**
 * Labels and messages for the shared contact form, so the form speaks the same
 * language as the page it sits on. `{email}` is replaced with the address.
 */
export type ContactFormCopy = {
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
  options: string[];
  error: string;
  status: string;
};

export const contactFormCopy: Record<string, ContactFormCopy> = {
  en: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Send message",
    options: ["Bug report", "Feature request", "Calibration / accuracy issue", "Privacy question", "Other"],
    error: "Please fill in your name, email and message.",
    status: "Your email app is opening with this message ready to send. Press Send there — nothing is sent until you do. If nothing opened, email {email} directly.",
  },
  ja: {
    name: "お名前",
    email: "メールアドレス",
    subject: "件名",
    message: "メッセージ",
    submit: "送信する",
    options: ["不具合の報告", "機能の要望", "キャリブレーション・精度の問題", "プライバシーに関する質問", "その他"],
    error: "お名前、メールアドレス、メッセージをご記入ください。",
    status: "メールアプリがメッセージ入りで開きます。そこで送信を押してください。押すまで送信されません。開かない場合は {email} までご連絡ください。",
  },
  es: {
    name: "Nombre",
    email: "Correo electrónico",
    subject: "Asunto",
    message: "Mensaje",
    submit: "Enviar mensaje",
    options: ["Informe de error", "Solicitud de función", "Problema de calibración o precisión", "Consulta de privacidad", "Otro"],
    error: "Rellena tu nombre, correo y mensaje.",
    status: "Se está abriendo tu app de correo con el mensaje listo. Pulsa Enviar allí: no se envía nada hasta que lo hagas. Si no se abrió nada, escribe a {email}.",
  },
  fr: {
    name: "Nom",
    email: "E-mail",
    subject: "Objet",
    message: "Message",
    submit: "Envoyer le message",
    options: ["Signaler un bug", "Demande de fonctionnalité", "Problème de calibration / précision", "Question sur la confidentialité", "Autre"],
    error: "Veuillez indiquer votre nom, votre e-mail et votre message.",
    status: "Votre application de messagerie s’ouvre avec le message prêt. Appuyez sur Envoyer — rien n’est envoyé avant. Si rien ne s’ouvre, écrivez à {email}.",
  },
  de: {
    name: "Name",
    email: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    submit: "Nachricht senden",
    options: ["Fehlerbericht", "Funktionswunsch", "Kalibrierungs-/Genauigkeitsproblem", "Datenschutzfrage", "Sonstiges"],
    error: "Bitte Name, E-Mail und Nachricht ausfüllen.",
    status: "Deine Mail-App öffnet sich mit der fertigen Nachricht. Tippe dort auf Senden — vorher wird nichts gesendet. Öffnet sich nichts, schreib direkt an {email}.",
  },
  pt: {
    name: "Nome",
    email: "E-mail",
    subject: "Assunto",
    message: "Mensagem",
    submit: "Enviar mensagem",
    options: ["Relato de erro", "Pedido de recurso", "Problema de calibração / precisão", "Dúvida de privacidade", "Outro"],
    error: "Preencha seu nome, e-mail e mensagem.",
    status: "Seu app de e-mail está abrindo com a mensagem pronta. Toque em Enviar lá — nada é enviado antes disso. Se nada abrir, escreva para {email}.",
  },
  ko: {
    name: "이름",
    email: "이메일",
    subject: "제목",
    message: "메시지",
    submit: "메시지 보내기",
    options: ["버그 신고", "기능 요청", "보정/정확도 문제", "개인정보 문의", "기타"],
    error: "이름, 이메일, 메시지를 입력해 주세요.",
    status: "메일 앱이 메시지와 함께 열립니다. 그곳에서 보내기를 누르세요. 누르기 전에는 전송되지 않습니다. 열리지 않으면 {email} 로 직접 보내 주세요.",
  },
  it: {
    name: "Nome",
    email: "Email",
    subject: "Oggetto",
    message: "Messaggio",
    submit: "Invia messaggio",
    options: ["Segnalazione bug", "Richiesta di funzione", "Problema di calibrazione / precisione", "Domanda sulla privacy", "Altro"],
    error: "Inserisci nome, email e messaggio.",
    status: "La tua app di posta si sta aprendo con il messaggio pronto. Premi Invia lì: nulla viene inviato prima. Se non si apre, scrivi a {email}.",
  },
};

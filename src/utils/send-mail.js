import Axios from "axios";

export const sendMail = (name, email, whatsapp) => Axios.post('https://santamadre.ink/send-mail.php', {
  name,
  email,
  whatsapp,
})

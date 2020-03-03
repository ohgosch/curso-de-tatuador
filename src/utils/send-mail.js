import Axios from "axios"

export const sendMail = (name, email, whatsapp) => {
  const formData = new FormData()

  formData.set("name", name)
  formData.set("email", email)
  formData.set("whatsapp", whatsapp)

  return Axios({
    method: "post",
    url: "https://santamadre.ink/send-mail.php",
    data: formData,
  })
}

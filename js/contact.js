function submitData() {
//   membuat variable name , yang berisi sebuah value dari inputan ('f-name)
  let name = document.getElementById('f-name').value
//   membuat variable email , yang berisi sebuah value dari inputan ('f-email)
  let email = document.getElementById('f-email').value
  let phone = document.getElementById('f-phone').value
  let subject = document.getElementById('f-subject').value
  let message = document.getElementById('f-message').value
// validasi
  
//   jika name nya kosong 
  if (name == '') {
//     maka munculkan alert ('name Form is required')
    return alert('name Form is required')
  }
  atau //   jika email nya kosong 
  else if (email == '') {
//         maka munculkan alert ('email Form is required')
    return alert('Email Form is required')
  }
  else if (phone == '') {
    return alert('Phone Number Form is required')
  }
  else if (subject == '') {
    return alert('Subject Form is required')
  }
  else if (message == '') {
    return alert('Message Form is required')
  }

  // For sending Mail
  let emailRecipient = "thidayatullah23@gmail.com"

//   membuat elemen html a href
//   membuat elemen a (anchor)
  let mailTo = document.createElement('a')
//    pangggil element a , yang di simpan di variable mailto
  
//   jadi nya a href =
  mailTo.href = `mailto:${emailRecipient}?subject=${subject}&body=Halo Perkenalkan nama saya ${name}%0D%0A%0D%0A${message},%0D%0Asilahkan hubungi saya di ${phone}%0D%0A%0D%0ATerima kasih.`
  mailTo.click()
}

let contactForm = {
  name,
  email,
  phone,
  subject,
  message
}
console.log(contactForm)

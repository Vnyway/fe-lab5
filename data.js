function formData(form) {
  const initials = form.initials.value.trim();
  const group = form.group.value.trim();
  const phone = form.phone.value.trim();
  const address = form.address.value.trim();
  const email = form.email.value.trim();

  if (!/^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.\s[А-ЯІЇЄҐ]\.$/.test(initials)) {
    alert("Некоректний формат ПІП. Використовуйте формат: Іванов І. І.");
    return false;
  }

  if (!/^[А-ЯІЇЄҐ]{2}-\d{2}$/.test(group)) {
    alert("Некоректний формат групи. Використовуйте формат: XX-XX.");
    return false;
  }

  if (!/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phone)) {
    alert(
      "Некоректний формат телефону. Використовуйте формат: (XXX)-XXX-XX-XX."
    );
    return false;
  }

  if (address === "") {
    alert("Поле 'Адреса' не може бути порожнім.");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert(
      "Некоректний формат E-Mail. Використовуйте формат: example@domain.com."
    );
    return false;
  }

  const outputDiv = document.createElement("div");
  outputDiv.style.marginTop = "20px";
  outputDiv.style.padding = "10px";
  outputDiv.style.border = "1px solid #ccc";
  outputDiv.style.backgroundColor = "#f9f9f9";

  outputDiv.innerHTML = `
      <h2>Введена інформація</h2>
      <p><strong>ПІП:</strong> ${initials}</p>
      <p><strong>Група:</strong> ${group}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Адреса:</strong> ${address}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
    `;

  document.body.appendChild(outputDiv);

  return false;
}

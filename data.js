const incorrectData = (id) => {
  const field = document.getElementById(id);
  field.style.borderColor = "red";
  field.style.borderWidth = "3px";
};

const resetFieldStyles = (id) => {
  const field = document.getElementById(id);
  field.style.borderColor = "";
  field.style.borderWidth = "";
};

const formData = (form) => {
  const initials = form.initials.value.trim();
  const group = form.group.value.trim();
  const phone = form.phone.value.trim();
  const address = form.address.value.trim();
  const email = form.email.value.trim();

  resetFieldStyles("initials");
  resetFieldStyles("group");
  resetFieldStyles("phone");
  resetFieldStyles("address");
  resetFieldStyles("email");

  if (!/^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.\s[А-ЯІЇЄҐ]\.$/.test(initials)) {
    incorrectData("initials");
    return false;
  }

  if (!/^[А-ЯІЇЄҐ]{2}-\d{2}$/.test(group)) {
    incorrectData("group");
    return false;
  }

  if (!/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phone)) {
    incorrectData("phone");
    return false;
  }

  if (address === "" || address.length < 3) {
    incorrectData("address");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    incorrectData("email");
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
};

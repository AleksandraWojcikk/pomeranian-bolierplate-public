import React from 'react';
import './style.css';
import { useState } from 'react';

export function BasicForm() {
  const [inlineError, setInlineError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const [formData, setFormData] = useState({
    product: '',
    paymentMethod: '',
    settingTheEnvironment: false,
    GitHubIntro: false,
    extraMaterials: false,
    nameAndSurname: '',
    nick: '',
    address: '',
    email: '',
    phone: '',
    additionalInfo: '',
    createAccount: true,
    password: '',
    repeatPassword: '',
    statuteConsent: true,
    marketingConsent: true,
  });

  // aktaulizacja formularza który posiada wszystkie wartości w 1 useState
  function updateFormData(event) {
    setFormData({
      ...formData,
      // nazwa pola :wartośc
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmitOrder(event) {
    event.preventDefault();

    const { nameAndSurname, nick, address, email, phone, statuteConsent } =
      formData;
    console.log(nick);
    if (nameAndSurname && nick && address && email && phone && statuteConsent) {
      console.log('DANE WYSŁANE POPRAWNIE: ', formData);
    } else {
      console.log('The fields can not be empty');
    }
    if (nick === 'Ola') {
      setInlineError(true);
    }
    if (statuteConsent === false) {
      setCheckboxError(true);
    }
  }

  return (
    <form onSubmit={handleSubmitOrder}>
      <div className="all">
        <div className="partOfForm">
          <div className="nameOfForm">ZAMÓWIENIE PRODUKTU</div>
          <div className="chooseProduct">
            <label className="smallTitle">Wybierz produkt*</label>
            <select
              className="selectCourse"
              name="product"
              value={formData.product}
              onChange={updateFormData}
            >
              <option value="front-end">kurs front-end</option>
              <option value="backend">kurs backend</option>
            </select>
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">Wybierz formę płatności*</label>
            <div className="inputAndLabel">
              <input
                type="radio"
                name="paymentMethod"
                value={formData.paymentMethod}
                id="blik"
                className="radioButton"
                onChange={updateFormData}
              />
              <label for="blik" className="smallLabel">
                blik
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="paymentMethod"
                value={formData.paymentMethod}
                id="paypal"
                className="radioButton"
                onChange={updateFormData}
              />
              <label for="paypal" className="smallLabel">
                paypal
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="paymentMethod"
                value={formData.paymentMethod}
                id="przelew tradycyjny"
                className="radioButton"
                onChange={updateFormData}
              />
              <label for="przelew tradycyjny" className="smallLabel">
                przelew tradycyjny
              </label>
            </div>
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">Opcje dodatkowe do zamówienia</label>

            <div>
              <input
                type="checkbox"
                name="settingTheEnvironment"
                value={formData.settingTheEnvironment}
                id="ustawienie środowiska"
                className="checkboxButton"
                onChange={updateFormData}
              />
              <label for="ustawienie środowiska" className="smallLabel">
                ustawienie środowiska
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="GitHubIntro"
                value={formData.GitHubIntro}
                id="intro do GitHub"
                className="checkboxButton"
                onChange={updateFormData}
              />
              <label for="intro do GitHub" className="smallLabel">
                intro do GitHub
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="extraMaterials"
                value={formData.extraMaterials}
                id="materiały dodatkowe"
                className="checkboxButton"
                onChange={updateFormData}
              />
              <label for="materiały dodatkowe" className="smallLabel">
                materiały dodatkowe
              </label>
            </div>
          </div>
        </div>

        <div className="partOfForm">
          <div className="nameOfForm">DANE DO REALIZACJI ZAMÓWIENIA</div>
          <div className="chooseProduct">
            <label className="smallTitle">Imię i nazwisko*</label>
            <input
              type="text"
              name="nameAndSurname"
              value={formData.nameAndSurname}
              placeholder="wpisz swoje imię i nazwisko"
              className="selectCourse"
              onChange={updateFormData}
            />
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">Twój pseudonim*</label>
            <input
              type="text"
              className={inlineError ? 'selectCourseError' : 'selectCourse'}
              name="nick"
              value={formData.nick}
              onChange={updateFormData}
            />
          </div>
          <div>
            {inlineError && (
              <p className="nickError">
                Taka nazwa użytkownika już istnieje. Spróbuj innej.
              </p>
            )}
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">Adres do wysyłki*</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="adres, na który mamy wysłać zamówienie"
              onChange={updateFormData}
              className="selectCourse"
            />
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">Adres e-mail*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={updateFormData}
              placeholder="jan.kowalski@gmail.com"
              className="selectCourse"
              size="30"
            />
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">Numer kontaktowy*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={updateFormData}
              placeholder="+48 888 888 888"
              className="selectCourse"
            />
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">Dodatkowe uwagi do zamówienia</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={updateFormData}
              className="additionalInfo"
              placeholder="Jeśli masz jakieś uwagi, wpisz je tutaj..."
            />
          </div>
        </div>

        <div className="partOfForm">
          <div className="nameOfForm">ZAKŁADANIE KONTA</div>
          <div className="chooseProduct">
            <label className="smallTitle">
              Chcę założyć konto razem z zamówieniem
            </label>
            <div>
              <input
                type="checkbox"
                name="createAccount"
                value={formData.createAccount}
                onChange={updateFormData}
                id="zakładam konto"
                className="checkboxButton"
              />
              <label for="zakładam konto" className="smallLabel">
                zakładam konto
              </label>
            </div>
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">Moje hasło</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={updateFormData}
              className="selectCourse"
              placeholder="56ggW457hh#$"
            />
          </div>
          <div className="chooseProduct">
            <label className="smallTitle">Powtórz hasło</label>
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={updateFormData}
              className="selectCourse"
              placeholder="56ggW457hh#$"
            />
          </div>
        </div>

        <div className="partOfForm">
          <div className="nameOfForm">ZGODY I NEWSLETTER</div>
          <div className="chooseProduct">
            <label className="smallTitle">
              Realizując zamówienie, akceptujesz regulamin naszego sklepu
            </label>
            <div>
              <input
                type="checkbox"
                name="statuteConsent"
                value={formData.statuteConsent}
                onChange={updateFormData}
                id="akceptuję regulamin"
                className="checkboxButton"
              />
              <label
                for="akceptuję regulamin"
                className={checkboxError ? 'smallLabelStatute' : 'smallLabel'}
              >
                akceptuję regulamin*
              </label>
            </div>
            <div>
              {checkboxError && <p className="nickError">Pole obowiązkowe!</p>}
            </div>
          </div>

          <div className="chooseProduct">
            <label className="smallTitle">
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </label>
            <div>
              <input
                type="checkbox"
                name="marketingConsent"
                value={formData.marketingConsent}
                onChange={updateFormData}
                id="zapisuję się na listę mailingową"
                className="checkboxButton"
              />
              <label
                for="zapisuję się na listę mailingową"
                className="smallLabel"
              >
                zapisuję się na listę mailingową
              </label>
            </div>
          </div>
        </div>
        <button className="submitOrder" type="submit">
          SKŁADAM ZAMÓWIENIE
        </button>
      </div>
    </form>
  );
}

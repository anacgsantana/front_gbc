import React from "react";
import { Formik, Field, Form } from "formik";
import "./Register.css";

function Register() {
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("uf", data.uf);
      });
  }

  return (
    <div className="container w-100">
      <div className="Register">
        <Formik
          onSubmit={onSubmit}
          validateOnMount
          initialValues={{
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: "",
          }}
          render={({ isValid, setFieldValue }) => (
            <Form>
              <h2 className="d-flex justify-content-start mt-4">Cadastro</h2>
              <div className="form-control-group ">
                <label>Nome:</label>
                <Field name="nome" type="text" />
              </div>
              <div className="form-control-group">
                <label>Data de nascimento:</label>
                <Field name="date" type="date" />
              </div>
              <div className="form-control-group">
                <label>CPF:</label>
                <Field name="cpf" type="text" />
              </div>
              <div className="form-control-group">
                <label>Cep:</label>
                <Field
                  name="cep"
                  type="text"
                  onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                />
              </div>
              <div className="form-control-group">
                <label>Logradouro:</label>
                <Field name="logradouro" type="text" />
              </div>
              <div className="form-control-group">
                <label>N??mero:</label>
                <Field name="numero" type="text" />
              </div>
              <div className="form-control-group">
                <label>Complemento:</label>
                <Field name="complemento" type="text" />
              </div>
              <div className="form-control-group">
                <label>Bairro:</label>
                <Field name="bairro" type="text" />
              </div>
              <div className="form-control-group">
                <label>Cidade:</label>
                <Field name="cidade" type="text" />
              </div>
              <div className="form-control-group">
                <label>Estado:</label>
                <Field component="select" name="uf">
                  <option value={null}>Selecione o Estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amap??</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Cear??</option>
                  <option value="ES">Esp??rito Santo</option>
                  <option value="GO">Goi??s</option>
                  <option value="MA">Maranh??o</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Par??</option>
                  <option value="PB">Para??ba</option>
                  <option value="PR">Paran??</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piau??</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">S??o Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="SP">S??o Paulo</option>
                  <option value="TO">Tocantins</option>
                  <option value="DF">Distrito Federal</option>
                </Field>
              </div>
              <button type="submit" className="btnok" disabled={!isValid}>
                Enviar
              </button>
            </Form>
          )}
        />
      </div>
    </div>
  );
}

export default Register;

import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { RegisterContainer } from './styles';

interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function RegisterModal({ isOpen, onRequestClose }: RegisterModalProps) {
  const [ name, setName ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const [ cpf, setCpf ] = useState('');
  const [ cep, setCep ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ address2, setAddress2 ] = useState('');
  const [ state, setState ] = useState('');
  const [ city, setCity ] = useState('');


  function handleCreateRegister(e: FormEvent) {
    e.preventDefault();

    const data = {
      name,
      birthday,
      cpf,
      cep,
      address,
      address2,
      state,
      city,
    }

    console.log(data)

  }
  
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <RegisterContainer onSubmit={handleCreateRegister}>
        <h1>Registro de Usuário</h1>

        <fieldset>
          <legend>
            <h2>Dados pessoais</h2>
          </legend>

          <div className='field-group'>
            <div>
              <label htmlFor="name">Nome</label>
              <input 
                value={name} 
                type="text" 
                name='name' 
                required 
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="birthday">Data de nascimento</label>
              <input 
                value={birthday}
                type="text" 
                name='birthday' 
                placeholder='xx/xx/xxxx' 
                required 
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
          </div>

          <div className='field-group'>
            <div>
              <label htmlFor="cpf">CPF</label>
              <input 
                value={cpf} 
                type="text" 
                name='cpf'
                required 
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="cep">CEP</label>
              <input 
                value={cep}
                type="text" 
                name='cep' 
                required 
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
          </div>

          <div className='field-group'>
            <div>
              <label htmlFor="address">Endereço</label>
              <input 
                value={address}
                type="text" 
                name='address' 
                required 
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="address2">Número/Complemento</label>
              <input 
                value={address2}
                type="text" 
                name='address2' 
                required 
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
          </div>

          <div className='field-group'>
            <div>
              <label htmlFor="state">Estado</label>
              <select 
                name="state" 
                // required
              >
                <option 
                  value={state} 
                >
                  Selecione o Estado
                </option>
              </select>

              <input
                value={state} 
                type="hidden" 
                name='state' 
                // required 
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="city">Cidade</label>
              <select name="city" disabled >
                <option 
                  value={city}
                >
                  Selecione a Cidade
                </option>
              </select>

              <input
                value={city} 
                type="hidden" 
                name='state' 
                // required 
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className='btns'>
            <button type='submit'>Registrar</button>
            <button type='button' onClick={onRequestClose}>Cancelar</button>
          </div>
        </fieldset>

      </RegisterContainer>
    </Modal>
  );
}

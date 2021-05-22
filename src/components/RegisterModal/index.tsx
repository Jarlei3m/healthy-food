import { FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import { RegisterContext } from '../../contexts/RegisterContext';
import { RegisterContainer } from './styles';

interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function RegisterModal({ isOpen, onRequestClose }: RegisterModalProps) {
  const { 
    handleChange, 
    handleKeyUp, 
    handleCreateRegister,
    isCepValid,
    isCpfValid,
    isDateValid,
    user,
    isFilled,
    handleAutomaticFilledInputs 
  } = useContext(RegisterContext)

  const errors = {
    userCep: 'Por favor, insira um cep válido',
    userCpf: 'Por favor, insira um cpf válido',
  }

  function handleSubmit(e: FormEvent) {
    handleCreateRegister(e);
    if (isCepValid && isCpfValid && isDateValid) {
      onRequestClose();
      handleAutomaticFilledInputs(false);
    }
  }

  function handleCloseRegisterModal() {
    onRequestClose();
    handleAutomaticFilledInputs(false);
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <RegisterContainer onSubmit={handleSubmit}>
        <h1>Registro de Usuário</h1>

        <fieldset>
          <legend>
            <h2>Dados pessoais</h2>
          </legend>

          <div className='field-group'>
            <div>
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                name='name' 
                required 
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="birthday">Data de nascimento</label>
              <input 
                onKeyUp={handleKeyUp}
                type="text" 
                name='birthday' 
                placeholder='__/__/____' 
                required 
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='field-group'>
            <div>
              <label htmlFor="cpf">CPF</label>
              <input 
                onKeyUp={handleKeyUp}
                type="text" 
                name='cpf'
                placeholder='___.___.___-__'
                required 
                onChange={handleChange}
              />
              {!isCpfValid && (
                <span 
                  >
                    {errors.userCpf}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="cep">CEP</label>
              <input 
                onKeyUp={handleKeyUp}
                type="text" 
                name='cep'      
                placeholder='_____-__'           
                required 
                onChange={handleChange}
              />
              {!isCepValid && (
                <span 
                  >
                    {errors.userCep}
                </span>
              )}
            </div>
          </div>

          <div className='field-group'>
            <div>
              <label htmlFor="address">Endereço</label>
              <input 
                value={isFilled ? user.address : ''}
                type="text" 
                name='address' 
                required 
                disabled={!isFilled}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="address2">Número/Complemento</label>
              <input 
                type="text" 
                name='address2' 
                required 
                onChange={handleChange}
              />
            </div>
          </div>
         
          <div className='field-group'>
            <div>
              <label htmlFor="state">Estado</label>
              <input 
                value={isFilled ? user.state : ''}
                type="text" 
                name='state' 
                required 
                disabled={!isFilled}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="city">Cidade</label>
              <input 
                value={isFilled ? user.city : ''}
                type="text" 
                name='city' 
                required 
                disabled={!isFilled}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='btns'>
            <button type='submit'>Registrar</button>
            <button type='button' onClick={handleCloseRegisterModal}>Cancelar</button>
          </div>
        </fieldset>

      </RegisterContainer>
    </Modal>
  );
}

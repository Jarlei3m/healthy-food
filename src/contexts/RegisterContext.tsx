import axios from "axios";
import { toast } from 'react-toastify';
import { createContext, FormEvent, ReactNode, useCallback, useState } from "react";
import { validate } from 'gerador-validador-cpf';
import { setCookie } from 'nookies'
import { cpfMask, cepMask, dateMask } from '../utils/masks';

interface UserProps {
  name: string,
  birthday: string,
  cpf: string,
  cep: string;
  address: string;
  address2: string;
  state: string;
  city: string;
}

interface RegisterContextData {
  user: UserProps;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleKeyUp: (e: React.FormEvent<HTMLInputElement>) => void;
  handleCreateRegister: (e: FormEvent) => void;
  handleAutomaticFilledInputs: (filled: boolean)  => void;
  isCepValid: boolean;
  isCpfValid: boolean;
  isDateValid: boolean;
  isFilled: boolean;
}

interface RegisterProviderProps {
  children: ReactNode;
}

export const RegisterContext = createContext({} as RegisterContextData)

export function RegisterProvider({ children }: RegisterProviderProps) {
  const [ user, setUser ] = useState<UserProps>({} as UserProps);

  const [ isFilled, setIsFilled ] = useState(false);
  const [ isCepValid, setIsCepValid ] = useState(true);
  const [ isCpfValid, setIsCpfValid ] = useState(true);
  const [ isDateValid, setIsDateValid ] = useState(false);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({
      ...user,
      [name]: value
    });   

  }, [user]);

  
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    
    // CPF
    if (e.currentTarget.name === 'cpf') {
      cpfMask(e);
      setIsCpfValid(true);

      if (e.currentTarget.value.length === 14) {
        setIsCpfValid(validate(e.currentTarget.value));
      }
    }

    // CEP
    if (e.currentTarget.name === 'cep') {
      cepMask(e);
      setIsCepValid(true);

      if (e.currentTarget.value.length === 9) {
        getFullAddressByCep(e.currentTarget.value);
      } else {
        setUser({
          ...user,
          address: '',
          state: '',
          city: ''
        });
        setIsFilled(false);
      }
    }

    // DATE
    if (e.currentTarget.name === 'birthday') {
      dateMask(e);

      if (e.currentTarget.value.length === 10) {
        setIsDateValid(true)
      } else {
        setIsDateValid(false)
      }
    }
  }, [user]);
  
    
  async function getFullAddressByCep(cep: string) {
    const numeric_cep = cep.replace("-",'')

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${numeric_cep}/json/`);
      const data = await response.data;
      
      if (!data.erro) {
        setUser({
          ...user,
          address: data.logradouro,
          state: data.uf,
          city: data.localidade
        })
        setIsFilled(true);
      } else {
        setIsCepValid(false);
      }
    } catch (error) {
      setIsFilled(false);
      console.log(error)
    }

  };


  function handleCreateRegister(e: FormEvent) {
    e.preventDefault();

    if (isCepValid && isCpfValid && isDateValid) {

      setCookie(undefined, 'healthy-food.user.name', user.name, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      });
      localStorage.setItem('healthy-food.user.name', user.name);

      setCookie(undefined, 'healthy-food.user.birthday', user.birthday, {
        maxAge: 60 * 60 * 24 * 30, // 7 days
        path: '/'
      });
      localStorage.setItem('healthy-food.user.birthday', user.birthday);

      setCookie(undefined, 'healthy-food.user.cpf', user.cpf, {
        maxAge: 60 * 60 * 24 * 30, // 7 days
        path: '/'
      });
      localStorage.setItem('healthy-food.user.cpf', user.cpf);

      setCookie(undefined, 'healthy-food.user.cep', user.cep, {
        maxAge: 60 * 60 * 24 * 30, // 7 days
        path: '/'
      });
      localStorage.setItem('healthy-food.user.cep', user.cep);

      setCookie(undefined, 'healthy-food.user.address', user.address, {
        maxAge: 60 * 60 * 24 * 30, // 7 days
        path: '/'
      });
      localStorage.setItem('healthy-food.user.address', user.address);

      setCookie(undefined, 'healthy-food.user.address2', user.address2, {
        maxAge: 60 * 60 * 24 * 30, // 7 days
        path: '/'
      });
      localStorage.setItem('healthy-food.user.address2', user.address2);

      setCookie(undefined, 'healthy-food.user.state', user.state, {
        maxAge: 60 * 60 * 24 * 30, // 7 days
        path: '/'
      });
      localStorage.setItem('healthy-food.user.state', user.state);

      setCookie(undefined, 'healthy-food.user.city', user.city, {
        maxAge: 60 * 60 * 24 * 30, // 7 days
        path: '/'
      });
      localStorage.setItem('healthy-food.user.city', user.city);

      setIsFilled(false);
      toast.success('Parabéns, cadastro feito com sucesso!');

    } else {
      toast.error('Por favor, preencher os campos corretamente');
    }

  }

  function handleAutomaticFilledInputs(filled: boolean) {
    setIsFilled(false)
  }

  return (
    <RegisterContext.Provider 
      value={{
        handleChange, 
        handleKeyUp, 
        handleCreateRegister, 
        user,
        isCepValid,
        isCpfValid,
        isDateValid,
        isFilled,
        handleAutomaticFilledInputs
      }}>
      {children}
    </RegisterContext.Provider>
  )

}
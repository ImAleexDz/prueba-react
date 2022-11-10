import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();

    const [clientInfo, setClientInfo] = useState({
        phone: '',
        email: ''
    });

    const handleEmail = (e) => {
        setClientInfo({ ...clientInfo, email: e.target.value })
    }

    const handlePhone = (e) => {
        setClientInfo({ ...clientInfo, phone: e.target.value })
    }

    let activeBtn = 'btn-create-account';

    if (clientInfo.phone !== '' & clientInfo.email !== '') {
        activeBtn = 'btn-create-account-active'
    }

    const registerUser = () => {
        if (clientInfo.phone !== '' & clientInfo.email !== '') {
            router.push('/detail')
        }
    }

    return (
        <div className="text-center bg-1">
            <h1 className='mt-39'>
                Bitcoin APP
            </h1>

            <section className='sc-r1 mt-47'>
                <h3>Crea tu cuenta</h3>
            </section>

            <form className='sc-r2 mt-32' 
                onSubmit={(e) => {
                    e.preventDefault();
                    registerUser()
                }}
                >
                <div>
                    <label>
                        Ingresa tu celular
                    </label>
                    <div>
                        <Image src='/static/img/phone.png' width="18" height="22" />
                        <input type="text" maxLength="10" minLength="10" placeholder="a 10 dígitos" onChange={handlePhone} required />
                    </div>
                </div>

                <div className='mt-16'>
                    <label>
                        Y tu correo
                    </label>

                    <div>
                        <Image src='/static/img/mail.png' width="22" height="20" />
                        <input type="email" placeholder="tucorreo@mail.com" onChange={handleEmail} required />
                    </div>
                </div>

                <div className='sc-r3 mt-120'>
                    <p>
                        Al continuar, aceptas los <a href="#">términos y condiciones y el aviso de privacidad</a>
                    </p>

                    <button className={activeBtn} type="submit">
                        Crear cuenta
                    </button>
                    <button className='btn-login'>
                        Iniciar sesión
                    </button>
                </div>

            </form>

        </div>
    )
}

export default index